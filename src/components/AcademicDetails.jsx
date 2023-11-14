import FormField from './FormField';

function AcademicDetails({
  school,
  degree,
  startDate,
  endDate,
  location,
  handleAcademicDetailsChange,
}) {
  return (
    <>
      <form action="/" name="academicDetails">
        <legend>Education</legend>
        <FormField
          label="School Name"
          id="school"
          type="text"
          value={school}
          onChange={handleAcademicDetailsChange('school')}
        />
        <FormField
          label="Degree"
          id="degree"
          type="text"
          value={degree}
          onChange={handleAcademicDetailsChange('degree')}
        />
        <FormField
          label="Start Date"
          id="startDate"
          type="date"
          value={startDate}
          onChange={handleAcademicDetailsChange('startDate')}
        />
        <FormField
          label="End Date"
          id="endDate"
          type="date"
          value={endDate}
          onChange={handleAcademicDetailsChange('endDate')}
        />
        <FormField
          label="Location"
          id="location"
          type="text"
          value={location}
          onChange={handleAcademicDetailsChange('location')}
        />
      </form>
    </>
  );
}

export default AcademicDetails;
