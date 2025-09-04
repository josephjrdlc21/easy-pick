const variantClasses = {
    primary: "text-indigo-800",
    secondary: "text-blueGray-800",
    info: "text-lightBlue-800",
    success: "text-emerald-800",
    warning: "text-amber-800",
    danger: "text-red-800",
    default: "text-blueGray-800",
    white: "text-white",
};

const variantTag = {
    h1: "text-6xl font-normal leading-normal mt-0 mb-2",
    h2: "text-5xl font-normal leading-normal mt-0 mb-2",
    h3: "text-4xl font-normal leading-normal mt-0 mb-2",
    h4: "text-3xl font-normal leading-normal mt-0 mb-2",
    h5: "text-2xl font-normal leading-normal mt-0 mb-2",
    h6: "text-xl font-normal leading-normal mt-0 mb-2",
    p: "text-base font-light leading-relaxed mt-0 mb-4",
    small: "font-normal leading-normal mt-0 mb-4",
}

const Typography = ({ tag = "p", component = "p", children, variant = "default", ...props}) => {
    const Tag = component;

    return (
        <>
            <Tag className={`${variantClasses[variant]} ${variantTag[tag]}`}
                {...props}
            >
                {children}
            </Tag>
        </>
    );
};

export default Typography;