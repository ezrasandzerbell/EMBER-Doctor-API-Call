var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {

  $('#issueForm').submit(function(event){
    event.preventDefault();
    medicalIssue = $("#issue").val();
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
     .then(function(result) {
        var returned = result.data[0].practices[0].name
        $('doctorList').text(returned);
        console.log(result.data[0].practices[0].name);
      })
     .fail(function(error){
        console.log("fail");
    });
  });
});
