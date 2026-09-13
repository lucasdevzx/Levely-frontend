import {Link, NavLink} from "react-router";

const IconInnerText = ({url, icon, text}) => {
    return (
        <NavLink
            to={url}
            className={({isActive}) =>
                `flex flex-col items-center justify-center hover:opacity-70 transition-opacity duration-300 cursor-pointer ${
                isActive ? "opacity-50" : "opacity-100"
            }`
        }>
            {icon}
            <p className={"text-sm"}>{text}</p>
        </NavLink>
    )
}

export default IconInnerText