import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGJjZGY2NWJlYTBhOWUxMmJjN2FkZTM1ODkwOWEwNiIsInN1YiI6IjY0YzJhMjc1MWNmZTNhMGViMzBjODRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9vRDd6x4BOlBJopZdk1XJE2MD5sOIwOljGOVjMmDpII";

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
