
import React from 'react'
import ReactDOM from "react-dom/client";
import {Link} from 'react-router-dom';



function NavBar() {
  
 

    return (
      <>


      <div className="container-fluid">
        <div className="row">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
              <div className="container-fluid">
                <div className=" navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav text-light col">
                    <li className="nav-item text-center col-md-2 offset-md-2 offset-sm-0">
                      <Link to="/"
                        className="nav-link active text-light fs-6"
                        >
                        Главная страница
                     </Link>

                    </li>
                    <li className="nav-item text-center col-md-2">
                      <Link to="/news" className="nav-link text-light fs-6" >
                        Новости
                      </Link>
                    </li>
                    <li className="nav-item text-center col-md-2">
                      <Link to="/about" className="nav-link text-light fs-6">
                        Информация
                      </Link>
                    </li>
                    <li className="nav-item text-center col-md-2">
                      <Link to="/newdev" className="nav-link text-light fs-6" >
                       Каталог товаров
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        </div>

        
      </>
    );
    }
  
  export default NavBar;