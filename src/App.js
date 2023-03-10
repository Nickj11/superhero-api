import './App.css';
import { useEffect } from 'react';
import Login from './components/Login';
import { useStateProvider } from './utils/StateProvider';
import { reducerCases } from './utils/Constants';
import Spotify from './components/Spotify';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Hero from './Hero';
import Imdb from './Imdb'
export default function App() {  
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split('&')[0].split("=")[1];
      dispatch({ type: reducerCases.SET_TOKEN, token })
    }
  }, [token, dispatch])


  return (

        <div>
        <BrowserRouter>
          <Nav  />
          <Routes>
    
          <Route path='/loginspot' element={<Login />} />
          <Route path='/spotify' element={<Spotify />} />
          <Route path='/' element={<Hero />} />
        
    
    
      
       
      </Routes>
        </BrowserRouter>
      </div>
  );
}

