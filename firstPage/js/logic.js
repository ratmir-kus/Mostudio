let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let fourd = document.getElementById('fourd');
let fifth = document.getElementById('fifth');
let sixth = document.getElementById('sixth');
let seventh = document.getElementById('seventh');
let eighth = document.getElementById('eighth');
let nineth = document.getElementById('nineth');
let menuMain = document.getElementsByClassName('main-content_left-menu')[0];
let leftSide = document.getElementsByClassName('main-content_left')[0];
let leftMenu = document.getElementsByClassName('main-content_left-menu')[0];
let leftMenuCopy = leftMenu.cloneNode(true);
let addMenu = leftSide.appendChild(leftMenuCopy);
let mainBlock = document.getElementsByClassName('main-content_right')[0];
let qwer = document.getElementsByClassName('main-content_left-menu')[0]
        
let array = [first, second, third, fourd, fifth, sixth, seventh, eighth, nineth]; 

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
        // preloader.style.opacity = '0';
    }, 600)
});

setInterval(function() {
    if ((Math.floor(document.body.clientWidth) * 0.65) > 670) {
        array.forEach((a) => {
            a.onmouseover = function(e) {   
                a.children[0].style.transition = '0.8s';
                a.children[0].style.opacity = '1';
            } 
            a.onmouseleave = function(e) {
                a.children[0].style.transition = '0.8s';
                a.children[0].style.opacity = '0';
            }
        })
    }
    else {
        array.forEach((a) => {
            a.children[0].style.transition = '0.8s';
            a.children[0].style.opacity = '1';
        })
    }    
}, 400)

setInterval(function() {
    if (Math.floor((document.body.clientWidth * 0.65)) < 670) {
                document.onclick = function(e) {
                    Array(e.target).forEach((a) => {
                        if(!a.classList.value.includes('SHW')) {
                            leftSide.style.transition = '0.6s';
                            leftSide.style.left = '-40vh';
                            leftMenu.style.display = 'block';
                        }
                    });
                }
            
            menuMain.onclick = function() {
                console.log(addMenu)
                addMenu.classList.remove('main-content_left-menu');
                console.log(addMenu)
                addMenu.classList.add('main-content_left-menuCopy');
                console.log(addMenu)
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
    }
    else {
        leftSide.style.left = '0vh';
        leftMenu.style.display = 'block';
    }
}, 400)
new WOW().init();