import { Link, NavLink } from "react-router";
import { cloneElement } from "react";

const IconInnerText = ({ url, icon, text }) => {
    return (
        <NavLink
            to={url}
            className={({ isActive }) =>
                `flex flex-col items-center justify-center cursor-pointer ${
                    isActive ? "opacity-100" : "opacity-100"
                }`
            }
        >
            {({ isActive }) => (
                <>
                    {cloneElement(icon, {
                        className: "transition-colors duration-300",
                        fill: isActive ? "var(--color-primary)" : "",
                    })}
                    <p className={"text-sm"}>{text}</p>
                </>
            )}
        </NavLink>
    );
};

export default IconInnerText;