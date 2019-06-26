console.log('Hello,this is sara');

// events Need:
// 1. an event type ("click")
// 2. an event EventTarget ("button")
// 3. a callback function ("")
// when all of those things are combined, they become an event listener.


// event type
const eventType= 'click';
// target of the event
const myButton = document.querySelector('button');
// the callback function what do you want to do as a response?
const myCallback= function (event){
    console.log('the button was clicked', event);
}

// creat an event listener
// when this event take place on this target 
//call this callback function.
myButton.addEventListener(eventType, myCallback);



// type, target,callback, event listner
const darkbutton =document.querySelector('#dark');

const changeToDarkTheme = function(){
    console.log('Dark Theme');
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
}
darkbutton.addEventListener('click', changeToDarkTheme);


// type, target,callback, event listner
const lightbutton =document.querySelector('#light');
const changeToLightTheme = function(){
    console.log('Light Theme');
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
}
lightbutton.addEventListener('click', changeToLightTheme);


// input and the button for tweet
const postTweetButton = document.querySelector('.post');
const creatTweet = function(){
    //get whatever is typed in the input
    // and save it in a varibale called
    //content.
    const input = document.querySelector('input')
    const content =input.value;

    // take the content and put it in the pargraph and show it on the screen
    // creat a pargraph and put the content in it
    const newParagraph = document.createElement('p');
    newParagraph.innerText= content;

// take the pargraph and put it at the end of the div.newTweets
const newTweetsDiv = document.querySelector('.newTweets');
newTweetsDiv.appendChild(newParagraph);
}
postTweetButton.addEventListener('click', creatTweet);



// target
const colorInput = document.querySelector('input.color');
const onColorChange = function(){
    // to do change of the body of the color of what the user want
 document.body.style.background = colorInput.value;
}
colorInput.addEventListener('change', onColorChange);

const clcikCounterButton = document.querySelector('button.click');
let clickCount=0;
const onClick = function(){
    clickCount+=1;
    // we can add if condition if I want it to stop on 10
const targetDiv = document.querySelector('.clickCount');
targetDiv.innerText = clickCount;
}
clcikCounterButton.addEventListener ('click', onClick);



// make the image biger
const billImage = document.querySelector('.bill');
const nickImage = document.querySelector('.nick');
const doubleImageSize = function (){
this.style.width= '600px';
}
billImage.addEventListener('click', doubleImageSize);
nickImage.addEventListener('click', doubleImageSize);











// setup strategy 
// const clcikCounterButton = document.querySelector('button.click');
// const onClick = function(){
//     // to do
// }
// clcikCounterButton.addEventListener ('click', onClick);

