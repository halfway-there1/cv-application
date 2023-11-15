import { useState } from 'react';
import PersonalDetails from './components/PersonalDetails';
import AcademicDetails from './components/AcademicDetails';
import EmploymentDetails from './components/EmploymentDetails';

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: 'Jasper Stone',
    email: 'someone@gmail.com',
    phoneNumber: '1234567890',
  });

  const [academicDetails, setAcademicDetails] = useState({
    school: 'University of California, Berkeley',
    degree: 'Bachelors of Computer Science',
    startDate: '2017-08-01',
    endDate: '2021-05-01',
    location: 'Berkeley, CA',
  });

  const [employmentDetails, setEmploymentDetails] = useState({
    companyName: 'Microsoft',
    jobTitle: 'Software Engineer',
    startDate: '2015-09-01',
    endDate: '2021-08-31',
    location: 'Redmond, WA, USA',
    jobDescription: `Worked on Windows 10
  
    Responsibilities:
    - Developed new features for the operating system
    - Fixed bugs and improved performance
    - Collaborated with other teams to integrate new technologies`,
  });

  function handlePersonalDetailsChange(field) {
    return function (event) {
      setPersonalDetails({
        ...personalDetails,
        [field]: event.target.value,
      });
    };
  }

  function handleAcademicDetailsChange(field) {
    return function (event) {
      setAcademicDetails({
        ...academicDetails,
        [field]: event.target.value,
      });
    };
  }

  function handleEmploymentDetailsChange(field) {
    return function (event) {
      setEmploymentDetails({
        ...employmentDetails,
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
        <br />
        <AcademicDetails
          {...academicDetails}
          handleAcademicDetailsChange={handleAcademicDetailsChange}
        />
        <br />
        <EmploymentDetails
          {...employmentDetails}
          handleEmploymentDetailsChange={handleEmploymentDetailsChange}
        />
      </div>
      <br />
      <hr />
      <div className="preview">
        <h2>Preview</h2>
        <br />

        <h3>Personal Details</h3>
        <p>Name: {personalDetails.name}</p>
        <p>Email: {personalDetails.email}</p>
        <p>Phone Number: {personalDetails.phoneNumber}</p>

        <br />

        <h3>Academic Details</h3>
        <p>School: {academicDetails.school}</p>
        <p>Degree: {academicDetails.degree}</p>
        <p>Start Date: {academicDetails.startDate}</p>
        <p>End Date: {academicDetails.endDate}</p>
        <p>Location: {academicDetails.location}</p>

        <br />

        <h3>Employment Details</h3>
        <p>Company Name: {employmentDetails.companyName}</p>
        <p>Job Title: {employmentDetails.jobTitle}</p>
        <p>Start Date: {employmentDetails.startDate}</p>
        <p>End Date: {employmentDetails.endDate}</p>
        <p>Location: {employmentDetails.location}</p>
        <p>Description: {employmentDetails.jobDescription}</p>
      </div>
    </>
  );
}

export default App;
