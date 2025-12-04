let error = document.getElementById("error");
let prenom = document.getElementById("Prenom");
let p_prenom = document.getElementById("p_prenom");
let nom = document.getElementById("Nom");
let p_nom = document.getElementById("p_nom");
let email = document.getElementById("email");
let p_email = document.getElementById("p_email");
let mdp = document.getElementById("mdp");
let p_mdp = document.getElementById("p_mdp");
let confirm_mdp = document.getElementById("confmdp");
let p_confirm_mdp = document.getElementById("p_confmdp");
let btn = document.getElementById("btn");

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;
  return emailPattern.test(email);
}
function validateMotDePasse(mdp1) {
  const mdpPattern = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]/;
  return mdpPattern.test(mdp1);
}

btn.addEventListener("click", () => {
  if (prenom.value.length == "") {
    prenom.style.borderColor = "red";
    p_prenom.innerHTML = "Prenom non rempli";
  }
  if (prenom.value.length <= 2 && prenom.value.length != "") {
    prenom.style.borderColor = "red";
    p_prenom.innerHTML = "Plus de 2 caractères sont obligatoire pour le prenom";
  }
  if (nom.value.length == "") {
    nom.style.borderColor = "red";
    p_nom.innerHTML = "Nom non rempli";
  }
  if (nom.value.length <= 2 && nom.value.length != "") {
    nom.style.borderColor = "red";
    p_nom.innerHTML = "Plus de 2 caractères sont obligatoire pour le nom";
  }
  if (mdp.value.length == "") {
    mdp.style.borderColor = "red";
    p_mdp.innerHTML = "Mot de passe non rempli";
  }
  if (mdp.value.length <= 7 && mdp.value.length != "") {
    mdp.style.borderColor = "red";
    p_mdp.innerHTML = "Votre mot de passe a besoin de 8 caractères ou plus";
  }
  if (validateMotDePasse(mdp.value && mdp.value.length != "")) {
    return true;
  } else {
    mdp.style.borderColor = "red";
    p_mdp.innerHTML = "Votre mot de passe a besoin de Caractères spéciaux";
  }
  if (confirm_mdp.value.length == "") {
    confirm_mdp.style.borderColor = "red";
    p_confirm_mdp.innerHTML = "Confimez votre mot de passe";
  }
  if (confirm_mdp.value != mdp.value && confirm_mdp.value.length != "") {
    confirm_mdp.style.borderColor = "red";
    p_confirm_mdp.innerHTML = "Les mots de passe ne correspondent pas";
  }
  if (email.value.length == "") {
    email.style.borderColor = "red";
    p_email.innerHTML = "Email non rempli";
  }
  if (validateEmail(email.value) && email.value.length != "") {
    return true;
  } else {
    email.style.borderColor = "red";
    p_email.innerHTML = "Cet email est incompatible";
  }
});
