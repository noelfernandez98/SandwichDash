kaboom()

const pauseAction = () => {
    const newArr = document.querySelectorAll('pause');
   let pauseCheck
    if(pauseCheck) {
        newArr.forEach(e => {
            if(e.id !== 'pause'){
                e.disabled = true;
            }  });
        
        pauseCheck = false;
        
        clearTimeout();
     }
}
     const howToPlay=document.getElementById("instructions")
     howToPlay.addEventListener("click",function(){    document.open("instructions.html","How To Play", "width=600,height=600")})