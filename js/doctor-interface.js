var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  exports.getDoctors = function(medicalIssue) {
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
     .then(function(result) {
        findSolution(result);
        console.log(result);
      })
     .fail(function(error){
        console.log("fail");
      });
  };

  function findSolution(theIssue){

    var doctors = theIssue;

    $('#issueForm').submit(function(event){
      event.preventDefault();
      medicalIssue = $("#issue").val();
      $(".doctorList").text(doctors);
    });
  }
});
