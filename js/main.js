var myDate = new Date();
var dayIndex = myDate.getDay();
var monthIndex = myDate.getMonth();
var dayNumber = myDate.getDate();


var cityName = document.getElementById('cityName')

var thisDay = document.getElementById('thisDay')
var nextDay = document.getElementById('nextDay')
var laterDay = document.getElementById('laterDay')

let city = "cairo";



cityName.addEventListener('keyup',async function(){

  city = cityName.value

  myApi(city);

  // var myRespons =
  // await fetch(`http://api.weatherapi.com/v1/forecast.json?key=fdcb7a70e391443786613610230108&q=${city}&days=3&aqi=yes&alerts=no
  // `);
  // var myResponsData = await myRespons.json();
  // console.log(myResponsData.location.name);
  

})

// document.write(`<p>${dayNumber}${getMonthString(monthIndex)}</p>`);
// document.write(`<h1>${getDayString(dayIndex)}</h1>`);
// document.write(`<h1>${getHoure()}</h1>`);











myApi(city);



async function myApi(location) {
  var myRespons =
    await fetch(`http://api.weatherapi.com/v1/forecast.json?key=fdcb7a70e391443786613610230108&q=${location}&days=3&aqi=yes&alerts=no
    `);
  var myResponsData = await myRespons.json();
//   console.log(myResponsData);
  console.log("============ this day ==============");
  // console.log(getDayString(dayIndex));
  // console.log(`${dayNumber}${getMonthString(monthIndex)}`);
  // console.log(myResponsData.location.name);
  // console.log(myResponsData.current.temp_c);
  var windDirection = myResponsData.current.wind_dir;
  // console.log(getWindDirection(windDirection));
  // console.log(myResponsData.forecast.forecastday[0].hour[getHoure()].condition.icon);
  // console.log(myResponsData.forecast.forecastday[0].hour[getHoure()].condition.text);
  console.log(myResponsData.forecast.forecastday[0].hour[getHoure()].air_quality.no2);

  var thisDayHtml = `
  <div class="day p-2">
  <div class="date d-flex d-flex justify-content-between">
      <p>${getDayString(dayIndex)}</p>
      <p>${dayNumber}${getMonthString(monthIndex)}</p>
  </div>
  <div class="info">
      <p class="location">${myResponsData.location.name}</p>
      <h1 class="temp py-2">${myResponsData.current.temp_c}<sup>o</sup>C</h1>
      <img class="mx-auto text-center w-25" src="http:${myResponsData.forecast.forecastday[0].hour[getHoure()].condition.icon}" alt="">


      <p>${myResponsData.forecast.forecastday[0].hour[getHoure()].condition.text}</p>
  </div>
  <div class="wind d-flex justify-content-between">
      <div><i class="fa-solid fa-umbrella"></i>20%</div>
      <div><i class="fa-solid fa-wind"></i>${myResponsData.forecast.forecastday[0].hour[getHoure()].air_quality.no2}km/h</div>
      <div><i class="fa-solid fa-compass"></i> ${getWindDirection(windDirection)}</div>
  </div>
</div>

  
  `
  thisDay.innerHTML = thisDayHtml






  console.log("============ next day ==============");
  console.log(getDayString(dayIndex+1));
  console.log(myResponsData.forecast.forecastday[1].day.condition.icon);
  console.log(myResponsData.forecast.forecastday[1].day.maxtemp_c);
  console.log(myResponsData.forecast.forecastday[1].day.mintemp_c);
  console.log(myResponsData.forecast.forecastday[1].day.condition.text);




var nextDayHtml = 
`
<div class="day p-2">
<div class="date d-flex d-flex justify-content-center">
    <p>${getDayString(dayIndex+1)}</p>
</div>
<div class="info">
    <img class="mx-auto text-center w-25" src="http:${myResponsData.forecast.forecastday[1].day.condition.icon}" alt="">
    <h1 class="mx-auto text-center w-25 temp py-2">${myResponsData.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h1>
    <h5 class="mx-auto text-center w-25 temp py-2">${myResponsData.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></h5>
    <p class="w-25 mx-auto text-center">${myResponsData.forecast.forecastday[1].day.condition.text}</p>
</div>
</div>

`
nextDay.innerHTML = nextDayHtml


  console.log("============ later day =============");
  console.log(getDayString(dayIndex+2));
  console.log(myResponsData.forecast.forecastday[2].day.condition.icon);
  console.log(myResponsData.forecast.forecastday[2].day.maxtemp_c);
  console.log(myResponsData.forecast.forecastday[2].day.mintemp_c);
  console.log(myResponsData.forecast.forecastday[2].day.condition.text);

  var laterDayHtml = 
  `
  <div class="day p-2">
  <div class="date d-flex d-flex justify-content-center">
      <p>${getDayString(dayIndex+2)}</p>
  </div>
  <div class="info">
      <img class="mx-auto text-center w-25" src="http:${myResponsData.forecast.forecastday[2].day.condition.icon}" alt="">
      <h1 class="mx-auto text-center w-25 temp py-2">${myResponsData.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h1>
      <h5 class="mx-auto text-center w-25 temp py-2">${myResponsData.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></h5>
      <p class="w-25 mx-auto text-center">${myResponsData.forecast.forecastday[2].day.condition.text}</p>
  </div>
  </div>
  
  `
  laterDay.innerHTML = laterDayHtml
  











}



function getWindDirection(dir) {
  var direction;
  switch (dir) {
    case "N":
      direction = "Northerly";
      break;
    case "NE":
      direction = "North Easterly";
      break;
    case "E":
      direction = "Easterly";
      break;
    case "SE":
      direction = "South Easterly";
      break;
    case "S":
      direction = "Southerly";
      break;
    case "SW":
      direction = "South Westerly";
      break;
    case "W":
      direction = "Westerly";
      break;
    case "NW":
      direction = "North Westerly";
      break;
    default:
        direction = dir;
        break;
  }
  return direction
}

function getMonthString(index) {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return month[index];
}

function getDayString(index) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if(index <= 6)
  {
    return weekday[index];
  }
  else if( index == 7)
  {
    return weekday[0];
  }
  else if (index == 8)
  {
    return weekday[1];
  }

}

function getHoure() {
  return myDate.getHours();
}
