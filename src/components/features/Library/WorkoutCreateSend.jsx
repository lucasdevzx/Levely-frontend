import {useState} from "react";
import api from "@/api/api.js";
import {useNavigate} from "react-router";
import {WorkoutCreate} from "@/components/pages/WorkoutCreate.jsx";
import {Toast} from "@/components/common/Toast/Toast.jsx";

export function WorkoutCreateSend() {

    const [error, setError] = useState(null);
    const [toast, setToast] = useState(null); // { type, message } ou null
    const navigation = useNavigate();

    async function workout(data) {
        try {
            const res = await api.post('/workouts', data, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setToast({ type: "success", message: "Treino salvo com sucesso!" });
        } catch (err) {
            console.error('Falha ao criar workout', err);
            setError(err);
            setToast({ type: "error", message: "Não foi possível salvar o treino." });
        }
    }

    return (
        <>
            <WorkoutCreate onWorkoutSubmit={workout} error={error} />

            {toast && (
                <Toast
                    type={toast.type}
                    message={toast.message}
                    onClose={() => setToast(null)}
                />
            )}
        </>
    )
}