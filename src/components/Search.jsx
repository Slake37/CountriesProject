import {FaSearch} from 'react-icons/fa'

function Search({countrySearch,handleChange,handleSubmit}) {
  return (
    <div className='container mx-auto mt-10 p-auto border-b-[2px]  w-3/5  '>
        <form 
        className='container mx-auto p-auto flex justify-between m-auto my-1 px-5'
        onSubmit={handleSubmit}
         >
            <input type="text"  
                 id=""  name="name" value={countrySearch} onChange={handleChange} className='text-xs md:text-lg  focus:outline-none' placeholder='Search Country' autoComplete='off'/>
            <FaSearch className='cursor-pointer text-m md:text-m text-gray-400 my-auto ' onClick={handleSubmit}/>
        </form>
    </div>
  )
}

export default Search