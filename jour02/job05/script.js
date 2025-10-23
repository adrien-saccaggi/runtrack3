window.onload = () => {
    window.addEventListener("scroll", ()=>{
        let hauteur = document.documentElement.scrollHeight - window.innerHeight;
        let position = window.scrollY;
        let largeur = document.documentElement.clientWidth
        footer = document.getElementById('footer');
        
        let footerPosition = (position / hauteur) * largeur;

        console.log(footer.style.backgroundColor);

        

        if (footer.style.backgroundColor == "rgb(85, 35, 35)"){
            footer.style.backgroundColor= 'aqua';
        }else {
            footer.style.backgroundColor= 'rgba(85, 35, 35, 1)';
        }
        

    })
}