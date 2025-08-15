const Card = ({ children }) => {
    return (
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
            {children}
        </div>
    );
};

const CardHeader = ({ children }) => {
    return (
        <div className="mx-3 mb-0 border-b border-gray-200 pt-3 pb-2 px-1">
            <span className="text-sm text-blueGray-700 font-medium">
                {children}
            </span>
        </div>
    );
};

const CardBody = ({ children }) => {
    return <div className="p-4">{children}</div>;
};

const CardFooter = ({ children }) => {
    return (
        <div className={`px-6 py-4`}>
            {children}
        </div>
    );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;