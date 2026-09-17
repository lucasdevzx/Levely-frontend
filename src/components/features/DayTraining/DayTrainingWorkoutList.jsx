import {useEffect} from "react";
import api from "@/api/api.js";
import {useState} from "react";
import {TrainingCard} from "@/components/common/TrainingCard/TrainingCard.jsx";
import {Dumbbell} from "lucide-react";
import {useDayTrainingStore} from "@/components/hooks/useDayTrainingStore.js";

export function DayTrainingWorkoutList() {
    const [dayTrainings, setDayTrainings] = useState([]);
    const {selectedDayTrainingId, setSelectedDayTrainingId} = useDayTrainingStore();
    const [error, setError] = useState(null);

    useEffect(() => {
        if (selectedDayTrainingId) {
            api.get(`/daytrainingworkouts/daytraining/${selectedDayTrainingId}`, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`},
            }).then(response => {
                setDayTrainings(response.data);
            }).catch(error => {
                setError(error);
                setSelectedDayTrainingId(null);
                console.error('Error:', error);
            });
        } else{
            setSelectedDayTrainingId(null);
        }
    }, [selectedDayTrainingId]);


    if (dayTrainings.length === 0) {
        return <p className="text-center text-gray-500">Nenhum treino encontrado.</p>;
    }

    return (
        <>
            {dayTrainings
                .sort((a, b) => a.orderIndex - b.orderIndex)
                .map((training) => (
                <TrainingCard
                    key={training.orderIndex}
                    id={training.id}
                    icon={<Dumbbell size={44} color={"var(--color-primary)"} className={"mr-1"} />}
                    title={training.workoutName}
                    description={`${training.orderIndex}⁰ exercício`}

                />
            ))}
        </>
    )
}