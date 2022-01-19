// React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Styles
import '../stylesheets/Login.scss';

const Login = () => {
  //state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <div>LOGIN</div>
    </>
  );
};

export default Login;
