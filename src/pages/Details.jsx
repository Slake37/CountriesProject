import React, { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import CountryDetails from '../components/CountryDetails'
import { v4 as uuidv4 } from 'uuid'


function Details() {
    const [countryDetails, setCountryDetails] = useState([])

    const {id} = useParams()

   useEffect(() => {
     const fetchData = async()=>{
        
        const result = await axios(`https://restcountries.com/v2/name/${id}`)
        console.log(result.data)
    
          setCountryDetails(result.data)
          
       }
       fetchData()
   }, [])
   

  return (
    <>
        {countryDetails.map((country)=>(
            <CountryDetails key={uuidv4()} country={country}/>
        ))}

  </>
  )
  

}

export default Details