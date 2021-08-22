function gettingInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputFieldText = inputField.value;
  const inputValue = parseFloat(inputFieldText);
  inputField.value = '';
  return inputValue;
}
function updateBalance(fieldId, amount) {
  // const totalTag = document.getElementById(fieldId);
  // const prevoiusTotalInText = totalTag.innerText;
  // const previousTotal = parseFloat(prevoiusTotalInText);
  const previousTotal = getInnerTextValue(fieldId);
  const newTotal = previousTotal + amount;
  document.getElementById(fieldId).innerText = newTotal;
}
//refactoring
function getInnerTextValue(fieldId) {
  const fieldTag = document.getElementById(fieldId);
  const fieldText = fieldTag.innerText;
  const value = parseFloat(fieldText);
  return value;
}
//updating the bank balance
function updateBankBalance(amount, isAdd) {
  // const totalTag = document.getElementById('balance-total');
  // const totalTagText = totalTag.innerText;
  // const previousBankBalance = parseFloat(totalTagText);
  const previousBankBalance = getInnerTextValue('balance-total');
  let newBankBalance;
  if (isAdd) {
    newBankBalance = previousBankBalance + amount;
  }
  else {
    newBankBalance = previousBankBalance - amount;
  }
  document.getElementById('balance-total').innerText = newBankBalance;
}

document.getElementById('deposit-button').addEventListener('click', function () {
  const amount = gettingInputValue('deposit-input');
  if (amount > 0) {
    updateBalance('deposit-total', amount);
    updateBankBalance(amount, true);
  }
})
//handling the withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
  const amount = gettingInputValue('withdraw-input');
  const balance = getInnerTextValue('balance-total');

  if (amount > 0 && amount <= balance) {
    updateBalance('withdraw-total', amount);
    updateBankBalance(amount, false);
  }
})