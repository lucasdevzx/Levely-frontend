import { ChevronRight } from 'lucide-react'

const ProgressCard = ({ description }) => {
    return (

        <a className={"flex flex-row h-35 p-4 items-start bg-card-elevated-1 border border-zinc-700/20 rounded-md gap-md " +
            "hover:bg-card-elevated-2 transition-colors duration-300 cursor-pointer"}>

            <div className={"flex flex-row min-w-[90%] h-full gap-md items-center"}>

                <div className={"flex flex-col gap-sm items-start"}>
                    <h1 className={"text-sm"}>Seu progresso</h1>
                    <h2 className={"text-base font-bold"}>Foco e consistência</h2>
                    <h3 className={"text-sm"}>{description}</h3>
                </div>

                <div className={"min-w-4/5"}>



                </div>
            </div>

            <div>
                <ChevronRight size={24} color={"var(--color-text)"} />
            </div>

        </a>

    )
}

export default ProgressCard