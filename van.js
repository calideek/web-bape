

let mainTitle=document.getElementById("mainTitle");
mainTitle.innerHTML='welcome to the lobory';
let section1=document.getElementById("section1");
section1.style.backgroundColor='lightblue'

let cards=document.getElementsByClassName("card");
for(let card of cards){card.style.backgroundColor="yellow"}

let section3=document.getElementById("section3");
let items=section3.getElementsByTagName("li");
for(let item of items){item.style.color="red"}

paragarapha=document.getElementById("section1").getElementsByTagName("p");
for (let p of paragarapha){p.style.backgroundColor="lightblue"};
paragarph=document.querySelector("#section1").querySelector("p").style.fontWeight="bold"
  
document.querySelector("#myList").querySelectorAll("li")
for ( let li of mylist){li.style.border="1px solid black;"};
 var myLink=document.querySelector("#myLink");
 myLink.body.innerHTML="visit google";

 var section4card=document.querySelector("#section4 .card");
 section4card.style.backgroundColor="orange";

let infos=documenta.querySelectorAll(".info");
for(let info of infos)infos.style.fontsize="20px";

let divs=document.getElementsByName("div");
for(let div of divs){div.classList.add("highlight")};
let outputs= document.querySelector("#output").getElementsByClassName("h2")
 outputs.body .textContent="dom out area";



 let paragarapha=document.getElementById("p");
 paragarph.body.textContent="this text was updated using textacontent()";
document.getElementById("section2").innerHTML='<ahref="#">new dynamic link</a>';


// let myLink=document.getElementById("myLink");
console.log(myLink.getAttribute("href"));
myLink.getAttribute("href","https://example.com");
document.querySelector("#section1").style.backgroundColor="green"
document.getElementById("section3").style.color="blue"
 section1.style.backgroundColor="green";                                                              d="green"
section3.classList.add=("highlight");
section1.classList.remove("highlight");

// // // sectionc creating & insert element
let p=document.createElement("p")
p.textContent="new paragraph created";
document.getElementById("output").appendchild(output);
let li=document.childElementCount("li");
li.textContent="Item D";
document.querySelector("#myLink").appendChild(li);
letdivs=document.createElement("div");
divs.textContent="Dynamical added box";
document.body.appendChild("div");
let newi=document.createElement("li");
newi.textContent="item x";
let list=document.getElementById("myLink");
let itemB=list.children[1];
list.insertBefore(newi,itemB)


 section1=document.getElementById("section1");
var firstP=section1.querySelector("p");
 var newP=document.createElement("p");
 newP.textContent="new paragaraph before first paragaraph";
 section1.insertBefore(newP,firstP);

var section4= document.getElementById("section4");
section4.remove();
const btnMsg=document.getElementById("btnMsg");
btnMsg.remove();


// var mainTitle=document.querySelector("#mainTitle");
// mainTitle.textContent="dom mastery in progress";
// mainTitle.parentNode.replaceChild(newH1,mainTitle);
// var section2=document.getElementById("section2");
// var button=document.createElement="clich hare";
// section2.removeChild(button,section2,firstElementChild);

// let output=document.getElementById("output");
// let oldH2=document.querySelector("h2");
// let newH2=document.createElement("h2");
// newH2.textContent="Replaced uotput Heading";
// output.removeChild(newH2,oldH2);















