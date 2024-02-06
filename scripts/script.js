async function logMovies() {
  const response = await fetch(
    "https://github.com/Hiddevdp/web-app-from-scratch-2324/blob/main/scripts/1.json"
  );
  const movies = await response.json();
  console.log(movies);
}
