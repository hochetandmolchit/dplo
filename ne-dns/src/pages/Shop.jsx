import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Brends from '../components/Brends';
import Coupons from '../components/Coupons';
import ShopCard from '../components/ShopCard';
//import CardsItem from '../card.json';
import Categories from '../components/Categories'

import React, { Component } from 'react'
import { SearchContext } from '../App';



const Shop = () => {

  console.log(localStorage.getItem("mail"))
  
 
    
  let [CardsItem, SetCardsItem]  = React.useState([]);
  React.useEffect( ()=> {
     fetch('http://localhost:8000/shop', {
  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ mail: localStorage.getItem("mail")}),
    })
      .then((res)=> {
      if (res.status >= 200 && res.status <400){
       
        return res.json();
      }else {
        
        console.log(res)
    }
    }).then( (json)=>{ 
        console.log(json)
        SetCardsItem(json)
    })
},[])
    
  return(
    
      
    <div className="body">
     <Header />
      <NavBar />
     
      <div className="wrapper">
        {
            
        CardsItem.map((obj) => (
          <ShopCard key={obj.id} {...obj} />
        ))
        
        }
      </div>
      <Footer />
    </div>
  );
  
}
export default Shop;


