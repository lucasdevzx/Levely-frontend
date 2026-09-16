import {Award} from "lucide-react";

export function Badge({text, icon}) {
    return (

        <div className={"flex flex-row items-center justify-center gap-1 p-1 component-background-special rounded-lg"}>
            {icon}
            <p className={"text-sm text-text-on opacity-70"}>{text}</p>
        </div>

    )
}