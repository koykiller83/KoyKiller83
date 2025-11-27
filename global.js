window.addEventListener('load', function()  {
    const logo = document.querySelector('.logo img');
        if (logo) {
                // Adicionar efeito visual na logo após carregamento
                logo.style.transition = 'transform 0.5s ease';
                setTimeout(() => 
                {
                    logo.style.transform = 'scale(1.2)';
                    setTimeout(() => 
                    {
                        logo.style.transform = 'scale(1)';
                    }, 500);
                }, 1000);
            }
});

/* Botão Whatsapp Roxo */
/* Link principal */
const whatsapp = document.createElement("a");
whatsapp.href = "https://wa.me/5551981606666";
whatsapp.target = "_blank";
whatsapp.className = "whatsapp-fixo";
whatsapp.title = "Fale conosco no WhatsApp"; /* Acessibilidade */

/* Ícone */
const icone = document.createElement("i");
icone.className = "fa-brands fa-whatsapp";

/* Adiciona o ícone dentro do link */
whatsapp.appendChild(icone);

/* Inserir dentro do body */
document.body.appendChild(whatsapp);