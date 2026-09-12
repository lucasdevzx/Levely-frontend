const IconInnerText = ({icon, text}) => {
    return (
        <a href="#" className={"flex flex-col items-center justify-center hover:opacity-70 transition-opacity duration-300 cursor-pointer"}>
            {icon}
            <p className={"text-sm"}>{text}</p>
        </a>
    )
}

export default IconInnerText