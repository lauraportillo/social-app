// React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import Footer from './Footer';
import Header from './Header';
// Styles
import '../stylesheets/Login.scss';

const Login = () => {
  //state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="containerHome">
      <Header />
      <form className="containerForm" onSubmit={handleSubmit}>
        <div className="containerForm__item">
          <label className="containerForm__item--label" htmlFor="username">
            Name
          </label>
          <input
            className="containerForm__item--input"
            placeholder="user name"
            onChange={(ev) => setUsername(ev.target.value)}
            value={username}
          />
        </div>

        <div className="containerForm__item">
          <label className="containerForm__item--label" htmlFor="password">
            Password
          </label>
          <input
            className="containerForm__item--input"
            placeholder="your password"
            onChange={(ev) => setPassword(ev.target.value)}
            value={password}
          />
        </div>

        <button className="containerForm__item--btn">Login</button>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
