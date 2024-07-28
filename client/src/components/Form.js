import React, { useState } from 'react';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const addUser = () => {};

  return (
    <form onSubmit={addUser}>
      <input
        type='text'
        placeholder='First Name'
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type='text'
        placeholder='Last Name'
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input
        type='text'
        placeholder='Email'
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type='text'
        placeholder='Password'
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type='submit'>Create User</button>
    </form>
  );
}

export default Form;
