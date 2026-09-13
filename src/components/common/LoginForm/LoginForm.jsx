import {Input} from "@/components/common/Input/Input.jsx";
import {Button} from "@/components/common/Button/Button.jsx";
import {useState} from "react";

export function LoginForm({ onFinally }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(password));
        onFinally({ email, password });
        setEmail('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className={"flex flex-col gap-lg w-full h-full"}>
                <div className={"flex flex-col gap-2 w-full h-full"}>
                    <p>Email</p>
                    <Input
                        required={true}
                        type="text"
                        placeholder="Seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={"flex flex-col gap-2 w-full h-full"}>
                    <p>Senha</p>
                    <Input
                        required={true}
                        type="password"
                        placeholder="Sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button text={"Entrar"} />
            </div>
        </form>
    )
}