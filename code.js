function calculate() {
    const surfaceTemp = parseFloat(document.getElementById('surfaceTemp').value);
    const area = parseFloat(document.getElementById('area').value);
    const kValue = parseFloat(document.getElementById('kValue').value);
    const power = parseFloat(document.getElementById('power').value);

    let missingSurfaceTemp = isNaN(surfaceTemp);
    let missingArea = isNaN(area);
    let missingKValue = isNaN(kValue);
    let missingPower = isNaN(power);

    if (missingSurfaceTemp) {
        document.getElementById('results').innerHTML = `Surface Temperature: ${power / (kValue * area)} K`;
    } else if (missingArea) {
        document.getElementById('results').innerHTML = `Area: ${power / (kValue * surfaceTemp)} m²`;
    } else if (missingKValue) {
        document.getElementById('results').innerHTML = `K Value: ${power / (surfaceTemp * area)} W/m²K`;
    } else if (missingPower) {
        document.getElementById('results').innerHTML = `Power: ${kValue * surfaceTemp * area} W`;
    } else {
        document.getElementById('results').innerHTML = `Please leave one field empty to calculate its value.`;
    }
}
