import axios from "axios"

const url = "https://api.openweathermap.org/data/2.5/forecast"
const appid = process.env.NUXT_TOKEN
export const useForecast = defineStore("forecast", {
  state: () => ({
    forecast: null,
  }),
  actions: {
    async getForecast(city = "Moscow", token:string) {
      const params = {
          q: city,
          appid: appid || token,
          units: "metric", // specify the units of measurement
        }
      const response = await axios.get(url, {
        params 
      })

      this.forecast = response.data
    },
  },
})
