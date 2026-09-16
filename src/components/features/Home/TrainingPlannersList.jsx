import Welcome from "@/components/layout/Welcome/Welcome.jsx";
import {useEffect, useState} from "react";
import api from "@/api/api.js";

export function TrainingPlannersList() {

    const [trainingPlanners, setTrainingPlanners] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.get('/trainingplanners/me', {
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`},
            params: {page: 0, size: 10}
        }).then(response => {
            setTrainingPlanners(response.data.content);
        }).catch(error => {
            setError(error);
            console.error('Error:', error);
        });
    }, [])

    const username = localStorage.getItem("username")

    return (
        <Welcome name={username} trainingplanners={trainingPlanners} />
    )

}