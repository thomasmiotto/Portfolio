const menu = document.getElementById("menu_mobile");
const burger = document.getElementById("burger");

burger.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien

    menu.classList.toggle("hidden"); // Utilisation de toggle pour ajouter ou enlever la classe "hidden"
    menu.classList.add("absolute");
});


