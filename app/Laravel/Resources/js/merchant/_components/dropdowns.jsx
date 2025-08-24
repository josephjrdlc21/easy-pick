import { useState, useRef, useEffect, createContext, useContext } from "react";

const DropdownContext = createContext();

const Dropdown = ({ children }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();
    const buttonRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target) &&
                !buttonRef.current.contains(e.target)
            ) {
                setOpen(false);
            }
        };
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <DropdownContext.Provider value={{ open, setOpen, buttonRef, dropdownRef }}>
            <div className="relative inline-block text-left">{children}</div>
        </DropdownContext.Provider>
    );
};

Dropdown.Toggle = ({ children }) => {
    const { open, setOpen, buttonRef } = useContext(DropdownContext);

    return (
        <button
            ref={buttonRef}
            onClick={() => setOpen(!open)}
            className="text-blueGray-500 py-1 px-3 focus:outline-none"
        >
            {children}
        </button>
    );
};

Dropdown.Menu = ({ children }) => {
    const { open, dropdownRef } = useContext(DropdownContext);

    if (!open) return null;

    return (
        <div
            ref={dropdownRef}
            className="absolute right-0 mt-2 w-48 bg-white z-50 rounded shadow-lg py-2"
        >
            {children}
        </div>
    );
};

Dropdown.Item = ({ children, ...props }) => (
    <div
        {...props}
        className="block px-4 py-2 text-sm text-blueGray-700 hover:bg-blueGray-100 cursor-pointer"
    >
        {children}
    </div>
);

export default Dropdown;