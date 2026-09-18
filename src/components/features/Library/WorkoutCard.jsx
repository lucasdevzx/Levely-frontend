import {useFetchWithMinDelay} from "@/components/hooks/useFetchWithMinDelay.js";
import {Workout} from "@/components/common/Workout/Workout.jsx";
import {useState} from "react";
import Skeleton from "@/components/common/Skeleton/Skeleton.jsx";

export function WorkoutCard({ selectedTab }) {

    const [page, setPage] = useState(0);
    const [size] = useState(10);

    const url =
        selectedTab === "user"
            ? `/workouts/me`
            : `/workouts/type/${selectedTab.toString().toUpperCase()}`;

    const { data, isLoading, error } = useFetchWithMinDelay(url, {
        params: { page, size },
        deps: [],
    });

    if (isLoading) {
        return (
            <>
                <Workout skeleton={true} />
                <Workout skeleton={true} />
                <Workout skeleton={true} />
                <Workout skeleton={true} />
            </>
        )
    }

    if (error) {
        return <p>Erro ao carregar treinos.</p>;
    }

    console.log("WorkoutCard data:", data);

    return (
        <>
            {data.content && data.content.length > 0 ? (
                data.content.map((workout) => (
                    <Workout name={workout.name} description={workout.description} />
                ))
            ) : (
                <p>No workouts found.</p>
            )}
        </>
    )
}