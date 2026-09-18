import { useEffect, useState } from "react";
import axios from "axios";
import api from "@/api/api.js";

export function useFetchWithMinDelay(
    url,
    { deps = [],
        minDelay = 1500,
        enabled = true,
        headers = {},
        params = {},
        onSuccess,
        onError } = {}
) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!enabled || !url) {
            setData(null);
            setIsLoading(false);
            return;
        }

        const controller = new AbortController();
        let cancelled = false;
        const start = Date.now();

        setIsLoading(true);
        setError(null);

        api
            .get(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    ...headers,
                },
                params,
                signal: controller.signal,
            })
            .then((res) => {
                const elapsed = Date.now() - start;
                const remaining = Math.max(minDelay - elapsed, 0);

                setTimeout(() => {
                    if (!cancelled) {
                        setData(res.data);
                        setIsLoading(false);
                        onSuccess?.(res.data);
                    }
                }, remaining);
            })
            .catch((err) => {
                if (!cancelled && !axios.isCancel(err)) {
                    const elapsed = Date.now() - start;
                    const remaining = Math.max(minDelay - elapsed, 0);

                    setData(null);
                    setError(err);
                    setTimeout(() => {
                        setIsLoading(false);
                    }, remaining);
                    onError?.(err);
                }
            });

        return () => {
            cancelled = true;
            controller.abort();
        };
    }, [url, enabled, ...deps]);

    return { data, isLoading, error };
}