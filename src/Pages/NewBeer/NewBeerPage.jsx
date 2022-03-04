
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Components/Header/Header'

function NewBeerPage() {

  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [firstBrewed, setFirstBrewed] = useState('')
  const [brewerTips, setBrewerTips] = useState('')
  const [attenutaionLevel, setAttenuationLevel] = useState(1)
  const [contrinutedBy, setContributedBy] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {name, tagline, description, first_brewed: firstBrewed, brewer_tips: brewerTips, attenuation_level: attenutaionLevel, contributed_by: contrinutedBy}

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', body)
      .then ((response) => {
        console.log(response)
        navigate('/')
      })
      .catch((err) => console.log(err))

  }

  return (
    <div>
        <Header></Header>
        <h3>Add New beer</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)}/>
          <label htmlFor="tagline">Tagline</label>
          <input type="text" onChange={(e) => setTagline(e.target.value)}/>
          <label htmlFor="description">Description</label>
          <input type="text" onChange={(e) => setDescription(e.target.value)}/>
          <label htmlFor="first_brewed">First Brewed</label>
          <input type="text" onChange={(e) => setFirstBrewed(e.target.value)}/>
          <label htmlFor="brewers_tips">Brewers Tips</label>
          <input type="text" onChange={(e) => setBrewerTips(e.target.value)}/>
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input type="number" onChange={(e) => setAttenuationLevel(e.target.value)}/>
          <label htmlFor="contributed_by">Contributed by</label>
          <input type="text" onChange={(e) => setContributedBy(e.target.value)}/>

          <button type='submit'>Create beer</button>
        </form>


    </div>
  )
}

export default NewBeerPage