import {useEffect, useState} from "react";
import api from "@/api/api.js";
import {Weight} from "lucide-react";
import InfoCard from "@/components/common/InfoCard/InfoCard.jsx";

export const TotalVolumeMonthCard = () => {

    const [totalVolume, setTotalVolume] = useState(0);

    useEffect(() => {
        api.get('/daytrainingworkoutlogs/volume/actualmonth', {
            headers: {'Authorization': `Bearer ${import.meta.env.VITE_TEMP_TOKEN}`},
        }).then(response => {
            setTotalVolume(response.data);
        }).catch(error => {
            console.error('Error:', error);
        });
    }, [])

    return (
        <InfoCard
            link={false}
            title={"Volume total"}
            value={totalVolume + "Kg"}
            description={"este mês"}
            icon={<Weight size={24} color={"var(--color-primary)"} />}
        />
    )
}