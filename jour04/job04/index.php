
<table border="5px">
    <thead>
        <tr>
                        <td>Nom</td>
                        <td>Prenom</td>
                        <td>Email</td>
    </thead>
    <tbody id="tableau">
      
                
    </tbody>
</table>
              <button id="btn">update</button>
<script>
  document.getElementById("btn");
  let tableBody = document.getElementById("tableau")
  btn.addEventListener("click", () =>{
    tableBody.innerHTML = ""
    fetchDansUser()
  })
function afficheDansLeTableau(users){
users.forEach(user => {
  let tr = document.createElement("tr")
  tableBody.append(tr)
  let td = document.createElement("td")
  tableBody.append(td)
  td.innerHTML = user.nom
  let td2 = document.createElement("td")
  tableBody.append(td2)
  td2.innerHTML = user.prenom
  let td3 = document.createElement("td")
  tableBody.append(td3)
  td3.innerHTML = user.email
});}
function fetchDansUser(){
fetch("user.php")
.then((response) => {
  return response.json()
})
.then((response) => {
  afficheDansLeTableau(response)
});
}

fetchDansUser()


  </script>
