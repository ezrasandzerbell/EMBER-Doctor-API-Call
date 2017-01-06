var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;


$(document).ready(function() {

  $('#issueForm').submit(function(event){
    event.preventDefault();
    var medicalIssue = $("#issue").val();

    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
     .then(function(result) {

        var doctors = result.data;
        console.log(doctors);
        doctors.forEach(function(resultArray){
          var first_name = resultArray.profile.first_name;
          var last_name = resultArray.profile.last_name;
          console.log(first_name);
          $('#doctorList').append("<li>" + first_name + " " + last_name + "</li>");
        });

      })
     .fail(function(error){
        console.log("fail");
      });
  });
});
