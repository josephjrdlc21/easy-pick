const variantClasses = {
    primary: "bg-indigo-200 text-indigo-600",
    secondary: "bg-blueGray-200 text-blueGray-600",
    info: "bg-lightBlue-200 text-lightBlue-600",
    success: "bg-emerald-200 text-emerald-600",
    warning: "bg-amber-200 text-amber-600",
    danger: "bg-red-200 text-red-600",
};

const Badge = ({ children, variant = "primary" }) => {
    return (
        <>
            <span 
                className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded ${variantClasses[variant]} uppercase last:mr-0 mr-1`}
            >
                {children}
            </span>
        </>
    );
}

export default Badge;