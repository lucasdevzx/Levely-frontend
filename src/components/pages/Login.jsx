import {Input} from "@/components/common/Input/Input.jsx";
import {Button} from "@/components/common/Button/Button.jsx";
import {LevelyIcon} from "@/components/common/LevelyIcon/LevelyIcon.jsx";
import {Link} from "react-router";
import {LoginForm} from "@/components/common/LoginForm/LoginForm.jsx";
import {IconInnerTextImage} from "@/components/common/IconInnerTextImage/IconInnerTextImage.jsx";
import {Grid2x2} from "lucide-react";
import {ButtonRedirect} from "@/components/common/ButtonRedirect/ButtonRedirect.jsx";

export function Login({onFinally, error}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen h-full">
        <div className={"flex flex-col gap-2 items-center justify-center w-4/5 h-1/4"}>
            <LevelyIcon size={100} />
            <h1 className={"text-2xl font-bold text-text"}>Entrar</h1>
            <p className={"text-text opacity-70"}>Entre com suas credenciais</p>
        </div>
        <div className={"flex flex-col w-4/5 h-[40%] gap-6"}>
            <LoginForm onFinally={onFinally} />

            <div className={"flex flex-row gap-4 items-center justify-center w-full h-[10%] text-text opacity-70"}>
                <hr className={"grow border-t-2 border-white rounded-full"} />
                <p className={"text-xs font-bold"}>ou</p>
                <hr className={"grow border-t-2 border-white rounded-full"} />
            </div>

            <div className={"flex flex-row flex-nowrap w-full min-w-0 max-w-full h-full gap-1"}>
                <ButtonRedirect
                    url={"http://localhost:8080/oauth2/authorize/google"}
                    icon={<img src={"/images/google-icon.svg"} alt="Google Icon" width={20} height={20} />}
                    text={"Entrar com Google"}
                />
            </div>
        </div>
        <div className={"flex flex-col gap-2 items-center justify-end w-4/5 h-[15%]"}>
            <div className={"flex flex-row gap-2 items-end justify-center w-full h-full"}>
                <p>Não tem uma conta?</p>
                <Link to={ "/forgot-password"} className={"text-blue-500 hover:underline"}>Cadastre-se</Link>
            </div>
        </div>
    </div>
  );
}