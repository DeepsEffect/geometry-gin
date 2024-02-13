function getParaInfo() {
    const paraBase = getValuesById('para-base');
    const paraHeight = getValuesById('para-height');
    const area = paraBase * paraHeight;
    calculation('calculate-area', area, 'Parallelogram');

}