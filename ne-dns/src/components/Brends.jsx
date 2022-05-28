import BrandList from '../img/457.jpg';
function Brends(){
    return(
        <div className="container-fluid">

      <div className="row">

        <div className="col-8 offset-2 pt-5">

          <span className="text-dark fs-3">Бренды</span>

        </div>


        <div className="col-8 offset-2 pt-5">
          <img src={BrandList} alt="" style={{'max-width': "100%"}}/>
        </div>


      </div>

    </div>
    )
}
export default Brends;  



