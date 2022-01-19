// React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Styles
import '../stylesheets/Login.scss';

const Login = () => {
  //state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDEfault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placehonder="username" value={username} />
        <input placehonder="password" value={password} />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
