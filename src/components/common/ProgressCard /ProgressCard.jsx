import { ChevronRight } from 'lucide-react'
import {ChartRadialShape} from "@/components/ui/ChartRadialShape.jsx";



const ProgressCard = ({ description }) => {
    return (

        <a className={"flex flex-row h-40 w-full p-4 items-start component-background rounded-lg " +
            "hover:bg-card-hover transition-colors duration-300 cursor-pointer"}>

            <div className={"flex flex-row min-w-[90%] h-full items-center"}>

                <div className={"flex flex-col gap-sm items-start w-[70%] min-w-70% h-full justify-start"}>
                    <p className={"text-xs font-bold text-secondary"}>Progresso</p>
                    <h1 className={"text-base font-bold text-text"}>Acompanhe seu progresso rumo ao seu objetivo!</h1>

                </div>

                <div className={"  h-full flex items-center justify-center "}>
                    <img src={"/images/goal.png"} width={100} height={30} alt={"progress"} className={"object-cover rounded-lg"} />
                </div>

            </div>

            <div className={"flex flex-col w-fit h-fit"}>
                <ChevronRight size={24} color={"var(--color-text)"} />
            </div>

        </a>

    )
}

export default ProgressCard