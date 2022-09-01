const button=document.getElementById("openOverLay")

button.addEventListener("click", () => {
    const openBtn = document.querySelector('#openOverLay');
    const closeBtn = document.querySelector('#closeOverLay');
    const overlay = document.querySelector('.overlay');
    openBtn.addEventListener('click', () => {
        overlay.style.display = 'block';
    });
    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    })
});