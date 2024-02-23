<script setup lang="ts">
import { useWeather } from './stores/weather'
import { useForecast } from './stores/forecast';

const config = useRuntimeConfig()
const token = config.public.token
const { getWeather } = useWeather()
const { getForecast } = useForecast()
const city = useState('city', () => "Moscow")

const fetchData = async () => {
  await getWeather(city.value, token)
  await getForecast(city.value, token)
}

await callOnce(async () => {
  await getWeather()
  await getForecast()
})
</script>

<template>
  <header>
    <h1>Weather widget</h1>
  </header>

  <article>
    <h2>City:</h2>
    <input type="text" v-model="city" placeholder="Enter a city" />
    <button @click="fetchData">Get weather</button>
  </article>

  <main>
    <Weather :city="city" />
    <Forecast :city="city"/>
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
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
</style>
