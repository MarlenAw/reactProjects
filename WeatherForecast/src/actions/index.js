import axios from "axios";
//UPLOADING THIS ONLY FOR THE SAKE OF LEARNING..OTHERWISE, I WILL NEVER UPLOAD THIS TO GITHUB
//using opneweathermap.org
const API_KEY = "0d8a6676f360e370355bf3f5df1708af";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${
  API_KEY
}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log("Requesttt:", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
