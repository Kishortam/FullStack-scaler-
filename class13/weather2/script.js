const buttonRef = document.querySelector('button[type=submit]');
const inputRef = document.querySelector('#enterlocation');
const tempRef = document.querySelector('.temp');
const timeDateRef = document.querySelector('.localtime');
const conditionIconRef = document.querySelector('.icon img');
const conditionTextRef = document.querySelector('.condition');

buttonRef.addEventListener('click', function(e){
    e.preventDefault();
    fetchData(inputRef.value);
});

function fetchData(location){
    fetch(`http://api.weatherapi.com/v1/current.json?key=14c86e50a2ef4c6980b61503232912&q=${location}&aqi=no`)
    .then(res => res.json())
    .then((res) => updateWeatherdetails(res))
    .catch(function(e){
        console.log(e);
    })
};

function updateWeatherdetails(data){
    const tempC = data.current.temp_c;
    const conditionText = data.current.condition.text;
    const conditionIcon = data.current.condition.icon;
    const dateTime = data.location.localtime;

    tempRef.innerText = tempC;
   // cityRef.innerText = locationName;
    timeDateRef.innerText = dateTime;
    conditionIconRef.src = conditionIcon;
    conditionTextRef.innerText = conditionText;
}