import React, { useEffect, useState } from 'react'
import './CountryPickBox.css'
import { fetchCountry } from '../../api/api'
import { FormControl, NativeSelect } from '@material-ui/core'

const CountryPickBox = ({country}) => {
  const [fetchCountries, setfetchCountries] = useState([])
  useEffect(()=>{
    const fetchCountryApi = async() =>{
     setfetchCountries(  await fetchCountry())
    }

    fetchCountryApi()
  
  },[setfetchCountries])
console.log(fetchCountries)
  return (


    <div className='container'>
  <FormControl className='form'>
    
    <NativeSelect onChange={(e)=>country(e.target.value)} className='nativeSelect'>
      <option value='global'>global</option>
      {fetchCountries.map((Country, index) => <option key={index} value={Country}> {Country} </option>)}


    </NativeSelect>
    </FormControl>      
      
    </div>
  )
}

export default CountryPickBox
