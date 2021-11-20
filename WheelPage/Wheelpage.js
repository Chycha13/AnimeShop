(function() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    let deg = 0 ;

// bouton wheel
startButton.addEventListener('click', () => {
    startButton.style.pointerEvents = 'none';
    deg = Math.floor(5000 + Math.random() * 5000);
    wheel.style.transition = 'all 10s ease-out';
    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.classList.add('blur');
});
wheel.addEventListener('transitionend', () => {
    wheel.classList.remove('blur');
    startButton.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
const actualDeg = deg % 360;
wheel.style.rotation = `rotate(${actualDeg}deg)`;
startButton.style.pointerEvents = 'none';
})

})();
//pop up victoire

function openModal () {
    document.getElementById("popUpText").style.top ="0px" ;
    document.getElementById("popUpLuffy").style;
    setTimeout(function(){
        popUpLuffy.style.display = 'block';
    },500);
   
   setTimeout(function(){
   popUpText.style.display = 'block';
  
},10500);
}

