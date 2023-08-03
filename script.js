function getTemperature() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "8c98cb21aa86ff9d4aa56413f8b74134"; // Replace with your weather API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const temperature = data.main.temp;
            const temperatureResult = document.getElementById("temperatureResult");
            temperatureResult.innerHTML = `Temperature in ${city}: ${temperature} °C`;
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            const temperatureResult = document.getElementById("temperatureResult");
            temperatureResult.innerHTML = "City not found. Please try again.";
        });
}
