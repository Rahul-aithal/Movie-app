import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_X_RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.REACT_APP_X_RAPIDAPI_HOST,
  }
};


import React, { useEffect, useState } from 'react'

function useFetchMovies() {

  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setData([]);
    setLoading(true);
    setError();
    ; (async () => {
      try {

        const response = await axios.request(options);
        console.log(response?.data);
        setData(response)

      } catch (error) {
        console.error(error);
        setError(error)

      } finally {
        setLoading(false)
      }

    })()


  }, []);


  return {
    data,
    loading,
    error
  }

}

export default useFetchMovies