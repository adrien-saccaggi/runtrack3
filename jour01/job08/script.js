function sommenombrespremiers(nbr_prem, nbr_pas_prem){
    for (let i = 2; i < nbr_prem;) {
        if (nbr_prem % i == 0) {
            return false;
        } else {
            i++;
        }   
    }
    nbr_pas_prem.push(nbr_prem);
    return true;
}
console.log(sommenombrespremiers(4, []));
console.log(sommenombrespremiers(2 ,[]));