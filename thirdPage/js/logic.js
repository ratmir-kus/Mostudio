let menuMain = document.getElementsByClassName('main-content_left-menu')[0];
let leftSide = document.getElementsByClassName('main-content_left')[0];
let leftMenu = document.getElementsByClassName('main-content_left-menu')[0];
let leftMenuCopy = leftMenu.cloneNode(true);
let addMenu = leftSide.appendChild(leftMenuCopy);
let mainBlock = document.getElementsByClassName('main-content_right')[0];
let qwer = document.getElementsByClassName('main-content_left-menu')[0];
let oldWidth = window.innerWidth; 
window.onresize = function () { 
    let newWidth = window.innerWidth; 
    if (newWidth != oldWidth) { 
        location.reload(); 
        oldWidth = newWidth; 
    } 
};
setTimeout(function() {
    let preloader = document.getElementsByClassName('preloader')[0];
    preloader.style.transition = '1s';
    preloader.style.display = 'flex';
    setTimeout(function() {
        preloader.style.transition = '1s';
        preloader.style.display = 'none';
    }, 1000)
});
if ((document.body.clientWidth * 0.65) < 670) {
    menuMain.onclick = function() {
        addMenu.classList.remove('main-content_left-menu');
        addMenu.classList.add('main-content_left-menuCopy');
        addMenu.innerHTML = '&#10006;';
    leftSide.style.transition = '0.4s';
    leftSide.style.left = '0vh';
    leftMenu.style.display = 'block';
}
addMenu.onclick = function() {
    leftSide.style.transition = '0.6s';
    mainBlock.style.width = '100%';
    leftSide.style.left = '-40vh';
    leftMenu.style.display = 'block';
}
document.onclick = function(e) {
    Array(e.target).forEach((a) => {
        if(!a.classList.value.includes('SHW')) {
            leftSide.style.transition = '0.6s';
            mainBlock.style.width = '100%';
            leftSide.style.left = '-40vh';
            leftMenu.style.display = 'block';
        }
    });
}
}
