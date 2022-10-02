import React, { useContext, useEffect } from "react";
import context from "../../context";
import namePng from "../../assets/images/name.png";
import flagPng from "../../assets/images/flag.png";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const { values } = useContext(context.context);

  const { email,
    fullname,
    phone,
    registerChecker,
    setFullname,
    setPhone
  } = values;




  useEffect(() =>{
    registerChecker == true ? null : toast.error("To'ldirish shart!")
  },[registerChecker]);


  return (
    <>
      <div className="login">
        <div className="container">
          <div className="login__inner">
            <h2 className="login__title">Ro'yhatdan o'tish</h2>
            <p className="login__description">
              Barcha xarajatlar va daromadlaringizni bir joyda kuzatib borish
              uchun hozir tizimga kiring!
            </p>
            <form className="form" onSubmit={e=>e.preventDefault()}>
              <label className="form__label mt-2" for="name">
                To'liq ism
              </label>
              <span className="position-relative d-inline-block" >
                <img className="input-img" src={namePng} />
                <input
                  className="form__input"
                  id="name"
                  type="text"
                  placeholder="Ex: Saul Rameriz"
                  value={fullname}
                  onChange={e=>setFullname(e.target.value)}
                />
              </span>

              <label className="form__label mt-3" for="phone">
                Telefon nomer
              </label>
              <span className="position-relative d-inline-block" >
                <img className="input-img" src={flagPng} width="20"/>
                <input
                  className="form__input"
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={e=>setPhone(e.target.value)}
                />
              </span>
              <NavLink className="login-btn text-decoration-none text-center form-btn" to="/register/step_2">Keyingi</NavLink>
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

export default Register;