import Home from './pages/Home';
import About from './pages/About';
import Newdev from './pages/Newdev';
import News from './pages/News';
import RegForm from './pages/RegForm';
import Header from './components/Header';
import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

export const SearchContext = React.createContext('');

function App() {


  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);
  return (
    <>
     <SearchContext.Provider value={{searchValue, setSearchValue}}>
      <div className="body">
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/newdev" element={<Newdev />} />
            <Route path="/reg" element={<RegForm />} />
          </Routes>
        </div>
      </div>
      </SearchContext.Provider>
    </>
  );
}

export default App;
