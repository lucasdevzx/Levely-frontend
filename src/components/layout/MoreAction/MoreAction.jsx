import IconOutText from "@/components/common/IconOutText/IconOutText.jsx";
import { ChevronRight, Dumbbell, RotateCcwClock, Goal, PersonStanding } from 'lucide-react'

const MoreAction = () => {
    return (
        <div className={"flex flex-col mt-8"}>
            <a href={"#"} className={"flex flex-row items-center justify-between mb-2"}>
                <p className={"text-base font-medium font-bold text-text"}>Veja também</p>
                <ChevronRight size={20} color={"var(--color-text)"} />
            </a>
            <div className={"flex flex-wrap gap-4 mt-2 justify-between"}>
                <IconOutText link={true} icon={<Dumbbell size={24} color={"var(--color-primary)"} />} text={"Exercícios"} />
                <IconOutText link={true} icon={<RotateCcwClock size={24} color={"var(--color-primary)"} />} text={"Histórico"} />
                <IconOutText link={true} icon={<Goal size={24} color={"var(--color-primary)"} />} text={"Metas"} />
                <IconOutText link={true} icon={<PersonStanding size={24} color={"var(--color-primary)"} />} text={"Seu corpo"} />
            </div>
        </div>
    )
}

export default MoreAction