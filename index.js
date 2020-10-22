
var len = document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++)
 document.querySelectorAll("button")[i].addEventListener("click",function(){
    // 'this' it gives us identity that which objects hastriggered the event.
   // so we this is how we can make it anonymous.
   var audio;
   var buttonInnerHtml =  this.innerHTML;
   makeSound(buttonInnerHtml);
   buttonAnimation(buttonInnerHtml);
 });

 document.addEventListener("keypress",function(event){
    // 'this' it gives us identity that which objects hastriggered the event.
   // so we this is how we can make it anonymous.

//    console.log(event.key); debugging purpose.
   var audio;
   var eventKey = event.key;
   makeSound(eventKey);
   buttonAnimation(eventKey);
});

// we can shorten the code by making the function makeSound!


function makeSound(eventCause){
    switch(eventCause){
        case 'w' :
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'a':
            audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 's':
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'd':
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'j':
            audio = new Audio("sounds/tom-2.mp3")
            audio.play();
            break;
        case 'k':
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'l':
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
         }
}

function buttonAnimation(buttonName){ 
   /*how to add new class in our html?
   document.querySelector("someTag").classList.add("classToBeAdded");
   */    
   document.querySelector("."+buttonName).classList.add("pressed");

//setTimeout(funciton,time);
setTimeout(function(){
    document.querySelector("."+buttonName).classList.remove("pressed");
},100);
}

// alert("Hello World1");
/* document.querySelector("button").addEventListener("click",handleIt);
that is what we understand by eventListeners.
whene you perfome some action it generates some events and perform action to it!
// function handleIt(){
//     alert("handledIt!");
// }

Higher Order Function and  Passing function as a argumnets : 
function add(num1,num2) return num1+num2;
function multiply(num1,num2) return num1*num2;
// in the below code operator is fucntion which is passe by argumenrs.

function calc(num1,num2,operator){
    return operator(num1,num2)
}

calc(num1,num2,add);
calc(num1,num2,multiply);
javascript objects->variable associated with another variable
var houseKeeper = {
    hasPastExp:"true",age:29,languages:["Hindi","bengali"]
    name : function(){
        code of funcitoon
        name : function(){}
        this is funciton for our object houseKeeper
    }
}

constructor function

function HouseKeeper(hasPastExp,age,languages){
  this.hasPastExp= hasPastExp;
  this.age=age;
  this.language = languages;
  this.name : function(){
        code of funcitoon
        name : function(){}
        this is funciton for our object houseKeeper
    }

}
// object of HouseKeeper
var houseKeeper1 = new HouseKeeper(true,35,["oriya","hindi"])


*/

//  creates a new audio object
// 
//     method play()
//     audio.play();


/*
document.addEventListener("keypress",function(event){
    //   here event is cause which held the event like if i press 'k' then 'k' is event.
    console.log(event);
});
*/

/*
What is a Callback Function?

In JavaScipt functions are objects so we pass them as a objects to another functions and call it!

function print(callback) {  
    callback();
}

Now here print fucntion make sure that after the print is called only then we will call callback().This type of programming is asynchrounous programming in which 
we make sure that an evetn will occur and then after we will complete some task.
In JavaScript, the way to create a callback function is to pass it as a parameter to another function, and then to call it back right after something has happened or some task is completed. Let’s see how…
const message = function() {  
    console.log("This message is shown after 3 seconds");
}
 
setTimeout(message, 3000);


above create a anoymous funciton,this function we will pass as an arguments in the setTimeour(message,3000) which is in-built after 3 second this message get printed.
*/

/*
jQuery is a javascript library that allows a user to write this all lengthy code is small.
Devloped by john resig.

document.querySelector("h1");
can be reduced to $("h1"); or jQuery("h1");
*/ 