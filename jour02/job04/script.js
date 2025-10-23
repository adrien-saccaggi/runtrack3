    const keylogger= document.getElementById("keylogger");
    document.addEventListener('keydown', function(e) {
    let key = e.key
        if(/^[a-zA-Z]$/.test(key)) {
            if(document.activeElement === keylogger) {
                keylogger.value += key ;
            }
            else{
                keylogger.value += key;
            }
        }
    });