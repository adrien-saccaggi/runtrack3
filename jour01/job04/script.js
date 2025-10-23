function bisextile(annee){
    if (annee % 4 == 0)
      return true;
    else if (annee % 100 !== 0)
      return false;
}
console.log(bisextile(2020));
console.log(bisextile(1974));
console.log(bisextile(2012));