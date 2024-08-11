import React from 'react'
import Hero from './../componenets/Hero/Hero';
import Popular from '../componenets/Popular/Popular';
import Offer from '../componenets/Offers/Offers';
import NewCollections from '../componenets/NewCollections/NewCollections';
import NewsLetter from '../componenets/NewsLetter/NewsLetter';
import AvatarContest from '../componenets/Contest/AvatarContest';

function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <AvatarContest/> 
      <NewsLetter/>
    </div>
  )
}

export default Shop
