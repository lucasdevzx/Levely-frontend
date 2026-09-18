import { useState, useId } from "react";

export function FileInput({ label, buttonText , text, accept, onChange }) {
    const [fileName, setFileName] = useState(null);
    const inputId = useId();

    const handleChange = (e) => {
        const file = e.target.files?.[0] ?? null;
        setFileName(file ? file.name : null);
        onChange?.(file);
    };

    return (
        <div className="flex flex-col gap-2">
            {label && (
                <span className="text-sm font-medium">{label}</span>
            )}

            <div className="flex flex-col items-center gap-3">
                <label
                    htmlFor={inputId}
                    className="px-4 py-2 rounded-lg cursor-pointer font-semibold text-sm bg-primary text-primary-foreground hover:bg-[var(--color-primary-hover)] transition-colors duration-300"
                >
                    {buttonText}
                </label>

                <input
                    id={inputId}
                    type="file"
                    accept={accept}
                    onChange={handleChange}
                    className="absolute w-px h-px opacity-0 overflow-hidden -z-10"
                />

                <span className="text-sm text-[var(--color-text-secondary)] truncate">
                    {fileName ?? text}
                </span>
            </div>
        </div>
    );
}