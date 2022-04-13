alert('hello');
// BOOKS //

let filter = document.getElementById('filter');
let itemList = document.getElementById('items'); 

//filter event
filter.addEventListener('keyup',filterItems);

//filter items
function filterItems(e){
    //convert text to lowercadse
    let text = e.target.value.toLowerCase();
    //get li
    let items = itemList.getElementsByTagName('li');
    console.log(items);
     

    //convert HTML collection to an array
    Array.from(items).forEach(function(item){
        let itemName = item.lastChild.textContent; // pazūd nosaukumi, bet kā dabūt pārējo card prom?
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}


//ADD COMENTS
let form = document.getElementById('addForm');


// FOrm submit event
form.addEventListener('submit',addItem); // tikko tiek nospiests submint, tā tiek izsaukta funkcija addItem

//add item funkcija
function addItem(e){
    e.preventDefault(); // šo vajag paredzēt pie submit/apstirināt

    // get input value
    let newItem = document.getElementById('item').value;

    //create new li element
    let li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem)); //text node is variable newItem, ko ievada lietotājs

    //create the delite button element
    let deleteBtn = document.createElement('button');

    //add clases to delite button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'; 
    
    //appent text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //now that we have all that we have to append the button into li
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

//remove item nospiežot x

itemList.addEventListener('click', removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){ //jo bez šī, ķer visus klikšķus, aks ir iekšā li ielikti, tāpēc vajag if statemnt, lai dabūtu tieši uz tās pogas
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li); // li is a child of a itemList
        }
    }
}




//contacts//
//alert for Send button
const btnSend = document.getElementById('send');
btnSend.addEventListener('click', showMessage)

function showMessage(){
    alert('We Got Your message!\nWe Will answer in 2 to 5 days!\nThank You!');
  };
