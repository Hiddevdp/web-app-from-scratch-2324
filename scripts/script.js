var articles = document.querySelectorAll(".card");

function flip(event) {
  var content = event.currentTarget.querySelector("div");
  content.classList.toggle("content");
  var hgroup = event.currentTarget.querySelector("hgroup");
  hgroup.classList.toggle("opacity");
}

articles.forEach(function (article) {
  article.addEventListener("click", flip);
});

// async function ophalen() {
//   const response = await fetch("./scripts/info.json");
//   const json = await response.json();
//   console.log(json);
// }
// ophalen();

// fetch("info.json").then(function (response) {
//   return response.json();
// })
// .then(function(info){
//     let placeholder = document.querySelector("#info");
//     let out = "";
//     for(let product of products)
// })
