const discountBonus = document.querySelector('.card__price--special')
const sliderBtn = document.querySelector('.card__price--slider')
const sliderInputs = document.querySelectorAll('#range')
const numberInput = document.querySelector('#rangevalue')
const numberViews = document.querySelector('#rageview')

const showPriceDiscount = () => {
	const checkBox = document.querySelector('#switch:checked') !== null
	if (checkBox === false) {
		discountBonus.textContent = '-25% discount'
		discountBonus.style.display = 'inline-block'
		discountBonus.style.backgroundColor = 'rgb(254, 236, 231)'
	}
    else {
		discountBonus.textContent = ''
		discountBonus.style.backgroundColor = '#fff'
	}
}
const handleInputChange = e => {
	let target = e.target
	if (e.target.type !== 'range') {
		target = document.getElementById('range')
	}
	numberInput.textContent = `$${e.target.value / 6.25}`
	numberViews.textContent = `${e.target.value} k`
	const min = target.min
	const max = target.max
	const val = target.value

	target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%'
}

sliderInputs.forEach(input => {
	input.addEventListener('input', handleInputChange)
})
sliderBtn.addEventListener('click', showPriceDiscount)
numberInput.addEventListener('input', handleInputChange)
