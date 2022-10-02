import axios from "axios"


const URL = "http://207.154.246.125:8888"

export const Api = {
  loginUser: (email, password) => {
    return axios({
      url: `${URL}/login`,
      method: "POST",
      data:{
        email, password
      },
      headers: {
        "Content-Type": "application/json",
      }
    })
  },
  registerUser: (fullname, phone, email, password, username) => {
    return axios({
      url: `${URL}/register`,
      method: "POST",
      data:{
        fullname, phone, email, password, username
      },
      headers: {
        "Content-Type": "application/json",
      }
    })
  },

  checkEmail: (email) =>{
    return axios({
      url: `${URL}/checkemail`,
      method: "POST",
      data:{
        email
      },
      headers: {
        "Content-Type": "application/json",
      }
    })
  },

  checkCode: (number) =>{
    return axios({
      url: `${URL}/verificationcode`,
      method: "POST",
      data:{
        number
      },
      headers: {
        "Content-Type": "application/json",
      }
    })
  },
  newPassword: (email, newpassword) =>{
    return axios({
      url: `${URL}/newpassword`,
      method: "PUT",
      data:{
        email, newpassword
      },
      headers: {
        "Content-Type": "application/json",
      }
    })
  }

}