const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

async function getData(city) {
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=9d8ce658006e4f2082295447241709&q=${city}&aqi=yes`
        );

        if (!response.ok) {
            throw new Error("City not found or API limit exceeded.");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Error fetching weather data. Please check the city name or try again later.");
    }
}

searchButton.addEventListener('click', async () => {
    const city = cityInput.value.trim(); // Trim to remove any extra spaces
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const result = await getData(city);
    if (result) {
        cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
        cityTime.innerText = `Local Time: ${result.location.localtime}`;
        cityTemp.innerText = `Temperature: ${result.current.temp_c}°C`;
    }
});



// Get current location
const locationButton = document.getElementById('get-location-button')

async function gotLocation(position)
{
    console.log('Your location is')
    console.log(position)

    const result =  await getData(
    position.coords.lattitude,
    position.coords.longitude
    );
   console.log(result)
}

function failedToGetLocation()
{
    console.log('Cannot get location')
}

locationButton.addEventListener('click',async ()=>{
    const result = navigator.geolocation.getCurrentPosition(gotLocation,failedToGetLocation)
})

async function getData(lat,long) {
    // get data by latitude and longitude
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=9d8ce658006e4f2082295447241709&q=${lat},${long}&aqi=yes`
        );

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Error fetching weather data. Please check the city name or try again later.");
    }
}