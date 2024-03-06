// 1. taking references

const buttonRef = document.querySelector('button[type=submit]');
const inputRef = document.querySelector('#enterLocation');
const tempRef = document.querySelector('.content .temp');
const cityRef = document.querySelector('.city');
const timeDateRef = document.querySelector('.date');
const conditionIconRef = document.querySelector('.icon img');
const conditionTextRef = document.querySelector('.condition');


// add eventListener on submit button
buttonRef.addEventListener('click', function(event){
    event.preventDefault();
    //console.log(inputRef.value);
    fetchData(inputRef.value);
});

function fetchData(location){
    fetch(`http://api.weatherapi.com/v1/current.json?key=14c86e50a2ef4c6980b61503232912&q=${location}&aqi=no`)
    .then(res => res.json())  // convert serialised data to json
    // .then(res => console.log(res)) // we can see
     .then((res) => updateWeatherdetails(res))  // converted or refer to dom elements
     .catch(function(e){
        console.log(e);   // catch error if we dont find details
     }) 
};


// update correspondnt values

function updateWeatherdetails(data){
    const tempC = data.current.temp_c;
    const conditionText = data.current.condition.text;
    const conditionIcon = data.current.condition.icon;
    const locationName = data.location.name;
    const dateTime = data.location.localtime;

    tempRef.innerText = tempC;
    cityRef.innerText = locationName;
    timeDateRef.innerText = dateTime;
    conditionIconRef.src = conditionIcon;
    conditionTextRef.innerText = conditionText;
}
