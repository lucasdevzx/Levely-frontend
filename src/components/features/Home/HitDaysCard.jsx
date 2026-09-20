import Skeleton from "@/components/common/Skeleton/Skeleton.jsx";
import {useFetchWithMinDelay} from "@/components/hooks/useFetchWithMinDelay.js";
import {useTrainingStore} from "@/components/hooks/useTrainingStore.js";
import {Flame} from "lucide-react";
import InfoCard from "@/components/common/InfoCard/InfoCard.jsx";

export function HitDaysCard({ progress, goal }) {

    const { selectedTrainingPlannerId } = useTrainingStore();

    const { data, isLoading } = useFetchWithMinDelay(
        `/daytrainingworkoutlogs/completed`,
        { deps: [selectedTrainingPlannerId] }
    );

    if (isLoading) {
        return <Skeleton  className="w-full h-25" />;
    }

    return (
        <InfoCard link={false} title={"Sequência atual"} value={"1 dia"} description={"continue assim"} icon={<Flame size={24} color={"var(--color-primary)"} />} />
    )

}