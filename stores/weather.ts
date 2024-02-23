import axios from "axios"

const appid = process.env.NUXT_TOKEN
const url = "https://api.openweathermap.org/data/2.5/weather"
export const useWeather = defineStore("weather", {
  state: () => ({
    weather: null,
  }),
  actions: {
    async getWeather(city = "Moscow", token:string) {
      const response = await axios.get(url, {
        params: {
          q: city,
          appid: token || appid,
          units: "metric", // specify the units of measurement
        },
      })

      this.weather = response.data
    },
  },
})
