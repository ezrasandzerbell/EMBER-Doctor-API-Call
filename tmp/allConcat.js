var Doctor = require('./../js/doctor.js').doctorModule;


$(document).ready(function() {
  exports.getDoctors = function(medicalIssue) {
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
     .then(function(result) {
        console.log(result);
      })
     .fail(function(error){
        console.log("fail");
      });
  };
  $('#issueForm').submit(function(event){
    event.preventDefault();
    submission = $("#issue").val();
    $(".output").text(submission);
  });

});
