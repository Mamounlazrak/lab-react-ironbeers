import logo from './logo.svg';
import './App.css';
import { Link, NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'

import HomePage from './Pages/Home/HomePage';
import BeerPage from './Pages/Beers/BeerPage';
import RandomBeerPage from './Pages/RandomBeer/RandomBeerPage';
import NewBeerPage from './Pages/NewBeer/NewBeerPage';
import Header from './Components/Header/Header';
import BeerDetailsPage from './Pages/BeerDetails/BeerDetailsPage';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<BeerPage />}></Route>
        <Route path="/beers/:beerId" element={<BeerDetailsPage />}></Route>
        <Route path="/random-beer" element={<RandomBeerPage />}></Route>
        <Route path="/new-beer" element={<NewBeerPage />}></Route>
      </Routes>

    </div>
  );
}

export default App;
