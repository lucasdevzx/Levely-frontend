import {create} from "zustand";
import { persist } from "zustand/middleware";

export const useTrainingStore = create(
    persist(
        (set) => ({
            selectedTrainingPlannerId: null,
            setSelectedTrainingPlannerId: (id) => set({selectedTrainingPlannerId: id}),
        }),
        {
            name: "training-storage"
        }
    ));