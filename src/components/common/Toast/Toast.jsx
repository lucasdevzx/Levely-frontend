import { useEffect, useState } from "react";
import { X, CircleCheck, CircleAlert, Info, TriangleAlert } from "lucide-react";

const TOAST_STYLES = {
    error: {
        color: "var(--color-destructive)",
        icon: CircleAlert,
    },
    success: {
        color: "#3DD68C",
        icon: CircleCheck,
    },
    info: {
        color: "var(--color-primary)",
        icon: Info,
    },
    warning: {
        color: "#F5B400",
        icon: TriangleAlert,
    },
};

export function Toast({ type = "info", message, duration = 4000, onClose }) {
    const [visible, setVisible] = useState(false);
    const { color, icon: Icon } = TOAST_STYLES[type] ?? TOAST_STYLES.info;

    useEffect(() => {
        const enterTimeout = setTimeout(() => setVisible(true), 10);
        const exitTimeout = setTimeout(() => {
            handleClose();
        }, duration);

        return () => {
            clearTimeout(enterTimeout);
            clearTimeout(exitTimeout);
        };
    }, []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(() => onClose?.(), 300);
    };

    return (
        <div
            className={`fixed top-4 right-4 z-50 flex items-start gap-3 w-80 max-w-[90vw] p-4 rounded-lg component-background transition-all duration-300 ease-out ${
                visible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0 pointer-events-none"
            }`}
            role="alert"
        >
            <div
                className="w-1 self-stretch rounded-full flex-shrink-0"
                style={{ backgroundColor: color }}
            />

            <Icon size={18} style={{ color }} className="flex-shrink-0 mt-0.5" />

            <p className="text-sm flex-1">{message}</p>

            <button
                onClick={handleClose}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-200 flex-shrink-0"
            >
                <X size={16} />
            </button>
        </div>
    );
}