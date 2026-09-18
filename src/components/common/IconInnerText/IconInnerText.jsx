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
                <div onClick={() => {}} className={"flex flex-col items-center justify-center gap-1"}>
                    {cloneElement(icon, {
                        className: "transition-colors duration-300",
                        stroke: isActive ? "var(--color-primary)" : "var(--color-text)",
                    })}
                    <p className={"text-sm"}>{text}</p>
                </div>
            )}
        </NavLink>
    );
};

export default IconInnerText;