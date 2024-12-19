// Fonction pour appliquer l'effet de changement de bordure sur chaque champ texte
document.addEventListener("DOMContentLoaded", function () {
    // Sélectionner chaque input par son ID
    const nameInput = document.getElementById("name");
    const firstnameInput = document.getElementById("firstname");
    const mailInput = document.getElementById("mail");

    // Fonction pour ajouter ou supprimer la classe .input-valid
    function handleInputChange(input) {
        input.addEventListener("input", function () {
            // Si le champ n'est pas vide, on ajoute la classe .input-valid
            if (input.value.trim() !== "") {
                input.classList.add("input-valid");
            } else {
                input.classList.remove("input-valid");
            }
        });
    }

    // Appliquer la fonction à chaque champ
    handleInputChange(nameInput);
    handleInputChange(firstnameInput);
    handleInputChange(mailInput);
});