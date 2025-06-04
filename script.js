function convertToMiles() {
    const kmInput = document.getElementById("kmInput").value;
    const resultElement = document.getElementById("result");

    if (kmInput === "" || isNaN(kmInput) || Number(kmInput) < 0) {
        resultElement.textContent = "Please enter a valid positive number.";
        return;
    }

    const miles = Number(kmInput) * 0.621371;
    resultElement.textContent = `${kmInput} km = ${miles.toFixed(2)} miles`;
}

function clearInput() {
    document.getElementById("kmInput").value = "";
    document.getElementById("result").textContent = "";
}
