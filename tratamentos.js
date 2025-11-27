// Efeito mouseover e mouseout

const blocos = document.querySelectorAll('.blocos');

blocos.forEach(bloco =>
{
    // Captura o parágrafo (p) dentro do bloco
    const paragrafo = bloco.querySelector('p');
    // Armazena o texto original do parágrafo

    const msgOriginal = paragrafo.textContent;
    const msgNova = "Para mais informações, entre em contato conosco ou agende uma consulta!"; 
    
    bloco.addEventListener('click', () =>
    {
        // Alterna entre o texto original e o novo texto
        if (paragrafo.textContent === msgOriginal)
        {
            paragrafo.textContent = msgNova;
        }
        else
        {
            paragrafo.textContent = msgOriginal;
        }

        // Adiciona um estilo temporário para destaque (opcional)
        paragrafo.style.color = '#faefb3ff';
        setTimeout(() =>
        {
            paragrafo.style.color = 'azure'; // Cor original no CSS
        }, 1000);
    });
});