const api = {
  key: "dd8bf21918a334b5eaf8db2a72251cff",
  baseurl: "https://api.openweathermap.org/data/2.5/",
};

const apiu = {
  key: "OpVzZHgSTjbmjs-GqpRZN-qhs-QAGxoUoYgBR976iDI",
  url: "https://api.unsplash.com/",
};

const searchbox = document.querySelector(".search-box");
const err = document.querySelector(".error");
searchbox.addEventListener("keypress", setQuery);

function setQuery(event) {
  if (event.keyCode == 13) {
    getResults(searchbox.value);
  }
}

// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}

function getResults(query) {
  fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    // fetch(`${api.baseurl}forecast?id=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      if (weather.ok) {
        fetchUpSlash();
        err.style.display = "none";

        return weather.json();
      } else {
        alert("Didnt find a city");
        err.style.display = "block";
      }
    })
    .then(displayResults)
    .catch((error) => {
      console.log(error);
    });
}

function fetchUpSlash() {
  fetch(`${apiu.url}photos/random/?client_id=${apiu.key}&query=weather&count=2`)
    //   fetch(`${apiu.url}photos/random/?client_id=${apiu.key}`)
    .then((photo) => {
      return photo.json();
    })
    .then(upDisplayResults);
}

function displayResults(weather) {
  let city = document.querySelector(".location .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

  let weather_el = document.querySelector(".current .wheather");
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector(".current .hi-low");
  hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(
    weather.main.temp_max
  )}°C `;
}

function upDisplayResults(photo) {
  document.querySelector(".photos").style.display = "block";
  document.querySelector(".img").src = `${photo[0].urls.regular}`;
  document.querySelector(".img-1").src = `${photo[1].urls.regular}`;
}
let now = new Date();
let date = document.querySelector(".location .date");
date.innerText = dateBuilder(now);

function dateBuilder(d) {
  let months = [
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

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

//  Autocomplete

const search = document.querySelector(".search-box");
const matchlist = document.getElementById("match-list");

// search citys and filters

const searchStates = async (searchText) => {
  const res = await fetch("city.list.json");
  const cities = await res.json();

  //  get matches to current text inputs
  let matches = cities.filter((cities) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return cities.name.match(regex);
  });

  if (searchText.length === 0) {
    matches = [];
    matchlist.innerHTML = "";
  }

  outputHtml(matches);
};

// Show results in html

const outputHtml = (matches) => {
  if (matches.length > 0) {
    const html = matches
      .slice(0, 2)
      .map(
        (match) => `
        <div class='show-results'><h3>${match.name} </h3><h4><span>(${match.country})</span></h4>
        <small>${match.coord.lon}, ${match.coord.lat}</small>
        </div>`
      )
      .join("");

    matchlist.innerHTML = html;

    // get indexs

    var tagList = [];

    var ulList = document.getElementById("match-list");

    var tags = ulList.getElementsByTagName("h3");

    //Dump elements into Array
    while (tagList.length != tags.length) {
      tagList.push(tags[tagList.length]);
    }

    tagList.forEach(function (item) {
      item.addEventListener("click", function (event) {
        tagList.indexOf(event.target || event.srcElement);
        let b = tagList.indexOf(event.target || event.srcElement);
        getResults(tags[b].innerHTML);
      });
    });
  }
};

search.addEventListener("input", () => {
  searchStates(search.value);
});