/* eslint-disable react/prop-types */
import FormField from './FormField';
import { handleChange } from '../utils';
import { useState } from 'react';

function GeneralInfo() {
  const [name, setName] = useState('Anurag Kumar');
  const [email, setEmail] = useState('someone@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('1234567890');

  return (
    <>
      <form action="/" name="generalInfo">
        <legend>Personal Details</legend>
        <FormField
          label="Full name"
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
      </form>
    </>
  );
}

export default GeneralInfo;
