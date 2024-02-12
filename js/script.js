function getTriangleInfo() {
    const triangleBase = getValuesById('triangle-base');
    const triangleHeight = getValuesById('triangle-height');
    const area = 0.5 * triangleBase * triangleHeight;
        
}

//* getting the values with this function
function getValuesById(value) {
    return parseFloat(document.getElementById(value).value);
}