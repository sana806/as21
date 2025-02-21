
const radiusInput = document.getElementById('radius');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');

calculateButton.addEventListener('click', () => {
	const radius = parseFloat(radiusInput.value);
	const pi = 3.14159;
	const area = pi * (radius * radius);

	resultParagraph.textContent = `The area of the circle is: ${area.toFixed(2)}`;
});
