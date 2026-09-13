import {useEffect, useState} from "react";
import api from "@/api/api.js";
import {ChartLine} from "lucide-react";
import InfoCard from "@/components/common/InfoCard/InfoCard.jsx";

export const CompletedTrainingsCard = () => {

    const [completedTrainings, setCompletedTrainings] = useState([0]);

    useEffect(() => {
        api.get('/daytrainingworkoutlogs/completed', {
            headers: {'Authorization': `Bearer ${import.meta.env.VITE_TEMP_TOKEN}`},
        }).then(response => {
            setCompletedTrainings(response.data);
        }).catch(error => {
            console.error('Error:', error);
        });
    }, [])

    return (
        <InfoCard
            link={false}
            title={"Treinos concluídos"}
            value={completedTrainings.length}
            description={"esse mês"}
            icon={<ChartLine size={24} color={"var(--color-primary)"} />}
        />
    )
}

