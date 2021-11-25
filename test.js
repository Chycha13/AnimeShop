//defilement des obstacles

var body = document.body;
var arrayH = [];
var arrayB = [];
var haut = document.querySelector('.haut');
var bas = document.querySelector('.bas');


// personnage qui saute

var personnage = document.querySelector('.livai');
var main = document.querySelector('.jeu');
var tombe = 0;

function active() {
    tombe -= 5;
    personnage.style.bottom = tombe + 'px';
    //console.log(tombe);
    var bottomValeur = parseInt(personnage.style.bottom);
    console.log(bottomValeur)
    main.addEventListener('click', () => {
        tombe = bottomValeur + 200;
        personnage.style.transition = "0.3s";
    })

}

function rougeCreate() {

    var imgH = document.createElement('img');
    imgH.src = 'PictureShop/photoJeu/colossal1.png';
    var appendArray = arrayH.push(imgH);
    var colossalH = imgH.classList.add('colossalH');
    haut.appendChild(imgH);

    for (var i = 0; i < arrayH.length; i++) {

        var bougeH = 0;
        var decaleH = bougeH -= 500;
        var positionTitanH = imgH.style.right = decaleH * i + 'px';
        var valeurPosTitansH = parseInt(positionTitanH);
        var valeurPosPersonnage = parseInt(personnage.style.bottom);
        
            if (valeurPosTitansH <= -2000 && valeurPosPersonnage >= 65) {
                gameOver();
            }
    }

}

function bleuCreate() {

    var imgB = document.createElement('img');
    imgB.src = 'PictureShop/photoJeu/colossal1.png';
    var appendArray = arrayB.push(imgB);
    var colossalB = imgB.classList.add('colossalB');
    bas.appendChild(imgB);

    for (var j = 0; j < arrayB.length; j++) {

        var bougeB = 0;
        bougeB -= 500;
        imgB.style.right = bougeB * j + 'px';
        var positionTitanB = imgB.style.right;
        var valeurPosTitanB = parseInt(positionTitanB);
        var valeurPosPersonnage = parseInt(personnage.style.bottom);
        //console.log(valeurPosTitanB)
        
            if (valeurPosTitanB <= -2000 && valeurPosPersonnage <= -135) {
                gameOver();
            }
        
    }
}

rougeCreate();
bleuCreate();



// Appel de fonction

var saut = setInterval(active, 50)
var obstacle = setInterval(() => {
    rougeCreate();
    bleuCreate();
}, 1000)

// Arret de jeu

function gameOver() {
    clearInterval(saut);
    clearInterval(obstacle)
}