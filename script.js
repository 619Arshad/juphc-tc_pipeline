function calculateTax() {
    const income = Number(document.getElementById("income").value);
    const tax = income * 0.10;
    document.getElementById("result").textContent = "Tax: " + tax;
}
