// components/RotaPrivada.jsx
import { Navigate } from 'react-router';

export function PrivateRoute({ children }) {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/onboarding" replace />;
    }

    return children;
}