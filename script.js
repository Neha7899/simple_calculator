
const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const expression = display.value;

    // Allow only numbers and calculator operators.
    if (!/^[0-9+\-*/%.() ]+$/.test(expression)) {
        display.value = "Invalid input";
        return;
    }

    try {
        if (!expression.trim()) return;

        // Convert the validated expression into a result.
        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        display.value = Number.isFinite(result)
            ? String(Number(result.toFixed(10)))
            : "Error";
    } catch {
        display.value = "Error";
    }
}
