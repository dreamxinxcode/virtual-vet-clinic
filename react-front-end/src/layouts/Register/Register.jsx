import React from 'react';
import './Register.scss';

const Register = () => {
  return (
    <form action="" method='POST' id='register-form'>
      <label htmlFor="email">Email</label>
      <input type="text" name='email' />
      <label htmlFor="address">Address</label>
      <input type="text" name='address' />
      <label htmlFor="telephone">Phone</label>
      <input type="text" name='telephone' />
      <label htmlFor="avatar">Avatar</label>
      <input type="file" name="avatar" />
      <label htmlFor="password">Password</label>
      <input type="password" name='password' />
      <button type='submit'>Sign up</button>
    </form>
  )
};

export default Register;