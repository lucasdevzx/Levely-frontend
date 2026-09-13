import { createBrowserRouter, RouterProvider } from "react-router"
import { createRoot } from "react-dom/client"
import { routes } from "./App.jsx"
import './index.css'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)