var apiKey = require('./../.env').apiKey;

// constructor to store doctors names in an array
function Doctor(list) {
  this.list = [];
}

// create method to reassign this.list array to feature names of the doctors
Doctor.prototype.names = function(apiResults) {
  this.list = apiResults;
};

exports.getDoctors = function(medicalIssue) {

  var allDocNames = [];

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {

      result.data.forEach(function(resultArray){
        var docName = resultArray.practices.name;
        allDocNames.push(docName);
      });

      var doctors = new Doctor();
      Doctor.names(allDocNames)
      finalList = doctors.list
      $('doctorList').text(finalList)
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
