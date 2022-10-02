import React, { useContext, useRef } from "react";
import context from "../../context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailPng from "../../assets/images/email.png";
import passwordPng from "../../assets/images/password.png";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

const Checkemail = () => {
  const { values } = useContext(context.context);

  const {
    checkMail,
    password,
    setPassword,
    emailStatus,
    verification,
    setCheckMail,
    code,
    registerCode,
    setCode,
    newPass,
    setNewPass,
    emailClick,
    setEmailClick,
    codeClick,
    setCodeClick,
    passwordClick,
    setPasswordClick,
  } = values;
  const navigate = useNavigate();
  const emailValid = useRef();
  const passwordValid = useRef();
  const spinner = useRef();
  const login = useRef();
  const codeForm = useRef();
  const passwordForm = useRef();

  const cheker = () => {
    if (emailStatus == 200) {
      passwordValid.current.style.display = "none";
      codeForm.current.style.display = "block";
    } else if (emailStatus == 400) {
      toast.error("Bazada bunday email yo'q");
    }
  };

  const cheker_2 = () => {
    if (verification == code) {
      codeForm.current.style.display = "none";
      passwordForm.current.style.display = "block";
    } else {
      toast.error("Noto'g'ri kod kiritildi!");
    }
  };

  const cheker_3 = () => {
    if (registerCode == 200) {
      toast.success("Parol yangilandi");
    }
  };

  return (
    <>
      <div
        className="login passwordForm"
        style={{ display: "none" }}
        ref={passwordForm}
      >
        <div className="container">
          <div
            className="spinner-border ms-auto me-auto"
            style={{ display: "none", marginTop: "250px" }}
            role="status"
            ref={spinner}
          >
            <span className="sr-only"></span>
          </div>
          <div className="login__inner" ref={login}>
            <h2 className="login__title">Parolni Unutdingizmi?</h2>
            <p className="login__description">Iltimos yangi parolni kiriting</p>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <label className="form__label mt-2" for="email">
                Parol
              </label>
              <span className="position-relative d-inline-block">
                <img className="input-img" src={emailPng} />
                <input
                  className="form__input"
                  id="password"
                  type="password"
                  placeholder="Ex: *********"
                  value={newPass}
                  onChange={(e) => {
                    setNewPass(e.target.value);
                  }}
                  required
                />
              </span>
              <span
                className="text-danger"
                style={{ fontSize: "12px", display: "none" }}
                ref={emailValid}
              >
                To'ldirish shart
              </span>

              <button
                className="login-btn form-btn"
                type="submit"
                onClick={(e) => {
                  if (
                    !checkMail.match(
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    ) &&
                    !email
                  ) {
                    emailValid.current.style.display = "block";
                    return;
                  } else {
                    emailValid.current.style.display = "none";
                  }

                  if (!newPass) return;
                  setPasswordClick(passwordClick + 1);
                  cheker_3()
                }}
              >
                Qabul qilish
              </button>
            </form>
          </div>
        </div>
      </div>

      <div
        className="login codeForm"
        style={{ display: "none" }}
        ref={codeForm}
      >
        <div className="container">
          <div
            className="spinner-border ms-auto me-auto"
            style={{ display: "none", marginTop: "250px" }}
            role="status"
            ref={spinner}
          >
            <span className="sr-only"></span>
          </div>
          <div className="login__inner" ref={login}>
            <h2 className="login__title">Parolni Unutdingizmi?</h2>
            <p className="login__description">
              Biz sizning elektron pochtangizga tasdiqlash kodi bilan xat
              yubordik!
            </p>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <label className="form__label mt-2" for="email">
                Verification Code
              </label>
              <span className="position-relative d-inline-block">
                <img className="input-img" src={emailPng} />
                <input
                  className="form__input"
                  id="number"
                  type="number"
                  placeholder="Ex: 123456"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                  required
                />
              </span>
              <span
                className="text-danger"
                style={{ fontSize: "12px", display: "none" }}
                ref={emailValid}
              >
                To'ldirish shart
              </span>

              <button
                className="login-btn form-btn"
                type="submit"
                onClick={(e) => {
                  if (
                    !checkMail.match(
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    ) &&
                    !email
                  ) {
                    emailValid.current.style.display = "block";
                    return;
                  } else {
                    emailValid.current.style.display = "none";
                  }

                  if (!checkMail) return;
                  setCodeClick(codeClick + 1);
                  login.current.style.display = `none`;
                  spinner.current.style.display = `block`;
                  setTimeout(() => {
                    cheker_2();
                    login.current.style.display = `block`;
                    spinner.current.style.display = `none`;
                  }, 500);
                }}
              >
                Qabul qilish
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="login" ref={passwordValid}>
        <div className="container">
          <div
            className="spinner-border ms-auto me-auto"
            style={{ display: "none", marginTop: "250px" }}
            role="status"
            ref={spinner}
          >
            <span className="sr-only"></span>
          </div>
          <div className="login__inner" ref={login}>
            <h2 className="login__title">Parolni Unutdingizmi?</h2>
            <p className="login__description">
              Agar parolni unutgan bo'lsangiz, parolingizni tiklang!
            </p>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
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
                  value={checkMail}
                  onChange={(e) => {
                    setCheckMail(e.target.value);
                    if (!e.target.value) {
                      emailValid.current.innerHTML = "To'ldirish shart";
                    } else {
                      emailValid.current.innerHTML = "Emailni to'g'ri kiriting";
                    }
                    if (
                      checkMail.match(
                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                      ) &&
                      checkMail
                    ) {
                      emailValid.current.style.display = "none";
                    }
                  }}
                  required
                />
              </span>
              <span
                className="text-danger"
                style={{ fontSize: "12px", display: "none" }}
                ref={emailValid}
              >
                To'ldirish shart
              </span>

              <button
                className="login-btn form-btn"
                type="submit"
                onClick={(e) => {
                  if (
                    !checkMail.match(
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    ) &&
                    !email
                  ) {
                    emailValid.current.style.display = "block";
                    return;
                  } else {
                    emailValid.current.style.display = "none";
                  }

                  if (!checkMail) return;
                  setEmailClick(emailClick + 1);
                  login.current.style.display = `none`;
                  spinner.current.style.display = `block`;
                  setTimeout(() => {
                    cheker();
                    login.current.style.display = `block`;
                    spinner.current.style.display = `none`;
                  }, 500);
                }}
              >
                Qabul qilish
              </button>
            </form>
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

export default Checkemail;
