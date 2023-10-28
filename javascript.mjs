function convertToCelsius() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('result').textContent = `Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
}

function convertToFahrenheit() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('result').textContent = `Temperature in Celsius: ${celsius.toFixed(2)}°C`;
}