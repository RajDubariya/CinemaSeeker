import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";

const TOKEN = process.env.REACT_APP_AUTHORIZATION_TOKEN;

const fetchData = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      params,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
