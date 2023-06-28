export default function validate(inputs) {
  // Expresiones regulares para validar el email y la contraseña
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword = /^(?=.*\d)[A-Za-z\d]{6,10}$/;

  let errors = {};

  // Validación del campo de email
  if (!inputs.email) {
    errors.email = "El campo de correo electrónico no puede estar vacío";
  } else {
    if (inputs.email.length > 35) {
      errors.email = "No puede exceder los 35 caracteres";
    } else {
      if (!regexEmail.test(inputs.email)) {
        errors.email = "Debes ingresar un correo electrónico válido";
      } else {
        errors.email = "";
      }
    }
  }

  // Validación del campo de contraseña
  if (!inputs.password) {
    errors.password = "El campo de contraseña no puede estar vacío";
  } else if (!regexPassword.test(inputs.password)) {
    errors.password =
      "La contraseña debe tener entre 6 y 10 caracteres y al menos un número";
  } else {
    errors.password = "";
  }

  return errors;
}
