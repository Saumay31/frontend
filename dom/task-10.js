var form=document.getElementById("my-form");
form.addEventListener('click',local);
var n=document.getElementById('name')
var em=document.getElementById('email')
function local(e){
    e.preventDefault();
    localStorage.setItem('name',n.value)
    localStorage.setItem('email',em.value)
}
console.log(localStorage)