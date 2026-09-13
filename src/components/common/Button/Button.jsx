export function Button({text}) {
    return (
        <button className={"w-full h-full bg-(--color-primary) hover:bg-(--color-primary-hover) text-(--color-text-on)" +
            " font-extrabold py-2 px-4 rounded-(--radius-lg) transition-colors duration-300 cursor-pointer"}>
            {text}
        </button>
    )
}
