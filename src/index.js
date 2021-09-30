import { calcShift } from './calc-shift';

const dateInput = document.getElementById('date');
const dateResult = document.getElementById('result');

dateInput.addEventListener('change', () => {
  const date = new Date(dateInput.value);
  const result = calcShift(date);
  dateResult.innerText = result;
});
