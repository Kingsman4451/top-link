import React, { useState, useEffect } from "react";
import { Api } from "../Api/Api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import context from "./context";
import Header from "./components/Navbar/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Register_part_2 from "./components/Register/Register_part_2";
import PrivateRoute from "./components/Private/PrivateRoute";
import Checkemail from "./components/Checkemail/Checkemail";

const App = () => {
  const cont = context.context;

  const { loginUser, registerUser, checkEmail, checkCode, newPassword } = Api;
  const [email, setEmail] = useState("");
  const [checkMail, setCheckMail] = useState("");
  const [password, setPassword] = useState("");
  const [newPass, setNewPass] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [loginClick, setLoginClick] = useState(0);
  const [registerClick, setRegisterClick] = useState(0);
  const [checker, setChecker] = useState(false);
  const [registerChecker, setRegisterChecker] = useState(true);
  const [registerCode, setRegisterCode] = useState(
    localStorage.getItem("status") || ""
  );
  const [emailStatus, setEmailStatus] = useState("");
  const [code, setCode] = useState();
  const [verification, setVerification] = useState();
  const [emailClick, setEmailClick] = useState(0);
  const [codeClick, setCodeClick] = useState(0);
  const [passwordClick, setPasswordClick] = useState(0);

  useEffect(() => {
    loginUser(email, password)
      .then((res) => {
        if (res.data.token == null) return;
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.log(err));
  }, [loginClick]);

  useEffect(() => {
    registerUser(fullname, phone, email, password, username)
      .then((res) => {
        setRegisterCode(res.data.status);
        localStorage.setItem("status", res.data.status);
      })
      .catch((err) => console.log(err));
  }, [registerClick]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setChecker(true);
    } else {
      setChecker(false);
    }
  }, [loginClick, token]);

  useEffect(() => {
    checkEmail(checkMail)
      .then((res) => {
        setEmailStatus(res.data.status);
      })
      .catch((err) => console.log(err));
  }, [emailClick]);

  useEffect(() => {
    checkCode(code)
      .then((res) => {
        setVerification(res.data.verify_number);
      })
      .catch((err) => console.log(err));
  }, [codeClick]);

  useEffect(() => {
    newPassword(checkMail, newPass)
      .then((res) => {setRegisterCode(res.data.status);})
      .catch((err) => console.log(err));
  }, [passwordClick]);

  const values = {
    email,
    password,
    fullname,
    phone,
    username,
    loginClick,
    registerClick,
    checker,
    registerChecker,
    registerCode,
    emailStatus,
    checkMail,
    code,
    verification,
    newPass,
    setNewPass,
    emailClick,
    setEmailClick,
    codeClick,
    setCodeClick,
    passwordClick,
    setPasswordClick,
    setCode,
    setEmail,
    setPassword,
    setFullname,
    setPhone,
    setUsername,
    setLoginClick,
    setRegisterClick,
    setChecker,
    setRegisterChecker,
    setCheckMail,
  };

  return (
    <div>
      <cont.Provider value={{ values }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/step_2" element={<Register_part_2 />} />
            <Route path="/forgetpage" element={<Checkemail />} />
            <Route path="/login" element={<PrivateRoute logged={checker} />} />
          </Routes>
        </BrowserRouter>
      </cont.Provider>
    </div>
  );
};

export default App;
