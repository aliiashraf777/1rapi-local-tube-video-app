import axios from 'axios';


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
 
const options = {
    // url: BASE_URL,
    params: {
        maxResults: '50'
    },
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    // /baseURL/url(props string)
    // const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    const data = response.data;
    return (data)
}

