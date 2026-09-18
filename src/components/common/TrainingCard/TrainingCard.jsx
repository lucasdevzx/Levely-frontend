import { ChevronRight, Dumbbell } from 'lucide-react'
import {ChevronBack} from "@/components/common/ChevronBack/ChevronBack.jsx";
import {Badge} from "@/components/common/Badge/Badge.jsx";
import {TrainingFooterInfo} from "@/components/common/TrainingFooterInfo/TrainingFooterInfo.jsx";
import {DayTrainingWorkoutLogInfo} from "@/components/features/DayTraining/DayTrainingWorkoutLogInfo.jsx";
import {Link} from "react-router";

export function TrainingCard({ id, title, description, icon }) {

    return(
        <Link to={"/daytrainingworkoutlog"} state={{ dayTrainingWorkoutId: id }} className={"w-full h-full mb-6"}>
            <div className={"flex flex-col w-full h-full items-start justify-start"}>
                <div className={"flex flex-row w-full h-full component-background rounded-lg p-4 items-center justify-between gap-2" +
                    " hover:bg-card-hover transition-colors duration-300 cursor-pointer"}>
                    <div className={"flex flex-col w-full h-full items-start justify-start gap-1"}>
                        <div className={"flex flex-row w-full h-full items-start justify-center gap-3"}>

                            <div className={"flex flex-row w-fit h-fit items-center justify-center component-background rounded-md p-2"}>
                                {icon}
                            </div>

                            <div className={"flex flex-col w-full h-full items-start justify-start gap-1"}>
                                <h2 className={"text-base text-text font-bold "}>{title}</h2>
                                <div className={"flex flex-row w-full items-center justify-start gap-8"}>
                                    <p className={"text-sm text-text-secondary"}>{description}</p>
                                </div>
                            </div>
                        </div>
                        <div className={"flex flex-row w-full h-9 items-start justify-end gap-2"}>
                            <DayTrainingWorkoutLogInfo dayTrainingWorkoutId={id} />
                        </div>
                    </div>
                    <div className={"flex flex-col gap-2 items-center justify-start w-fit h-full"}>
                        <ChevronRight size={24} color={"var(--color-text)"} />
                    </div>
                </div>
            </div>
        </Link>
    )


}