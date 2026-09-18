import {ChevronLeft, ChevronRight} from 'lucide-react'
import {Link, useNavigate} from "react-router";

export function ChevronEnter() {

    const navigation = useNavigate();

    return (

        <div className={"flex flex-col justify-start items-start w-fit h-fit mb-6 cursor-pointer hover:opacity-70 transition-opacity duration-300"}>
            <ChevronRight onClick={() => navigation(-1)} size={24} color={"var(--color-text)"} />
        </div>


    )
}
