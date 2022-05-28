import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Brends from '../components/Brends';
import Coupons from '../components/Coupons';
import Card from '../components/Card';
//import CardsItem from '../card.json';
import Categories from '../components/Categories'

import React, { Component } from 'react'
import { SearchContext } from '../App';



const Newdev = () => {

  const {searchValue, setSearchValue} = React.useContext(SearchContext);

  const [category, setCategory] = React.useState(0);
  

  
    let [CardsItem, SetCardsItem]  = React.useState([]);

React.useEffect(()=> {
    fetch("http://localhost:8000/"+category).then((res)=>{
        return res.json();
    }).then((json)=>{
        SetCardsItem(json)
    });
},[category])


    
  return(
    
      
    <div className="body">
     
      <NavBar />
      <Categories category ={category} onClickCategory={(index,value) => setCategory(index,value)}/>
      <div className="wrapper">
        {CardsItem.filter( obj =>{
if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
  return true;
}
return false;
        }
        ).map((obj) => (
          <Card key={obj.id} {...obj} />
        ))}
      </div>
      <Footer />
    </div>
  );
  
}
export default Newdev;


