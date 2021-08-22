function gettingInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputFieldText = inputField.value;
  const inputValue = parseFloat(inputFieldText);
  inputField.value = '';
  return inputValue;
}
function updateBalance(fieldId, amount) {
  const totalTag = document.getElementById(fieldId);
  const prevoiusTotalInText = totalTag.innerText;
  const previousTotal = parseFloat(prevoiusTotalInText);
  const newTotal = previousTotal + amount;
  totalTag.innerText = newTotal;
}

document.getElementById('deposit-button').addEventListener('click', function () {
  const amount = gettingInputValue('deposit-input');
  updateBalance('deposit-total', amount);
})