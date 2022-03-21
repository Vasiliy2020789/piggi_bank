//_______Получаем элементы навигации и скрывающиеся блоки
const headerLinkGuide = document.querySelector(".header__link_guide");
const headerLinkShowForm = document.querySelector(".header__link_show-form");
const headerLinkEntrance = document.querySelector(".header__link_entrance");
const headerLinkRegistration = document.querySelector(".header__link_registration");
const guide = document.querySelector(".guide");
//__end__Получаем элементы навигации и скрывающиеся блоки

//_______Получаем элементы формы
const parametersOfСalc = document.forms.parametersOfСalc;//получение конкретной формы по атрибуту "name"
const parametersOfСalcPeriod = parametersOfСalc.period;

parametersOfСalcPeriod[0].value = "day";
parametersOfСalcPeriod[1].value = "week";
const parametersOfСalcDelta = parametersOfСalc.delta;
const parametersOfСalcDuration = parametersOfСalc.duration;
const button = parametersOfСalc.button;//type="submit"
//__end__Получаем элементы формы

//_______Получаем блоки в которые будем вставлять значения
//сюда будем вставлять элементы таблицы дни/суммы
const сalculations = document.querySelector(".сalculations");//<div class="results"></div><div class="current-sum"></div><div class="rest-of-days"></div>
const tabs = document.querySelector('.tabs');
// сюда будем получать данные для расчета
//let delta, days;
//_______Функционал кнопок headera
headerLinkGuide.addEventListener("click", function (event) {
	guide.classList.toggle('hide');
	event.preventDefault();
})

headerLinkShowForm.addEventListener("click", function (event) {
	parametersOfСalc.classList.toggle('hide');
	event.preventDefault();
})
//__end__Функционал кнопок headera


button.addEventListener("click", function (event) {//при событии "click" выполняем функцию
	event.preventDefault()
	let begin = Number(parametersOfСalcDelta.value);
	let end = Number(parametersOfСalcDuration.value);
	let delta = Number(parametersOfСalcDelta.value);
	console.log(begin);
	console.log(end);
	console.log(delta);
	let sum = 0;
	for (i = 0; i < end; i++) {
		sum = sum + i * delta;
		//console.log(sum);
		tabs.insertAdjacentHTML(
			"beforebegin",
			`<div class="tabs__item">
				<div class="tabs__days">День ${i + 1}-й</div>
				<div class="tabs__sum">${(i + 1) * delta} рублей</div>
			</div>`
		);
	}
	//console.log(sum);
	сalculations.insertAdjacentHTML(
		"beforeend",
		`За  ${end} дней, если каждый день увеличивать сумму пополнения копилки на ${delta} рублей у Вас накопится ${sum} рублей.`
	);
	parametersOfСalc.classList.toggle('hide');
});


//console.log(`сумма чисел от ${begin} до ${end} с шагом ${delta} равна ${sum}`);

//tabs.innerHTML = `сумма чисел от ${begin} до ${end} с шагом ${delta} равна ${sum}`;