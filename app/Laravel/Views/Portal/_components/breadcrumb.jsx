const Breadcrumb = ({ children }) => {
    return (
        <nav className={`mt-5`} aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-gray-700">
                {children}
            </ol>
        </nav>
    );
};

const BreadcrumbItem = ({ children }) => (
    <li>{children}</li>
);

const BreadcrumbLink = ({ href, children }) => (
    <a href={href} className={`block transition-colors hover:text-gray-900`}>
        {children}
    </a>
);

const BreadcrumbCurrentLink = ({ children }) => (
    <span className={`block text-gray-400`}>{children}</span>
);

const BreadcrumbSeparator = () => (
    <li className={`rtl:rotate-180`}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
            />
        </svg>
    </li>
);

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Link = BreadcrumbLink;
Breadcrumb.CurrentLink = BreadcrumbCurrentLink;
Breadcrumb.Separator = BreadcrumbSeparator;

export default Breadcrumb;