import {useEffect, useState} from "react";
import api from "@/api/api.js";
import {ChartLine} from "lucide-react";
import InfoCard from "@/components/common/InfoCard/InfoCard.jsx";
import {useFetchWithMinDelay} from "@/components/hooks/useFetchWithMinDelay.js";
import Skeleton from "@/components/common/Skeleton/Skeleton.jsx";
import {useTrainingStore} from "@/components/hooks/useTrainingStore.js";

export const CompletedTrainingsCard = () => {

    const {selectedTrainingPlannerId} = useTrainingStore();

    const { data, isLoading } = useFetchWithMinDelay(
        `/daytrainingworkoutlogs/trainingplanner/${selectedTrainingPlannerId}/completed`,
        { deps: [selectedTrainingPlannerId] }
    )

    if (isLoading) {
        return <Skeleton className="w-full h-25" />;
    }

    if (data === null || data === undefined) {
        return (
            <InfoCard
                link={false}
                title={"Treinos concluídos"}
                value={0}
                description={"nesse mês"}
                icon={<ChartLine size={24} color={"var(--color-primary)"} />}
            />
        )
    }

    return (
        <InfoCard
            link={false}
            title={"Treinos concluídos"}
            value={data.length || 0}
            description={"nesse mês"}
            icon={<ChartLine size={24} color={"var(--color-primary)"} />}
        />
    )
}

