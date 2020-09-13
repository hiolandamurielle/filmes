import React, { useState, useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";
import useFetchAPI from "./fetch_api";
import Topo from './componentes/Topo'
import Busca from './componentes/Busca'

export default function App() {
  const movieAPI = useFetchAPI();
  const [movieName, setMovieName] = useState("");
  const [categories, setCategories] = useState("movie");
  const [page, setPage] = useState (1);
  const [totalPages, setTotalPages] = useState(1);


//   const [total,setTotal] = useState(0);
//   const [limit, setLimite] = useState(5);


useEffect(() => {
    console.log("USEEFFECT");
    console.log(page)
    movieAPI.fetchAPI(movieName, categories, page);
  }, [movieName, categories, page]);

  useEffect(() => {
    if (movieAPI.data.results === undefined) return

    setTotalPages(movieAPI.data.total_pages)
  }, [movieAPI.data]);

    //console.log(setTmovieAPI.data.page)
    //console.log(movieAPI.data.total_pages)
    const fetchMovie = () => {
        movieAPI.fetchAPI(movieName, categories);
      };
    
      const changePage = (event, value) => {
        console.log("CHANGE PAGE");
        console.log(value);
        setPage(value)
      };
      const onFilterChange = (event) => {
        setMovieName(event.target.value)
      };
    
    //  const fetchMovie = (evento ) => {
    //     if (event.key === "Enter") {
    //         movieAPI.fetchAPI(movieName, categories);
    //     }
    // };

    return (
        <div className = "App">
            <Topo />
            {/* <button onClick={fetchMovie}>Fetch API</button> */}
            <div className='container'>	
             <div className='barraBusca'>
                    <form className='buscarFilmes' >
                    <input type="text" onChange={onFilterChange} id="textSearch" placeholder='Busque um filme por nome, ano ou gênero..' name='search'/>
                </form>
                    </div>
                    </div>
            {movieAPI.data.results && movieAPI.data.results.map((movie) => {
                return (
                    <li key={movie.id}>
                        <div className='conteudoPrincipal'> 
                            <div className='container'>	
                                <div className='conteudoFilme'>
                                    <div className='image'>
                                        <div className='poster'>
                                        <a href=""><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}></img></a>
                                        </div>
                                    </div>
                                    <div className='details'>
                                        <div className='wrapper'>
                                            <div className='title'>
                                                <h2>{movie.original_title}</h2>
                                            </div>
                                            <div className='consensus details'>
                                            <div className='outer_ring'>
                                                <div className='user_score_chart' data-percent='82.0' data-track-color="#204529" data-bar-color="#21d07a">
                                                    <div className='percent'>
                                                       <span className="icon icon-r82">{movie.vote_average}%</span>
                                                     </div>
                                                    <canvas height="60" width="60"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className='release'>
                                            <span className='release_date'> {movie.release_date}</span>
                                        </div>    
                                        <div className='overview' >
                                        
                                            <p>{movie.overview}</p>

                                        </div>                                        
                                    </div>    
                                </div>    
                            </div>
                        </div>            

                    </li>
                    
                );
            })}
             <Pagination
                    className="my-3"
                    count={totalPages}
                    page={page}
                    siblingCount={1}
                    boundaryCount={1}
                    variant="outlined"
                    shape="rounded"
                    onChange={changePage}
                />
        </div>
       
    );
}

