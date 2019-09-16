class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }


    paintUI(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${(weather.main.temp - 273).toFixed(2)}ºC`;
        this.humidity.textContent = `Relative humidity: ${weather.main.humidity} %`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} HPA`;
        this.wind.textContent = `Speed wind: ${weather.wind.speed} m/s`;
    }
}