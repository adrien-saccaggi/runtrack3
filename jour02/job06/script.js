let konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]
let i = 0;
body = document.getElementById('body');
document.addEventListener('keydown', function(e) {
        let key = e.key
        if(key == konamiCode[i]) {
            
            console.log(konamiCode[i])
            i++;
            if(i == 10){
                (body.style.backgroundColor = "green")
            }
        }
        else{
            console.log("mauvais code")
            i = 0;
        }
    }

)
