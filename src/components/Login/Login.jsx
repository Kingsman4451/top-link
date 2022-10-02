import React, { useContext, useRef } from "react";
import context from "../../context";
import "./Login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailPng from "../../assets/images/email.png";
import passwordPng from "../../assets/images/password.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  const { values } = useContext(context.context);

  const { email, setEmail, password, checker, setPassword, loginClick, setLoginClick } = values;

  const cheker = ()=>{
    return checker ? toast.success("You are logged") : toast.error("Username or password is incorrect!");
  }
  const emailValid = useRef()
  const passwordValid = useRef()
  const spinner = useRef()
  const login = useRef()
  return (
    <>
      
        <div className="login">
        <div className="container">
        <div className="spinner-border ms-auto me-auto" style={{display: 'none' , marginTop: '250px'}} role="status" ref={spinner}>
              <span className="sr-only"></span>
        </div>
          <div className="login__inner" ref={login}>
            <h2 className="login__title">Kirish</h2>
            <p className="login__description">
              Barcha xarajatlar va daromadlaringizni bir joyda kuzatib borish
              uchun hozir tizimga kiring!
            </p>
            <form className="form" onSubmit={e=>e.preventDefault()}>
              <label className="form__label mt-2" for="email">
                Elektron pochta
              </label>
              <span className="position-relative d-inline-block">
                <img className="input-img" src={emailPng} />
                <input
                  className="form__input"
                  id="email"
                  type="email"
                  placeholder="Ex: abc@example.com"
                  value={email}
                  onChange={e=>{
                    setEmail(e.target.value)
                    if(!e.target.value) {
                      emailValid.current.innerHTML = 'To\'ldirish shart'
                    }else{
                      emailValid.current.innerHTML = 'Emailni to\'g\'ri kiriting'
                    }
                    if(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && email){
                      emailValid.current.style.display = "none"
                    }
                  }}
                  required
                />
              </span>
              <span className="text-danger" style={{fontSize: '12px', display: 'none'}} ref={emailValid}>To'ldirish shart</span>
              <label className="form__label mt-3 d-block" for="password">
                Parol
              </label>
              <span className="position-relative d-inline-block">
                <img className="input-img" src={passwordPng} />
                <input
                  className="form__input"
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={e=>{
                    setPassword(e.target.value)
                    if(!e.target.value) {
                      passwordValid.current.style.display = "block"
                      passwordValid.current.innerHTML = 'To\'ldirish shart'
                    }else{
                      passwordValid.current.style.display = "none"
                    }
                  }}
                  required
                />
              </span>
              <span className="text-danger" style={{fontSize: '12px', display: 'none'}} ref={passwordValid}>To'ldirish shart</span>
              <NavLink className="password-link d-block" to="/forgetpage">Parolni unutdingizmi?</NavLink>
              <button className="login-btn form-btn" type="submit" onClick={e=>{
                if(!password){
                  passwordValid.current.style.display = "block"
                }else{
                  passwordValid.current.style.display = "none"
                }
                if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && !email){
                  emailValid.current.style.display = "block"
                  return
                }else{
                  emailValid.current.style.display = "none"
                }

                if(!password || !email) return
                setLoginClick(loginClick + 1)
                login.current.style.display = `none`
                spinner.current.style.display = `block`
                setTimeout(()=>{
                  cheker() 
                  login.current.style.display = `block`
                  spinner.current.style.display = `none`
                },500)
                }}>Kirish</button>
            </form>
            <div className="register-block mt-3">
              <p className="register-info d-inline-block me-1">
                Accountingiz mavjud emasmi?
              </p>
              <NavLink className="register-link" to="/register">Ro'yxatdan o'tish</NavLink>
            </div>
          </div>
        </div>
      </div>
      
      <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
    </>
  );
};

export default Login;
