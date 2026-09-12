import ProgressCard from "../../common/ProgressCard /ProgressCard.jsx";
import InfoCard from "@/components/common/InfoCard/InfoCard.jsx";
import { ChartLine, Flame, Weight, Calendar } from 'lucide-react'
import MoreAction from "@/components/common/MoreAction/MoreAction.jsx";
import Welcome from "@/components/common/Welcome/Welcome.jsx";

function Home() {
    return (
        <>

            <Welcome />

            <div className="grid grid-cols-2 gap-4">

                <div className="col-span-2 ">
                    <ProgressCard className={"col-span-2"} description="Seu progresso" />
                </div>

                <InfoCard link={false} title={"Treinos concluídos"} value={"24"} description={"esta semana"} icon={<ChartLine size={24} color={"var(--color-primary)"} />} />
                <InfoCard link={false} title={"Volume total"} value={"750kg"} description={"esta semana"} icon={<Weight size={24} color={"var(--color-primary)"} />} />
                <InfoCard link={false} title={"Sequência atual"} value={"7 dias"} description={"continue assim"} icon={<Flame size={24} color={"var(--color-primary)"} />} />
                <InfoCard link={true} title={"Treino pendente"} value={"Peito e triceps"} description={"esta semana"} icon={<Calendar size={24} color={"var(--color-primary)"} />} />
            </div>

            <MoreAction />

        </>
    )
}

export default Home