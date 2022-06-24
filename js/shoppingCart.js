//****************************************************/
// This Function is to add/reomve numbers in product page

let itemPrice = document.getElementById("item_price").innerText;
let totalPrice = document.getElementById("total_price").innerText;
function increaseValueOne() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").value = value;
  totalPrice = itemPrice * value;
  document.getElementById("total_price").innerText = totalPrice;
}
function decreaseValueOne() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("number").value = value;
  totalPrice = itemPrice * value;
  document.getElementById("total_price").innerText = totalPrice;
}

//****************************************************/
//********************************************/
let itemPriceTwo = document.getElementById("item_priceTwo").innerText;
let totalPriceTwo = document.getElementById("total_priceTwo").innerText;
function increaseValueTwo() {
  var valueTwo = parseInt(document.getElementById("numberTwo").value, 10);
  valueTwo = isNaN(valueTwo) ? 0 : valueTwo;
  valueTwo++;
  document.getElementById("numberTwo").value = valueTwo;
  totalPriceTwo = itemPriceTwo * valueTwo;
  document.getElementById("total_priceTwo").innerText = totalPriceTwo;
}
function decreaseValueTwo() {
  var valueTwo = parseInt(document.getElementById("numberTwo").value, 10);
  valueTwo = isNaN(valueTwo) ? 0 : valueTwo;
  valueTwo < 1 ? (valueTwo = 1) : "";
  valueTwo--;
  document.getElementById("numberTwo").value = valueTwo;
  totalPriceTwo = itemPriceTwo * valueTwo;
  document.getElementById("total_priceTwo").innerText = totalPriceTwo;
}
//*******************************************************************************/
let itemPriceThree = document.getElementById("item_priceThree").innerText;
let totalPriceThree = document.getElementById("total_priceThree").innerText;
function increaseValueThree() {
  var valueThree = parseInt(document.getElementById("numberThree").value, 10);
  valueThree = isNaN(valueThree) ? 0 : valueThree;
  valueThree++;
  document.getElementById("numberThree").value = valueThree;
  totalPriceThree = itemPriceThree * valueThree;
  document.getElementById("total_priceThree").innerText = totalPriceThree;
}
function decreaseValueThree() {
  var valueThree = parseInt(document.getElementById("numberThree").value, 10);
  valueThree = isNaN(valueThree) ? 0 : valueThree;
  valueThree < 1 ? (valueThree = 1) : "";
  valueThree--;
  document.getElementById("numberThree").value = valueThree;
  totalPriceThree = itemPriceThree * valueThree;
  document.getElementById("total_priceThree").innerText = totalPriceThree;
}
//***********************************************************************************************************/
let itemPriceFour = document.getElementById("item_priceFour").innerText;
let totalPriceFour = document.getElementById("total_priceFour").innerText;
function increaseValueFour() {
  var valueFour = parseInt(document.getElementById("numberFour").value, 10);
  valueFour = isNaN(valueFour) ? 0 : valueFour;
  valueFour++;
  document.getElementById("numberFour").value = valueFour;
  totalPriceFour = itemPriceFour * valueFour;
  document.getElementById("total_priceFour").innerText = totalPriceFour;
}
function decreaseValueFour() {
  var valueFour = parseInt(document.getElementById("numberFour").value, 10);
  valueFour = isNaN(valueFour) ? 0 : valueFour;
  valueFour < 1 ? (valueFour = 1) : "";
  valueFour--;
  document.getElementById("numberFour").value = valueFour;
  totalPriceFour = itemPriceFour * valueFour;
  document.getElementById("total_priceFour").innerText = totalPriceFour;
}
//******************************************************************************************************************/
let itemPriceFive = document.getElementById("item_priceFive").innerText;
let totalPriceFive = document.getElementById("total_priceFive").innerText;
function increaseValueFive() {
  var valueFive = parseInt(document.getElementById("numberFive").value, 10);
  valueFive = isNaN(valueFive) ? 0 : valueFive;
  valueFive++;
  document.getElementById("numberFive").value = valueFive;
  totalPriceFive = itemPriceFive * valueFive;
  document.getElementById("total_priceFive").innerText = totalPriceFive;
}
function decreaseValueFive() {
  var valueFive = parseInt(document.getElementById("numberFive").value, 10);
  valueFive = isNaN(valueFive) ? 0 : valueFive;
  valueFive < 1 ? (valueFive = 1) : "";
  valueFive--;
  document.getElementById("numberFive").value = valueFive;
  totalPriceFive = itemPriceFive * valueFive;
  document.getElementById("total_priceFive").innerText = totalPriceFive;
}
//********************************************************************************************************************/
let itemPriceSix = document.getElementById("item_priceSix").innerText;
let totalPriceSix = document.getElementById("total_priceSix").innerText;
function increaseValueSix() {
  var valueSix = parseInt(document.getElementById("numberSix").value, 10);
  valueSix = isNaN(valueSix) ? 0 : valueSix;
  valueSix++;
  document.getElementById("numberSix").value = valueSix;
  totalPriceSix = itemPriceSix * valueSix;
  document.getElementById("total_priceSix").innerText = totalPriceSix;
}
function decreaseValueSix() {
  var valueSix = parseInt(document.getElementById("numberSix").value, 10);
  valueSix = isNaN(valueSix) ? 0 : valueSix;
  valueSix < 1 ? (valueSix = 1) : "";
  valueSix--;
  document.getElementById("numberSix").value = valueSix;
  totalPriceSix = itemPriceSix * valueSix;
  document.getElementById("total_priceSix").innerText = totalPriceSix;
}
//*********************************************************************************************************/
// let firstTotal = document.getElementById("total_price").innerText;
// console.log(firstTotal);
// let subTotalPrice = document.querySelectorAll(".total_price");
// let firstResult = 0;
// firstResult += totalPrice;
// console.log(firstResult);
// console.log(subTotalPrice);
// subTotalPrice.forEach((each) => {
//   console.log(each.innerText);
//   let result = each.innerText;
//   result += result;
//   console.log(result);
// });

let finalTotal = document.querySelector(".sub_totalNumber");
// let newSpanOfTotal = document.createElement("span");
// finalTotal.appendChild(newSpanOfTotal);
let allIncAndDec = document.querySelectorAll(".changeTotal");
allIncAndDec.forEach((element) => {
  element.addEventListener("click", function () {
    let allTotal = document.querySelectorAll(".total_price");
    let finalArray = [];
    allTotal.forEach((element) => {
      let val = element.innerText;
      let numVal = parseInt(val);
      finalArray.push(numVal);
    });
    finalTotal.innerText = finalArray.reduce((total, current) => {
      return total + current;
    });
  });
});
