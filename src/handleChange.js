function handleChange(setX) {
  return function (event) {
    setX(event.target.value);
  };
}

export default handleChange;