import React from 'react';

const Signup = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Sign Up</h2>
      <input placeholder="Full Name" /><br /><br />
      <input placeholder="Email" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />
      <button>Sign Up</button>
    </div>
  );
};

export default Signup;
