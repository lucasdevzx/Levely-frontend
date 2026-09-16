import { ChevronRight } from 'lucide-react'
import {Link} from "react-router";

const InfoCard = ({ title, value, description, icon, link }) => {
    if (link === false) {
        return (
            <div className={"flex flex-row min-w-full w-full max-w-full min-h-25 p-4 items-start component-background " +
                "border-zinc-700/20 rounded-lg justify-between box-border" }>
                <div className={"flex flex-col gap-sp items-start min-w-0 max-w-80% wrap-anywhere min-h-full max-h-full"}>
                    <p className={"text-[0.7rem] font-medium text-text-secondary"}>{title}</p>
                    <h2 className={"fade-text w-full max-w-full text-lg font-bold text-white"}>{value}</h2>
                    <p className={"text-[0.665rem] text-text-secondary"}>{description}</p>
                </div>
                <div className={"flex flex-col justify-between h-full"}>
                    <div>
                        <ChevronRight size={20} color={"var(--color-text)"} opacity={0} />
                    </div>
                    <div className={"flex flex-col justify-end h-full"}>
                        {icon}
                    </div>
                </div>
            </div>
        )
    }

    if (link === true) {
        return (
            <Link to={"/daytraining"} className={"flex flex-row min-w-full w-full max-w-full min-h-25 p-4 items-start component-background " +
                "border-zinc-700/20 rounded-lg justify-between box-border hover:bg-card-elevated-2 transition-colors duration-300 cursor-pointer" }>
                <div className={"flex flex-col gap-sp items-start min-w-0 max-w-[80%] wrap-anywhere min-h-full max-h-full"}>
                    <p className={"text-[0.7rem] font-medium text-text-secondary"}>{title}</p>
                    <h2 className={"fade-text w-full max-w-full text-lg font-bold text-white"}>{value}</h2>
                    <p className={"text-[0.665rem] text-text-secondary"}>{description}</p>
                </div>
                <div className={"flex flex-col justify-between h-full"}>
                    <div>
                        <ChevronRight size={20} color={"var(--color-text)"} />
                    </div>
                    <div className={"flex flex-col justify-end h-full"}>
                        {icon}
                    </div>
                </div>
            </Link>
        )
    }
}

export default InfoCard