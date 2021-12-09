function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  // let varSG = event.forms["myForm"]["SG"].value;
  // let varDesc = document.forms["myForm"]["Description"].value;
  // if (varSG == "") {
  //   alert("Name must be filled out");
  //   return false;
  // }
  //function validateCoord(lat, lng) {
  if (event >= -90.0 && event <= 90.0 && event >= -180.0 && event <= 180.0) {
    return true;
  }
  return false;
  //}
  console.log(
    "TODO - validate the longitude, latitude values before submitting"
  );
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
