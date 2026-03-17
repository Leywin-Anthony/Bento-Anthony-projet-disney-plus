
function ouvrirFaq(bouton) {

  /* On récupère le bloc parent .faq-item */
  var question = bouton.parentElement;

  /* Est-ce que cette question est déjà ouverte ? */
  var estOuverte = question.classList.contains("ouvert");

  /* On ferme toutes les questions ouvertes */
  var toutesLesQuestions = document.querySelectorAll(".faq-item");
  for (var i = 0; i < toutesLesQuestions.length; i++) {
    toutesLesQuestions[i].classList.remove("ouvert");
  }

  /* Si elle était fermée, on l'ouvre */
  if (estOuverte === false) {
    question.classList.add("ouvert");
  }

}

function inscrire() {

  var champEmail = document.getElementById("champ-email");
  var email = champEmail.value;

  /* Vérification : champ vide */
  if (email === "") {
    alert("Veuillez entrer votre adresse e-mail.");
    return;
  }

  /* Vérification : présence du @ */
  if (email.indexOf("@") === -1) {
    alert("Veuillez entrer une adresse e-mail valide.");
    return;
  }

  /* Confirmation si tout est bon */
  alert("Merci ! Votre inscription a bien été prise en compte.");
  champEmail.value = "";

}

function allerSection() {

  var section = document.querySelector(".section-shogun");
  section.scrollIntoView({ behavior: "smooth" });

}

  //  4. SWITCH DE LANGUE FR ↔ EN

function changerLangue() {


  var pageCourante = window.location.pathname;

  if (pageCourante.indexOf("index-en.html") !== -1) {
    window.location.href = "index.html";
  } else {
    window.location.href = "index-en.html";
  }

}
