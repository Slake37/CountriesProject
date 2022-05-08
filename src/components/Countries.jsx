import Spinner from './Spinner'
import Country from './Country'
import { v4 as uuidv4 } from 'uuid'


function Countries({countries,isLoading,handleClick}) {


return isLoading ? (
  <Spinner/>
) : (
  <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
    {countries.map((country)=>(<Country key={uuidv4()} country={country} handleClick={handleClick}/>))}
  </section>
)
}
export default Countries