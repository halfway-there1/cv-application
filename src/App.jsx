import { useState } from 'react';
import PersonalDetails from './components/PersonalDetails';
import EducationalInfo, { ResumeEducation } from './components/EducationalInfo';
import Experience from './components/Experience';

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
  // const [educationalInfo, setEducationalInfo] = useState({});
  // const [experience, setExperience] = useState({});
  console.log('rendering App');
  return (
    <>
      <div className="edit-side">
        <PersonalDetails
          {...personalDetails}
          handlePersonalDetailsChange={handlePersonalDetailsChange}
        />

        <br />
        {/* <EducationalInfo />
        <br />
        <Experience />
        <br /> */}
      </div>
    </>
  );
}

export default App;
