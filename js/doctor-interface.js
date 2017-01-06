var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;


$(document).ready(function() {

  $('#issueForm').submit(function(event){
    event.preventDefault();
    var medicalIssue = $("#issue").val();
    getDoctors(medicalIssue);
  });
});
