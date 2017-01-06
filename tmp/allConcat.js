var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  var docArray = []

  getDoctors = function(medicalIssue) {
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
     .then(function(result) {
       console.log(result.data[0].practices[0].name);
        return(result.data[0].practices[0].name)
      })
     .fail(function(error){
        console.log("fail");
      });
  };

  $('#issueForm').submit(function(event){
    event.preventDefault();
    var medicalIssue = $("#issue").val();
    var test = getDoctors(medicalIssue);
    var patientDocs = new Doctor(test);
    var results = Doctor.list;
        debugger;
    $('.doctorList').text(results);
  });
});
