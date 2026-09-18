import { Home, NotepadText, Newspaper, BookOpenText, User } from 'lucide-react'
import IconInnerText from "../../common/IconInnerText/IconInnerText.jsx";

const Footer = () => {
    return(
        <div className={"flex flex-row  h-[60px] w-full gap-[20px] justify-around items-center box-border p-5"}>
            <IconInnerText url={"/"} text={"Início"} icon={<Home size={24} color={"var(--color-text)"} />} />
            <IconInnerText url={"/week"} text={"Semana"} icon={<NotepadText size={24} color={"var(--color-text)"} />} />
            <IconInnerText url={"/social"} text={"Social"} icon={<Newspaper size={24} color={"var(--color-text)"} />} />
            <IconInnerText url={"/library"} text={"Biblioteca"} icon={<BookOpenText size={24} color={"var(--color-text)"} />} />
            <IconInnerText url={"/profile"} text={"Perfil"} icon={<User size={24} color={"var(--color-text)"} />} />
        </div>
    )
}

export default Footer