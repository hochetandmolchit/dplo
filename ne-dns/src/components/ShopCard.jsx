import Categories from "./Categories";

function ShopCard({title,price,id, count}) {
    console.log(count);
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

    return(
        <div className="col-8 offset-2 bg-light text-left">
        <div className="catalog-products view-simple">
        <div  className="catalog-product ui-button-widget">
                        <div className="catalog-product__image"><a className="catalog-product__image-link" data-toggle-slider="">
                                <picture>
                                   
                                </picture>
                            </a></div><a className="catalog-product__name ui-link ui-link_black"><span>{title}</span></a>


                        <div className="product-buy product-buy_one-line catalog-product__buy">
                            <div className="product-buy__price-wrap product-buy__price-wrap_interactive">
                                <div className="product-buy__price">{price}</div>
                                <div className="product-buy__hint"></div>
                                <div className="product-buy__sub"> Количество: {count} шт.</div>
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