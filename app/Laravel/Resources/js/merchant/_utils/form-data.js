/**
 * Convert a values object with text + files into FormData
 * @param {Object} values - The form values
 * @returns {FormData}
 */
export default function formData(values) {
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
        if (Array.isArray(values[key])) {
            values[key].forEach((file) => {
                formData.append(`${key}[]`, file);
            });
        } 
        else if (values[key] !== null && values[key] !== "") {
            formData.append(key, values[key]);
        }
    });

    return formData;
}