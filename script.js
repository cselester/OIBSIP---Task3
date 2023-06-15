function convertTemperature() {
  var temperatureInput = document.getElementById("temperature").value;
  var unitSelect = document.getElementById("unit");
  var selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
  
  if (!isNaN(temperatureInput)) {
    var convertedTemperature;
    var convertedUnit;
    
    if (selectedUnit === "celsius") {
      convertedTemperature = parseFloat(temperatureInput);
      convertedUnit = "	\xB0C";
    } else if (selectedUnit === "fahrenheit") {
      convertedTemperature = (parseFloat(temperatureInput) - 32) * 5 / 9;
      convertedUnit = "	\xB0C";
    } else if (selectedUnit === "kelvin") {
      convertedTemperature = parseFloat(temperatureInput) - 273.15;
      convertedUnit = "	\xB0C";
    }
    
    document.getElementById("result").textContent =convertedTemperature.toFixed(2) + convertedUnit;
  } else {
    document.getElementById("result").textContent = "Invalid temperature input";
  }
}
