function getEllipseInfo() {
    const aAxis = getValuesById('a-axis')
    const bAxis = getValuesById('b-axis')
    let ellipseArea = Math.PI * aAxis * bAxis;
    ellipseArea = ellipseArea.toFixed(2);
    calculation('calculate-area', ellipseArea, 'Ellipse');
}