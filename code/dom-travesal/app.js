// // // console.log('hi');
// // // // select the h1
// // // const heading = document.querySelector('h1');
// // // console.log(heading);

// // // // select p
// // // const paragraph = document.querySelector('p');
// // // console.log(paragraph);

// // // //select the img with a class sector
// // // const image = document.querySelector('.bill');
// // // console.log(image);

// // // const firstListItem = document.querySelector('li');
// // // const secondListItem = document.querySelector('li#second'); 
// // // // (li.second)

// // // console.log(firstListItem, secondListItem);
// // // //document.querySelectorAll('css Selector')
// // // const allListItems = document.querySelectorAll('li');
// // // // console.log(allListItems);

// // // for (let i =0; i< allListItems.length; i+=1 ){
// // //     const curentLitstItem = allListItems[i];
// // //     console.log(curentLitstItem);
// // // }


// // // const allParagraph = document.querySelectorAll('p');
// // // // console.log(allParagraph);

// // // console.clear();

// // // //elm.getAttribute("attribute name")

// // // const img = document.querySelector('img');
// // // const src = img.getAttribute('src');
// // // console.log(src);

// // // const alt = img.getAttribute('alt');
// // // console.log(alt);
// // // // find the 'a' tag and log out the herf attribute

// // // const aTag = document.querySelector('a');
// // // const href = aTag.getAttribute('href');
// // // console.log(href);


// // // elm.setAttribute("attributname", "disired value ")
// // const img = document.querySelector('img');
// // const oldSrc = img.getAttribute('src');
// // img.setAttribute('src', 'https://placecage.com/400/400');

// // // get it only read so u save ur info
// // // set u change.

// // const aTag = document.querySelector('a');

// // // change the href to https://duckduckgo.com
// // aTag.setAttribute('href', 'https://duckduckgo.com');

// // // print the new href
// // const newHref =aTag.getAttribute('href');
// // console.log(newHref);

// // // new tab

// // aTag.setAttribute('Target', '_blank');



// // // Find h1 
// // const heading= document.querySelector('h1');

// // // print the current text of h1
// // console.log(heading.innerText);

// // // change the h1 text to change by js

// // heading.innerText ="Change by JS";

// // // append !!! to the h1
// // heading.innerText +='!!!';


// // // change the html of the a tag to be "this is a <h2>link</h2>"
// // aTag.innerHTML= 'this is a <h2>link</h2>';

// // aTag.innerHTML +='!!!';

// // // print out the ul's innerText and the Ul's inner Html
// // const unorderdlist= document.querySelector('ul');
// // console.log(unorderdlist.innerText);
// // console.log(unorderdlist.innerHTML);


// // const input = document.querySelector('input');
// // const  currentValue = input.value;
// // console.log(currentValue );
// // input.value= 'hello from js'

// // // this is only for form related data
// // // inputs textarea, dropdowns, checkboxes


// //getting styles
// // 1. select the dom node
// const heading = document.querySelector('h1');
// //2. ask for all of the current styles
// const styles = getComputedStyle(heading);
// //3. ask for the different properties
// console.log(styles.color);

// console.log(styles.fontSize); // font-size -> fontSize
// console.log(styles.textDecoration);
// console.log(styles.border);


// // find the a tag
// const aTag = document.querySelector('a');

// // get all of the current styles for the 'a' tag
// const aTagStyles = getComputedStyle(aTag);

// //print out the text color, 
// // display, font size and the 
// // text decoration of the a tag

// console.log(aTagStyles.color);
// console.log(aTagStyles.display);
// console.log(aTagStyles.fontSize);
// console.log(aTagStyles.textDecoration);

// // find the image
// console.log('find the image');
// const image = document.querySelector('img');


// // print out the border, width, height 
// // and the border-radious properties

// const imageStyles = getComputedStyle (image);
// console.log(imageStyles.border);
// console.log(imageStyles.width);
// console.log(imageStyles.height);
// console.log(imageStyles.borderRadius);


// console.log('-------');
// console.log(aTagStyles);

// const heading = document.querySelector('h1');
// heading.style.color= 'hotpink';
// heading.style.background ='green';
// heading.style.fontSize='100px';

// // change styles for image

// const image = document.querySelector('img');
// image.style.width = '300px';
// image.style.height = '400px';
// image.style.border = '20px solid pink';



// // creating elements
// 1.create the Element and store it in a js variable
// 2.change it (using things like .innerText, .style)
// 3. put it on the page.

const newHeading = document.createElement('h1');
newHeading.innerText ='Created by javaScript'

const targetDiv = document.querySelector('div.dynamic');
targetDiv.appendChild(newHeading);


const newImg = document.createElement('img');
newImg.setAttribute('src', 'https://placecage.com/300/300');
newImg.style.border = '4px dashed purple';
document.body.appendChild(newImg);



const tweet = 'this is a tweet!';
const author ='ahlam42'
const content =`${tweet}, posted by ${author}`;
const newParagraph = document.createElement('p');
newParagraph.innerText= content;
newParagraph.style.color ='blue';

const newTweetsDiv = document.querySelector('.newTweets');
newTweetsDiv.appendChild(newParagraph);