function openModal () {
    document.getElementById("WinContact").style;
    var test = document.getElementById("MessageCase");
    var MessageIn = document.getElementById("MessageInside"); 
      
    MessageIn.innerHTML = "Votre message a été envoyé avec succès :  "  + test.value;

    setTimeout(function() {
        WinContact.style.display = 'block';
    },200);
}
onclick.classList.remove("openModal");