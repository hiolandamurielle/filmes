import { useState } from "react";
import axios from "axios";
const url_base = "https://api.themoviedb.org/3/search";
const api_key = "e6ce4d1f8301d17bdbd1f912e38c167a";

/* com isso request vai ter esses seguintes formatos
    https://api.themoviedb.org/3/search/genre?api_key=e6ce4d1f8301d17bdbd1f912e38c167a&query=
    https://api.themoviedb.org/3/search/movie?api_key=e6ce4d1f8301d17bdbd1f912e38c167a&query=
*/
const useFetchAPI = () => {
  const [data, setData] = useState({});
  const fetchAPI = (movie, categories, page=1) => {
    //console.log("INICIO FETCH API");
    const request = `${url_base}/${categories}?api_key=${api_key}&query=${movie}&page=${page}`;

    axios({
      method: "get",
      url: request,
      responseType: "json"
    }).then(async function (response) {
      if (response.status === 200) {
        //console.log("FETCH API");
        //console.log(response.data);
        setData(response.data);
      }
    });
  };
  return {
    data,
    fetchAPI
  };
};

export default useFetchAPI;
