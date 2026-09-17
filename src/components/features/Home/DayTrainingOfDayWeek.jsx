import {Calendar} from "lucide-react";
import InfoCard from "@/components/common/InfoCard/InfoCard.jsx";
import {useEffect, useState} from "react";
import api from "@/api/api.js";
import {useTrainingStore} from "@/components/hooks/useTrainingStore.js";

export function DayTrainingOfDayWeek() {

    const {selectedTrainingPlannerId} = useTrainingStore();
    const [dayTraining, setDayTraining] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (selectedTrainingPlannerId) {
            api.get(`/daytrainings/trainingplanner/${selectedTrainingPlannerId}/dayofweek`, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`},
            }).then(response => {
                setDayTraining(response.data);
            }).catch(error => {
                setDayTraining(null);
                setError(error);
                console.error('Error:', error);
            });
        } else {
            setDayTraining(null);
        }
    }, [selectedTrainingPlannerId])

    const days = {
        MONDAY: "Segunda-feira",
        TUESDAY: "Terça-feira",
        WEDNESDAY: "Quarta-feira",
        THURSDAY: "Quinta-feira",
        FRIDAY: "Sexta-feira",
        SATURDAY: "Sábado",
        SUNDAY: "Domingo"
    };

    if (dayTraining != null) {
        const translatedDay = days[dayTraining.dayOfWeek];
        return (
            <InfoCard
                id={dayTraining.id}
                link={true}
                title={"Treino pendente"}
                value={dayTraining ? dayTraining.name : "Sem treino"}
                description={"hoje (" + (dayTraining ? translatedDay : "Sem dia") + ")"}
                icon={<Calendar size={24} color={"var(--color-primary)"} />}
            />
        )
    } else if (dayTraining === null) {
        return (
            <InfoCard
                link={false}
                title={"Treino pendente"}
                value={"Sem treino"}
                description={"hoje (Sem dia)"}
                icon={<Calendar size={24} color={"var(--color-primary)"} />}
            />
        )
    }



}