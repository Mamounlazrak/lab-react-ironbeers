import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';


import Header from '../../Components/Header/Header'

function BeerPage() {

    //ALWAYS INITIALIZE WITH AN ARRAY, SO THAT IN THE FIRST ITERATION OF THE .MAP it doesnt crash
    const [getBeers, setGetBeers] = useState([]);
    
    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                
                setGetBeers(response.data)
                console.log(response.data)
                console.log(getBeers)
            })
            .catch((err) => console.log(err))
    }, [])
  return (
    

    <div>
        <Header></Header>
        {getBeers.map((beer) => {
            return(
            <Link to={`/beers/${beer._id}`} className="beer-link">
              <div className='beer-container'>
                <div className='beer'>
                    <div className='beer-img'>
                        <img src={beer.image_url} alt="" className='img-beer'/>
                    </div>
                    <div className='beer-info'>
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <p>Created by: {beer.contributed_by}</p>
                    </div>
                </div>
              </div>
            </Link>
            )
        })}
    </div>
  )
}

export default BeerPage