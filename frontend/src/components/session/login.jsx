import React, { useState } from 'react';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email: email,
      password: password,
    };
    props.login(user);
  };

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Enter Email'
          autoComplete='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type='password'
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
