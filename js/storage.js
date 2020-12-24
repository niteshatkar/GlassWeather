class Storage {
  constructor() {
    this.city;
    this.defaultCity = 'mumbai';
  }

  // Get weather from LS
  getWeather() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    return this.city;
  }

  // Set weather in LS
  setWeather(city) {
    localStorage.setItem('city', city);
  }
}