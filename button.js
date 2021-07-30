'use strict';
let count = 0;

//btn1 works individually from btn2 grr but may stop btn2 from restarting to first message
let out = document.getElementById('output');
let message;
function go(e){
    e.preventDefault();
        
        if(count === 1) message = 'You pressed the button!';
        if(count === 2) message = 'You pressed the button again';
        if(count > 1 && count < 6) message = `You pressed the button ${count} times!`;
        if(count == 7) message = 'Stop'; // ggrrr  when reach stop kills btn2
        out.innerHTML = message;
        count ++;
} document.getElementById('btn1').addEventListener('click', go);



// btn2 or this one, can't figure out to do both - i broke it again
let button = document.getElementById('btn2');
let messages = ["message 1", "message 2", "message 3", "message 4"];
function gogo(f){  //function can be go if individual button from fucntion go of btn1, if same js than need new name
    button.innerHTML = messages[count];
    if (count == messages.length -1){// has to have the -1 for the length in order to go thru all items in the array  
        count = 0 
    } 
    else{
        count++;
    } 
} button.addEventListener('click', gogo);

