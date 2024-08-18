
// //const API_KEY = "91b752fc76cfa7278c35821c7ab8c304";
// const usertab =  document.querySelector("[data-user]");
// const searchtab = document.querySelector("[data-search]");
// const userinfo = document.querySelector(".weather-container");

// const grantAccessContainer = document.querySelector(".grant_location");
// const searchForm = document.querySelector(".search_info");
// const loadingScreen = document.querySelector(".loading-container");
// const userInfoContainer = document.querySelector(".showweather");
// const grantBtn= document.querySelector("[data-grantaccess]");

// //initial variables
// const API_KEY = "91b752fc76cfa7278c35821c7ab8c304";
// let old_tab=usertab;
// old_tab.classList.add("current-tab");
// getFromSessionStorage();
 
// function switchTab(clickedTab){
 
//     if(clickedTab!=old_tab)
//     {
//         old_tab.classList.remove("current-tab");
//         old_tab=clickedTab;
//         old_tab.classList.add("current-tab");

//         if(!searchForm.classList.contains("active")){  // your weather pe hai searchpe jana hai
//             userInfoContainer.classList.remove("active");
//             grantAccessContainer.classList.remove("active");
//             searchForm.classList.add("active");
//         }
//         else
//         {  // search pe hai user pe jana hai
//             searchForm.classList.remove("active");
//             userInfoContainer.classList.remove("active");
//             getFromSessionStorage(); 
//         }
//     }




// }


// usertab.addEventListener("click",()=>{
//     switchTab(usertab);
// });
// searchtab.addEventListener("click",()=>{
//     switchTab(searchtab);
// });

// function getFromSessionStorage(){
//     const localCoordinates= sessionStorage.getItem("user-coord");
//     if(!localCoordinates){
//         grantAccessContainer.classList.add("active");
//     }
//     else{
//         const coordinates= JSON.parse(localCoordinates);
//         fetchUserInfo(coordinates);
//     }
// }

// async function fetchUserInfo(coordinates){
//     const {lat,lon} = coordinates;
//     grantAccessContainer.classList.remove("active");
//     loadingScreen.classList.add("active");

//     try{
//       const result= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
//       const data= await result.json();

//       loadingScreen.classList.remove("active");
//       userInfoContainer.classList.add("active");
//       renderWeatherInfo(data);
 
//     }
//     catch(err){
//        //console.log(err.message);
//        loadingScreen.classList.remove("active");
//     }
// }

// function renderWeatherInfo(weatherInfo){
//     //fetch the elements
//     const cityName= document.querySelector("[data-cityInfo]");
//     const countryIcon= document.querySelector("[data-countryflag]");
//     const desc= document.querySelector("[data-weatherdesc]");
//     const weatherIcon= document.querySelector("[data-weathericon]");
//     const temp = document.querySelector("[data-temperature]");
//     const windspeed = document.querySelector("[data-wind]");
//     const humidity = document.querySelector("[data-humid]");
//     const cloudiness = document.querySelector("[data-cloud]");
//     console.log(weatherInfo);

//     //fetch values from weatherinfo objects
// //    ity.innerText= weatherInfo?.name;
// //    flag.src c= `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
// //    weatherdesc.innerText = weatherInfo?.weather?.[0]?.description;
// //    weathericon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
// //    temp.innerText = `${weatherInfo?.main?.temp} °C`;
// //    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
// //    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
// //    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;

//     cityName.innerText = weatherInfo?.name;
//     countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
//     desc.innerText = weatherInfo?.weather?.[0]?.description;
//     weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
//     temp.innerText = `${weatherInfo?.main?.temp} °C`;
//     windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
//     humidity.innerText = `${weatherInfo?.main?.humidity}%`;
//     cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;

// }

// // function getLocation(){
// //     if(navigator.geolocation)
// //     {
// //       navigator.geolocation.getCurrentPosition(showPosition);
// //     }
// //     else{
        
// //     }
// // }
// function showPosition(position){
//  const usercoord= {
//    lat: position.coords.latitude,
//    lon:position.coords.longitude,
//  }
//  sessionStorage.setItem("user-coord",JSON.stringify(usercoord));
//  fetchUserInfo(usercoord);
// }
// const successCallback = (position) => {
//     console.log(position);
//     showPosition(position);
//   };
  
//   const errorCallback = (error) => {
//     console.log(error);
//   };
//   function getLocation(){
//     navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

//   }
  
// grantBtn.addEventListener("click",getLocation);

// // search weather
// const searchInput= document.querySelector("[data-city]");
// searchForm.addEventListener("submit",(e)=>{
//  e.preventDefault();
//  let cityName = searchInput.value;

//     if(cityName === "")
//         return;
//     else 
//         fetchSearchinfo(cityName);
// });

// async function fetchSearchinfo(city){
//      loadingScreen.classList.add("active");
//      userInfoContainer.classList.remove("active");
//      grantAccessContainer.classList.remove("active");
//      try{
//        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//        const data= await response.json();
//       // console.log(data);
//        loadingScreen.classList.remove("active");
//        userInfoContainer.classList.add("active");
//        renderWeatherInfo(data);
//      }
//      catch(err)
//      {  
//         loadingScreen.classList.remove("active");
//          console.log(err);
//      }
// }

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

//initially vairables need????

let oldTab = userTab;
const API_KEY = "91b752fc76cfa7278c35821c7ab8c304"
oldTab.classList.add("current-tab");
getfromSessionStorage();

function switchTab(newTab) {
    if(newTab != oldTab) {
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")) {
            //kya search form wala container is invisible, if yes then make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            //main pehle search wale tab pr tha, ab your weather tab visible karna h 
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //ab main your weather tab me aagya hu, toh weather bhi display karna poadega, so let's check local storage first
            //for coordinates, if we haved saved them there.
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(searchTab);
});

//check if cordinates are already present in session storage
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates) {
        //agar local coordinates nahi mile
        grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }

}

async function fetchUserWeatherInfo(coordinates) {
    const {lat, lon} = coordinates;
    // make grantcontainer invisible
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    //API CALL
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
        const  data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        loadingScreen.classList.remove("active");
        console.log(err);

    }

}

function renderWeatherInfo(weatherInfo) {
    //fistly, we have to fethc the elements 

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    console.log(weatherInfo);

    //fetch values from weatherINfo object and put it UI elements
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;


}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        //HW - show an alert for no gelolocation support available
        window.alert("no geolocation supported");

    }
}

function showPosition(position) {

    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);

}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName === "")
        return;
    else 
        fetchSearchWeatherInfo(cityName);
})

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        //hW
        console.log(err);
    }
}

