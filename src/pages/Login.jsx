import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [state,dispatch]=useContext(AuthContext)

  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        email,
        password
      }
    })
      .then((res) => {
        alert("success");
        dispatch({
          type: "LOGIN_SUCCESS",
          token: res.data.token
        });
      })
      .catch((err) => {
        console.log(err.message);
        alert("error");
      });
  };

  if (state.isAuth) {
    return <Navigate to="/products" />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          data-cy="login-email"
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          data-cy="login-password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button data-cy="login-submit">submit</button>
      </form>


      
    </div>
  );
};

export default Login;
