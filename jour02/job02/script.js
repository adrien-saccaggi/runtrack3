function showhide(){
    
let article= document.querySelector("#citation");
    if (article){
        article.remove();
    }
    else
        {  
        let articles = document.createElement('article');
        articles.textContent = 'L important n est pas la chute mais l atterisage';
        articles.id= 'citation';  
        document.body.append(articles);

    }
  
    
}
document.querySelector('#button').addEventListener("click", showhide);
