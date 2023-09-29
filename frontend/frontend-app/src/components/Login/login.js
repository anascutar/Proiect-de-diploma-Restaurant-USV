// import React, { userRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import {
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBBtn,
//   MDBIcon,
//   MDBInput,
//   MDBCheckbox,
// } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Logo from "/../Licenta/frontend-app/src/images/login2.png";
import "./LoginPage.css";

const emailOperator = "operator@gmail.com";
const Login = () => {
  const [credentiale, setCredentiale] = useState({
    email: "",
    parola: "",
  });
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    console.log(credentiale.email + credentiale.parola);
    if (
      credentiale.email === emailOperator &&
      credentiale.parola === "operator"
    ) {
      console.log("Credentiale corecte");
      setIsLogged(true);
      // navigate("/meniul-zilei");
      navigate("/comenzi");
    } else {
      alert("Credentiale gresite");
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const handleEmailChange = (e) => {
    setCredentiale({ ...credentiale, [e.target.name]: e.target.value });
    // setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setCredentiale({ ...credentiale, [e.target.name]: e.target.value });
    // setPassword(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <div className="login-page">
      <div className="left-section">
        <img src={Logo} alt="Login" />
      </div>
      <div className="right-section">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              style={{ width: "40%", padding: "5px" }}
              value={credentiale.email}
              onChange={handleEmailChange}
              name="email"
            />
          </div>

          <div className="form-group">
            <label>Parolă:</label>
            <div className="password-input-group">
              <input
                type={showPassword ? "text" : "password"}
                style={{ width: "40%", padding: "5px" }}
                value={credentiale.parola}
                name="parola"
                onChange={handlePasswordChange}
              />
              <span
                className="eye-icon"
                onClick={handleTogglePasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  style={{ marginLeft: "-30px" }}
                />
              </span>
            </div>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              id="rememberMeCheck"
            />
            <label className="form-check-label" htmlFor="rememberMeCheck">
              Ține-mă conectat
            </label>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "30%" }}
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <div className="form-group">
            <a href="/forgot-password">Ai uitat parola?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
