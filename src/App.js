
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import MasterLayout from './Layout/MasterLayout/MasterLayout';
import Home from './Layout/Home/Home'
import Search from './Layout/Search/Search'
import Contact from './Layout/Contact/Contact'
import Login from './Layout/Login/Login'
import Movies from './Layout/Movies/Movies'
import Notfound from './Layout/NotFound/Notfound';
import MovieDetails from './Layout/MovieDetails/MovieDetails';
import Favorites from './Layout/Favorites/Favorites';
const router= createBrowserRouter([
  {path:'',element:<MasterLayout/>,children:[
    {path:'',element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'search',element:<Search/>},
    {path:'login',element:<Login/>},
    {path:'contact',element:<Contact/>},
    {path:'favorite',element:<Favorites/>},
    {path:'movies',element:<Movies/>},
    {path:'movies/:movieId',element:<MovieDetails/>},
    {path:'*',element:<Notfound/>},
  ]}
])

function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
