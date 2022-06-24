//***************************************************************/
// This Function to swapp between multi containers when clicking different side menue buttons

let accIcon = document.getElementById("account_icon");
let aboutIcon = document.getElementById("about-icon");
let workIcon = document.getElementById("work-icon");
let mailIcon = document.getElementById("mail-icon");

let viewPort = document.querySelector(".st_viewport");
let viewPortTwo = document.querySelector(".st_viewportTwo");
let viewPortThree = document.querySelector(".st_viewportThree");
let viewPortFour = document.querySelector(".st_viewportFour");

// viewPortTwo.style.display = "none";
// viewPortThree.style.display = "none";
// viewPortFour.style.display = "none";

accIcon.addEventListener("click", (event) => {
  viewPort.style.display = "block";
  accIcon.style.backgroundImage = "linear-gradient(to left,#82ae46,#82ae46)";
  viewPortTwo.style.display = "none";
  aboutIcon.style.backgroundImage = "linear-gradient(to left,#210e7f,#210e7f)";
  viewPortThree.style.display = "none";
  viewPortFour.style.display = "none";
  workIcon.style.backgroundImage = "linear-gradient(to left,#210e7f,#210e7f)";
  mailIcon.style.backgroundImage = "linear-gradient(to left,#210e7f,#210e7f)";
});
aboutIcon.addEventListener("click", (event) => {
  viewPort.style.display = "none";
  accIcon.style.backgroundImage = "linear-gradient(to left,#210e7f,#210e7f)";
  viewPortTwo.style.display = "block";
  aboutIcon.style.backgroundImage = "linear-gradient(to left,#82ae46,#82ae46)";
  viewPortThree.style.display = "none";
  viewPortFour.style.display = "none";
  workIcon.style.backgroundImage = "linear-gradient(to left,#210e7f,#210e7f)";
  mailIcon.style.backgroundImage = "linear-gradient(to left,#210e7f,#210e7f)";
});
workIcon.addEventListener("click", (event) => {
  viewPort.style.display = "none";
  viewPortTwo.style.display = "none";
  viewPortThree.style.display = "block";
  viewPortFour.style.display = "none";
  workIcon.style.backgroundImage = "linear-gradient(to left,#82ae46,#82ae46)";
  accIcon.style.backgroundImage = "linear-gradient(to left,#210e7f,#210e7f)";
  aboutIcon.style.backgroundImage = "linear-gradient(to left,#210e7f,#210e7f)";
  mailIcon.style.backgroundImage = "linear-gradient(to left,#210e7f,#210e7f)";
});
mailIcon.addEventListener("click", (event) => {
  viewPort.style.display = "none";
  viewPortTwo.style.display = "none";
  viewPortThree.style.display = "none";
  viewPortFour.style.display = "block";
  workIcon.style.backgroundImage = "linear-gradient(to left,#210e7f,#210e7f)";
  accIcon.style.backgroundImage = "linear-gradient(to left,#210e7f,#210e7f)";
  aboutIcon.style.backgroundImage = "linear-gradient(to left,#210e7f,#210e7f)";
  mailIcon.style.backgroundImage = "linear-gradient(to left,#82ae46,#82ae46)";
});
//**************************************************************************************************************/
//**************************************************************************************************************/
// This function is for editing the fields and make the inner text saved.
function edt(myDv) {
  let text = document.querySelector("._name");
  let checkMrk = myDv.children[0].getAttribute("data-edt");
  if (checkMrk === "close") {
    myDv.previousElementSibling.setAttribute("contenteditable", "true");
    myDv.children[0].setAttribute("data-edt", "open");
    myDv.children[0].setAttribute("class", "fa-solid fa-floppy-disk edit_one");
  } else if (checkMrk === "open") {
    myDv.previousElementSibling.removeAttribute("contenteditable");
    myDv.children[0].setAttribute("data-edt", "close");
    myDv.children[0].setAttribute("class", "far fa-edit edit_one ");
  }
}

//******************************************************************************************************** */
//*******************************************************************************************************************/
// Selects all divs with the .js-target class.
const targets = document.querySelectorAll(".js-target");

/**
 * Show the target that has an id that matches
 * with the hash value in the URL and hides the
 * ones that don't match.
 */
const toggleTargets = () => {
  const { hash } = window.location;
  if (hash === "") {
    return;
  }
  /**
   * Loop over each target and check if the id matches
   * the hash value. If it does, then remove the hidden
   * class, if not, add the hidden class.
   */
  targets.forEach((target) => {
    if (`#${target.id}` === hash) {
      target.classList.remove("js_hidden");
    } else {
      target.classList.add("js_hidden");
    }
  });
};
/**
 * Immediately execute the toggleTargets function when
 * the script is loaded.
 */
toggleTargets();

/**
 * Whenever the hash changes when on the page, call toggleTargets
 * again to re-evaluate if the hash matches any div.
 */
window.addEventListener("hashchange", toggleTargets);
