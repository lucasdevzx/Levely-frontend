import ProgressCard from "@/components/common/ProgressCard /ProgressCard.jsx";
import Skeleton from "@/components/common/Skeleton/Skeleton.jsx";
import {useFetchWithMinDelay} from "@/components/hooks/useFetchWithMinDelay.js";
import {useTrainingStore} from "@/components/hooks/useTrainingStore.js";

export function ProgressGoalCard({ progress, goal }) {

    const { selectedTrainingPlannerId } = useTrainingStore();

    const { data, isLoading } = useFetchWithMinDelay(
        `/daytrainingworkoutlogs/completed`,
        { deps: [selectedTrainingPlannerId] }
    );

    if (isLoading) {
        return <Skeleton  className="w-full h-40" />;
    }

    return (
        <ProgressCard className={"col-span-2"} description="Seu progresso" />
    )

}