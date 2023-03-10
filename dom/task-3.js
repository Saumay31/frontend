//console.log(document.URL);
//console.log(document.title);
//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//header.style.borderBottom='solid 3px #000'

var items=document.getElementsByClassName('list-group-item')
console.log(items);
console.log(items[1]);
items[2].textContent="hello"
items[2].style.backgroundColor='green';
for(i=0;i<items.length;i++){
    items[i].style.fontWeight='bold'
}