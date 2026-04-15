const projetos = [
    {
        nome: "Projeto 1 - UESPI",
        descricao: "Descrição do seu primeiro projeto da disciplina.",
        link: "#"
    },
    {
        nome: "Projeto 2 - Portfólio", 
        descricao: "Descrição do segundo projeto que você desenvolveu.",
        link: "#"
    },
    {
        nome: "Projeto 3 - Web",
        descricao: "Descrição do terceiro projeto de desenvolvimento web.",
        link: "#"
    }
];

const containerProjetos = document.getElementById('projetos-container');

projetos.forEach(projeto => {
    const card = document.createElement('div');
    card.classList.add('projeto-card');
    
    card.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank">Ver projeto</a>
    `;
    
    containerProjetos.appendChild(card);
});
