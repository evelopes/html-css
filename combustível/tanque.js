function mudar() {
    var total = document.getElementById("valores").value;
    var ponteiro = document.getElementById("ponteiro");

    if (total == 100) {
        ponteiro.style.top = "34%";
        ponteiro.style.left = "29.5%";
        ponteiro.style.transform = "rotate(175deg)";

    } else if (total == 0.75) {
        ponteiro.style.top = "27.5%";
        ponteiro.style.left = "28%";
        ponteiro.style.transform = "rotate(135deg)";

    } else if (total == 0.50) {
        ponteiro.style.top = "24%";
        ponteiro.style.left = "23.5%";
        ponteiro.style.transform = "rotate(90deg)";
    } else if (total == 0.25) {
        ponteiro.style.top = "27.5%";
        ponteiro.style.left = "19.5%";
        ponteiro.style.transform = "rotate(45deg)";
    } else if (total == 0) {
        ponteiro.style.top = "34.5%";
        ponteiro.style.left = "18%";
        ponteiro.style.transform = "rotate(5deg)";



    }
}




