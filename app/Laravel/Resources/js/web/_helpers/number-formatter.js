export function moneyFormat(number) {
    let amount = number;

    if (typeof amount !== "number") {
        amount = parseFloat(amount) || 0;
    }

    return amount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}