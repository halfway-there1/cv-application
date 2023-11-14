import FormField from './FormField';
import { handleChange } from '../utils';
import { useState } from 'react';

function Experience() {
  const [companyName, setCompanyName] = useState('Microsoft');
  const [jobTitle, setJobTitle] = useState('Software Engineer');
  const [startDate, setStartDate] = useState('2015-09-01');
  const [endDate, setEndDate] = useState('2021-08-31');
  const [location, setLocation] = useState('Redmond, WA, USA');
  const [jobDescription, setJobDescription] = useState(`Worked on Windows 10

  Responsibilities:
  - Developed new features for the operating system
  - Fixed bugs and improved performance
  - Collaborated with other teams to integrate new technologies`);

  return (
    <>
      <form action="/" name="educationalInfo">
        <legend>Experience</legend>
        <FormField
          label="Company Name"
          id="companyName"
          type="text"
          value={companyName}
          onChange={handleChange(setCompanyName)}
        />
        <FormField
          label="Position Title"
          id="jobTitle"
          type="text"
          value={jobTitle}
          onChange={handleChange(setJobTitle)}
        />
        <FormField
          label="Start Date"
          id="startDate"
          type="date"
          value={startDate}
          onChange={handleChange(setStartDate)}
        />
        <FormField
          label="End Date"
          id="endDate"
          type="date"
          value={endDate}
          onChange={handleChange(setEndDate)}
        />
        <FormField
          label="Location"
          id="location"
          type="text"
          value={location}
          onChange={handleChange(setLocation)}
        />
        <FormField
          label="Description"
          id="jobDescription"
          type="text"
          value={jobDescription}
          onChange={handleChange(setJobDescription)}
        />
      </form>
    </>
  );
}

export default Experience;
