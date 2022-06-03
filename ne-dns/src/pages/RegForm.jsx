
import React from 'react'
import Header from '../components/Header';
import NavBar from '../components/NavBar';

import Footer from '../components/Footer';



 function RegForm() {
   
  


const [email, setEmail] = React.useState('');
const [pass, setPass] = React.useState('');

const [email1, setEmail1] = React.useState('');
const [pass1, setPass1] = React.useState('');

const [passS, setPassS] = React.useState('');


function alertName(name){
return <span className="fs-5">{name}</span>

}
function setAlertName() {
  return <alertName/>
}
 
    // fetch("http://localhost:8000/register").then((res)=>{
    //     return res.json();
    // }).then((json)=>{
        
    // });

   function PostZapros(e) {

      e.preventDefault();
     if (pass == passS) {
       
     if (pass.length >= 8) {
       
     
      
   
        
      

      e.preventDefault();
    
      fetch('http://localhost:8000/rega', {
    
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ mail: email, pass: pass}),
    })
      .then((res)=> {
      if (res.status >= 200 && res.status <400){
        return res.json();
      }else {
        
        console.log(res)
    }
    }).then((json)=>{ 
        if(json.mail == email){
        localStorage.setItem("mail",json.mail)
        window.location = "/"

        }
    })
  } else {
    alert("Длина пароля должна составлять не менее 8 символов") 
    
  }
  } else {
        e.preventDefault();
        
       alert("Проверьте правильность введения паролей")
  }
  } 
 
  
  function PostZaprosAuth(e) {

    e.preventDefault();
   
   
    
 
      
    

    e.preventDefault();
  
    fetch('http://localhost:8000/login', {
  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ mail: email1, pass: pass1}),
  })
    .then((res)=> {
    if (res.status >= 200 && res.status <400){
      return res.json();
    }else {
      
      console.log(res)
  }
  }).then((json)=>{ 
      if(json.mail == email1){
      localStorage.setItem("mail",json.mail)
      window.location = "/"

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
         <div className='col-12 pb-5'><span className=' col-4 offset-4 '> Форма регистрации </span></div>
   
   
   <form onSubmit={PostZapros} >
          
    <div className="form-group  pb-3">
         
      <input type="email" value={email} onChange={event => setEmail(event.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите Email"/>
      
    </div>
    <div className="form-group  pb-3">
      <span className='redAlert'> <setAlertName/></span>
      <input type="password" value={pass} onChange={event => setPass(event.target.value)}  className="form-control" id="exampleInputPassword1" placeholder="Введите пароль"/>
    </div>
    <div className="form-group  pb-3">
      
      <input type="password" value={passS} onChange={event => setPassS(event.target.value)}  className="form-control" id="exampleInputPassword1" placeholder="Повторите пароль"/>
    </div>
    <div className="form-group  pb-3">
     <input  type="submit" value="Зарегистрироваться" className="submitBtn" />
     </div>
  </form>

  <div className='col-12 pb-5'><span className=' col-4 offset-4 '> Форма Аутентификации </span></div>
  <form onSubmit={PostZaprosAuth} >
          
    <div className="form-group  pb-3">
         
      <input type="email" value={email1} onChange={event => setEmail1(event.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите Email"/>
      
    </div>
    <div className="form-group  pb-3">
      <span className='redAlert'> <setAlertName/></span>
      <input type="password" value={pass1} onChange={event => setPass1(event.target.value)}  className="form-control" id="exampleInputPassword1" placeholder="Введите пароль"/>
    </div>
    
    <div className="form-group  pb-3">
     <input  type="submit" value="Войти" className="submitBtn" />
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

