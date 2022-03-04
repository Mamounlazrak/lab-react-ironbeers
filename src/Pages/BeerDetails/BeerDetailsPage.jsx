import Header from '../../Components/Header/Header'
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'



function BeerDetailsPage() {

    const {beerId} = useParams();
    const [getBeer, setGetBeer] = useState('');


    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response) => {
            setGetBeer(response.data)
            })
            .catch((err) => console.log(err))
    }, 
    [beerId])



  return (
    <div>
        <Header></Header>

        <p><img src={getBeer.image_url} alt="" /></p>
        <p>{getBeer.name}</p>
        <p>{getBeer.tagline}</p>
        <p>{getBeer.first_brewed}</p>
        <p>{getBeer.attenuation_level}</p>
        <p>{getBeer.description}</p>
        <p>{getBeer.contributed_by}</p>

    </div>
  )
}

export default BeerDetailsPage