import { ChevronRight, Dumbbell } from 'lucide-react'
import {ChevronBack} from "@/components/common/ChevronBack/ChevronBack.jsx";
import {Badge} from "@/components/common/Badge/Badge.jsx";
import {TrainingFooterInfo} from "@/components/common/TrainingFooterInfo/TrainingFooterInfo.jsx";
import {DayTrainingWorkoutLogInfo} from "@/components/features/DayTraining/DayTrainingWorkoutLogInfo.jsx";

export function TrainingCard({ id, title, description, icon }) {
    return (
        <div className={"flex flex-col w-full h-full items-start justify-start mb-6"}>
            <div className={"flex flex-row w-full h-full component-background rounded-lg p-4 items-center justify-between gap-2" +
                " hover:bg-card-elevated-2 transition-colors duration-300 cursor-pointer"}>
                <div className={"flex flex-col w-full h-full items-start justify-start gap-1"}>
                    <div className={"flex flex-row w-full h-full items-center justify-center gap-2"}>
                        {icon}
                        <div className={"flex flex-col w-full h-full items-start justify-start gap-1"}>
                            <h2 className={"text-base text-text font-bold "}>{title}</h2>
                            <div className={"flex flex-row w-full items-center justify-start gap-8"}>
                                <p className={"text-sm text-text-secondary"}>{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className={"flex flex-row w-full h-9 items-start justify-end gap-2 mt-2"}>
                        <DayTrainingWorkoutLogInfo dayTrainingWorkoutId={id} />
                    </div>
                </div>
                <div className={"flex flex-col gap-2 items-center justify-start w-fit h-full"}>
                    <ChevronRight size={24} color={"var(--color-text)"} />
                </div>
            </div>
        </div>
    )
}