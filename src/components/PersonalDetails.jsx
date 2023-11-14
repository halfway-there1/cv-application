import FormField from './FormField';

function PersonalDetails({
  name,
  email,
  phoneNumber,
  handlePersonalDetailsChange,
}) {
  return (
    <>
      <form action="/" name="personalDetails">
        <legend>Personal Details</legend>
        <FormField
          label="Full name"
          type="text"
          id="name"
          value={name}
          onChange={handlePersonalDetailsChange('name')}
        />
        <FormField
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={handlePersonalDetailsChange('email')}
        />
        <FormField
          label="Phone Number"
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePersonalDetailsChange('phoneNumber')}
        />
      </form>
    </>
  );
}

export default PersonalDetails;
