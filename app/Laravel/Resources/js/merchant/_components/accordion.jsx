import { useState } from "react";

const Accordion = ({ children }) => {
    return (
        <div className="w-full border rounded-lg divide-y divide-gray-200">
            {children}
        </div>
    );
};

const AccordionItem = ({ children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div>
            {children({ isOpen, setIsOpen })}
        </div>
    );
};

const AccordionHeader = ({ children, isOpen, setIsOpen }) => {
    return (
        <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center justify-between w-full p-4 font-medium text-left 
                ${
                isOpen
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-500 hover:bg-blue-100"
                }`}
        >
            {children}
            <svg
                className={`w-3 h-3 shrink-0 transition-transform ${
                isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
            >
                <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
                />
            </svg>
        </button>
    );
};

const AccordionBody = ({ children, isOpen }) => {
    return (
        isOpen && (
            <div className="p-4 border-t border-gray-200 text-gray-600">
                {children}
            </div>
        )
    );
};

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;