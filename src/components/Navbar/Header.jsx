import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import './Header.css';
const Header = () => {
  return (
    <>
      <div className="header pt-3 pb-3">
        <div className="container">
          <div className="header__inner d-flex align-items-center justify-content-between">
            <a className="logo" href="https://www.toplink.uz/">
              <img className="logo__img" src={logo} width="129" height="40"/>
            </a>
            <div className="d-flex align-items-center gap-5">
              <nav className="navbar">
                <ul className="navbar__list list-unstyled p-0 m-0 d-flex gap-4">
                  <li className="navbar__item">
                    <a className="navbar__item-link text-decoration-none" href="https://www.toplink.uz/workpage">U qanday ishlaydi</a>
                  </li>
                  <li className="navbar__item">
                    <a className="navbar__item-link text-decoration-none" href="https://www.toplink.uz/featurepage">Xususiyat</a>
                  </li>
                </ul>
              </nav>
              <div className="header__btns">
                <NavLink className="login-btn me-4 text-decoration-none" to="/login">Kirish</NavLink>
                <NavLink className="register-btn text-decoration-none" to="/register">Ro'yxatdan o'tish</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;