function getRhombusInfo(){
    const diagonal1 = getValuesById('diagonal-1')
    const diagonal2 = getValuesById('diagonal-2')
    const rhombusArea = 0.5 * diagonal1 * diagonal2;
    calculation('calculate-area', rhombusArea, 'Rhombus');
}