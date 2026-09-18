import {useEffect} from "react";
import api from "@/api/api.js";
import {useState} from "react";
import {TrainingCard} from "@/components/common/TrainingCard/TrainingCard.jsx";
import {Dumbbell} from "lucide-react";
import {useDayTrainingStore} from "@/components/hooks/useDayTrainingStore.js";
import {useFetchWithMinDelay} from "@/components/hooks/useFetchWithMinDelay.js";
import Skeleton from "@/components/common/Skeleton/Skeleton.jsx";
import {ChevronBack} from "@/components/common/ChevronBack/ChevronBack.jsx";

export function DayTrainingWorkoutList() {
    const [dayTrainings, setDayTrainings] = useState([]);
    const {selectedDayTrainingId, setSelectedDayTrainingId} = useDayTrainingStore();
    const [error, setError] = useState(null);

    const { data, isLoading, error: fetchError } = useFetchWithMinDelay(
        `/daytrainingworkouts/daytraining/${selectedDayTrainingId}`,
        {
            deps: [selectedDayTrainingId],
            enabled: !!selectedDayTrainingId,
            onError: (error) => {
                setSelectedDayTrainingId(null);
            }
        }
    )

    if (isLoading) {
        return (
            <div className="flex flex-col w-full h-screen">
                <Skeleton className="h-30 mb-4" />
                <Skeleton className="h-30 mb-4" />
                <Skeleton className="h-30 mb-4" />
                <Skeleton className="h-30 mb-4" />
            </div>
        )
    }


    if (data.length === 0) {
        return <p className="text-center text-gray-500">Nenhum treino encontrado.</p>;
    }

    return (
        <>
            {data
                .sort((a, b) => a.orderIndex - b.orderIndex)
                .map((data) => (
                <TrainingCard
                    key={data.orderIndex}
                    id={data.id}
                    icon={<Dumbbell size={44} color={"var(--color-primary)"} className={"mr-1"} />}
                    title={data.workoutName}
                    description={`${data.orderIndex}⁰ exercício`}

                />
            ))}
        </>
    )
}