import ProgressCard from "../../common/ProgressCard /ProgressCard.jsx";
import InfoCard from "@/components/common/InfoCard/InfoCard.jsx";
import { ChartLine, Flame, Weight, Calendar } from 'lucide-react'
import MoreAction from "@/components/layout/MoreAction/MoreAction.jsx";
import Welcome from "@/components/layout/Welcome/Welcome.jsx";
import {CompletedTrainingsCard} from "@/components/features/Home/CompletedTrainingsCard.jsx";
import {TotalVolumeMonthCard} from "@/components/features/Home/TotalVolumeMonthCard.jsx";
import {TrainingPlannersList} from "@/components/features/Home/TrainingPlannersList.jsx";
import {DayTrainingOfDayWeekCard} from "@/components/features/Home/DayTrainingOfDayWeekCard.jsx";
import {ProgressGoalCard} from "@/components/features/Home/ProgressGoalCard.jsx";
import {HitDaysCard} from "@/components/features/Home/HitDaysCard.jsx";

function Home() {
    return (
        <div className="flex flex-col w-full min-w-full h-full">
            <TrainingPlannersList />
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 ">
                    <ProgressGoalCard />
                </div>
                <CompletedTrainingsCard />
                <TotalVolumeMonthCard />
                <HitDaysCard />
                <DayTrainingOfDayWeekCard />
            </div>
            <MoreAction />
        </div>
    )
}

export default Home