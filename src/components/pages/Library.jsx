import { useState } from "react";
import {Workout} from "@/components/common/Workout/Workout.jsx";
import {SearchBar} from "@/components/common/SearchBar/SearchBar.jsx";
import {CommunityCard} from "@/components/common/CommunityCard/CommunityCard.jsx";
import {IconInnerTextImage} from "@/components/common/IconInnerTextImage/IconInnerTextImage.jsx";
import { Grid2x2, BadgeCheck, Plus } from "lucide-react";
import {WorkoutCard} from "@/components/features/Library/WorkoutCard.jsx";

export function Library() {
    const [selectedTab, setSelectedTab] = useState("user");

    return (
        <div className="flex flex-col w-full min-w-full h-full min-h-0">

            <div className={"flex flex-row w-full min-w-full h-[10%]"}>
                <SearchBar />
            </div>

            <div className={"flex flex-col w-full min-w-full h-fit"}>
                <CommunityCard />
            </div>

            <div className={"flex flex-row flex-nowrap w-full min-w-0 max-w-full h-[10%] max-h-[10%] mt-4 gap-1"}>
                <div className={"flex flex-row flex-nowrap w-[30%] min-w-0 max-w-full h-full gap-1"}>
                    <IconInnerTextImage
                        selected={selectedTab === "user"}
                        onClick={() => {
                            setSelectedTab("user" );
                        }}
                        icon={<Grid2x2 size={15} color={"var(--color-primary)"} />}
                        text={"Pessoal"}
                    />
                </div>
                <div className={"flex flex-row flex-nowrap w-[30%] min-w-0 max-w-full h-full gap-1"}>
                    <IconInnerTextImage
                        selected={selectedTab === "levely"}
                        onClick={() => {
                            setSelectedTab("levely");
                        }}
                        icon={<BadgeCheck size={15} color={"var(--color-primary)"} />}
                        text={"Levely"}
                    />
                </div>
                <div className={"flex flex-row flex-nowrap w-[40%] min-w-0 max-w-full h-full gap-1"}>
                    <IconInnerTextImage
                        url={"/workoutcreate"}
                        special={true}
                        onClick={() => console.log("Criar exercício")}
                        icon={<Plus size={15} color={"var(--color-primary-foreground)"} />}
                        text={"Criar exercício"}
                    />
                </div>
            </div>

            <div className={"flex flex-row flex-wrap w-full min-w-full h-[60%] min-h-0 gap-1 justify-between overflow-y-auto"}>
                <WorkoutCard selectedTab={selectedTab} />
            </div>

        </div>
    )
}