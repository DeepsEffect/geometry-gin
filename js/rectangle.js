function getRectangleInfo() {
    const rectWidth = getValuesById('rectangle-width');
    const rectHeight = getValuesById('rectangle-height');
    const rectArea = rectWidth * rectHeight;
    calculation('calculate-area', rectArea, 'Rectangle');
}