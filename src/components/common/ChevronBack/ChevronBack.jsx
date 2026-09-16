import { ChevronLeft } from 'lucide-react'
import {Link, useNavigate} from "react-router";

export function ChevronBack() {

    const navigation = useNavigate();

    return (

        <div className={"flex flex-row justify-start items-start w-fit h-fit mb-6 cursor-pointer hover:opacity-70 transition-opacity duration-300"}>
            <ChevronLeft onClick={() => navigation(-1)} size={24} color={"var(--color-text)"} />
        </div>


)
}
