import { useState, useEffect } from "react";
import axios from "axios";
const makeRequest = axios.create({
  baseURL: "https://strapi-achf.onrender.com/api",
  headers: {
    Authorization: "bearer a1e234c72e2aa4ce49f5793279166a83937c916cfe5b5d09064e215b1cf83b6002cd3539b8073334981e5712584dd8b615afab96aa71dee5d29470628d8914ab6346ca19b6752c4854bb1585dd0cebf5c97c15f88d8a1bb1e4ee1f826ed50464d58e6a150dade059ff60cb6b34b0cf71d392bccfb6a153de538b0c89cde2a5c1"
  }
});
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(url, "url_asdas");
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
export {
  useFetch as u
};
