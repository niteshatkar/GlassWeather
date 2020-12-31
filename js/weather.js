// Weather Class

class Weather {
  constructor(city) {
    this.city = city;
    this.key = 'b503611b4dc18300e0f66029bd1e9ea1';
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
