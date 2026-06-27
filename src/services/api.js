import axios from "axios";

const api = axios.create({
 baseURL: "https://travelproject-wdkg.onrender.com/"
});

export default api;
