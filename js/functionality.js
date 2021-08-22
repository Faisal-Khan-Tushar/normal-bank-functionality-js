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
//updating the bank balance
function updateBankBalance(amount, isAdd) {
  const totalTag = document.getElementById('balance-total');
  const totalTagText = totalTag.innerText;
  const previousBankBalance = parseFloat(totalTagText);
  let newBankBalance;
  if (isAdd) {
    newBankBalance = previousBankBalance + amount;
  }
  else {
    newBankBalance = previousBankBalance - amount;
  }
  totalTag.innerText = newBankBalance;
}

document.getElementById('deposit-button').addEventListener('click', function () {
  const amount = gettingInputValue('deposit-input');
  updateBalance('deposit-total', amount);
  updateBankBalance(amount, true);
})
//handling the withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
  const amount = gettingInputValue('withdraw-input');
  updateBalance('withdraw-total', amount);
  updateBankBalance(amount, false);
})