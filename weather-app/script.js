document.querySelector('button').addEventListener('click', () => {
const input = document.querySelector('input');
const city = input.value.trim();
  checkWeather(city)
  input.value = ''
})

const apiKey = 'a73fbebc441e170a6a21dd2c2c82efae';
function checkWeather(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => { 
    console.log('Weather Data:', data);
    document.querySelector('.temp').innerHTML= Math.round(`${data.main.temp}`) +'°C';
    document.querySelector('.city').innerHTML= `${data.name}`;
    document.querySelector('.humidity').innerHTML= `${data.main.humidity} %`;
    document.querySelector('.wind').innerHTML= `${data.wind.speed} km/h`;

    if(data.weather[0].main =='Clouds'){
      document.querySelector('.weather-icon').src ='images/clouds.png'
    }else if(data.weather[0].main =='Clear'){
      document.querySelector('.weather-icon').src ='images/clear.png'
    }else if(data.weather[0].main =='Rain'){
      document.querySelector('.weather-icon').src ='images/rain.png'
    }else if(data.weather[0].main =='Mist'){
      document.querySelector('.weather-icon').src ='images/mist.png'
    }else if(data.weather[0].main =='Drizzle'){
      document.querySelector('.weather-icon').src ='images/drizzle.png'
    }

  })
  .catch(error => console.error('Error:', error));
}
