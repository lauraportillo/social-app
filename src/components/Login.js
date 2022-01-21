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
    <div className="containerLogin">
      <Header />

      <main className="containerMain">
        <h1 className="containerMain__title">friendChic</h1>

        <form className="containerForm" onSubmit={handleSubmit}>
          <input
            className="containerForm__item"
            placeholder="user name"
            onChange={(ev) => setUsername(ev.target.value)}
            value={username}
          />

          <input
            className="containerForm__item"
            placeholder="your password"
            onChange={(ev) => setPassword(ev.target.value)}
            value={password}
          />

          <button className="containerForm__btn">Login</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
