import {useEffect, useState} from "react";
import api from "@/api/api.js";
import {TrainingFooterInfo} from "@/components/common/TrainingFooterInfo/TrainingFooterInfo.jsx";

export function DayTrainingWorkoutLogInfo({dayTrainingWorkoutId}) {

    const [dayTrainingWorkoutLog, setDayTrainingWorkoutLog] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.get(`/daytrainingworkoutlogs/daytrainingworkout/${dayTrainingWorkoutId}`, {
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`},
        }).then(response => {
            setDayTrainingWorkoutLog(response.data);
        }).catch(error => {
            setError(error);
            console.error('Error:', error);
        });
    }, [dayTrainingWorkoutId])

    if (dayTrainingWorkoutLog === null) {
        return <p className="text-center text-gray-500">Nenhuma informação disponível.</p>;
    }

    return (
        <TrainingFooterInfo time={dayTrainingWorkoutLog.timeTraining} badgeText={"Concluído"} />
    )

}