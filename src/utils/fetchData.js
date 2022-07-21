export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7cc3e9d5b5msh5f33c6adfda9feep188964jsn50ded78d217b",
    "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
