import { Link as InertiaLink } from "@inertiajs/react";

const sizeClasses = {
    small: "text-xs px-4 py-2 shadow hover:shadow-md",
    regular: "text-sm px-6 py-3 shadow hover:shadow-lg",
    large: "text-base px-8 py-3 shadow-md hover:shadow-lg",
    default: "",
};

const variantClasses = {
    primary: "bg-indigo-500 active:bg-indigo-600",
    secondary: "bg-blueGray-600 active:bg-blueGray-700",
    info: "bg-lightBlue-500 active:bg-lightBlue-600",
    success: "bg-emerald-500 active:bg-emerald-600",
    warning: "bg-orange-500 active:bg-orange-600",
    danger: "bg-red-500 active:bg-red-600",
    default: "",
};

const Link = ({ children, size = "default", variant = "default", href = "" }) => {
    const isDefault = variant === "default";

    return (
        <InertiaLink
            href={href}
            className={`${sizeClasses[size]} ${variantClasses[variant]} ${
                !isDefault
                ? "font-bold uppercase text-white rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                : ""
            }`}
        >
            {children}
        </InertiaLink>
    );
};

export default Link;