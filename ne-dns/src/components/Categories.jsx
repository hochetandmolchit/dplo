import React from 'react'

function Categories({category,onClickCategory}) {

    console.log(category)
     //   const [navActive, setNavActive] = React.useState(0);
        const categories = ['Все категории','Цифровая техника','Для кухни','Гейминг','Климат','Крупная бытовая']
        

    return(
        <div className="row">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark pt-0">
              <div className="container-fluid">
                <div className=" navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav text-light col-md-10 offset-md-1 offset-sm-0 silv">
                   { categories.map((value,categoryID) => (
                    <li className="nav-item text-center col-md-2">
                      <a onClick={() => onClickCategory(categoryID,value)}
                       className={categoryID == category ? "nav-link text-dark fs-7 navActive" : "nav-link text-dark fs-7"} href="#" >
                        <i className="bi bi-justify fs-7 pe-1 mb-0 "></i>
                        <span className=""> {value}</span>
                      </a>
                    </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      

      
    )
    
}

export default Categories;