const inputBaseClass = "px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full";

const Form = ({ children, ...props }) => {
    return (
        <form {...props}>
            {children}
        </form>
    );
};

const Label = ({ children, name, ...props }) => {
    return (
        <label htmlFor={name} className="text-sm font-light leading-relaxed"  {...props}>
            {children}
        </label>
    );
}

const Input = ({ name, type = "text", placeholder = "", value, onChange, ...props }) => {
    return (
        <>
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

const File = ({ name, type = "file", placeholder = "", value, onChange, ...props }) => {
    return (
        <>
            <input
                id={name}
                name={name}
                type={type}
                className={inputBaseClass}
                onChange={onChange}
                {...props}
            />
        </>
    );
};

const TextArea = ({ name, placeholder = "", value, onChange,  rows = 4, ...props }) => {
    return (
        <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            className={inputBaseClass}
            value={value}
            onChange={onChange}
            rows={rows}
            {...props}
        />
    );
};

const Select = ({ name, options = [], value, onChange, ...props }) => {
    return (
        <>
            <select
                id={name}
                name={name}
                className={inputBaseClass}
                value={value}
                onChange={onChange}
                {...props}
            >
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
Form.File = File;
Form.TextArea = TextArea;
Form.Label = Label;

export default Form;