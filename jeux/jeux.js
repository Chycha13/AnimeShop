//creation des obstacle
var divB = document.querySelector('.img_bas');
var divH = document.querySelector('.img_haut');
var decalerH = divH.style.left = 0;
var decalerB = divB.style.left = 0;
var btn = document.querySelector('.retour');
var body = document.body;
var arrayB = [];
var arrayH = [];
var toto = 300;


class colossalH {
    constructor(number) {
        this.number = 0;
        this.imgH = document.createElement('img');
        var imageH = this.imgH;
        imageH.src = 'imagesJeux/colossal1.png';
        this.classH = imageH.classList.add('haut');
        this.append = divH.appendChild(imageH);
        this.left = imageH.style.left = 700 + 'px';
        imageH.style.transform = 'rotate(180deg)';
        //console.log(nbs);
    }
}

class colossalB {
    constructor(nbs) {
        this.nbs = 0;
        this.imgB = document.createElement('img');
        var imageB = this.imgB;
        imageB.src = 'imagesJeux/colossal1.png';
        this.classB = imageB.classList.add('bas');
        this.append = divB.appendChild(imageB);
        this.left = imageB.style.left = 700 + 'px';
        //console.log(nbs);
    }
}
//positionner les obstacles
function positionImgH() {
    for (var j = 0; j < 2; j++) {

        var number = j;
        var newImgH = new colossalH(number);
        newImgH.left = newImgH.imgH.style.left = 50 * j + 650 + 'px';

        arrayH.push(newImgH);
        console.log(arrayH);
    }

}

function positionImgB() {
    for (var i = 0; i < 2; i++) {

        var nbs = i;
        var newImgB = new colossalB(nbs);
        newImgB.left = newImgB.imgB.style.left = 50 * i + 650 + 'px';
        //console.log(arrayB)
        arrayB.push(newImgB);
    }

}

//Obstacles en mouvement

function actionImg() {
    if (toto > 200) {

        var bougerH = decalerH -= 4;
        var bougerB = decalerB -= 4;

        //console.log(decaler)
        divH.style.left = bougerH + 'px';
        divB.style.left = bougerB + 'px';
    }
    if (decalerH < -36) {
        var newColossaleHaut = new colossalH;
        arrayH.push(newColossaleHaut);


    }
    if (decalerB < -36) {
        var newColossaleBas = new colossalB;
        arrayB.push(newColossaleBas);
        console.log(arrayB)
    }
}

//livai

var livai = document.querySelector('.livai');
var jeu = document.querySelector('.jeu');
var espaceBasSaut = 0;
//var espaceBasDescend = 0;


/*function sautLivai() {
    //clearInterval(descend);
    var saut = setInterval(function() {
        //clearInterval(descend);
        espaceBasSaut += 10;
        livai.style.bottom = espaceBasSaut + 'px';
        if (espaceBasSaut > 80) {
            clearInterval(saut);
            var descend = setInterval(function() {
                //console.log('salut c\'est moi')
                var espaceBasDescend = espaceBasSaut -= 5;
                livai.style.bottom = espaceBasDescend + 'px';
                console.log(espaceBasDescend)
                if (espaceBasSaut <= -150) {
                    clearInterval(descend);
                }
            }, 30)
        }

    }, 30)


}*/
jeu.addEventListener('click', () => {
    var saut = setInterval(function() {
        clearInterval(descend);
        espaceBasSaut += 10;
        livai.style.bottom = espaceBasSaut + 'px';
        if (espaceBasSaut > 100) {
            clearInterval(saut);
            var descend = setInterval(function() {

                /*var espaceBasDescend =*/
                espaceBasSaut -= 5;

                livai.style.bottom = espaceBasSaut + 'px';
                console.log(espaceBasSaut)
                if (espaceBasSaut <= -150) {
                    clearInterval(descend);
                }
            }, 30)
        }

    }, 30)
})



positionImgH();
positionImgB();
//setInterval(actionImg, 30);
//sautLivai();

/*var descend = setInterval(function() {
           console.log('salut c\'est moi')
           espaceBasSaut -= 10;
           livai.style.bottom = espaceBasDescend + 'px';
   }, 30)*/