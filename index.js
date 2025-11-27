/* Mensagem de boas-vindas na página */

window.addEventListener("load", () => {
    const msg = document.getElementById("msg");

    msg.innerHTML = '<span class="icon">🦷</span> Bem-vindo à Odonto Nunes!';

    msg.style.display = "flex";

    setTimeout(() => {
        msg.style.display = "none";
    }, 3000);
});

/* Funções para trocar as imagens ao passar o mouse */

window.troca_img1 = function () {
    document.getElementById("img1").src = "./img/atendimento2.jpg";
   }

window.troca_img2 = function () {
    document.getElementById("img2").src = "./img/estrutura2.jpg";
   }