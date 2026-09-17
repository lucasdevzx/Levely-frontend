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
        return null;
    }

    if (dayTrainingWorkoutLog.completed === true) {
        const completedAt = new Date(dayTrainingWorkoutLog.completedAt);
        const hours = completedAt.getHours().toString().padStart(2, '0');
        const minutes = completedAt.getMinutes().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}`;
        return (
            <TrainingFooterInfo completed={true} time={dayTrainingWorkoutLog.timeTraining} badgeText={timeString} />
        );
    }

    if (dayTrainingWorkoutLog.completed === false) {
        return <TrainingFooterInfo completed={false} />
    }

}