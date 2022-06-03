import Categories from "./Categories";
import React from "react";

function ShopCard({title,price,id, count, img}) {
   
function delShoper() {

    window.location.reload()

    console.log(id)

    fetch('http://localhost:8000/delshoper', {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ id: id})
})

}


const [counter, setCounter] = React.useState(count);



  //increase counter
  let increase = () => {
    localStorage.setItem("count", counter)
    setCounter(counter + 1);
    
    console.log(counter)
   console.log(localStorage.getItem("count")) 
    fetch('http://localhost:8000/shoper', {
  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ img: img, count : counter, title: title, price: price, mail: localStorage.getItem("mail")})
    })
  };

  //decrease counter
  let decrease = () => {
    if (counter > 0) {
        setCounter( count => count - 1 );
      }
      else if (localStorage.getItem("count") == 0){
        delShoper()
      }
    localStorage.setItem("count", counter)
    console.log(counter)
    console.log(localStorage.getItem("count")) 
    fetch('http://localhost:8000/shoper', {
  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ img: img, count : counter, title: title, price: price, mail: localStorage.getItem("mail")})
    })
  };
 
 

    return(
        <div className="col-8 offset-2 bg-light text-left">
        <div className="catalog-products view-simple">
        <div  className="catalog-product ui-button-widget">
                        <div className="catalog-product__image"><a className="catalog-product__image-link" data-toggle-slider="">
                                <picture>
                             
                                    <img src={"data:image/webp;base64,"+img} alt="" srcSet=""/>
                               
                                </picture>
                            </a></div><a className="catalog-product__name ui-link ui-link_black"><span>{title}</span></a>


                        <div className="product-buy product-buy_one-line catalog-product__buy">
                            <div className="product-buy__price-wrap">
                                <div className="product-buy__price">{price}</div>
                                <div className="product-buy__hint"></div>
                                <div className="product-buy__sub">Количество: {counter} шт. <div className="counter">
   
      
      <div className="btn__container">
        <button className="control__btn_dec" onClick={decrease}>-</button>
        <button className="control__btn_inc" onClick={increase}>+</button>
      
      </div>
    </div></div>
                            </div>
                            
                            <button onClick={delShoper} className="button-ui red">Удалить</button>
                            <button  className="button-ui buy-btn button-ui_brand button-ui_passive">Купить</button>
                        </div>
                    </div>
                    </div>
                    </div>
    )
}

export default ShopCard;
