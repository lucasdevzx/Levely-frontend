import { ChevronRight } from 'lucide-react'

const ProgressCard = ({ description }) => {
    return (

        <a className={"flex flex-row h-[160px] p-4 items-start component-background-special rounded-lg gap-md " +
            ""}>

            <div className={"flex flex-row min-w-[90%] h-full gap-md items-center"}>

                <div className={"flex flex-col gap-sm items-start"}>
                    <h1 className={"text-sm text-text-on"}>Seu progresso</h1>
                    <h2 className={"text-base font-bold text-text-on"}>Foco e consistência</h2>
                    <h3 className={"text-sm text-text-on"}>{description}</h3>
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