(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// const $ = require('jquery');
// const axios = require('axios');

// crosses out todos when completed
var done = document.getElementById('done');
var completed = document.getElementsByClassName('completed');
var li = document.querySelectorAll('li');
var createLi = document.createElement('li');
var input = document.querySelectorAll('.checking .completed');
var edit = document.querySelectorAll('.edit');
var checkingLi = document.querySelectorAll('.checking li');
var formcheck = document.querySelectorAll('.checking .form-edit');
var btnEdit = document.querySelectorAll('.btn-edit');
var a = document.createElement('LI');
console.log(btnEdit);
console.log(formcheck);

for (let i = 0; i < li.length; i++) {

    edit[i].addEventListener('click', function () {
        
        // remove form
        checkingLi[i].className = "remove";

        // remove edit button
        btnEdit[i].className = "remove";

        // make form visible
        formcheck[i].classList.remove("remove");
        formcheck[i].className = "show";

        
 
    });
}





for (let i = 0; i < li.length; i++) {

    input[i].addEventListener('click', function () {
        
        
        // var a = checkingLi[i];
        // done.appendChild(a);
        // checkingLi[i].className = "cross-out";


    });
}




var deleteTodo = function(itemId){
axios.delete('/completed/'+ itemId).then(function(res){
    console.log(res);
})
}

// // delete
// axios.delete('/completed/:id', {
//     params: {
//         ID: req.params.id
//     }
// })
//     .then(function (response) {
//         deleteTodo(response);
//         resultElement.innerHTML = generateSuccessHTMLOutput(response);
//         location.reload();
//     })
//     .catch(function (error) {
//         console.log(error);
//     });




},{}]},{},[1]);
