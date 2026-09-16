import { Home, NotepadText, Newspaper, BookOpenText, User } from 'lucide-react'
import IconInnerText from "../../common/IconInnerText/IconInnerText.jsx";

const Footer = () => {
    return(
        <div className={"component-background " +
            "rounded-[40px] flex flex-row fixed bottom-[40px] w-fit gap-[20px] justify-around items-center box-border p-5"}>
            <IconInnerText url={"/"} text={"Início"} icon={<Home size={24} color={"var(--color-primary)"} />} />
            <IconInnerText url={"/week"} text={"Semana"} icon={<NotepadText size={24} color={"var(--color-primary)"} />} />
            <IconInnerText url={"/social"} text={"Social"} icon={<Newspaper size={24} color={"var(--color-primary)"} />} />
            <IconInnerText url={"/library"} text={"Biblioteca"} icon={<BookOpenText size={24} color={"var(--color-primary)"} />} />
            <IconInnerText url={"/profile"} text={"Perfil"} icon={<User size={24} color={"var(--color-primary)"} />} />
        </div>
    )
}

export default Footer