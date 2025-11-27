
// Efeito mouseover e mouseout nos blocos missão e valores
const blocosQuemSomos = document.querySelectorAll('.missao, .valores');
    
blocosQuemSomos.forEach(bloco =>
    {   
        // cor original
        bloco.style.backgroundColor = 'transparent';
        
        bloco.addEventListener('mouseover', function()
        {   
            // mudando para uma cor diferente
            this.style.backgroundColor = '#2a0770';
        });
        
        bloco.addEventListener('mouseout', function()
        {   
            // retornando para a cor original
            this.style.backgroundColor = 'transparent';
        });
    });