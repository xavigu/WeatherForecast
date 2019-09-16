//Init storage
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();
//Init weather object/class
let weather = new Weather(weatherLocation.city, weatherLocation.state);
//Init UI
const ui = new UI();

//Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);
//Change Location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    //change the weather variable with the new city and state
    weather.changeLocation(city, state);

    //Ser location in Location Storage
    storage.setLocationData(city, state);

    //Get and display new weather of the new location 
    getWeather();

    //Close modal
    $('#locModal').modal('hide'); //Para cerrar un modal de Bootstrap es necesario usar JQuery
})

function getWeather(){
    weather.getWeather()
        .then(result => {
            ui.paintUI(result);
            console.log(result);
        })
        .catch(err => console.log(err));
}