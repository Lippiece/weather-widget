<script lang="ts" setup>
import axios from 'axios'

const weather = useState('weather')
const city = useState('city', () => 'Kaliningrad')

const url = "https://api.openweathermap.org/data/2.5/weather"
const paramsDefault = {
  q: city.value,
  appid: "1c9287e01c2d0b797dcff3a182cab997",
  units: "metric", // specify the units of measurement
}
const getWeather = async (params = paramsDefault) => {
  try {
    const response = await axios.get(url, { params })
    return response.data
  } catch (error) {
    console.error(error)
  }
}
const updateWeather = async () => {
  weather.value = await getWeather({ ...paramsDefault, q: city.value })
}

await callOnce(async() => {
  weather.value = await getWeather()
})
</script>

<template>
  <h2>City:</h2>
  <article>
    <input
      type="text"
      v-model="city"
      placeholder="Enter a city"
    />
    <button @click="updateWeather">
      Get weather!
    </button>
  </article>

  <h2>
  <img :src="`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}.png`" alt="">
    Weather in {{ city }}, {{ weather?.sys?.country }}:
  </h2>
  <article>
    <p v-if="weather.main">
      Temperature: {{ weather?.main?.temp }}°C (feels like {{ weather?.main?.feels_like }}°C)
    </p>
    <p v-if="weather.weather">Description: {{ weather?.weather[0]?.description }}</p>
    <p v-if="weather.main">Humidity: {{ weather?.main?.humidity }}%</p>
    <p v-if="weather.wind">Wind speed: {{ weather?.wind?.speed }} m/s</p>
    <p v-if="weather.lastupdate">Last updated at: {{ weather?.lastupdate?.value }} m/s</p>
  </article>
</template>


<style scoped>
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

input[type="text"] {
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;
  width: 20rem;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

button:active {
  background-color: #3e8e41;
}

p {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
</style>
