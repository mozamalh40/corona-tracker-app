import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (countryName) => {
  let changeURL = url;
if(countryName){
  changeURL = `${url}/countries/${countryName}`
}
  try {
    const { data } = await axios.get(changeURL);

    let getingData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };
    return getingData;
  } catch (error) {
    console.log(error.message);
  }
};


// Api for Chart 
export const fetchDailyData = async() => {
    try {
      let { data } = await axios.get(`${url}/daily`); 
      // url/daily mein daily update hai toh is liye usko is trha likha jy ga 
      // jo k template string khelta hai

      const gettingData = data.map((apiData)=> ({

          confirmed: apiData.confirmed.total,
          deaths: apiData.deaths.total,
          date: apiData.reportDate,
          recovered: apiData.recovered.total

      }))
      // console.log(gettingData);
      return gettingData;
      } catch (error) {
    console.log(error);
        
    }

}

// Api for CountryPicker 
export const fetchCountry = async() => {
  try {
    
    let {data:{countries}} = await axios.get(`${url}/countries`)
    return countries.map((countryName)=>countryName.name)
  } catch (error) {
    console.log(error);
    
  }

}
