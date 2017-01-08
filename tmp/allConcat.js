var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {

  $('#issueForm').submit(function(event){
    event.preventDefault();
    var medicalIssue = $("#issue").val();

    var doctors = new Doctor();
    doctors.locateDoctors(medicalIssue);
  });
});
