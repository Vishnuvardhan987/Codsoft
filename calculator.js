const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.value;
    const result = eval(expression);
    display.value = result;
    addToHistory(expression, result);
  } catch {
    display.value = "Error";
  }
}

function addToHistory(expression, result) {
  const listItem = document.createElement("li");
  listItem.textContent = `${expression} = ${result}`;
  historyList.prepend(listItem);
}

function clearHistory() {
  historyList.innerHTML = "";
}
