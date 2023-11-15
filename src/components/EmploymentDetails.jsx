import FormField from './FormField';

function EmploymentDetails({
  companyName,
  jobTitle,
  startDate,
  endDate,
  location,
  jobDescription,
  handleEmploymentDetailsChange,
}) {
  return (
    <>
      <form action="/" name="educationalInfo">
        <legend>Experience</legend>
        <FormField
          label="Company Name"
          id="companyName"
          type="text"
          value={companyName}
          onChange={handleEmploymentDetailsChange('companyName')}
        />
        <FormField
          label="Position Title"
          id="jobTitle"
          type="text"
          value={jobTitle}
          onChange={handleEmploymentDetailsChange('jobTitle')}
        />
        <FormField
          label="Start Date"
          id="jobStartDate"
          type="date"
          value={startDate}
          onChange={handleEmploymentDetailsChange('startDate')}
        />
        <FormField
          label="End Date"
          id="jobEndDate"
          type="date"
          value={endDate}
          onChange={handleEmploymentDetailsChange('endDate')}
        />
        <FormField
          label="Location"
          id="jobLocation"
          type="text"
          value={location}
          onChange={handleEmploymentDetailsChange('location')}
        />
        <label htmlFor="jobDescription">Description</label>
        <br />
        <textarea
          name="jobDescription"
          id="jobDescription"
          value={jobDescription}
          cols="30"
          rows="10"
          onChange={handleEmploymentDetailsChange('jobDescription')}
        />
      </form>
    </>
  );
}

export default EmploymentDetails;
