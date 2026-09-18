import {useLocation} from "react-router";
import {useFetchWithMinDelay} from "@/components/hooks/useFetchWithMinDelay.js";
import Skeleton from "@/components/common/Skeleton/Skeleton.jsx";

export function DayTrainingWorkoutLogCard() {

    const location = useLocation();
    const { dayTrainingWorkoutId } = location.state || {};

    const { data, isLoading, error } = useFetchWithMinDelay(
        `/daytrainingworkoutlogs/daytrainingworkout/${dayTrainingWorkoutId}`,
        {
            deps: [dayTrainingWorkoutId],
            enabled: !!dayTrainingWorkoutId,
        }
    )

    if (isLoading) {
        return <Skeleton className="h-30 mb-4" />
    }

    console.log("DayTrainingWorkoutLogCard data:", data);
    console.log(dayTrainingWorkoutId)

    return(
        <p>{data.completedAt}</p>
    )

}