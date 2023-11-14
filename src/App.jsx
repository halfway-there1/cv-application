import { useState } from 'react';
import PersonalDetails from './components/PersonalDetails';

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: 'Anurag Kumar',
    email: 'someone@gmail.com',
    phoneNumber: '1234567890',
  });

  function handlePersonalDetailsChange(field) {
    return function (event) {
      setPersonalDetails({
        ...personalDetails,
        [field]: event.target.value,
      });
    };
  }

  console.log('rendering App');
  return (
    <>
      <div className="edit-side">
        <PersonalDetails
          {...personalDetails}
          handlePersonalDetailsChange={handlePersonalDetailsChange}
        />
      </div>
      <br />
      <hr />
      <div className="preview">
        <h2>Preview</h2>

        <h3>Personal Details</h3>
        <p>Name: {personalDetails.name}</p>
        <p>Email: {personalDetails.email}</p>
        <p>Phone Number: {personalDetails.phoneNumber}</p>
      </div>
    </>
  );
}

export default App;
