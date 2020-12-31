// Weather Class

class Weather {
  constructor(city) {
    this.city = city;
   // this.key = '21bd48b3fa575a5d667fd4d40026351e';
    this.key = process.env.WEATHER_API_KEY;
  }
  async fetchWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.key}`);

    const data = await response.json();
    return data;
  }

  changeLocation(city) {
    this.city = city;
  }
}
