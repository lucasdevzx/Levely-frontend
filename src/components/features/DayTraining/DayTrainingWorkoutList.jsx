import {useEffect} from "react";
import api from "@/api/api.js";
import {useState} from "react";
import {TrainingCard} from "@/components/common/TrainingCard/TrainingCard.jsx";
import {Dumbbell} from "lucide-react";

export function DayTrainingWorkoutList() {
    const [dayTrainings, setDayTrainings] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.get('/daytrainingworkouts', {
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`},
            params: {page: 0, size: 10}
        }).then(response => {
            setDayTrainings(response.data.content);
        }).catch(error => {
            setError(error);
            console.error('Error:', error);
        });
    }, [])


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