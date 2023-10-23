import React, { useEffect, useState } from "react";
import '../assets/searchbar.css'
import Card from "../components/card";

const url = 'https://www.omdbapi.com/?apikey=b435b0b3'

function Home() {
    // const search = 'superman'
    const [loading, setloading] = useState(true)
    const [apidata, setapidata] = useState([])
    const [search, setSearch] = useState('superman');
    const searchMovies = async (title) => {
        try {
            const response = await fetch(`${url}&s=${title}`)
            if (response.ok) {
                const data = await response.json()
                console.log(data.Search)
                setapidata((array) => array = data.Search)
            }
            else {
                console.error('something failed')
            }
        }
        catch (error) {
            console.error(error)
        }
        finally {
            setloading(false)
        }
    }
    useEffect(() => {
        searchMovies(search)
    }, [])
    return (
        <>
            <title>React App</title>
            <div className="Searchbar">
                <input type="search" name="search" id='searchbox' onChange={(e) => setSearch(e.target.value)} value={search} />
                <img className='searchicon' src={require('../assets/images/search.png')} alt="no image" onClick={
                    () => {
                        searchMovies(search);
                        setloading(true)
                    }} />
            </div>
            {loading ?
                ( <h1>loading</h1> ) :
                ( <div>
                       <Card mydata={ apidata }/>
                    </div> )}
        </>
    )
}

export default Home