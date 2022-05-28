import React, { Component } from 'react'
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Brends from '../components/Brends';
import Coupons from '../components/Coupons';
import Card from '../components/Card';
import CardsItem from '../card.json';
import Categories from '../components/Categories'


export default class News extends Component {
  render() {
    return (
        <div className="body">
      
        <NavBar />
  
        <div className="wrapper">
          
          
        <Coupons/>
        </div>
        <Footer />
      </div>
    )
  }
}
