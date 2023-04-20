window.addEventListener("load", function(){
    this.document.getElementById("cargando").classList.toggle("cargando2")
})


let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btnq = document.getElementById("btnq");

const url ="https://api.quotable.io/random";

let getQuote = ()=> {
    fetch(url)
    .then((data) =>data.json())
    .then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;

    })
}

window.addEventListener("load", getQuote);

btnq.addEventListener("click", getQuote);