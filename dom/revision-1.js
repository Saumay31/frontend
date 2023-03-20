//EXAMIE THE DOCUMENT OBJECT//

//console.dir(document);//=>we examine all ythe stuff of html page
//console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123=>we can change the title
// console.log(document.doctype);//=> output=<!DOCTYPE html>
// console.log(document.head);
// console.log(document.body); 
// console.log(document.all);
// //document.all[10].textContent='saumay'//=>change the output to saumay from item lister
// console.log(document.forms);
// console.log(document.links);
//console.log(document.images);

// GET ELEMENT BY ID //

//console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title')
// var header=document.getElementById('main-header')
//console.log(headerTitle);
//headerTitle.textContent='hello';
//headerTitle.innerText='goodbye';
//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h2>hello</h2>';
//headerTitle.style.borderBottom='solid 3px #000'
//header.style.borderBottom='solid 3px #000'

// GET ELEMENT BY CLASSNAME //

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='javascript';
// items[1].style.backgroundColor='#000';
// items[1].style.fontWeight='bold';

//items.style.backgroundColor='#000'//=> this is not run b/c this is the html collection we have to loop this//

// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='#f4f4f4';
// }

// GET ELEMENT BY TAF NAME //

//var li = document.getElementsByTagName('li');
//console.log(li);
// console.log(li[1]);
//li[1].textContent='javascript';
//li[2].style.backgroundColor='green';
//li[1].style.fontWeight='bold';

//for(var i=0;i<li.length;i++){
//      li[i].style.fontWeight='bold';
//   }

// QUERY SELECTOR //=>it works only for one but queryselectorall works for all //

// var header = document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #000';

// var input = document.querySelector('input');
// input.value='wright something';

// var submit = document.querySelector('input[type="submit"]');
// submit.value='send';

// var item = document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color='green';

// var nthItem = document.querySelector('.list-group-item:nth-child(2)');
// nthItem.style.color='grey';


// QUERY SELECTOR ALL // 

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[1].textContent='Select items'; 

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='#f4f4f4'
    even[i].style.backgroundColor='#ccc'
}