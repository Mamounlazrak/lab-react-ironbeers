import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header'
import axios from 'axios'

function RandomBeerPage() {
  
    const [getRandomBeer, setGetRandomBeer] = useState('');


    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((response) => {
            setGetRandomBeer(response.data)
            })
            .catch((err) => console.log(err))
    }, 
    [])



  return (
    <div>
        <Header></Header>

        <p><img src={getRandomBeer.image_url} alt="" /></p>
        <p>{getRandomBeer.name}</p>
        <p>{getRandomBeer.tagline}</p>
        <p>{getRandomBeer.first_brewed}</p>
        <p>{getRandomBeer.attenuation_level}</p>
        <p>{getRandomBeer.description}</p>
        <p>{getRandomBeer.contributed_by}</p>

    </div>
  )
}

export default RandomBeerPage