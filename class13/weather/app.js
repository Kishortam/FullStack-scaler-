// 1. on submit get the location name

// 2. Make API call to server to get the weather details:
// http://api.weatherapi.com/v1/current.json?key=14c86e50a2ef4c6980b61503232912&q=Lonavala&aqi=no

// 3. get info from response json, display the data into respective DOM elements/references.


// taking all references
const inputRef = document.querySelector('.searchField');
const buttonRef = document.querySelector('button[type = submit]');
const tempRef = document.querySelector('.weather .temp');
const locationRef = document.querySelector('.weather .time_location p');
const timeDateRef = document.querySelector('.weather .time_location span');
const conditionTextRef = document.querySelector('.weather .weather_condition span');
const conditionIconRef = document.querySelector('.weather .weather_condition img');

// 1. on click, get the location name
buttonRef.addEventListener('click', function(event){
    event.preventDefault();
    //console.log(inputRef.value);
    fetchData(inputRef.value);
})

//// 2. Make API call to server to get the weather details:
function fetchData(location){
    fetch(`http://api.weatherapi.com/v1/current.json?key=14c86e50a2ef4c6980b61503232912&q=${location}&aqi=no`)
     .then(res => res.json())  // convert serialised data to json
    // .then(res => console.log(res)) // we can see
     .then((res) => updateWeatherdetails(res))  // converted or refer to dom elements
     .catch(function(e){
        console.log(e);   // catch error if we dont find details
     })  
}

// 3. get info from response json, display the data into respective DOM elements/references.
function updateWeatherdetails(data){
    const tempC = data.current.temp_c;
    const conditionText = data.current.condition.text;
    const conditionIcon = data.current.condition.icon;
    const locationName = data.location.name;
    const dateTime = data.location.localtime;

    tempRef.innerText = tempC;
    locationRef.innerText = locationName;
    timeDateRef.innerText = dateTime;
    conditionTextRef.innerText = conditionText;
    conditionIconRef.src = conditionIcon;
}