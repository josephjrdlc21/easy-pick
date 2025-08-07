import { useState } from "react";

const variantClasses = {
    primary: "bg-indigo-500",
    secondary: "bg-blueGray-500",
    info: "bg-lightBlue-500",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    danger: "bg-red-500",
};

const AlertStatus = ({ children }) => {
    return (
        <b className="capitalize">{children} </b>
    );
};

const AlertMessage = ({ children }) => {
    return (
        <span>{children}</span>
    );
};

const Alert = ({ children, variant = "primary" }) => {
    const [showAlert, setShowAlert] = useState(true);
    return (
        <>
            {showAlert ? (
                <div
                    className={`text-white px-6 py-4 border-0 rounded relative mb-4 mt-5 ${variantClasses[variant]}`}
                >
                    <span className="text-xl inline-block mr-5 align-middle">
                        <i className="fas fa-bell" />
                    </span>
                    <span className="inline-block align-middle mr-8">
                        {children}
                    </span>
                    <button
                        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                        onClick={() => setShowAlert(false)}
                    >
                        <span className="mr-4">×</span>
                    </button>
                </div>
            ) : null}
        </>
    );
};

Alert.Status = AlertStatus;
Alert.Message = AlertMessage;

export default Alert;