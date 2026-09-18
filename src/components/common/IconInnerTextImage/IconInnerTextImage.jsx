import {Link} from "react-router";

export function IconInnerTextImage({ url, selected, special, icon, text, onClick }) {

    if (special) {
        return (
            <Link
                to={url}
                onClick={onClick}
                className={"flex flex-row w-full h-fit p-2 component-background-special rounded-lg items-center justify-start gap-2"}
            >
                <div>{icon}</div>
                <div>
                    <p className="text-xs text-primary-foreground">{text}</p>
                </div>
            </Link>
        )
    }

    return (
        <Link
            to={url}
            onClick={onClick}
            className={`flex flex-row w-full h-fit p-2 rounded-lg items-center justify-start gap-2 transition-colors duration-300 cursor-pointer ${
                selected ? "component-background" : "component-background-transparent"
            }`}
        >
            <div>{icon}</div>
            <div>
                <p className="text-xs">{text}</p>
            </div>
        </Link>
    )
}