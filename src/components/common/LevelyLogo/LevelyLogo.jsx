export function LevelyLogo({ size }) {
    return (
        <div className="flex w-fit h-fit m-0 p-0">
            <img
                src="/images/levely-logo.svg"
                alt="Levely Logo"
                style={{
                    width: size,
                    height: "auto"
                }}
                className="block m-0 p-0"
            />
        </div>
    )
}