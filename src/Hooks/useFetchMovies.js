import axios from 'axios';
import { useEffect, useState } from 'react'

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

        const response = await axios.get(`http://www.omdbapi.com/?s=batman&apikey=${process.env.REACT_APP_X_OMDB_API_KEY}`);
        
        setData(response?.data.Response?(response?.data.Search):null)

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