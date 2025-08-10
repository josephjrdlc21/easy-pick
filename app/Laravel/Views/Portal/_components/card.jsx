const Card = ({ children }) => {
    return (
        <div className={`bg-white shadow-md rounded-sm overflow-hidden mt-5`}>
            {children}
        </div>
    );
};

const CardHeader = ({ children }) => {
    return (
        <div className={`font-semibold text-lg text-blueGray-700 px-6 py-4 border-b border-gray-200 bg-gray-50`}>
            {children}
        </div>
    );
};

const CardBody = ({ children }) => {
    return <div className={`px-6 py-4`}>{children}</div>;
};

const CardFooter = ({ children }) => {
    return (
        <div className={`px-6 py-4 border-t border-gray-200 bg-gray-50`}>
            {children}
        </div>
    );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;