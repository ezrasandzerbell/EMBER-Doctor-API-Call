(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Doctor() {
  this.word = "";
}




// var output = underscoreGenerate(that.word);
// $(".dinoWord").html(output);

exports.doctorModule = Doctor;

},{}],2:[function(require,module,exports){
var Doctor = require('./../js/doctor.js').doctorModule;


$(document).ready(function() {

  $('#issueForm').submit(function(event){
    event.preventDefault();
    submission = $("#issue").val();
    $(".output").text(submission);
  });

});

},{"./../js/doctor.js":1}]},{},[2]);