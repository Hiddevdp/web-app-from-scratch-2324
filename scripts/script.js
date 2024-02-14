var articles = document.querySelectorAll(".card");

function flip(event) {
  var content = event.currentTarget.querySelector("div");
  content.classList.toggle("content");
  var hgroup = event.currentTarget.querySelector("hgroup");
  hgroup.classList.toggle("opacity");

  articles.forEach(function (article) {
    if (article !== event.currentTarget) {
      let otherContent = article.querySelector("div");
      otherContent.classList.remove("content");
      // all other flipped cards flip back on click

      let otherHgroup = article.querySelector("hgroup");
      otherHgroup.classList.remove("opacity");
    }
  });
}

articles.forEach(function (article) {
  article.addEventListener("click", flip);
});

// eventlistener

async function ophalen() {
  const response = await fetch("./info.json");
  const json = await response.json();
  const songlist = await fetch("./songs.json");
  const songs = await songlist.json();
  console.log(json);
  console.log(songs);
  insert(json, songs);
}
ophalen();

function insert(json, songs) {
  Object.values(json.info).forEach((item) => {
    const info = document.querySelector("#info");

    const firstname = item.firstName;
    const lastName = item.lastName;
    const city = item.city;
    const age = item.age;
    const favoGenre = item.favoriet_genre;
    const favoAnimal = item.favouriteAnimal;
    const image = item.avatar_url;
    const hobbies = item.hobbies;
    const bio = item.bio;
    const truthsAndLies = item.truthsAndLies;

    const html = `<h2>Persoonlijke gegevens</h2>
            <ul> 
                <li><label>first Name:</label> ${firstname}</li>
                <li><label>Last Name:</label> ${lastName}</li>
                <li><label>City:</label> ${city}</li>
                <li><label>Age:</label> ${age}</li>
                <li><label>Favo Music genre:</label> ${favoGenre}
                <li><label>Favo Animal:</label> ${favoAnimal}</li>
                <li><label>Hobbies:</label> ${hobbies}</li>
                <li><label>Truths and lie:</label> ${truthsAndLies}</li>
                <li><label>Bio:</label> ${item.bio}</li>
                <li></li>
            </ul>
            <img src="${image}" alt="Avatar">`;

    info.insertAdjacentHTML("beforeend", html);
  });
}
