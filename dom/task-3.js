//console.log(document.URL);
//console.log(document.title);
//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//header.style.borderBottom='solid 3px #000'

// var items=document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[1]);
// items[2].textContent="hello"
// items[2].style.backgroundColor='green';
// for(i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold'
//}
// var odd = document.querySelectorAll('.list-group-item');
// odd[1].style.backgroundColor = 'green';

// var odd = document.querySelectorAll('.list-group-item');
// odd[1].style.color = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
// odd[i].style.backgroundColor = 'green';
// }


//var itemList=document.querySelector('#items')
 //console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor='black'

// console.log(itemList.parentNode.parentNode)
// itemList.parentNode.parentNode.style.backgroundColor='green'
// itemList.parentNode.parentNode.parentNode.style.backgroundColor='pink'

// console.log(itemList.childNodes)
// console.log(itemList.lastElementChild)
// console.log(itemList.lastChild)
// console.log(itemList.firstElementChild)
// console.log(itemList.firstChild)
var newDiv=document.createElement('div')
newDiv.className='hello'
newDiv.id='hello1'
newDiv.setAttribute('title','hello Div')
var newDivText=document.createTextNode('hello ')
newDiv.appendChild(newDivText)
var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')
var list=document.querySelector('ul.list-group-item')
var li=document.querySelector('ul li')
console.log(newDiv)
container.insertBefore(newDiv,h1)

list.insertBefore(newDiv,li)





