
import React from 'react'
import Header from '../components/Header';
import NavBar from '../components/NavBar';

import Footer from '../components/Footer';


function RegForm() {
    

// function SetNewUser() {
//     // fetch("http://localhost:8000/register").then((res)=>{
//     //     return res.json();
//     // }).then((json)=>{
        
//     // });

   
// }
const [email, setEmail] = React.useState('');

  return (
    <div className="body">
    
      <NavBar />

      <div className="wrapper pt-4">
          <div className="col-6 offset-3 pt-4">
          <div>
         <div className='col-12 pb-5'><span className=' col-4 offset-4 '> Форма регистрации</span></div>
   
   
   <form >
          
    <div class="form-group  pb-3">
         
      <input type="email" value={email} onChange={event => setEmail(event.target.value)}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите Email"/>
      
    </div>
    <div class="form-group  pb-3">
      
      <input type="password"  class="form-control" id="exampleInputPassword1" placeholder="Введите пароль"/>
    </div>
   
  </form>
  </div>
        </div>
      </div>
      <Footer />
    </div>
  
  )
}

export default RegForm;