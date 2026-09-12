const IconOutText = ({ icon, text, link }) => {

    if (link === false) {
        return (
            <div className={"flex flex-col w-fit"}>
                <div className={"flex flex-col items-center bg-card-elevated-1 justify-center rounded-lg w-15 min-h-15 p-2 border-zinc-700/20"}>
                    {icon}
                </div>
                <div>
                    <p className={"text-[0.625rem] font-medium text-center"}>{text}</p>
                </div>
            </div>
        )
    }

    if (link === true) {
        return (
            <a href="#" className={"flex flex-col w-fit justify-center"}>
                <div className={"flex flex-col items-center bg-card-elevated-1 justify-center rounded-lg w-15 min-h-15 p-2 border-zinc-700/20" +
                    "hover:bg-card-elevated-2 transition-colors duration-300 cursor-pointer"}>
                    {icon}
                </div>
                <div>
                    <p className={"text-[0.625rem] font-medium text-center"}>{text}</p>
                </div>
            </a>
        )
    }
}

export default IconOutText