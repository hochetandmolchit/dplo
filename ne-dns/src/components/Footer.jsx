import {Link} from 'react-router-dom';

function Footer() {
    return(
    <div className="container pt-5">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Главная страница</Link></li>
        <li className="nav-item"><Link to="/news" className="nav-link px-2 text-muted">Новости</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link px-2 text-muted">Информация</Link></li>
        <li className="nav-item"><Link to="/newdev" className="nav-link px-2 text-muted">Новые товары</Link></li>
      </ul>
     <p className="text-center text-muted">Разработчик - Михаил Золоедов</p>
    </footer>
  </div>
  )
}

export default Footer;