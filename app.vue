<script>
import WeatherWidget from './components/WeatherWidget.vue'
</script>
<template>
  <header>
    <h1>Weather widget</h1>
  </header>
  <main>
    <WeatherWidget />
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
</style>
