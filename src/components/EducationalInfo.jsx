import FormField from './FormField';
import handleChange from '../handleChange';
import { useState } from 'react';

function EducationalInfo() {
  const [school, setSchool] = useState('University of California, Berkeley');
  const [degree, setDegree] = useState('Bachelors of Computer Science');
  const [startDate, setStartDate] = useState('2017-08-01');
  const [endDate, setEndDate] = useState('2021-05-01');

  return (
    <>
      <form
        action="/"
        onSubmit={(event) => {
          event.preventDefault();
          alert(
            `school: ${school}\ndegree: ${degree}\nstartDate: ${startDate}\nendDate: ${endDate}`
          );
        }}
      >
        <legend>Educational Info</legend>
        <FormField
          label="school"
          id="school"
          type="text"
          value={school}
          onChange={handleChange(setSchool)}
        />
        <FormField
          label="degree"
          id="degree"
          type="text"
          value={degree}
          onChange={handleChange(setDegree)}
        />
        <FormField
          label="startDate"
          id="startDate"
          type="date"
          value={startDate}
          onChange={handleChange(setStartDate)}
        />
        <FormField
          label="endDate"
          id="endDate"
          type="date"
          value={endDate}
          onChange={handleChange(setEndDate)}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default EducationalInfo;
