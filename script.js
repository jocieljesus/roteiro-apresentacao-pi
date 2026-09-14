  const slides = [
    { title:"Abertura — O que é o projeto?", objetivo:"Situar o público sobre do que se trata o projeto em uma frase.", itens:["Nome do projeto e nome da equipe","Integrantes e papel de cada um","Frase-resumo (elevator pitch) em uma linha","Disciplina/curso e contexto da entrega"], dica:"Não gaste mais que 1 minuto aqui — é a capa, não a explicação completa." },
    { title:"Problemática", objetivo:"Mostrar o problema real que motivou o projeto.", itens:["Contexto do problema e quem ele afeta","Dado, pesquisa ou depoimento que comprove que o problema existe","Por que resolver isso importa agora"], dica:"Um dado ou imagem impactante aqui já conquista metade da banca." },
    { title:"Brainstorm", objetivo:"Mostrar como a equipe saiu do problema para as primeiras ideias de solução.", itens:["Registro das ideias geradas (print de quadro, post-its, mapa mental)","Critérios usados para escolher a ideia final (viabilidade, tempo, impacto)","Ideias que foram descartadas e por quê"], dica:"Não mostre só a ideia vencedora — mostrar o caminho até ela prova que houve processo, não só sorte." },
    { title:"Briefing", objetivo:"Resumir o escopo do projeto como um contrato claro.", itens:["Objetivo geral e objetivos específicos","Público-alvo definido","Restrições (prazo, tecnologia exigida, orçamento)","Critérios de sucesso do projeto"], dica:"Escreva como se estivesse repassando o projeto para uma equipe que nunca ouviu falar dele." },
    { title:"Visão geral do projeto", objetivo:"Dar o panorama da solução antes de entrar em detalhes técnicos.", itens:["Nome e proposta da plataforma","Para quem é e o que ela resolve","Um fluxo simplificado ou mockup geral"], dica:"Pense nesse bloco como o trailer do produto, não como o manual completo." },
    { title:"Design e interface", objetivo:"Mostrar como a solução se parece visualmente.", itens:["Paleta de cores e tipografia escolhidas — e por quê","Telas principais do protótipo","Identidade visual / logo, se houver"], dica:"Prints reais do protótipo valem muito mais do que descrever a tela em palavras." },
    { title:"Funcionalidades do projeto/plataforma", objetivo:"Detalhar o que o sistema efetivamente faz.", itens:["Lista das funcionalidades principais","Uma funcionalidade 'carro-chefe' explicada em detalhe","Diferenciais em relação a soluções parecidas que já existem"], dica:"Priorize qualidade: 4 funcionalidades bem explicadas valem mais que 10 citadas de raspão." },
    { title:"Tecnologias utilizadas", objetivo:"Justificar as ferramentas escolhidas pelo time.", itens:["Linguagens e frameworks usados","Bibliotecas relevantes","Ferramentas de design e de gestão do projeto","O motivo da escolha de cada tecnologia"], dica:"Não é uma lista de logos — explique por que cada tecnologia fez sentido para o seu projeto." },
    { title:"Desafios e melhorias", objetivo:"Ser honesto sobre o que não saiu perfeito.", itens:["Principais obstáculos técnicos ou de equipe enfrentados","Como esses obstáculos foram contornados","O que a equipe faria diferente numa próxima versão"], dica:"Bancas confiam mais em equipes que reconhecem limitações do que em quem diz que deu tudo certo." },
    { title:"Planos futuros", objetivo:"Mostrar visão de continuidade para o projeto.", itens:["Próximas funcionalidades planejadas","Possibilidade de escala ou uso real do projeto","Principais aprendizados que a equipe leva"], dica:"Termine esse bloco com ambição, não com desculpas." },
    { title:"Encerramento e perguntas", objetivo:"Fechar a apresentação com clareza e abrir espaço para perguntas.", itens:["Recapitulação do projeto em uma frase","Agradecimento à banca","Contato ou link do repositório/protótipo do projeto"], dica:"Combinem antes quem responde qual tipo de pergunta — evita silêncio constrangedor." }
  ];

  const track = document.getElementById('track');
  const cards = document.getElementById('cards');

  slides.forEach((s, i) => {
    const side = i % 2 === 0 ? 'left' : 'right';
    const row = document.createElement('div');
    row.className = 'plate-row ' + side;
    row.innerHTML = `
      <div class="plate" data-target="card-${i}">
        <div class="num">FIG. <b>${String(i+1).padStart(2,'0')}</b> / ${slides.length}</div>
        <h4>${s.title}${s.optional ? ' <span class="optional-flag">opcional</span>' : ''}</h4>
        <p>${s.objetivo}</p>
      </div>`;
    track.appendChild(row);

    const card = document.createElement('div');
    card.className = 'card';
    card.id = 'card-' + i;
    card.innerHTML = `
      <div class="card-head">
        <div class="idx">${String(i+1).padStart(2,'0')}</div>
        <h4>${s.title}${s.optional ? ' <span class="optional-flag">opcional</span>' : ''}</h4>
        <div class="chev">+</div>
      </div>
      <div class="card-body">
        <div class="card-body-inner">
          <div class="obj"><b>Objetivo</b>${s.objetivo}</div>
          <ul>${s.itens.map(it => `<li>${it}</li>`).join('')}</ul>
          <div class="tip"><b>Dica prática</b>${s.dica}</div>
        </div>
      </div>`;
    cards.appendChild(card);

    card.querySelector('.card-head').addEventListener('click', () => {
      card.classList.toggle('open');
    });
  });

  document.querySelectorAll('.plate').forEach(p => {
    p.addEventListener('click', () => {
      const target = document.getElementById(p.dataset.target);
      target.classList.add('open');
      target.scrollIntoView({ behavior:'smooth', block:'center' });
    });
  });

  // countdown
  const deadline = new Date('2026-09-30T23:59:59');
  function updateCountdown(){
    const now = new Date();
    const diff = deadline - now;
    const el = document.getElementById('countdown');
    if (diff <= 0){ el.textContent = 'prazo encerrado'; return; }
    const days = Math.ceil(diff / (1000*60*60*24));
    el.textContent = days + (days === 1 ? ' dia restante' : ' dias restantes');
  }
  updateCountdown();
