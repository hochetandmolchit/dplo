import Categories from "./Categories";
import React from "react";
function Card({img,title,price,avail,category}) {
    const [count, setCount] = React.useState(1);
    function toCard() {
        //let count=+1;
        setCount(count + 1)
      
        fetch('http://localhost:8000/shoper', {
  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ count : count, title: title, price: price, mail: localStorage.getItem("mail")})
    }).then((json)=>{
        
         });
    
}
   
    return(
        <div className="col-8 offset-2 bg-light text-left">
        <div className="catalog-products view-simple">
        <div  className="catalog-product ui-button-widget" category={category}>
                        <div className="catalog-product__image"><a className="catalog-product__image-link" data-toggle-slider="">
                                <picture>
                                    <img src={"data:image/webp;base64,"+img} alt="" srcSet=""/>
                                </picture>
                            </a></div><a className="catalog-product__name ui-link ui-link_black"><span>{title}</span></a>


                        <div className="product-buy product-buy_one-line catalog-product__buy">
                            <div className="product-buy__price-wrap product-buy__price-wrap_interactive">
                                <div className="product-buy__price">{price}</div>
                                <div className="product-buy__hint"></div>
                                <div className="product-buy__sub">от {Math.round(price/10)-33} ₽/ мес.</div>
                            </div><button onClick={toCard} className="button-ui buy-btn button-ui_brand button-ui_passive">Купить</button>
                        </div><span id="as-usFxAR" className="catalog-product__avails avails-container">
                            <div className="order-avail-wrap"><span className="available">В наличии: </span><a className="order-avail-wrap__link ui-link ui-link_blue" tabIndex="0" role="button" data-role="show-avails-modal" data-url="/catalog/product/get-avails/?guid=eb150728-3e94-11eb-a211-00155d03332b" data-modal-id="am-11a84e63ccd811627893ad116bef40ee" data-product-id="eb150728-3e94-11eb-a211-00155d03332b" data-mobile-text="в 29 магазинах"><span>в {avail} магазинах</span></a></div>
                            <div className="order-avail-wrap order-avail-wrap_postamat"><span className="available">Пункты
                                    выдачи: </span><a className="order-avail-wrap__link ui-link ui-link_blue" data-role="show-avails-modal" data-url="/catalog/product/get-avails/?guid=eb150728-3e94-11eb-a211-00155d03332b&amp;shopTypes%5B0%5D=postamats" data-modal-id="am-11a84e63ccd811627893ad116bef40ee-p" data-product-id="eb150728-3e94-11eb-a211-00155d03332b"><span>доступны</span></a>
                            </div>
                            <div className="delivery-info-widget inited" data-role="delivery-info-widget" data-product-guid="eb150728-3e94-11eb-a211-00155d03332b" data-product-name="11.6&quot; Ноутбук Acer TravelMate B1 TMB118-M-C0EA черный" data-is-kz="" data-city-name="Москва" data-get-coordinates-url="/delivery/get-coordinates/" data-get-dates-url="/delivery/get-delivery-dates/"><span className="delivery-info-widget__text">Доставим на дом: </span><a className="delivery-info-widget__button ui-link ui-link_blue ui-link_pseudolink">Послезавтра</a>
                            </div>
                        </span>
                    </div>
                    </div>
                    </div>
    )
}
export default Card;