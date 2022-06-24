//********************************************/
// This fucntion is for changing the display attribute of buttonSearch div from None Into Block when the user click. Also, the user can change the selected attribut once he click.

let button = document.getElementById("buttonSearch");
let list = document.getElementById("dropdown_three");
list.style.display = "none";
button.addEventListener("click", (eventOne) => {
  let myOptions = document.querySelectorAll(".language");
  if (list.style.display == "none") {
    list.style.cssText = "display:block; z-index:5";
    myOptions.forEach((snglEl) => {
      snglEl.addEventListener("click", function () {
        let myMainTxt = document.querySelector("#text_selection");

        myMainTxt.innerText = snglEl.innerText;
      });
    });
  } else {
    list.style.display = "none";
  }
});
//****************************************************/
//****************************************************/
// This fucntion is for changing the display attribute of buttonSearch div from None Into Display when the user click.
const buttonTwo = document.getElementById("categories");
const listTwo = buttonTwo.lastElementChild;
listTwo.style.display = "none";
buttonTwo.addEventListener("click", (eventTwo) => {
  if (listTwo.style.display == "none") {
    listTwo.style.display = "block";
  } else {
    listTwo.style.display = "none";
  }
});
//********************************************/
// This fucntion is for automatic slider using setinterval
let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 6000);

//****************************************************/
//****************************************************/
// This fucntion is for changing the text contents of buttonSearch when click on dropdownTwo Elements.

//****************************************************/

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});
//****************************************************/

//****************************************************/
// This function is for Creating a Countdown Timer

// Set the date we're counting down to
var countDownDate = new Date("Aug 01, 2022 24:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date

  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the Days element with id="days"
  document.getElementById("days").innerHTML = days;

  // Display the result in the Hours element with id="hours"
  document.getElementById("hours").innerHTML = hours;

  // Display the result in the Minutes element with id="minutes"
  document.getElementById("minutes").innerHTML = minutes;

  // Display the result in the Seconds element with id="seconds"
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = " ";
    document.getElementById("hours").innerHTML = " ";
    document.getElementById("minutes").innerHTML = " ";
    document.getElementById("seconds").innerHTML = " ";
    document.getElementById("days_text").style.cssText = "display: none";
    document.getElementById("hours_text").style.cssText = "display: none";
    document.getElementById("minutes_text").style.cssText = "display: none";
    document.getElementById("seconds_text").style.cssText = "display: none";
    document.getElementById("expired").style.cssText = "display: flex";
  }
}, 1000);
//*******************************************************/

//****************************************************/
// This Function is to change the display of Basket Counter from none to block and then, it updates the Basket Counter whenever the products cards clicked.
const cardButton = document.querySelectorAll(".button_five");
let totItems = 0;
cardButton.forEach((productEl) => {
  productEl.addEventListener("click", function () {
    const basketCounter = document.getElementById("basket_counter");
    totItems += 1;
    basketCounter.style.display = "block";
    basketCounter.innerHTML = totItems;
  });
});

//********************************************/
// This fucntion is for automatic slider using setinterval
let auto = 5;
setInterval(function () {
  document.getElementById("radio" + auto).checked = true;
  auto++;
  if (auto > 8) {
    auto = 5;
  }
}, 6000);

//****************************************************/
// This Function is to add/reomve numbers in product page
function increaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("number").value = value;
}
//****************************************************/
//*******************************************************************************************************/
// This function is to Change Border size

let manyOptions = document.querySelectorAll(".brdBold");
manyOptions.forEach((size) => {
  size.addEventListener("click", function () {
    manyOptions.forEach((link) => link.classList.remove("activeBrd"));
    this.classList.add("activeBrd");
    let ukSize = document.querySelector(".uk_size");
    ukSize.innerHTML = size.innerHTML;
  });
});
//*********************************************************************************************************/
//********************************************/
// This fucntion is for opening the size_guide container by changing the display attribute of size_guide conatiner from None Into Block when the user click. Also, to close the size-guide container by changing the display attribute of size_guide conatiner from Block Into None when the user click.

let sizeGuide = document.querySelector(".size_guide");
let listFive = document.querySelector(".container_container");
let closeGuideTwo = document.querySelector(".button__Btn");
listFive.style.display = "none";
sizeGuide.addEventListener("click", (eventThree) => {
  if (listFive.style.display == "none") {
    // listFive.style.display = "flex";
    listFive.style.cssText = "display: flex; z-index: 10";
  } else {
    listFive.style.display = "none";
  }
});
closeGuideTwo.addEventListener("click", (eventThree) => {
  listFive.style.display = "none";
});
//****************************************************/
//********************************************/
// This Function for changing the stars from empty background to dark yellow background
let starRate = document.querySelectorAll(".star_rate");

starRate.forEach((star) => {
  star.addEventListener("click", function () {
    // this.style.cssText = "color: #fad02c";
    this.classList.toggle("fa-solid");
  });
});
//****************************************************/
//********************************************/
// This fucntion is for swapping the product details and the product table when pressing

let productOne = document.querySelector(".productMore_one");
let productTwo = document.querySelector(".productMore_two");
let productThree = document.querySelector(".productMore_three");
let productDetails = document.querySelector(".productMore_details");
let productTable = document.querySelector(".productTable_details");
productTable.style.display = "none";
productOne.addEventListener("click", (event) => {
  productDetails.style.display = "flex";
  productTable.style.display = "none";
});
productTwo.addEventListener("click", (event) => {
  productDetails.style.display = "none";
  productTable.style.display = "block";
});
productThree.addEventListener("click", (event) => {
  productDetails.style.display = "none";
  productTable.style.display = "block";
});
//****************************************************/
