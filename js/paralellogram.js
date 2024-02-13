function getParaInfo() {
    const paraBase = getValuesById('para-base');
    const paraHeight = getValuesById('para-height');
    const area = paraBase * paraHeight;
    const calculation = document.createElement('p');
    calculation.innerText = 'Parallelogram: ' + area;
    const result = document.getElementById('calculate-area').appendChild(calculation);
    result.style.marginTop = '20px';
    result.style.marginLeft = '20px';

}