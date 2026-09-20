import {Link} from "react-router";

export function ButtonRedirect({ url, icon, text }) {
    return (
        <a href={url} className={"flex flex-row w-full h-fit p-2 component-background-transparent rounded-lg items-center justify-start " +
            "gap-2 hover: component-background transition-colors duration-300 cursor-pointer"}>
            <div>{icon}</div>
            <div>
                <p className="text-xs text-text">{text}</p>
            </div>
        </a>
    )

}