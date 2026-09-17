import {useEffect, useState} from "react";
import api from "@/api/api.js";
import {Weight} from "lucide-react";
import InfoCard from "@/components/common/InfoCard/InfoCard.jsx";
import {useTrainingStore} from "@/components/hooks/useTrainingStore.js";

export const TotalVolumeMonthCard = () => {

    const [totalVolume, setTotalVolume] = useState(0);
    const {selectedTrainingPlannerId} = useTrainingStore();

    useEffect(() => {
        api.get(`/daytrainingworkoutlogs/trainingplanner/${selectedTrainingPlannerId}/volume/actualmonth`, {
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`},
        }).then(response => {
            setTotalVolume(response.data);
        }).catch(error => {
            console.error('Error:', error);
        });
    }, [selectedTrainingPlannerId])

    return (
        <InfoCard
            link={false}
            title={"Volume total"}
            value={totalVolume + "Kg"}
            description={"nesse mês"}
            icon={<Weight size={24} color={"var(--color-primary)"} />}
        />
    )
}