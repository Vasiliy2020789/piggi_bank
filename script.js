//Получаем элементы формы
const parametersOfСalc = document.forms.parametersOfСalc;//получение конкретной формы по атрибуту "name"
const parametersOfСalcPeriod = parametersOfСalc.period;

parametersOfСalcPeriod[0].value = "day";
parametersOfСalcPeriod[1].value = "week";
const parametersOfСalcDelta = parametersOfСalc.delta;
const parametersOfСalcDuration = parametersOfСalc.duration;
const button = parametersOfСalc.button;//type="submit"
console.log(button);
//сюда будем вставлять элементы таблицы дни/суммы
const tabs = document.querySelector('.tabs');
// сда будем получать данные для расчета
//let delta, days;
button.addEventListener("click", function (event) {//при событии "click" выполняем функцию
	let begin = Number(parametersOfСalcDelta.value);
	let end = Number(parametersOfСalcDuration.value);
	let delta = Number(parametersOfСalcDelta.value);
	console.log(begin);
	console.log(end);
	console.log(delta);
	let sum = 0;
	Number()
	for (i = 0; i < (end + 1); i++) {
		sum = sum + i * delta;
		//console.log(sum);
	}
	console.log(sum);
	tabs.insertAdjacentHTML(
		"beforebegin",
		`<br> За  ${end} дней, если каждый день увеличивать сумму пополнения копилки на ${delta} рублей у Вас накопится ${sum} рублей.`
	);
	event.preventDefault()
});



//console.log(`сумма чисел от ${begin} до ${end} с шагом ${delta} равна ${sum}`);

//tabs.innerHTML = `сумма чисел от ${begin} до ${end} с шагом ${delta} равна ${sum}`;