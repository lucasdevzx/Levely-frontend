import {useEffect, useState} from "react";
import api from "../../../api/api.js";
import './PlannerList.css';

function PlannerList() {

    const [planners, setPlanners] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        api.get('/trainingplanners', {
            headers: {'Authorization': `Bearer ${import.meta.env.VITE_TEMP_TOKEN}`},
            params: {page: page, size: 10}
        }).then(response => {
            setPlanners(response.data.content);
        }).catch(error => {
            console.error('Error fetching planners:', error);
        });
    }, [page]);

    return (
        <div className="">
            <button onClick={() => setPage(page - 1)} disabled={page === 0}>
                Previous
            </button>
            <button onClick={() => setPage(page + 1)}>
                Next
            </button>
            {planners.map(planner => (
                <div key={planner.id}>
                    <h2 className="text-2xl font-bold underline">{planner.name}</h2>
                    <p>{planner.goalType}</p>
                </div>
            ))}

        </div>
    )
}

export default PlannerList;