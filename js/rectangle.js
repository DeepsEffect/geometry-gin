function getRectangleInfo() {
    const rectWidth = getValuesById('rectangle-width');
    const rectHeight = getValuesById('rectangle-height');
    const rectArea = rectWidth * rectHeight;
    const calculation = document.createElement('p');
    calculation.innerText = "Rectangle: " + rectArea;
    const result = document.getElementById('calculate-area').appendChild(calculation);
    result.style.marginTop = '20px';
    result.style.marginLeft = '20px';
}