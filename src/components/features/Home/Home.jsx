import ProgressCard from "../../common/ProgressCard /ProgressCard.jsx";
import InfoCard from "@/components/common/InfoCard/InfoCard.jsx";
import { ChartLine, Flame, Weight, Calendar } from 'lucide-react'
import MoreAction from "@/components/layout/MoreAction/MoreAction.jsx";
import Welcome from "@/components/layout/Welcome/Welcome.jsx";
import {CompletedTrainingsCard} from "@/components/features/Home/CompletedTrainingsCard.jsx";
import {TotalVolumeMonthCard} from "@/components/features/Home/TotalVolumeMonthCard.jsx";
import {TrainingPlannersList} from "@/components/features/Home/TrainingPlannersList.jsx";

function Home() {
    return (
        <div className="flex flex-col">
            <TrainingPlannersList />
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 ">
                    <ProgressCard className={"col-span-2"} description="Seu progresso" />
                </div>
                <CompletedTrainingsCard />
                <TotalVolumeMonthCard />
                <InfoCard link={false} title={"Sequência atual"} value={"7 dias"} description={"continue assim"} icon={<Flame size={24} color={"var(--color-primary)"} />} />
                <InfoCard link={true} title={"Treino pendente"} value={"Peito e triceps"} description={"esta semana"} icon={<Calendar size={24} color={"var(--color-primary)"} />} />
            </div>
            <MoreAction />
        </div>
    )
}

export default Home