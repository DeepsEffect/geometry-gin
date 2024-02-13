function getTriangleInfo() {
    const triangleBase = parseFloat(getValuesById('triangle-base'));
    const triangleHeight = parseFloat(getValuesById('triangle-height'));
    const area = 0.5 * triangleBase * triangleHeight;
    calculation('calculate-area', area, 'Triangle'); // Pass the area to the calculation function
}

//* printing the result in calculate area section
function calculation(calculateArea, area, shape) {
    const calculation = document.createElement('p');
    calculation.innerText = shape + " Area: " + area;
    const result = document.getElementById(calculateArea).appendChild(calculation);
    result.style.marginTop = '20px';
    result.style.marginLeft = '20px';
}

//* getting the values with this function
function getValuesById(value) {
    return parseFloat(document.getElementById(value).value);
}