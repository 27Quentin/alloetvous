const input = document.getElementById('name');

// Écouteur d'événement pour détecter la saisie dans le champ
input.addEventListener('input', () => {
  if (input.value.length > 0) {
    // Change la couleur de la bordure droite quand du texte est saisi
    input.style.borderRightColor = 'rgb(22, 218, 22)'; // Exemple : vert
  } else {
    // Remet la couleur de la bordure droite à la valeur par défaut
    input.style.borderRightColor = 'rgb(218, 22, 22)'; // Rouge par défaut
  }
});
