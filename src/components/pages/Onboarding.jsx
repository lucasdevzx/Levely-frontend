import {LevelyLogo} from "@/components/common/LevelyLogo/LevelyLogo.jsx";
import {Button} from "@/components/common/Button/Button.jsx";
import {Link} from "react-router";

export function Onboarding() {
    return (
        <div className={"w-full h-screen bg-black flex flex-col"}>
            <div className={"w-full h-3/4  justify-center items-center flex flex-col"}>
                <LevelyLogo size={300} />
                <h1 className={"text-white text-3xl font-bold"}>Seja bem-vindo</h1>
            </div>
            <div className={"w-full h-1/4 items-center flex flex-col gap-lg"}>
                <p className={"max-w-1/2 text-[0.665rem] text-text opacity-70 text-center"}>Acompanhamento de treinos de forma personalizada e inteligente</p>
                <Link to={"/login"} className={"w-[90%] h-full flex flex-col items-center max-h-1/4"}>
                    <Button text={"Começar"} />
                </Link>
            </div>
        </div>
    )
}