import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest.js";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
 console.log(url, 'url_asdas');
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
       
        const res = await makeRequest.get(url);
        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;