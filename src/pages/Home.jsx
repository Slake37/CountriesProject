import Countries from "../components/Countries"
import Search from "../components/Search"


function Home({handleChange,countrySearch,handleSubmit,countries,isLoading}) {
  return (
    <div className='container'>
      
    <Search handleChange={handleChange} countrySearch={countrySearch} handleSubmit={handleSubmit}/>
    <Countries isLoading={isLoading} countries={countries} />      
  </div>
  )
}

export default Home