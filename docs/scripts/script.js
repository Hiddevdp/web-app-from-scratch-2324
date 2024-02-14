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
  console.log(json);
  const songlist = await fetch("./songs.json");
  const songs = await songlist.json();
  console.log(songs);
  insertInfo(json);
  insertSongs(songs);
}
ophalen();

function insertInfo(json) {
  const info = document.querySelector("#info");

  const firstName = json.firstName;
  const lastName = json.lastName;
  const age = json.age;
  const favoGenre = json.favoriet_genre;
  const city = json.city;
  const favoAnimal = json.favouriteAnimal;
  const image = json.avatar_url;
  const hobbies = json.hobbies.join(", "); // Convert hobbies array to comma-separated string
  const bio = json.bio;
  const truthsAndLies = json.truthsAndLies.join(", "); // Convert truthsAndLies array to comma-separated string

  const html = `<h2>Persoonlijke gegevens</h2>
            <ul> 
                <li><label>First Name:</label> ${firstName}</li>
                <li><label>Last Name:</label> ${lastName}</li>
                <li><label>Age:</label> ${age}</li>
                <li><label>Favo Music Genre:</label> ${favoGenre}</li>
                <li><label>City:</label> ${city}</li>
                <li><label>Favo Animal:</label> ${favoAnimal}</li>
                <li><label>Hobbies:</label> ${hobbies}</li>
                <li><label>Truths and Lies:</label> ${truthsAndLies}</li>
                <li><label>Bio:</label> ${bio}</li>
            </ul>
            <img src="${image}" alt="Avatar">`;

  info.insertAdjacentHTML("beforeend", html);
}

// function insertSongs(songs) {
//   const songsSection = document.getElementById("songs"); // Kies een element waar de songs in moeten en zorg dat die semantisch beschrijft wat het moet zijn
//   console.log(songs);
//   //localiseer de plek waar de nummers moeten staan

//   // const sortedTracks = sortTracks(allTracks, sortBy);

//   // const sortedFilteredTracks = filterTracks(sortedTracks, filterBy);
//   // console.log("Songs sorted by " + sortBy + " and filtered by " + filterBy);

//   songsSection.innerHTML = "";
//   songs.forEach((item) => {
//     //forEach loop om van elk nummer de benodigde info op te halen
//     const name = item.name;
//     const artist = item.artist;
//     const album = item.album.name;
//     const year = item.album.release_date;
//     const cover = item.cover;
//     const video = item.video;
//     const length = item.length;

//     console.log(length);

//     const html = `
//             <article class="card">
//             <div>
//                 <div class="front">
//                     <hgroup>
//                         <h1>Gone</h1>
//                         <p>Mr Probz ft. Anderson .Paak</p>
//                     </hgroup>
//                     <video load="lazy" autoplay loop muted poster="">
//                         <source src="media/Gone.mp4" type="video/mp4">
//                     </video>
//                     <!-- https://blog.hubspot.com/website/video-background-css -->
//                 </div>
//                 <div class="back">
//                     <h1>Gone</h1>
//                     <ul>
//                         <li>Artist: Mr Probz ft. Anderson .Paak</li>
//                         <li>Album: Gone</li>
//                         <li>Year: 2017</li>
//                         <li>Length: 3:40</li>
//                     </ul>
//                     <img src="media/GoneCover.jpg" alt="Cover">
//                 </div>
//             </div>
//         </article>
//             `; // de info van de nummers worden geplaatst in de html
//     songsSection.insertAdjacentHTML("beforeend", html);
//   });
// }
