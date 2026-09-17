import {create} from "zustand";
import {persist} from "zustand/middleware";

export const useDayTrainingStore = create(
    persist(
        (set) => ({
            selectedDayTrainingId: null,
            setSelectedDayTrainingId: (selectedDayTrainingId) => set({ selectedDayTrainingId }),
        }),
        {
            name: "day-training-storage"
        }
    ))