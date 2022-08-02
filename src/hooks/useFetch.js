import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url, id = '') {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const completeUrl = id ? `${url}/${id}` : url;

  useEffect(() => {
    axios
      .get(completeUrl)
      .then((res) => {
        setLoading(false);
        if (id) {
          setData(res.data);
        } else {
          setData(res.data.results);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError('An error occurred', err);
      });
  }, [completeUrl, id]);

  return { data, loading, error };
}
export default useFetch;
