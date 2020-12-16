// UI Class

class UI {
    constructor() {

        // Get inputs

        this.h2 = document.querySelector('h2');
        this.h3 = document.querySelector('h3');
        this.h4 = document.querySelector('h4');
        this.img = document.querySelector('img');
        this.humidity = document.querySelector('#humidity');
        this.feels = document.querySelector('#feels');
    }

    paint(weather) {
        this.country = weather.sys.country;
        this.h2.textContent = `${weather.name}, ${this.country}`;
        this.h3.textContent = weather.weather[0].main;
        let feels_temp = Math.round(weather.main.feels_like);
        let temp = Math.round(weather.main.temp);
        this.h4.innerHTML = `${temp}` + "<sup>°</sup>C";
        this.humidity.innerHTML = `Humidity ${weather.main.humidity}%`;
        this.feels.innerHTML = `Feels Like ${feels_temp}` + "<sup>°</sup>C";
        const icon = weather.weather[0].icon;
        this.img.setAttribute('src', `../assest/weather-icons-svgs/${icon}.svg`);
        console.log(img);
    }

    paintErr() {
        document.querySelector('.content').innerHTML = `
        <br><h5>Please Enter Correct City Name</h5>`

    }

    paintExceeded() {
        document.querySelector('.content').innerHTML = `
        <br><h5>Limit Reached 🤒</h5>
        <h5>Try again after 12hrs</h5>`

    }
}