export function toTitleCase(str) {
    if (!str) return "";
    
    return str.replace(/\w\S*/g, (w) =>
        w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
    );
}

export function statusBadge(str) {
    switch (str) {
        case "pending":
            return "primary";   

        case "approved":
            return "success"; 
        
        case "rejected":
            return "danger"; 

        default:
            return "secondary";
    }
}