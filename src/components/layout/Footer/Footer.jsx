import { Home, NotepadText, Newspaper, Library, User } from 'lucide-react'
import IconInnerText from "../../common/IconInnerText/IconInnerText.jsx";

const Footer = () => {
    return(
        <div className={"flex flex-row w-full justify-around items-center box-border p-4"}>
            <IconInnerText text={"Início"} icon={<Home size={24} color={"var(--color-primary)"} />} />
            <IconInnerText text={"Semana"} icon={<NotepadText size={24} color={"var(--color-primary)"} />} />
            <IconInnerText text={"Social"} icon={<Newspaper size={24} color={"var(--color-primary)"} />} />
            <IconInnerText text={"Biblioteca"} icon={<Library size={24} color={"var(--color-primary)"} />} />
            <IconInnerText text={"Perfil"} icon={<User size={24} color={"var(--color-primary)"} />} />
        </div>
    )
}

export default Footer