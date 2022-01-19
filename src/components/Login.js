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
    ev.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placehonder="username" onChange={(ev) => setUsername(ev.target.value)} value={username} />
        <input placehonder="password" onChange={(ev) => setPassword(ev.target.value)} value={password} />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
