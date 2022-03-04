import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import beerImage from '../../assets/beers.png'
import newBeerImage from '../../assets/new-beer.png'
import randomBeerImage from '../../assets/random-beer.png'

function HomePage() {
  return (
    <div className='container'>
        <Link to="/beers" className='link-homepage'>
            <img src={beerImage} alt="beersImage" className='img-homepage'/>
            <h2>All Beers</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ullam doloremque ut natus modi illo deserunt rerum debitis, nam unde, fugit architecto, tempora quae odio! Ad repellat sunt accusamus consectetur!</p>
        </Link>
        <Link to="/random-beer" className='link-homepage'>
            <img src={newBeerImage} alt="beersImage" className='img-homepage'/>
            <h2>Random Beer</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ullam doloremque ut natus modi illo deserunt rerum debitis, nam unde, fugit architecto, tempora quae odio! Ad repellat sunt accusamus consectetur!</p>
        </Link>
        <Link to="/new-beer" className='link-homepage'>
            <img src={randomBeerImage} alt="beersImage" className='img-homepage'/>
            <h2>New Beer</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ullam doloremque ut natus modi illo deserunt rerum debitis, nam unde, fugit architecto, tempora quae odio! Ad repellat sunt accusamus consectetur!</p>
        </Link>

    </div>
  )
}

export default HomePage