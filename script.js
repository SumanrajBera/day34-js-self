let clickEve = document.querySelector(".btn-click");
let clickPara = document.querySelector(".para-click");
let clickCount = 0
clickEve.addEventListener("click", function() {
    clickCount++;
    clickPara.textContent = `→ Clicked ${clickCount} times`;
})

let dblclickEve = document.querySelector(".btn-dblClick");
let dblclickPara = document.querySelector(".para-dblClick");
let dblclickCount = 0
dblclickEve.addEventListener("dblclick", function() {
    dblclickCount++;
    dblclickPara.textContent = `→ Double Clicked ${dblclickCount} times`;
})

let changeEve = document.querySelector("#change-eve");
let changePara = document.querySelector(".para-change");
changeEve.addEventListener("change", function(dets) {
    changePara.textContent = `→ You selected ${dets.target.value}`
})

let paraKey = document.querySelector(".para-key");
document.addEventListener("keydown", function(dets) {
    paraKey.innerHTML = `→ You pressed: <span>${dets.key}</span>`
})

let inp = document.querySelector(".inp")
let paraInp = document.querySelector(".para-input");
inp.addEventListener("input", function(dets) {
    paraInp.textContent = `What you are typing: ${dets.target.value}`
})

let mouseEve = document.querySelector(".box")
let paraMouse = document.querySelector(".para-mouse")
mouseEve.addEventListener("mouseover", function(dets) {
    paraMouse.textContent = "Mouse over hover me";
})

mouseEve.addEventListener("mouseout", function() {
    paraMouse.textContent = "Mouse out of hover";
})