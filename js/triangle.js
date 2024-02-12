function getTriangleInfo() {
    const triangleBase = getValuesById('triangle-base');
    const triangleHeight = getValuesById('triangle-height');
    const area = 0.5 * triangleBase * triangleHeight;
    const calculation = document.createElement('p');
    calculation.innerText = "Triangle: " + area;
    const result =  document.getElementById('calculate-area').appendChild(calculation);
    result.style.marginTop = '20px';
    result.style.marginLeft = '20px'
    
}

//* getting the values with this function
function getValuesById(value) {
    return parseFloat(document.getElementById(value).value);
}