import { Weight } from "lucide-react";
import InfoCard from "@/components/common/InfoCard/InfoCard.jsx";
import Skeleton from "@/components/common/Skeleton/Skeleton.jsx";
import { useTrainingStore } from "@/components/hooks/useTrainingStore.js";
import { useFetchWithMinDelay } from "@/components/hooks/useFetchWithMinDelay.js";

export const TotalVolumeMonthCard = () => {
    const { selectedTrainingPlannerId } = useTrainingStore();

    const { data, isLoading } = useFetchWithMinDelay(
        `/daytrainingworkoutlogs/trainingplanner/${selectedTrainingPlannerId}/volume/actualmonth`,
        { deps: [selectedTrainingPlannerId] }
    );

    if (isLoading) {
        return <Skeleton className="w-full h-25" />;
    }

    return (
        <InfoCard
            link={false}
            title={"Volume total"}
            value={(data ?? 0) + "Kg"}
            description={"nesse mês"}
            icon={<Weight size={24} color={"var(--color-primary)"} />}
        />
    );
}