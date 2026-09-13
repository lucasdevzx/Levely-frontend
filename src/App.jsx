import './App.css'
import { Route, createRoutesFromElements } from "react-router";
import Home from "./components/features/Home/Home.jsx";
import { Login } from "@/components/pages/Login.jsx";
import { Profile } from "@/components/pages/Profile.jsx";
import { Social } from "@/components/pages/Social.jsx";
import { Week } from "@/components/pages/Week.jsx";
import { Library } from "@/components/pages/Library.jsx";
import PrincipalLayout from "@/components/pages/PrincipalLayout.jsx";
import RootLayout from "@/components/layout/RootLayout.jsx";
import { DayTraining } from "@/components/pages/DayTraining.jsx";
import { Onboarding } from "@/components/pages/Onboarding.jsx";
import { PrivateRoute } from "@/components/routes/PrivateRoute.jsx";
import { LoginAPI } from "@/components/features/Login/LoginAPI.jsx";

export const routes = createRoutesFromElements(
    <Route element={<RootLayout />}>
        <Route element={<PrincipalLayout />}>
            <Route path="/" element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/week" element={<Week />} />
            <Route path="/social" element={<Social />} />
            <Route path="/library" element={<Library />} />
        </Route>

        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<LoginAPI />} />
        <Route path="/daytraining" element={<DayTraining />} />
    </Route>
)