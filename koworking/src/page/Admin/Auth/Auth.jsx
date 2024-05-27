import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useAppDispatch } from "../../../redux/store";
// import { loginUser } from "../../../redux/authSlice";
import style from "./Auth.module.css";

const Auth = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const authentication = async () => {
    console.log({
      login,
      password,
    });

    try {
      await axios
        .post("http://localhost:3000/auth/login", {
          login,
          password,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.accessToken);
        });

      setLogin("");
      setPassword("");

      const jwtToken = localStorage.getItem("token");
      const decodedToken = JSON.parse(atob(jwtToken.split(".")[1])); // Decode JWT token payload
      const userRole = decodedToken.role;
      console.log(userRole);

      if (userRole === "Admin") {
        window.location.href = "/Admin"; // Redirect to admin page if user is an admin
      } else {
        // window.location.href = "/"; // Redirect to account page for regular users
      }
    } catch (error) {
      console.log("Error:", error);
      // Handle login error
    }
  };

  return (
    <div className={style.Auth}>
      <div className={style.container}>
        <form className={style.Auth_form}>
          <div className={style.Auth_nav}>
            <Link to="/login">Login</Link>
            <Link to="/registration">Create Account</Link>
          </div>
          <div>
            <h2>WELCOME BACK</h2>
            <p>
              Sign into your existing account to earn rewards, check existing
              orders and more
            </p>
          </div>
          <div className={style.Auth_form_input}>
            <input
              type="text"
              value={login}
              placeholder="login"
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={(e) => {
              authentication();
              e.preventDefault();
            }}
          >
            🚀 Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
