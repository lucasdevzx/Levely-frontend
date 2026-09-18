import {TrainingCard} from "@/components/common/TrainingCard/TrainingCard.jsx";
import {ChevronRight, Dumbbell} from "lucide-react";
import {DayTrainingWorkoutList} from "@/components/features/DayTraining/DayTrainingWorkoutList.jsx";
import {ChevronBack} from "@/components/common/ChevronBack/ChevronBack.jsx";

export function DayTraining({ trainingcards }) {
    return (

        <main className={"flex flex-col w-full h-screen gap-4"}>

            <ChevronBack />

            <div className={"flex flex-col w-full justify-center"}>
                <div className={"flex flex-col w-full h-fit gap-1 mb-4 justify-center items-start"}>
                    <h1 className={"text-3xl text-text font-bold "}>Exercícios do dia</h1>
                    <h2 className={"text-sm text-text opacity-70"}>Concluído 0 de 12 exercícios</h2>
                </div>

                <div>

                    // OPTIONS

                </div>
            </div>

            <div className={"flex flex-col w-full h-fit max-h-100"}>
                <DayTrainingWorkoutList />
            </div>

        </main>

    )
}