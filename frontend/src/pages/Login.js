import React from 'react';

const Login = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <input placeholder="Email" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />
      <button>Login</button>
    </div>
  );
};

export default Login;
