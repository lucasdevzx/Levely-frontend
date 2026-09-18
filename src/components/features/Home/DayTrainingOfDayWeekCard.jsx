import { Calendar } from "lucide-react";
import InfoCard from "@/components/common/InfoCard/InfoCard.jsx";
import { useTrainingStore } from "@/components/hooks/useTrainingStore.js";
import { useFetchWithMinDelay } from "@/components/hooks/useFetchWithMinDelay.js";
import Skeleton from "@/components/common/Skeleton/Skeleton.jsx";

const DAYS = {
    MONDAY: "Segunda-feira",
    TUESDAY: "Terça-feira",
    WEDNESDAY: "Quarta-feira",
    THURSDAY: "Quinta-feira",
    FRIDAY: "Sexta-feira",
    SATURDAY: "Sábado",
    SUNDAY: "Domingo",
};

export function DayTrainingOfDayWeekCard() {
    const { selectedTrainingPlannerId} = useTrainingStore();

    const { data, isLoading, error } = useFetchWithMinDelay(
        `/daytrainings/trainingplanner/${selectedTrainingPlannerId}/dayofweek`,
        {
            deps: [selectedTrainingPlannerId],
            enabled: !!selectedTrainingPlannerId,
        }
    );

    if (isLoading) {
        return <Skeleton className="w-full h-25" />;
    }

    if (data) {
        const translatedDay = DAYS[data.dayOfWeek] ?? "Sem dia";

        return (
            <InfoCard
                id={data.id}
                link={true}
                title={"Treino pendente"}
                value={data.name}
                description={`hoje (${translatedDay})`}
                icon={<Calendar size={24} color={"var(--color-primary)"} />}
            />
        );
    }

    return (
        <InfoCard
            link={false}
            title={"Treino pendente"}
            value={"Sem treino"}
            description={"hoje (Sem dia)"}
            icon={<Calendar size={24} color={"var(--color-primary)"} />}
        />
    );
}