function hideImage() {
    var overlay = document.querySelector('.overlay'); /* get the overlay element */
    overlay.classList.add('visible'); /* add the visible class to show the overlay */
    setTimeout(function() {
      var img = document.querySelector('img'); /* get the image element */
      img.style.transform = 'translateY(-100%)'; /* move the image up by 100% of its height to hide it */
    }, 600); /* wait for 0.6 seconds before hiding the image */
  }




/* Caularlate */
  // Get elements
const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

// Set initial value of calculator result
let currentValue = '';

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', event => {
    const buttonValue = event.target.textContent;

    if (buttonValue === 'C') {
      // Clear the result
      currentValue = '';
      result.value = '';
    } else if (buttonValue === '=') {
      // Evaluate the expression
      result.value = eval(currentValue);
      currentValue = result.value;
    } else {
      // Add the button value to the expression
      currentValue += buttonValue;
      result.value = currentValue;
    }
  });
});

/* Map */

  // initialize the map
  function initMap() {
    // set the coordinates for the ramen restaurant
    var ramenLocation = {lat: 35.7128, lng: 139.7910};
    // create the map and center it on the ramen restaurant location
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: ramenLocation
    });
    // create a marker for the ramen restaurant
    var marker = new google.maps.Marker({
      position: ramenLocation,
      map: map,
      title: "Ramen Restaurant"
    });
  }

  /* Map NEwYOrk */ 

  function initMapNewYork() {
    var newYork = {lat: 40.712776, lng: -74.005974};
    var map = new google.maps.Map(document.getElementById('mapNewYork'), {
      zoom: 12,
      center: newYork
    });
    
    var ramenMarker = new google.maps.Marker({
      position: {lat: 40.727141, lng: -73.985104},
      map: map,
      title: 'Ramen Spot'
    });
  }

  const API_KEY = "45108ca0698a4156c434706af1749488";

function getWeather() {
  // get a random city in the US
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];
  const city = cities[Math.floor(Math.random() * cities.length)];

  // make API request
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},US&units=imperial&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      // update HTML with weather info
      document.getElementById("city-name").textContent = data.name;
      document.getElementById("temp").textContent = data.main.temp;
      document.getElementById("humidity").textContent = data.main.humidity;
      document.getElementById("wind-speed").textContent = data.wind.speed;
      document.getElementById("description").textContent = data.weather[0].description;
    })
    .catch(error => console.error(error));
}

// call getWeather function to display initial weather information
getWeather();

// update weather information every 10 minutes
setInterval(getWeather, 10 * 60 * 1000);



  $(document).ready(function() {
    var apiKey = "816b6493c0471bea6adc981cda5ef112";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=US&appid=" + apiKey;

    $.get(apiUrl, function(data) {
      var temp = Math.round((data.main.temp - 273.15) * 9/5 + 32); // convert kelvin to fahrenheit
      var humidity = data.main.humidity;
      var weather = data.weather[0].description;

      $("#temp").text(temp + "°F");
      $("#humidity").text(humidity + "%");
      $("#weather").text(weather);

      if (weather.includes("cloud")) {
        $(".icon").addClass("icon-cloudy");
      } else {
        $(".icon").addClass("icon-sunny");
      }
    });
  });

  (function() {
    var cx = '36205db6e6a53469b'; // replace with your own search engine ID
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();