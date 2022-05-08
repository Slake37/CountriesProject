import React from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'


function Country({country}) {

  const [getCountryName, setGetCountryName]=useState('')  
  const navigate = useNavigate()

  let {id} = useParams(getCountryName)

  const handleClick= e =>{
    setGetCountryName(e.target.name.official || e.target.name)
    navigate('/')
    console.log(e.target.id)
  }

  return (
   <div className='flex flex-col w-64 bg-gray-200 h-75 p-3 m-auto mt-5' >
      <div className=' container'>
        <img src={country.flags.svg} alt="{country.name} flag" className='w-60 h-40' />
        <div className='p-2'>
          <div className='flex mt-2 space-x-2'>
            <h3 className='font-bold'>Name: </h3>
            <p>{country.name.common || country.name}</p>
          </div>
          <div className='flex mt-1 space-x-2'>
            <h3 className='font-bold'>Capital: </h3>
            <p>{country.capital}</p>
          </div>
          <div className='flex mt-1 space-x-2'>
            <h3 className='font-bold'>Population: </h3>
            <p>{country.population}</p>
          </div>
        </div>
      </div>
      <Link to={`/CountryDetails/${country.name.official || country.name}`}>
      <button className='block bg-stone-700 text-zinc-50 p-2' 
              onClick={handleClick} 
              id={country.name.official || country.name}>More</button>
      </Link>
      
      </div>
  )
}

export default Country