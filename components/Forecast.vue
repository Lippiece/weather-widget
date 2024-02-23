<script lang="ts" setup>
import { useForecast } from '~/stores/forecast'

const props = defineProps({
  city: String
})
const { forecast } = storeToRefs(useForecast())
</script>

<template>
  <h2>Forecast for {{ city }}{{ forecast?.city?.country? `, ${forecast.city.country}`: "" }}, for the next 5 days:</h2>

  <ul>
    <li v-for="day in forecast?.list" :class="{day: Boolean(day.dt_txt.match(/00:00:00/))}" :key="day.dt">
      <h3>On {{ day.dt_txt }}</h3>
      <img :src="`https://openweathermap.org/img/wn/${day.weather[0]?.icon}.png`" alt="Weather icon">
      <p>
        <strong>Description:</strong> {{ day.weather[0]?.description }}
      </p>
      <p>

        <strong>Temperature:</strong> {{ day.main.temp }}°C (feels like {{ day.main.feels_like }}°C)
      </p>
      <p>
        <strong>Humidity:</strong> {{ day.main.humidity }}%
      </p>
      <p>
        <strong>Wind:</strong> {{ day.wind.speed }} m/s
      </p>
    </li>
  </ul>
</template>

<style scoped>
ul {
  max-width: 100%;
  @media (min-width: 768px, max-width: 1024px) {
    max-width: 90%;
  }

  @media (min-width: 1024px, max-width: 1280px) {
    max-width: 80%;
  }

  @media (min-width: 1280px) {
    max-width: 70%;
  }

  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  padding: 0 1rem;
  margin: auto;

  li {
    width: auto;
    padding: 0.25rem;
    text-align: center;
    grid-column: span 1;

    &.day {
      margin:auto;
      border: 3px solid green;
      /* span all columns */
      grid-column: 1 / -1;
    }
  }

  hr {
    margin: 1rem 0;
    border: 1px solid green;
  }
}
</style>
