import {ChevronRight} from "lucide-react";

export function CommunityCard() {
    return (
        <div className={"flex flex-row w-full min-w-full h-fit p-4 component-background rounded-lg items-center justify-between"}>

            <div className={"flex flex-col w-[80%] h-full gap-1"}>
                <p className={"text-xs font-bold text-secondary"}>Comunidade</p>
                <h1 className={"text-text text-base font-bold"}>Explore treinos e planejamentos criados pela comunidade!</h1>
            </div>

            <div className={"flex flex-col w-[50%] h-full"}>
                <img src={"/images/community.png"} width={140} height={140} alt={"Community"} className={"object-cover rounded-lg"} />
            </div>

            <div className={"flex w-[10%] h-full "}>
                <ChevronRight />
            </div>

        </div>
    )
}