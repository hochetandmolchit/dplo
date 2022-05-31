
import React from 'react'
import Header from '../components/Header';
import NavBar from '../components/NavBar';

import Footer from '../components/Footer';



 function RegForm() {
   
  


const [email, setEmail] = React.useState('');
const [pass, setPass] = React.useState('');
const [passS, setPassS] = React.useState('');



 
    // fetch("http://localhost:8000/register").then((res)=>{
    //     return res.json();
    // }).then((json)=>{
        
    // });

    function PostZapros(e) {
   
     
        
   
        
      

      e.preventDefault();
    
      fetch('http://localhost:8000/rega', {
    
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ mail: email, pass: pass, pass2: passS }),
    }).then((res)=>{
        return res.json();
    }).then((json)=>{ 
        if(json.mail == email){
        localStorage.setItem("mail",json.mail)
        }
    })
  } 
 
  

   

                                          

  return (
    <div className="body">
       <Header />
      <NavBar />

      <div className="wrapper pt-4">
          <div className="col-6 offset-3 pt-4">
          <div>
         <div className='col-12 pb-5'><span className=' col-4 offset-4 '>{email} Форма регистрации {pass}</span></div>
   
   
   <form onSubmit={PostZapros} >
          
    <div className="form-group  pb-3">
         
      <input type="email" value={email} onChange={event => setEmail(event.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите Email"/>
      
    </div>
    <div className="form-group  pb-3">
      
      <input type="password" value={pass} onChange={event => setPass(event.target.value)}  className="form-control" id="exampleInputPassword1" placeholder="Введите пароль"/>
    </div>
    <div className="form-group  pb-3">
      
      <input type="password" value={passS} onChange={event => setPassS(event.target.value)}  className="form-control" id="exampleInputPassword1" placeholder="Повторите пароль"/>
    </div>
    <div className="form-group  pb-3">
     <input  type="submit" value="Submit" className="submitBtn" />
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

