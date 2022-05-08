import { MapContainer,TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {FaChevronCircleLeft} from 'react-icons/fa'
import { Link } from "react-router-dom"


function CountryDetails({country}) {
  return (
    <div className="bg-gray-200   m-auto p-3">
        <div className="container  p-3 flex-col bg-white">
            <Link to='/'>
            <div className="flex text-center  items-center p-5 sticky-top-0">
                <FaChevronCircleLeft/>
                <p className="ml-2">BACK</p>
            </div>
            </Link>
            <div className='flex flex-col'>
                <MapContainer 
                    style={{ height: '150px', width: '100%' }}
                    center={[country.latlng[0],country.latlng[1]]}
                    zoom={3}
                    scrollWheelZoom={false}>
                        <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'/>
                        
                </MapContainer>
                <div className='flex flex-col md:flex-row'>

                    
                </div>
                <div className='container flex flex-col md:flex-row items-center m-4 p-2'>
                    <div className='container flex flex-col items-center m-4 p-2'>
                        <img src={country.flags.png} alt="" className='w-1/2 md:w-1/4 text-center'/> 
                        <div className='flex justify-around'>
                            <h3 className='font-bold text-md'>Name: </h3>
                            <p className='text-md ml-2'> {country.name.official || country.name}</p>
                        </div>
                        <div className='flex justify-around'>
                            <h3 className='font-bold text-md'>Capital: </h3>
                            <p className='text-md ml-2'> {country.capital}</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 ">
                    <div className='flex  align-left justify-left'>
                        <p className='font-bold text-sm'>Region: </p>
                        <p className='text-sm ml-1'>{country.region}</p>
                    </div>
                    <div className='flex align-left justify-left'>
                        <p className='font-bold text-sm'>Subregion: </p>
                        <p className='text-sm ml-1'>{country.subregion}</p>
                    </div>
                    <div className='flex align-left justify-left'>
                        <p className='font-bold text-sm'>Languages: </p>
                        <p className='text-sm ml-2'> {country.languages[0].name}</p>
                    </div>
                    <div className='flex align-left justify-left'>
                        <p className='font-bold text-sm'>Currencies: </p>
                        <p className='text-sm ml-2'> {country.currencies[0].name}</p>
                    </div>
                    <div className='flex align-left justify-left'>
                        <p className='font-bold text-sm'>Population: </p>
                        <p className='text-sm ml-2'> {country.population}</p>
                    </div>
                    <div className='flex align-left justify-left'>
                        <p className='font-bold text-sm'>Native name: </p>
                        <p className='text-sm ml-2'> {country.nativeName}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CountryDetails

// https://stackoverflow.com/questions/67552020/how-to-fix-error-failed-to-compile-node-modules-react-leaflet-core-esm-pat