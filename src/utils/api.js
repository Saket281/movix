import axios from "axios";

const BASE_URL ="https://api.themoviedb.org/3";
const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzczMWYyOGU0NjIxM2FiY2UzNGFiNjRlN2JiYzk5OCIsInN1YiI6IjY0ODY1ZDA0MDI4ZjE0MDEzYjg2M2QwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vcdb8tHg4W2QiTeVqsP-3ZUJ86FZOo4VFQQdoSa01eE" ;

const headers = {
    Authorization: "bearer " + 
    TMDB_TOKEN,
};

export const fetchDataFromApi = async(url, params) => {
    try {
        const{ data } = await axios.get
        (BASE_URL + url,{
            headers,
            params,
        });
        return data;
    } catch (err) {
          console.log(err);
          return err;
    };
};