import {ChevronBack} from "@/components/common/ChevronBack/ChevronBack.jsx";
import {DayTrainingWorkoutList} from "@/components/features/DayTraining/DayTrainingWorkoutList.jsx";
import {Button} from "@/components/common/Button/Button.jsx";
import {Image, Info} from "lucide-react";
import {Input} from "@/components/common/Input/Input.jsx";
import {FileInput} from "@/components/common/FileInput/FileInput.jsx";
import {IconInnerTextImage} from "@/components/common/IconInnerTextImage/IconInnerTextImage.jsx";
import {WorkoutForm} from "@/components/common/WorkoutForm/WorkoutForm.jsx";

export function WorkoutCreate({ onWorkoutSubmit, error }) {
    return (
        <>
            <main className={"flex flex-col w-full h-screen gap-4"}>
                <ChevronBack />
                <div className={"flex flex-col w-full h-full"}>
                    <div className={"flex flex-col w-full  h-[90%] gap-1 mb-4 justify-start items-start text-start rounded-lg  "}>
                        <div className={"flex flex-col w-full h-[10%] gap-1 mb-4"}>
                            <h1 className={"text-3xl text-text font-bold "}>Informações do Exercício</h1>
                        </div>
                        <WorkoutForm onWorkoutSubmit={onWorkoutSubmit} />
                    </div>
                </div>
            </main>
        </>
    )
}