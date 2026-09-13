import { Bell } from 'lucide-react'

const Welcome = ({name}) => {
    return (
        <div className={"flex flex-row gap-4 items-start w-full max-w-full justify-between mb-8"}>
            <div>
                <div>
                    <select>
                        <option value="java">Java</option>
                        <option value="react">React</option>
                        <option value="spring">Spring Boot</option>
                    </select>
                </div>
                <div className={"flex flex-col gap-1 items-start mt-5"}>
                    <h1 className={"text-2xl font-bold"}>Olá, {name}</h1>
                    <p className={"text-sm text-text-secondary"}>Pronto para mais um treino ?</p>
                </div>
            </div>
            <a href="#" className={"hover:opacity-70 transition-opacity duration-300 cursor-pointer"}>
                <Bell size={24} color={"var(--color-primary)"} />
            </a>
        </div>
    )
}

export default Welcome