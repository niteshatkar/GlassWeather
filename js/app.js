// Vanilla Tilt

VanillaTilt.init(document.querySelector(".card"), {
    reverse: true,
    max: 25,
    speed: 800,
    // axis: 'x'
    glare: true,
    "max-glare": 0.3,
    reset: true,
    gyroscope: true,
    gyroscopeMinAngleX: -45,
    gyroscopeMaxAngleX: 45,
    gyroscopeMinAngleY: -45,
    gyroscopeMaxAngleY: 45
});

// Get Date Date Month Year

let calender = new Date();
let day;
let date = calender.getDate();
let month = calender.getMonth();
let year = calender.getFullYear();

// Get Day

switch (calender.getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday'
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

// Get Month

switch (calender.getMonth()) {
    case 0:
        month = 'January'
        break;
    case 1:
        month = 'February'
        break;
    case 2:
        month = 'March'
        break;
    case 3:
        month = 'April'
        break;
    case 4:
        month = 'May'
        break;
    case 5:
        month = 'June'
        break;
    case 6:
        month = 'July'
        break;
    case 7:
        month = 'August'
        break;
    case 8:
        month = 'September'
        break;
    case 9:
        month = 'October'
        break;
    case 10:
        month = 'November'
        break;
    case 11:
        month = 'December'
        break;
}

// Add calender to UI
const cal = document.querySelector('.date');
cal.innerHTML = `
    <span>${day}</span>
    <span>${date}</span>
    <span>${month}</span>
    <span>${year}</span>`;

// Init Storage Class

const storage = new Storage();

// Get city from LS

const cityInLS = storage.getWeather();

// Init UI Class

const ui = new UI();

// Init Weather Class

const weather = new Weather(cityInLS);

// Load Weather when DOM load

document.addEventListener('DOMContentLoaded', getWeather);

// On save change city and repaint

document.querySelector('.save').addEventListener('click', (e) => {


    const city_input = document.querySelector('.city').value;

    // Change Location
    weather.changeLocation(city_input);

    // Set City in LS
    storage.setWeather(city_input);

    //Repaint UI
    getWeather();

    // Clear Input
    document.querySelector('.city').value = '';
});

// Get weather function

function getWeather() {
    weather.fetchWeather()
        .then(result => {

            // Paint result
            ui.paint(result);

            // IF LIMIT REACHED
            if (result.cod === 429)
                ui.paintExceeded();
        })
        .catch(err => {
            if (err instanceof TypeError) {
                ui.paintErr();
                setTimeout(() => {
                    location.reload();
                }, 2000);
                storage.setWeather('mumbai');
            }
        });
}
