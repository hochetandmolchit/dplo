import '../css/app.bootstrap.min.css';

import '../css/app.style.css';

import '../css/app.bootstrap-icons.css';

import logo from '../img/ige001.png';


import {Link} from 'react-router-dom';
import React from 'react';
import { SearchContext } from '../App';

function Header() {
const {searchValue, setSearchValue} = React.useContext(SearchContext);

    return (
      <div className="container-fluid">
        <div className="header">
        <Link to="/">
          <div className="logo">
            <div className="logo-text">
              <span>Онлайн-магазин</span>
            </div>
            <div className="logo-photo">
              <img src={logo} alt="" />
            </div>
          </div>
          </Link>
          <div className="search">
            <div className="search-text">
              <div className="row">
                <div className="col-5">
                  {' '}
                  <i className="bi bi-tablet pe-1"></i>
                  <span className="fs-6">89355022305</span>
                </div>
  
                <div className="col-6">
                  <i className="bi bi-envelope pe-1 "></i>
                  <span className="fs-6">Logan71KBT@mail.ru</span>
                </div>
              </div>
            </div>
            <form>
              <input value={searchValue} onChange={event => setSearchValue(event.target.value)} type="text" placeholder="Искать здесь..."></input>
              <button type="submit" className="button-nav">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
          <div className="profile">
            <div className="lich-cabinet">
              {' '}
              <i className="bi bi-person-fill pe-1"></i>
              <a href="#" className="fs-5">
                Личный кабинет
              </a>
            </div>
            <div className="korzina">
              <i className="bi bi-cart2"></i>{' '}
              <a href="" className="fs-5">
                Корзина
              </a>
            </div>
            <div className="auth">
              {' '}
              <i className="bi bi-box-arrow-right pe-1"></i>
              <Link to="/reg" className="fs-5">
                Вход
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Header;