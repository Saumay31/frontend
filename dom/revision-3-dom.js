var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click',removeItem);
// fiter/search event 
filter.addEventListener('keyup',filterItem);

// Add item
function addItem(e){
    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('item').value;
    var newItem2=document.getElementById('item2').value;
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.textContent=newItem + " "+ newItem2;
    
    //create delete button //
    var deleteBtn = document.createElement('button')

    //add class 
    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    //add text to button//
    deleteBtn.textContent='X'

    // append to li //
    li.appendChild(deleteBtn); 

    //add edit button
    var editBtn=document.createElement('button');

    //add class
    editBtn.className="float-right";

    //add text
    editBtn.textContent="Edit";

    // append to li because it show in li
    li.appendChild(editBtn);
    
    // Append li to list
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure')){
            var li = e.target.parentNode;
            itemList.removeChild(li);
        }
    }
}

function filterItem(e){
    var text = e.target.value.toLowerCase();
    
    var takeItem = itemList.getElementsByTagName('li');
    
    Array.from(takeItem).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
           item.style.display = 'block';
         }else{
            item.style.display = 'none'
         }
    });
   Array.from(takeItem).forEach(function(item2){
    var itemName=item2.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text)!=-1){
        item2.style.display='block';
    }else{
        item2.style.display='none';
    }
   })
}











