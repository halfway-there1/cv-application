/* eslint-disable react/prop-types */
function FormField({ label, type, id, value, onChange }) {
  return (
    <p>
      <label htmlFor={id}>{label} </label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </p>
  );
}

export default FormField;
