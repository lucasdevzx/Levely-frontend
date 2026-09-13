import {Input} from "@/components/common/Input/Input.jsx";
import {Button} from "@/components/common/Button/Button.jsx";
import {LevelyIcon} from "@/components/common/LevelyIcon/LevelyIcon.jsx";
import {Link} from "react-router";
import {LoginForm} from "@/components/common/LoginForm/LoginForm.jsx";

export function Login({onFinally, error}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen h-full">
        <div className={"flex flex-col gap-2 items-center justify-center w-4/5 h-1/4"}>
            <LevelyIcon size={100} />
            <h1 className={"text-2xl font-bold text-text"}>Entrar</h1>
            <p className={"text-text opacity-70"}>Entre com suas credenciais</p>
        </div>

        <div className={"flex flex-col w-4/5"}>
            <LoginForm onFinally={onFinally} />
        </div>

        <div className={"flex flex-col gap-2 items-center justify-end w-4/5 h-1/4"}>
            <div className={"flex flex-row gap-2 items-end justify-center w-full h-full"}>
                <p>Não tem uma conta?</p>
                <Link to={ "/forgot-password"} className={"text-blue-500 hover:underline"}>Cadastre-se</Link>
            </div>
        </div>
    </div>
  );
}