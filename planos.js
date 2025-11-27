// lista com 5 itens adicionais
const tbody = document.querySelector(".precos tbody");

const itens = [
        ["Extração", "Extração simples de dente", "120,00"],
        ["Radiografia", "Raio-X periapical", "40,00"],
        ["Aparelho Ortodôntico", "Manutenção mensal", "90,00"],
        ["Coroa Dental", "Coroa de porcelana", "1.200,00"],
        ["Prótese Parcial", "Prótese removível", "900,00"]
    ];

// adicionando os itens
itens.forEach(item =>
    {
        const tr = document.createElement("tr");

        item.forEach(valor =>
        {
            const td = document.createElement("td");
            td.textContent = valor;
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
