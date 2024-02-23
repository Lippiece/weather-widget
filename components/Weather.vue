<script lang="ts" setup>
import { useWeather } from "../stores/weather.ts"

const props = defineProps({
  city: String
})
const { weather } = storeToRefs(useWeather())
console.log(weather)
</script>

<template>
  <img :src="`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}.png`" alt="Weather icon">
  <h2>
    Weather in {{ city }}, {{ weather.sys.country }}:
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

p {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
</style>
