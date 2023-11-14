function handleChange(setX) {
  return function (event) {
    setX(event.target.value);
  };
}

function handleFormSubmit(event) {
  event.preventDefault();
  alert("Form submitted!");
}

export {handleChange, handleFormSubmit};