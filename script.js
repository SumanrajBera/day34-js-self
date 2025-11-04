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

let ul = document.querySelector("ul")
ul.addEventListener("click", function(dets) {
    if(dets.target.nodeName === "LI") {
        dets.target.style.textDecoration = "line-through"
    }
})

let a = document.querySelector(".a")
let b = document.querySelector(".b")

a.addEventListener("click", function() {
    alert("A's event was triggered")
})

b.addEventListener("click", function() {
    alert("B's event was triggered")
})


let aCap = document.querySelector(".capture .a")
let bCap = document.querySelector(".capture .b")
let cCap = document.querySelector(".capture .c")
let btnCap = document.querySelector(".capture button")

aCap.addEventListener("click", function() {
    alert("A's event was triggered")
}, true)

bCap.addEventListener("click", function() {
    alert("B's event was triggered")
}, true)

cCap.addEventListener("click", function() {
    alert("C's event was triggered")
})

btnCap.addEventListener("click", function() {
    alert("Button event was triggered")
})

let form = document.querySelector("#form2");
form.addEventListener("click", function(dets) {
    dets.preventDefault();
})