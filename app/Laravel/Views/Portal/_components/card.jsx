// Wrapper
const Card = ({ children, className = "" }) => {
    return (
        <div className={`bg-white shadow-md rounded-sm overflow-hidden mt-5 ${className}`}>
            {children}
        </div>
    );
};

// Header
const CardHeader = ({ children, className = "" }) => {
    return (
        <div className={`px-6 py-4 border-b border-gray-200 bg-gray-50 ${className}`}>
            {children}
        </div>
    );
};

// Body
const CardBody = ({ children, className = "" }) => {
    return <div className={`px-6 py-4 ${className}`}>{children}</div>;
};

// Footer
const CardFooter = ({ children, className = "" }) => {
    return (
            <div className={`px-6 py-4 border-t border-gray-200 bg-gray-50 ${className}`}>
            {children}
            </div>
    );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;