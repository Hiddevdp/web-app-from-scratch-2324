async function ophalen() {
  const response = await fetch("./scripts/info.json");
  const json = await response.json();
  console.log(json);
}
ophalen();
