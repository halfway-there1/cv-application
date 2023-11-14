/* eslint-disable react/prop-types */
import FormField from './FormField';
import { useState } from 'react';
import { useEffect } from 'react';

function GeneralInfo() {
  const [name, setName] = useState('Anurag Kumar');
  const [email, setEmail] = useState('someone@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('1234567890');

  function handleChange(setX) {
    return function (event) {
      setX(event.target.value);
    };
  }

  // console.log('new render');
  useEffect(() => {
    console.log('name or email or phone number changed');
  }, [name, email, phoneNumber]);

  return (
    <>
      <legend>Contact Info</legend>
      <form action="/">
        <FormField
          label="Name"
          type="text"
          id="name"
          value={name}
          onChange={handleChange(setName)}
        />
        <FormField
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={handleChange(setEmail)}
        />
        <FormField
          label="Phone Number"
          type="tel"
          id="phone-number"
          value={phoneNumber}
          onChange={handleChange(setPhoneNumber)}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default GeneralInfo;
