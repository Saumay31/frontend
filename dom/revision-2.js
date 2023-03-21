// TRAVERSING THE DOM //
var item = document.querySelector('#items');

// parent node //

// console.log(item.parentNode);
// item.parentNode.style.backgroundColor='#f4f4f4';
// console.log(item.parentNode.parentNode);
// console.log(item.parentNode.parentNode.parentNode);

// parent element //
// console.log(item.parentElement);
// item.parentElement.style.backgroundColor='#f4f4f4';
// console.log(item.parentElement.parentElement);

// child node//
//console.log(item.childNodes);

// console.log(item.children);//=>best than childnode
//  console.log(item.children[1]);
//  item.children[1].style.backgroundColor='#ccc'

//first child //

//console.log(item.firstChild);

// first element child //

// console.log(item.firstElementChild);
// item.firstElementChild.textContent='hello'

//last child //

//console.log(item.lastChild);

// last element child //

// console.log(item.lastElementChild);
//item.lastElementChild.textContent='hello';

// next sibling //
//console.log(item.nextSibling);

//next element sibiling //
//console.log(item.nextElementSibling);// </ul></div> between ul and div we use span then we see the sibling same for next sibling

//previous sibling //
//console.log(item.previousSibling);

// previous element sibling //
// console.log(item.previousElementSibling);
// item.previousElementSibling.style.color='green'

// create element for list //
// var newLi = document.createElement("li");
// newLi.className='list-group-item';
// console.log(newLi);
// newLi.textContent='hello world';
// var item = document.querySelector('.list-group');
// var lii=document.querySelector('li');
// item.insertBefore(newLi,lii)

// create element for header //
// var newDiv = document.createElement('div');
// console.log(newDiv) 
// newDiv.textContent='Bharat';
// var divFetch = document.querySelector('.container');
// var beforeFetch = document.querySelector('h1');
// divFetch.insertBefore(newDiv,beforeFetch);
// newDiv.style.fontSize='25px'

//create element by id //
var newId = document.createElement('div');
newId.textContent='Bharat';
//newId.className='list-group-item';
var fetchId = document.getElementById('main-header');
fetchId.insertBefore(newId,fetchId.children[0]) 