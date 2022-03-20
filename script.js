//сюда будем вставлять элементы таблицы дни/суммы
const tabs = document.querySelector('.tabs');
// сда будем получать данные для расчета
//let delta, days;
let begin = 1;
let end = 365;
let delta = 5;
let sum = 0;
console.log(`Скрипт подключен`);

for (i = 0; i < (end + 1); i++) {
	sum = sum + i * delta;
	console.log(sum);
}

console.log(`сумма чисел от ${begin} до ${end} с шагом ${delta} равна ${sum}`);
tabs.insertAdjacentHTML(
	"beforebegin",
	`сумма чисел от ${begin} до ${end} с шагом ${delta} равна ${sum}`
);
//tabs.innerHTML = `сумма чисел от ${begin} до ${end} с шагом ${delta} равна ${sum}`;