import {useEffect,useState} from 'react'
import axios from 'axios'
import Home from './pages/Home'
import Details from './pages/Details'
import {BrowserRouter, Routes, Route} from 'react-router-dom'




function App() {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [countrySearch,setCountrySearch] = useState('')
  

 
  
  
  const handleChange=(event)=>{
    setCountrySearch(event.target.value.toLowerCase())
    
  }


 const handleSubmit = (event) =>{
   event.preventDefault()
  
   const fetchData = async()=>{
    setIsLoading(true)
    const result = await axios(`https://restcountries.com/v2/name/${countrySearch}`)
    console.log(result.data)

      setCountries(result.data)
      setIsLoading(false)
   }
    fetchData()
    setCountrySearch('')
   
 }
 

  

  useEffect(()=>{
   const fetchData = async()=>{
    setIsLoading(true)
    const result = await axios('https://restcountries.com/v3.1/all')
    console.log(result.data)

      setCountries(result.data)
      setIsLoading(false)
   }
    fetchData()
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home handleChange={handleChange} countrySearch={countrySearch} handleSubmit={handleSubmit} isLoading={isLoading} countries={countries} />}/>
        <Route path='/CountryDetails/:id' element={<Details countries={countries}/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
