import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPickBox from './components/CountryPickBox/CountryPickBox';
import {fetchData} from './api/api.js'


function App() {
  const[data,setData]=useState({})
  const[country,setCountry]=useState([])

  useEffect(()=>{
    const fetchApi = async() => {

   const result= await fetchData()
   
   setData(result)
   
console.log(result)
    }
    fetchApi()
  },[])


     // country k name ko select krwa k usy state mein set krwya ta k uska data hth mein a jy
     const changeCountry = async (countryParameter) => {
      let countryData = await fetchData(countryParameter);
      setCountry(countryParameter);
      setData(countryData);
   }

  return (
    <div className="App">
      <img src='https://i.ibb.co/7QpKsCX/image.png'alt='' className='img2'/>
      
      <Cards data={data}/>
      <CountryPickBox country={changeCountry}/>
      <Charts data={data} country={country}/>
      
  
    </div>
  );
}

export default App;
