import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      username: username,
      email: email,
      password: password,
      password2: password2,
    };
    props.signup(user).then(() => navigate('/dashboard'));
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter Username'
          autoComplete='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
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
        <input
          type='password'
          placeholder='Confirm Password'
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
