let listPokemon;
let listPokemonFiltrer;
let listpkm = document.getElementById("listpkm");
fetch("pokemon.json")
  .then((res) => res.json())
  .then((list) => {
    listPokemon = list;
  });
document.getElementById("button").addEventListener("click", function (e) {
  listPokemonFiltrer = listPokemon;
  console.log(listPokemonFiltrer);

  let id = document.getElementById("id").value;
  let name = document.getElementById("nom").value;
  let type = document.getElementById("type").value;
  //Lister la liste pokemon en fonction du nom, ou type, ou id
  // console.table(listPokemon);
  //   console.log(type);


  if (id != "") {
    listPokemonFiltrer = listPokemonFiltrer.filter(
      (pokemon) => pokemon.id == id
  
    );
  }


  if (name != "") {
    listPokemonFiltrer = listPokemonFiltrer.filter(
      (pokemon) =>
        pokemon.name.english == name ||
        pokemon.name.japanese == name ||
        pokemon.name.chinese == name ||
        pokemon.name.french == name
    );
  }

  if (type == "Tous les types") {
    // newList = listPokemonFiltrer;
  } else {
    listPokemonFiltrer = listPokemonFiltrer.filter(
      (pokemon) => pokemon.type[0] == type || pokemon.type[1] == type
    );
  }

  listpkm.innerHTML = "";
  listPokemonFiltrer.forEach((pokemon) => {
    if (pokemon.type[1] == undefined) {
      pokemon.type[1] = "";
    }
    listpkm.innerHTML =
      listpkm.innerHTML +
      `
    <p>Id = ${pokemon["id"]}</p>
    <p>${pokemon.name.english} ${pokemon.name.japanese} ${pokemon.name.french} ${pokemon.name.chinese}</p>  
    <p>${pokemon.type[0]} ${pokemon.type[1]}<p>
    `;
    //
  });
});
