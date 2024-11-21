//Dom Document object model
// let text = document.getElementById("text");
// text.innerText = "hello dom";
// let paragraph = document.getElementById("paragraph");
// paragraph.innerText = "Hello javascript";
// let box =document.getElementById("box");
// box.innerText="<i>hello world</i>";
// let box1 =document.getElementById("box1");
// box1.innerHTML="<h1>Hello world</h1>";
// let box2 =document.getElementById("box2");
// box2.innerText="<h1>hello world</h1>";
// text.style.backroundColor="blue";
// text.style.color="red";
let text = document.querySelector("#text");
let btn1 = document.querySelector("#btn1");
btn1.onclick = function () {
  //   text.style.backroundColor = "blue";
  //   text.style.color = "red";
  text.innerText = "Hello javascript";
};
let btn2 = document.querySelector("#btn2");
btn2.onclick = function () {
  text.style.backroundColor = "blue";
  text.style.color = "red";
  text.innerText = "Hello javascript";
  text.remove();
};
let btn3 = document.querySelector("#btn3");
btn3.onclick = function () {
  text.style.backroundColor = "blue";
  text.style.color = "red";
  //   text.innerText = "Hello =javascript";
};
let btn4 = document.querySelector("#btn4");
btn4.onclick = function () {
  text.style.backroundColor = "blue";
  text.style.color = "red";
  text.innerText = "<h1>Hello javascript</h1>";
};
