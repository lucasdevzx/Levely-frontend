import {useEffect, useState} from "react";
import {Login} from "@/components/pages/Login.jsx";
import api from "@/api/api.js";
import {Link, useNavigate} from "react-router";

export function LoginAPI() {
    const [error, setError] = useState(null);

    const navigation = useNavigate();

    async function login(data) {
        try {
            const res = await api.post('/authentication/login', data);
            localStorage.setItem('token', res.data.token);
            navigation('/');
            console.log('Login bem-sucedido', res.data);
        } catch (err) {
            console.error('Falha no login', err);
            setError(err);
        }
    }

    return (
        <Login onFinally={login} error={error}/>
    )
}