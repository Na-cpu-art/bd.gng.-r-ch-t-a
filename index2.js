const open = document.getElementById("yellownote");
const modal1 = document.querySelector(".modal1");
const overlay = document.getElementById("overlay");
const close = document.getElementById("close1");
const error = document.getElementById("error")
const hiddentext = document.getElementById("popuphiddentext")
const close67 = document.getElementById("close67")

//pop up of yellow notepad
open.addEventListener("click", function() {
    modal1.classList.add("active");
    overlay.classList.add("active");
}
);

close.addEventListener("click", function() {
    modal1.classList.remove("active");
    overlay.classList.remove("active");
}
);
//end


//submit and collect input from guessing number

let history = [];
let historyxy = [];
let guess;
let real;
let count = 0;
function randomreal(){
real = String(Math.floor(Math.random()* 999999 )).padStart(6, '0');}
randomreal();
const tbodyEl = document.querySelector('tbody');

document.getElementById("submit1").onclick = function(){

    guess = document.getElementById("input1").value;
    console.log(guess);
    let numstr = String(guess);

if (numstr.length == 6){
    error.classList.remove("showed");
    history.push(numstr);
    console.log(history);
    let digit1 = numstr.charAt(0)
    let digit2 = numstr.charAt(1)
    let digit3 = numstr.charAt(2)
    let digit4 = numstr.charAt(3)
    let digit5 = numstr.charAt(4)
    let digit6 = numstr.charAt(5)
    console.log(real);
    let x = 0;
    let y = 0;
    if (digit1 == real.charAt(0)){
        y = y + 1}
    if (digit2 == real.charAt(1)){
        y = y + 1}
    if (digit3 == real.charAt(2)){
        y = y + 1}
    if (digit4 == real.charAt(3)){
        y = y + 1}
    if (digit5 == real.charAt(4)){
        y = y + 1}
    if (digit6 == real.charAt(5)){
        y = y + 1}
     

     let real1 = real.split('1').length - 1;
     let real2 = real.split('2').length - 1;
     let real3 = real.split('3').length - 1;
     let real4 = real.split('4').length - 1;
     let real5 = real.split('5').length - 1;
     let real6 = real.split('6').length - 1;
     let real7 = real.split('7').length - 1;
     let real8 = real.split('8').length - 1;
     let real9 = real.split('9').length - 1;
     let real0 = real.split('0').length - 1;
    
     let num1 = numstr.split('1').length - 1;
     let num2 = numstr.split('2').length - 1;
     let num3 = numstr.split('3').length - 1;
     let num4 = numstr.split('4').length - 1;
     let num5 = numstr.split('5').length - 1;
     let num6 = numstr.split('6').length - 1;
     let num7 = numstr.split('7').length - 1;
     let num8 = numstr.split('8').length - 1;
     let num9 = numstr.split('9').length - 1;
     let num0 = numstr.split('0').length - 1;

    if (num1 <= real1) {
        x = x + Number(num1)
    } else {
        x = x + real1
    }
    if (num2 <= real2) {
        x = x + Number(num2)
    } else {
        x = x + real2
    }
    if (num3 <= real3) {
        x = x + Number(num3)
    } else {
        x = x + real3
    }
    if (num4 <= real4) {
        x = x + Number(num4)
    } else {
        x = x + real4
    }
    if (num5 <= real5) {
        x = x + Number(num5)
    } else {
        x = x + real5
    }
    if (num6 <= real6) {
        x = x + Number(num6)
    } else {
        x = x + real6
    }
    if (num7 <= real7) {
        x = x + Number(num7)
    } else {
        x = x + real7
    }
    if (num8 <= real8) {
        x = x + Number(num8)
    } else {
        x = x + real8
    }
    if (num9 <= real9) {
        x = x + Number(num9)
    } else {
        x = x + real9
    }
    if (num0 <= real0) {
        x = x + Number(num0)
    } else {
        x = x + real0
    }
    historyxy.push(String(x) + ',' + String(y));
    console.log(historyxy)

    tbodyEl.innerHTML += ` 
        <tr>
            <td>${guess}</td>
            <td>${x},${y}</td>
        </tr>
    `;
    count = count + 1;
    console.log(count);
    if (count > 12) {
    randomreal();
    tbodyEl.innerHTML = "";
    historyxy = [];
    history = [];
    count = 0;
}
} else {
    error.classList.add("showed");
}
if (numstr == real) {
    hiddentext.classList.add("active")
}


}
const giveup = document.getElementById("giveup");
const popup = document.getElementById("popup")
giveup.addEventListener("click", function() {
    popup.classList.add("showed")
}
);
const no = document.getElementById("no");
no.addEventListener("click", function() {
    text.innerHTML = "Are you sure?";
    no.innerHTML = "NO";
    popup.classList.remove("showed")
}
);
const yes = document.getElementById("yes")
const text = document.getElementById("textpopup")
yes.addEventListener("click", function() {
    text.innerHTML = "answer was" + real + " Answer is reset. now guess the new one";
    no.innerHTML = "OK";
    randomreal();
    tbodyEl.innerHTML = "";
    historyxy = [];
    history = [];
    count = 0;
});

const hintbutton = document.getElementById("hint1")
const hintblock = document.getElementById("hintblock")
const understand = document.getElementById("understand")
const gg11 = document.getElementById("gg11")
hintbutton.addEventListener("click", function(){
    hintblock.classList.add("showed")

});
understand.addEventListener("click", function(){
    hintblock.classList.remove("showed")

});
const photo = document.getElementById("photo")
const photoclose = document.getElementById("photoclose")
const carousel = document.getElementById("containerphoto")
photo.addEventListener("click", function(){
    carousel.classList.add("showed")
    gg11.classList.add("showed")
})
photoclose.addEventListener("click", function(){
    carousel.classList.remove("showed")
    gg11.classList.remove("showed")
})

close67.addEventListener("click", function(){
    hiddentext.classList.remove("active")
})