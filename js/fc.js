let listElement = document.querySelector(".list")

let a = <iframe width="560" height="315" src="https://www.youtube.com/embed/"
let b = "title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
let itemElemnt = document.createElement("li");
itemElemnt.innerHTML=a + b ;
listElement.appendChild(itemElemnt);



