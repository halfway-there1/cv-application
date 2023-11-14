import FormField from './FormField';
import { handleChange } from '../utils';
import { useState } from 'react';

function EducationalInfo() {
  const [school, setSchool] = useState('University of California, Berkeley');
  const [degree, setDegree] = useState('Bachelors of Computer Science');
  const [startDate, setStartDate] = useState('2017-08-01');
  const [endDate, setEndDate] = useState('2021-05-01');
  const [location, setLocation] = useState('Berkeley, CA');

  return (
    <>
      <form action="/" name="educationalInfo">
        <legend>Education</legend>
        <FormField
          label="School"
          id="school"
          type="text"
          value={school}
          onChange={handleChange(setSchool)}
        />
        <FormField
          label="Degree"
          id="degree"
          type="text"
          value={degree}
          onChange={handleChange(setDegree)}
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
      </form>
    </>
  );
}

export default EducationalInfo;
