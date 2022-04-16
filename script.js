// BOOKS SEARCH //

let filter = document.getElementById('filter');
let itemList = document.getElementById('items'); 

//filter event
if (filter){ //hack 
  filter.addEventListener('keyup',filterItems);
}


//filter items
function filterItems(e){
    //convert text to lowercadse
    let text = e.target.value.toLowerCase();
    //get li
    let items = itemList.getElementsByTagName('li');
    
    

    //convert HTML collection to an array
    Array.from(items).forEach(function(item){
        console.log(item);
        let itemName = item.children[0].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}


//ADD COMENTS
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
    console.log('notika');
    // get input value
    let newItem = document.getElementById('item').value;

    addComent(newItem);  // šeit pievieno html
    addToStorage(newItem); //šajā brīdī kaut kas array jau ir (vai nu tukšums vai komentārs)
}
function addToStorage(coment){
  coments.push(coment); //ieliku iepriekš izveidotajā array 47 vai 53 rindiņa, liek array, lai varētu pārtaisīt par string un ieliekt locastorage
  localStorage.setItem('coments',JSON.stringify(coments)); //ieliek komentāru locastorage array ar komentāriem
}

function addComent(coment){
  //create new li element
  let li = document.createElement('li');
  //add class
  li.className = 'list-group-item';
  // add text node with input value
  li.appendChild(document.createTextNode(coment)); //text node is variable newItem, ko ievada lietotājs

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
if(itemList){
  itemList.addEventListener('click', removeItem);
}


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
if(btnSend) {
  btnSend.addEventListener('click', showMessage);
}


function showMessage(){
    alert('We Got Your message!\nWe Will answer in 2 to 5 days!\nThank You!');
  };

$(() => {
  // === Scroll to top button ===
  $(window).scroll(function () {
    if (
      // button appears when number of pixels from the top of body or html (documentElement) when scrolled is > 500
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      $(".to-top").css("display", "block");
    } else {
      $(".to-top").css("display", "none");
    }
  });
  $(".to-top").on("click", () => {
    $(window).scrollTop(0);
  });

  //  === Active state navigation bar ===

  //   1. gets current page URL
  let url = window.location.href;
  //   2. removes # from url if any
  url = url.substring(
    0,
    url.indexOf("#") === -1 ? url.length : url.indexOf("#")
  );
  //   3. removes parameters from URL if any
  url = url.substring(
    0,
    url.indexOf("?") == -1 ? url.length : url.indexOf("?")
  );
  //   4. selects file name
  url = url.substring(url.lastIndexOf("/") + 1);
  //   5. if file name is not available, set it to index.html
  if (url === "") {
    url = "index.html";
  }
  //   6. loop through nav-item links
  $(".nav-item a").each(function () {
    //   select href
    let href = $(this).attr("href");
    // check filename
    if (url === href) {
      // add active class
      $(this).addClass("active-state");
    }
  });

  //   === Slider ===

  // Slider Top
  // moves the left slide to the left by adding negative margin
  const nextSlideTop = () => {
    let currentSlide = $(".slider-top .slide:first");
    let width = currentSlide.width();
    currentSlide.animate({ "margin-left": -width }, 1000, function () {});
    console.log(width);
  };
  // moves the left slide back in its original place
  const previousSlideTop = () => {
    let currentSlide = $(".slider-top .slide:first");
    currentSlide.animate({ "margin-left": "0px" }, 1000);
  };
  // adds active class to the respective dot
  let slideIndex = 1;
  const activeTop = (slideIndex) => {
    let dots = $(".dots-top .dot");
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    dots[slideIndex - 1].className += " dot-active";
  };
  activeTop(slideIndex);

  $(".dots-top .dot-left").on("click", () => {
    previousSlideTop();
    activeTop((slideIndex = 1));
  });

  $(".dots-top .dot-right").on("click", () => {
    nextSlideTop();
    activeTop((slideIndex = 2));
  });

  // Slider Mid (three slides)
  const SlideMid = () => {
    let currentSlide = $(".slider-mid .slide:first");
    let width = currentSlide.width();
    currentSlide.animate({ "margin-left": -width }, 1000, function () {});
  };

  const SlideRight = () => {
    let currentSlide = $(".slider-mid .slide:first");
    let width = currentSlide.width() * 2;
    currentSlide.animate({ "margin-left": -width }, 1000);
  };

  const SlideLeft = () => {
    let currentSlide = $(".slider-mid .slide:first");
    currentSlide.animate({ "margin-left": "0px" }, 1000);
  };

  const activeMid = (slideIndex) => {
    let dots = $(".dots-mid .dot");
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    dots[slideIndex - 1].className += " dot-active";
  };
  activeMid(slideIndex);

  $(".dots-mid .dot-left").on("click", () => {
    SlideLeft();
    activeMid((slideIndex = 1));
  });

  $(".dots-mid .dot-mid").on("click", () => {
    SlideMid();
    activeMid((slideIndex = 2));
  });

  $(".dots-mid .dot-right").on("click", () => {
    SlideRight();
    activeMid((slideIndex = 3));
  });

  // Slider Bottom
  const nextSlideBottom = () => {
    let currentSlide = $(".slider-bottom .slide:first");
    let width = currentSlide.width();
    currentSlide.animate({ "margin-left": -width }, 1000, function () {});
    console.log(width);
  };

  const previousSlideBottom = () => {
    let currentSlide = $(".slider-bottom .slide:first");
    currentSlide.animate({ "margin-left": "0px" }, 1000);
  };

  const activeBottom = (slideIndex) => {
    let dots = $(".dots-bottom .dot");
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    dots[slideIndex - 1].className += " dot-active";
  };
  activeBottom(slideIndex);

  $(".dots-bottom .dot-left").on("click", () => {
    previousSlideBottom();
    activeBottom((slideIndex = 1));
  });

  $(".dots-bottom .dot-right").on("click", () => {
    nextSlideBottom();
    activeBottom((slideIndex = 2));
  });

  // ===
});

