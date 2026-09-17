import Welcome from "@/components/layout/Welcome/Welcome.jsx";
import {useEffect, useState} from "react";
import api from "@/api/api.js";
import {useTrainingStore} from "@/components/hooks/useTrainingStore.js";

export function TrainingPlannersList() {

    const [trainingPlanners, setTrainingPlanners] = useState([]);
    const {selectedTrainingPlannerId, setSelectedTrainingPlannerId} = useTrainingStore();
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
    }, [selectedTrainingPlannerId])

    const username = localStorage.getItem("username")

    function selectTrainingPlanners(trainingPlanners) {
        return (
            <select
                value={selectedTrainingPlannerId ?? ''}
                onChange={(e) => {
                    setSelectedTrainingPlannerId(e.target.value);
                }}>
                {trainingPlanners.map((planner) => (
                    <option key={planner.id} value={planner.id}>{planner.name}</option>
                ))}
            </select>
        )
    }

    return (
        <>
            <Welcome name={username} trainingplanners={selectTrainingPlanners(trainingPlanners)} />
        </>
    )
}