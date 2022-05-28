import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Brends from '../components/Brends';
import Coupons from '../components/Coupons';
import Card from '../components/Card';
import CardsItem from '../card.json';


import React, { Component } from 'react'

export default class Home extends Component {
  render() {
  return (
    <div className="body">
      
      <NavBar />

      <div className="wrapper">
        <Slider/>
        <Brends/>
        <Coupons/>
      </div>
      <Footer />
    </div>
  );
}
}


