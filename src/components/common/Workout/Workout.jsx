import Skeleton from "@/components/common/Skeleton/Skeleton.jsx";

export function Workout({ skeleton, name, description }) {

    if (skeleton) {
        return (
            <>
                <div className={"flex flex-col w-[48%] h-[300px] component-background items-center justify-center rounded-lg mt-3"}>
                    <Skeleton className="w-full h-[300px]" />
                </div>
            </>
        )
    }

    return (
        <div className={"flex flex-col w-[48%] h-[300px] component-background items-center justify-center rounded-lg mt-3"}>
            <div className={"flex flex-row w-full h-[90%] bg-card-elevated-3 rounded-t-lg"}>
                <p className={"text-white"}></p>
            </div>
            <div className={"flex flex-col w-full h-10% p-4 gap-1 m-0"}>
                <div>
                    <p className={"text-base text-text font-bold"}>{name}</p>
                </div>

                <div>
                    <p className={"text-sm text-text"}>{description}</p>
                </div>
            </div>
        </div>
    )
}