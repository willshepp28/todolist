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




// var
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





