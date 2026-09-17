import {useEffect, useState} from "react";
import api from "@/api/api.js";
import {BadgeCheck, Timer, Dot, Clock} from "lucide-react";

export function TrainingFooterInfo({ completed, time, badgeText }) {

    if (completed) {
        return (
            <div className={"flex flex-row w-full h-full items-start justify-between gap-2"}>
                <div className={"flex flex-row w-full h-full items-center justify-start gap-2"}>
                    <div className={"flex flex-row w-fit h-full items-center justify-start gap-2"}>
                        <BadgeCheck size={24} color={"var(--color-primary)"} opacity={0.8} /> <p className={"text-center text-sm text-text-secondary"}>{badgeText}</p>
                    </div>
                    <div className={"flex flex-row w-fit h-fit items-center justify-start"}>
                        <Dot size={24} color={"var(--color-text)"} opacity={0.8} />
                    </div>
                    <div className={"flex flex-row w-fit h-full items-center justify-start gap-2"}>
                        <Timer size={24} color={"var(--color-primary)"} opacity={0.8} /> <p className={"text-center text-sm text-text-secondary"}>{time}</p>
                    </div>

                </div>
            </div>
        )
    }

    if (!completed) {
        return (
            <div className={"flex flex-row w-full h-full items-start justify-between gap-2"}>
                <div className={"flex flex-row w-full h-full items-center justify-start gap-2"}>
                    <div className={"flex flex-row w-fit h-full items-center justify-start gap-2"}>
                        <Clock size={24} color={"var(--color-primary)"} opacity={0.8} /> <p className={"text-center text-sm text-text-secondary"}>Em andamento</p>
                    </div>

                </div>
            </div>
        )
    }
}