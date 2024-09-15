import axios from "axios";

export const makeRequest = axios.create({
  baseURL: import.meta.env.PUBLIC_ENV__VIKE_API_URL,
  headers: {
    Authorization: "bearer " + import.meta.env.PUBLIC_ENV__VIKE_API_TOKEN,
  },
});