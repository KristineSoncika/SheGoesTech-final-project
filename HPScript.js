///////////////////////////////////////
//ADD COMENTS and create LOCAL STORAGE
let itemList = document.getElementById('items'); 
let form = document.getElementById('addForm');
console.log(form);



// FOrm submit event
if(form){
  form.addEventListener('submit',addItem); // tikko tiek nospiests submint, tā tiek izsaukta funkcija addItem
}

let coments = JSON.parse(localStorage.getItem('coments')); // kā string saglabājas komentāri
if (coments) {
  coments.forEach(function(coment){  // ja ir storage komentāri (kuri salikti array), tad katru komentāru pievieno html
    addComent(coment);
  });
} else {  
  coments = []; // kad nekas nebūs komentāros, uztaisās tukšs array, lai ir kaut kas kur likt iekšā
}

//add item funkcija
function addItem(e){ 
    e.preventDefault(); // šo vajag paredzēt pie submit/apstirināt
   
    // get input value
    let newItem = document.getElementById('item').value;

    addComent(newItem);  // šeit pievieno html
    addToStorage(newItem); //šajā brīdī kaut kas array jau ir (vai nu tukšums vai komentārs)
}
function addToStorage(coment){
  coments.push(coment); //ieliku iepriekš izveidotajā array 16 vai 20 rindiņa, liek array, lai varētu pārtaisīt par string un ieliekt locastorage
  localStorage.setItem('coments',JSON.stringify(coments)); //ieliek komentāru locastorage array ar komentāriem
}

function addComent(coment){
  //create new li element
  let li = document.createElement('li');
  //add class
  li.className = 'list-group-item';
  // add text node with input value
  li.appendChild(document.createTextNode(coment)); //text node is variable newItem, ko ievada lietotājs


  itemList.appendChild(li);
}

