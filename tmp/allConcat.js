var Doctor = require('./../js/doctor.js').doctorModule;


$(document).ready(function() {

  $('#issueForm').submit(function(event){
    event.preventDefault();
    submission = $("#issue").val();
    $(".output").text(submission);
  });

});
