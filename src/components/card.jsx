import React from "react";
import '../assets/searchbar.css'


function Card({mydata}){
    return (
        <p className="container">
            {mydata.map((movie) => (
                <div key={movie.imdbID} className="card">
                    <img src={movie.Poster} alt="" />
                    <p>{movie.Title}</p>
                    <p>{movie.Type}</p>
                    <p>{movie.Year}</p>
                </div>
            ))}
        </p>
    )
}

export default Card