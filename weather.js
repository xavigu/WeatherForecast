class Weather {
    constructor(city, state) {
        this.apiKey = '70d54bee6ca7d6f41cd2b502d1030e36';
        this.city = city;
        this.state = state;
    }

    //Fetch weather from API
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);
        const responseData = await response.json();

        return responseData;
    }

    //Change weather location
    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}