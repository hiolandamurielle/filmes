import React, { useState, useEffect } from "react";
import useFetchAPI from "./fetch_api";
//import "./styles.css";
const url_base = "https://image.tmdb.org/t/p/w500/";

export default function App() {
  const movieAPI = useFetchAPI();
  const [movieName, setMovieName] = useState("Joker");
  const [categories, setCategories] = useState("movie");

//   useEffect(() => {
//     if (movieAPI.data === {}) return;
//     console.log("USE EFFECT");
//     console.log(movieAPI.data);
//   }, [movieAPI.data]);

const request2 = `${url_base}`;

  const fetchMovie = () => {
    movieAPI.fetchAPI(movieName, categories);
  };

  return (
    <div className="App">
      <button onClick={fetchMovie}>Fetch API</button>
      <h3>Movie List</h3>
      {movieAPI.data.results &&
        movieAPI.data.results.map((movie) => {
          return (
            <li key={movie.id}>
              <h2>
                <strong>Título: </strong>
                {movie.original_title}
              </h2>
              <p>{movie.poster_path}</p>
              <p>{movie.vote_average}</p>
              <p>{movie.genre_id}</p>
              <p>{movie.overview}</p>
              <p>{movie.release_date}</p>
              <p>{movie.genres}</p>
             

            </li>
          );
         
        })}
    </div>
  );
}


import React, { Component } from 'react';

import Topo from './componentes/Topo'
import Busca from './componentes/Busca'
import Conteudo from './componentes/Conteudo'

class App extends Component{
    render(){
        return(
            <div className = "App">
                
                    <Topo />
                    <Busca />
                    <Conteudo />      
                    </div>
         
        );
    }
}

export default App;
