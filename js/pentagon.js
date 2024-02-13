function getPentagonInfo() {
    const perimeter = getValuesById('perimeter')
    const apothem = getValuesById('apothem')
    const pentagonArea = 0.5 * perimeter * apothem;
    calculation('calculate-area', pentagonArea, 'Pentagon');
}