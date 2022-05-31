import '../css/app.bootstrap.min.css';

import '../css/app.style.css';

import '../css/app.bootstrap-icons.css';

import logo from '../img/ige001.png';


import {Link} from 'react-router-dom';
import React from 'react';
import { SearchContext } from '../App';




function Header() {
  const lgn = localStorage.getItem("mail");

  function removeAcc(){
    localStorage.setItem("mail", "");
  }

  function UserGreeting(props) {
    return  <Link to="/reg" className="fs-5">
    Войти
  </Link>
  }
  
  function GuestGreeting(props) {
    return <Link to="/reg" className="fs-5" onClick={removeAcc}>
    Выйти
  </Link>
  }

  function GuestGreetingQ(props) {
    return <span className="fs-5">
  {loginIs}
</span>
  }

  function UserGreetingQ(props) {
    return<>
    <i className="bi bi-person-fill pe-1"></i>
    <span className="fs-5">
    {loginIs}
  </span>
  </>
  }

  

function Auth () {
if (lgn == "") {
  return <UserGreeting />;
}
else{
  return <GuestGreeting />;
}
}

function AuthL(){
  if (lgn == "") {
    return <GuestGreetingQ/>
  }
  else{
   return <UserGreetingQ/>
    }
}

  
  console.log(lgn)
 
  let [loginIs, SetloginIs]  = React.useState(lgn);
 // SetloginIs(lgn);

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
             <AuthL/>
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
              
              <Auth/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Header;