
function Coupons() {
    return(
    <div className="container-fluid">

    <div className="row pt-5">

      <div className="col-8 offset-2 bg-primary " style={{'border-radius': "10px",  'box-shadow': "0 0 10px rgba(0,0,0,0.5)"}}>
        <div className="col-12 pt-3 pb-3 ps-4"> <span className="text-light fs-6 "> Акции и скидки</span> </div>

        <div className="col-12 pb-3 text-center"><span className="text-light fs-2 col-12" style={{'font-weight': "bold"}}>Получите
            скидку 15% при первой покупке</span></div>

        <div className="col-12 pb-5 text-center"><span className="text-light fs-4 col-12">Введите промокод МИР15 при
            оформлении
            заказа</span></div>
      </div>


    </div>

  </div>
    )
}

export default Coupons;