var apiKey = require('./../.env').apiKey;

function Doctor(list) {
  this.list = [];
}

Doctor.prototype.locateDoctors = function(medicalIssue){

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
    .then(function(result) {
      console.log(result);
      var doctors = result.data;

      doctors.forEach(function(doctor){
        var first_name = doctor.profile.first_name;
        var last_name = doctor.profile.last_name;
        $('#doctorList').append("<li>" + first_name + " " + last_name + "</li>");
      });

    })
    .fail(function(error){
      console.log("fail");
  });
};
exports.doctorModule = Doctor;
