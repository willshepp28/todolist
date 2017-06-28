

var done = document.getElementById('done');
var completed = document.getElementsByClassName('completed');
var li = document.querySelectorAll('li');
var input = document.querySelectorAll('.checking input');





for (let i = 0; i < li.length; i++) {

    input[i].addEventListener('click', function(){

        input[i].style.visibility = 'hidden';
        var a = li[i];
        done.appendChild(a);
       li[i].className = "cross-out";
    
   
    });
}


