function openModal () {
    document.getElementById("WinContact").style.top = "200px";
    var test = document.getElementById("MessageCase");
    var MessageIn = document.getElementById("MessageInside");   

    MessageIn.innerHTML = "Votre message a été envoyé avec succès :  "  + test.value;

    

    setTimeout(function() {
        WinContact.style.display = 'block';
    },200);
}
onclick.classList.remove("openModal");

function closeModal() {
    document.getElementById("WinContact").style.top = "-400px";
}