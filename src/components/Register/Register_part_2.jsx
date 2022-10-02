import React, { useContext, useRef } from "react";
import context from "../../context";
import emailPng from "../../assets/images/email.png";
import passwordPng from "../../assets/images/password.png";
import linkPng from "../../assets/images/link.png";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const Register_part_2 = () => {
  const { values } = useContext(context.context);

  const {  
    email,
    password,
    username,
    fullname,
    phone,
    registerClick,
    registerCode,
    setRegisterChecker,
    setEmail,
    setPassword,
    setUsername,
    setRegisterClick,
    registerChecker
    } = values;

  const RegisterValid = useRef()
  const spinner = useRef()
  const emailValid = useRef()
  const passwordValid = useRef()
  const usernameValid = useRef()


  const cheker = ()=>{
    return registerCode == 200 ? toast.success("Foydalanuvchi qo'shildi") : registerCode == 400 ? toast.error("Bu ma'lumotlar avval kiritilgan, iltimos boshqa username yoki email kiriting") : null;
  }
  
  return (
    <>
      <div className="login">
        <div className="container">
        <div className="spinner-border ms-auto me-auto" style={{display: 'none' , marginTop: '250px'}} role="status" ref={spinner}>
              <span className="sr-only"></span>
        </div>
          <div className="login__inner" ref={RegisterValid}>
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

              <label className="form__label mt-3" for="password">
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
              <label className="form__label mt-3" for="username">
                Foydalanuvchi ismi
              </label>
              <span className="position-relative d-inline-block">
                <img className="input-img" src={linkPng} />
                <input
                  className="form__input"
                  id="username"
                  type="text"
                  placeholder="Ex: Saul Rameriz"
                  value={username}
                  onChange={e=>{
                    setUsername(e.target.value)
                    if(!e.target.value) {
                      usernameValid.current.style.display = "block"
                      usernameValid.current.innerHTML = 'To\'ldirish shart'
                    }else{
                      usernameValid.current.style.display = "none"
                    }
                  }}
                  required
                />
              </span>
              <span className="text-danger" style={{fontSize: '12px', display: 'none'}} ref={usernameValid}>To'ldirish shart</span>
              <NavLink className="login-btn form-btn text-decoration-none text-center" to={fullname && phone ? '/register/step_2' : '/register'} onClick={e=>{
                if(fullname && phone){
                  setRegisterChecker(true)
                }else{
                  setRegisterChecker(false)
                }

                if(!password){
                  passwordValid.current.style.display = "block"
                }else{
                  passwordValid.current.style.display = "none"
                }

                if(!username){
                  usernameValid.current.style.display = "block"
                }else{
                  usernameValid.current.style.display = "none"
                }

                if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && !email){
                  emailValid.current.style.display = "block"
                  return
                }else{
                  emailValid.current.style.display = "none"
                }


                setRegisterClick(registerClick + 1)
                RegisterValid.current.style.display = `none`
                spinner.current.style.display = `block`
                setTimeout(()=>{
                  cheker() 
                  RegisterValid.current.style.display = `block`
                  spinner.current.style.display = `none`
                },500)
                }}>Qabul qilish</NavLink>
            </form>
            <div className="register-block mt-3">
              <p className="register-info d-inline-block me-1">
                Accountingiz mavjudmi?
              </p>
              <NavLink className="register-link" to="/login">Kirish</NavLink>
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
export default Register_part_2;