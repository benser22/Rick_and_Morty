export default function validate(inputs) {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword = /^(?=.*\d)[A-Za-z\d]{6,10}$/;

  let errors = {};

  if (!inputs.email) {
    errors.email = "The email field cannot be empty";
  } else {
    if (inputs.email.length > 35) {
      errors.email = "Cannot exceed 35 characters";
    } else {
      if (!regexEmail.test(inputs.email)) {
        errors.email = "You must enter a valid email";
      } else {
        errors.email = "";
      }
    }
  }
  if (!inputs.password) {
    errors.password = "The password field cannot be empty";
  } else if (!regexPassword.test(inputs.password)) {
    errors.password =
      "Password must be between 6 and 10 characters, and at least one number";
  } else errors.password = "";
  return errors;
}
