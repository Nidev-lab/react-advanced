import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [dataFetch, setDataFetch] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => setDataFetch({
        loading: false,
        error: null,
        data: data.results,
      }));
  }, [url]);

  return dataFetch;
};

export default useFetch;
