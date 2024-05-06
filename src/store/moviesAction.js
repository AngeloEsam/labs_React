import axios from "axios";

export default function changeMovies(){
    return (dispatch)=>{
        const apiKey = "c28eebf7bb39963adf0c89adbead022a";
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`, {
        // headers:{},
        //  params:{limit:3}
      })
      .then((response) => {
          console.log(response.data.results);
        dispatch({type:'SET_MOVIES',payload:response.data.results});
        //setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
       // setLoading(false);
      });
    }
}