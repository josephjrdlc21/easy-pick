const inputBaseClass = "px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full";

const FormControl = ({label, name, type = "text", placeholder = "", options = [], isSelect = false, value, onChange, ...props}) => {
    return (
        <div className="mb-3 pt-0">
            {label && (
                <label htmlFor={name} className="text-base font-light leading-relaxed">
                    {label}
                </label>
            )}

            {isSelect ? (
                <select
                    id={name}
                    name={name}
                    className={`${inputBaseClass}`}
                    value={value}
                    onChange={onChange}
                    {...props}
                >
                    <option value="">Select an option</option>
                        {options.map((opt) => (
                            <option key={opt.value || opt.label} value={opt.value}>
                            {opt.label}
                            </option>
                        ))}
                </select>
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    className={`${inputBaseClass}`}
                    value={value}
                    onChange={onChange}
                    {...props}
                />
            )}
        </div>
    );
};

export default FormControl;