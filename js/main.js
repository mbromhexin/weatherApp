var myDate = new Date();
var dayIndex = myDate.getDay();
var monthIndex = myDate.getMonth();
var dayNumber = myDate.getDate();
var cityName = document.getElementById('cityName')



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
  console.log(getDayString(dayIndex));
  console.log(`${dayNumber}${getMonthString(monthIndex)}`);
  console.log(myResponsData.location.name);
  console.log(myResponsData.current.temp_c);
  var windDirection = myResponsData.current.wind_dir;
  console.log(getWindDirection(windDirection));
  console.log(myResponsData.forecast.forecastday[0].hour[getHoure()].condition.icon);
  console.log(myResponsData.forecast.forecastday[0].hour[getHoure()].condition.text);
  console.log(myResponsData.forecast.forecastday[0].hour[getHoure()].air_quality.no2);
  console.log("============ next day ==============");
  console.log(getDayString(dayIndex+1));
  console.log(myResponsData.forecast.forecastday[1].day.condition.icon);
  console.log(myResponsData.forecast.forecastday[1].day.maxtemp_c);
  console.log(myResponsData.forecast.forecastday[1].day.mintemp_c);
  console.log(myResponsData.forecast.forecastday[1].day.condition.text);
  console.log("============ later day =============");
  console.log(getDayString(dayIndex+2));
  console.log(myResponsData.forecast.forecastday[2].day.condition.icon);
  console.log(myResponsData.forecast.forecastday[2].day.maxtemp_c);
  console.log(myResponsData.forecast.forecastday[2].day.mintemp_c);
  console.log(myResponsData.forecast.forecastday[2].day.condition.text);
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
