const inputBaseClass = "px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full";

const Form = ({ children, ...props }) => {
    return (
        <form {...props}>
            {children}
        </form>
    );
};

const Input = ({ label, name, type = "text", placeholder = "", value, onChange, ...props }) => {
    return (
        <>
            {label && (
                <label htmlFor={name} className="text-sm font-light leading-relaxed">
                    {label}
                </label>
            )}
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className={inputBaseClass}
                value={value}
                onChange={onChange}
                {...props}
            />
        </>
    );
};

const Select = ({ label, name, options = [], value, onChange, placeholder = "Select an option", ...props }) => {
    return (
        <>
            {label && (
                <label htmlFor={name} className="text-sm font-light leading-relaxed">
                    {label}
                </label>
            )}
            <select
                id={name}
                name={name}
                className={inputBaseClass}
                value={value}
                onChange={onChange}
                {...props}
            >
                <option value="">{placeholder}</option>
                {options.map((opt) => (
                    <option key={opt.value || opt.label} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </>
    );
};

const Control = ({ children }) => {
    return (
        <div className="mb-3 pt-0">
            {children}
        </div>
    );
};

Form.Input = Input;
Form.Select = Select;
Form.Control = Control;

export default Form;