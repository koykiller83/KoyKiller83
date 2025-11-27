// adicionado efeito hover como estilização nas linhas da lista
const itens = document.querySelectorAll(".contato li");

// Aplica o padding inicial para todos os itens
itens.forEach(item => {
    item.style.padding = "8px 12px";
    item.style.transition = "all 0.3s ease";
    item.style.borderRadius = "6px";
});

itens.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
        item.style.transform = "translateX(5px)";
    });

    item.addEventListener("mouseleave", () => {
        item.style.backgroundColor = "transparent";
        item.style.transform = "translateX(0)";
    });
});

// adicionando evento focus
const campos = document.querySelectorAll(".campo input, .campo textarea");

campos.forEach(campo => {
    campo.addEventListener("focus", () => {
        campo.style.backgroundColor = "#faefb3ff";
    });

    campo.addEventListener("blur", () => {
        campo.style.backgroundColor = "white";
    });
});

// adicionando evento submit
const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function (msg) {
    msg.preventDefault();
    alert("Mensagem enviada!");
    formulario.reset();
});

const botao = document.querySelector(".botao-enviar");

// classe CSS que será ativada ao pressionar (classe criada só para isso)
botao.addEventListener("mousedown", () => {
    botao.classList.add("botao-pressionado");
});

// Remove a classe CSS ao soltar
botao.addEventListener("mouseup", () => {
    botao.classList.remove("botao-pressionado");
});