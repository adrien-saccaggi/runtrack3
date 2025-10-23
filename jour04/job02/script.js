let ville = {
  name: "La Plateforme_",
  address: "8 rue d'hozier",
  city: "Marseille",
  nb_staff: "11",
  creation: "2019",
};
function jsonKeyValue(ville) {
  return ville.city;
}
console.log(jsonKeyValue(ville))