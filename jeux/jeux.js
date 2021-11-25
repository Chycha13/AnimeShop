//defilement des obstacles

var body = document.body;
var arrayH = [];
var arrayB = [];
var haut = document.querySelector('.haut');
var bas = document.querySelector('.bas');

function rougeCreate() {
    var divH = document.createElement('div');
    var appendArray = arrayH.push(divH);
    var rouge = divH.classList.add('rouge');
    
    haut.appendChild(divH);
    
    for(var i = 0; i<arrayH.length; i++) {
        var bougeH =  0;
        var decaleH = bougeH -= 500;
        divH.style.right = decaleH * i  + 'px';
        
    }

}

function bleuCreate() {
    var divB = document.createElement('div');
    var appendArray = arrayB.push(divB);
    var rouge = divB.classList.add('bleu');
    bas.appendChild(divB); 
    for(var j = 0; j<arrayB.length; j++) {
        var bougeB =  0;
        var decaleB = bougeB -= 500;
         divB.style.right = decaleB * j  + 'px';   

    }
}
// rougeCreate();
// bleuCreate();
// setInterval( ()=> {
//    rougeCreate(); 
//    bleuCreate();
// },150)

// personnage qui saute

var personnage = document.querySelector('.jaune');
var main = document.querySelector('.jeu');
var tombe = 0;
function active() {
    tombe -=5;
    personnage.style.bottom = tombe + 'px';
    console.log(tombe);
    var bottomValeur = parseInt(personnage.style.bottom);
    main.addEventListener('click', ()=> {
        tombe = bottomValeur+200;
    })
    
}

// setInterval(active,50)