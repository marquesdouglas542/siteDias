// Função para exibir a mensagem dos corações
function mostrarMensagem(mensagem) {
    const mensagemElemento = document.getElementById('mensagem');
    mensagemElemento.textContent = mensagem;
    
    // Exibe a mensagem
    mensagemElemento.classList.add('show');
    
    // Esconde a mensagem após 3 segundos
    setTimeout(() => {
        mensagemElemento.classList.remove('show');
    }, 3000);
}

// Contador de dias desde 01/09/2024
function atualizarContador() {
    const dataInicial = new Date('2024-09-01');
    const dataAtual = new Date();
    
    // Calcular a diferença em milissegundos
    const diferenca = dataAtual - dataInicial;
    
    // Converter a diferença para dias
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    
    // Exibir no contador
    const contadorElemento = document.getElementById('contador');
    contadorElemento.textContent = `Dias desde 01/09/2024: ${dias}`;
}


let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    index += step;

    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    // Move the carousel to the correct position
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${index * 100}%)`;
}


// Atualiza o contador ao carregar a página
window.onload = atualizarContador;

const motivos = [
    "Você tem um sorriso contagiante.",
    "Seu olhar ilumina qualquer lugar.",
    "Você é a pessoa mais gentil que eu conheço.",
    "Sempre me faz sentir especial.",
    "Sua risada é a melodia mais linda.",
    "Sua inteligência é incrível.",
    "Você sempre sabe o que dizer.",
    "Seu carinho é único.",
    "Você é minha inspiração diária.",
    "Sua presença é como um abraço.",
    "Você tem um coração generoso.",
    "Admiro sua determinação.",
    "Você nunca desiste dos seus sonhos.",
    "Você é a pessoa mais forte que conheço.",
    "Você sempre coloca os outros em primeiro lugar.",
    "Seu senso de humor é incrível.",
    "Você é uma excelente ouvinte.",
    "Você tem uma energia contagiante.",
    "Cada momento com você é especial.",
    "Sua sabedoria me surpreende.",
    "Você tem o poder de transformar o ambiente.",
    "Sua bondade é algo raro.",
    "Você é uma amiga leal.",
    "Você me entende sem precisar de palavras.",
    "Sempre tem a palavra certa quando preciso.",
    "Você é uma pessoa de grande caráter.",
    "Sua paciência é admirável.",
    "Você é a razão do meu sorriso.",
    "Seu abraço faz tudo ficar bem.",
    "Admiro sua coragem para enfrentar desafios.",
    "Você me faz querer ser uma pessoa melhor.",
    "Você é um exemplo de força e resiliência.",
    "Você é a pessoa com a qual eu sempre quero compartilhar meus sonhos.",
    "Você tem uma alma linda.",
    "Sua bondade toca todos ao seu redor.",
    "Você ilumina até os meus dias mais difíceis.",
    "Seu amor me faz sentir completo(a).",
    "Você sempre me faz sentir valorizado(a).",
    "A sua confiança é inspiradora.",
    "Você me ensina todos os dias a ser melhor.",
    "Sua risada é a coisa mais fofa que já ouvi.",
    "Você é um exemplo de empatia.",
    "Sua sensibilidade é algo raro e bonito.",
    "Você é meu apoio incondicional.",
    "Você tem a capacidade de ver o melhor nas pessoas.",
    "Seu sorriso faz meu coração bater mais forte.",
    "Você é a pessoa mais incrível que já conheci.",
    "Você tem um talento único.",
    "Admiro a sua capacidade de amar.",
    "Sua amizade é um presente maravilhoso.",
    "Você é a melhor companhia.",
    "Sua energia positiva é contagiante.",
    "Você tem o poder de fazer qualquer dia melhor.",
    "Seu coração é puro e verdadeiro.",
    "Você é capaz de fazer qualquer coisa.",
    "Você é a pessoa com a qual eu sempre quero compartilhar meus sonhos.",
    "Sua sinceridade é algo que admiro profundamente.",
    "Sua presença traz paz ao meu coração.",
    "Eu sou muito grato(a) por ter você em minha vida.",
    "Você é um exemplo de pessoa para todos ao seu redor.",
    "Admiro sua capacidade de ver o bom em cada situação.",
    "Sua força me motiva a seguir em frente.",
    "Você é a razão da minha felicidade.",
    "Cada conversa com você é uma lição.",
    "Você é muito mais do que imagina.",
    "Sua coragem é algo que eu admiro muito.",
    "Você é um raio de luz na vida de todos ao seu redor.",
    "Você nunca deixa ninguém para trás.",
    "Seu carinho é capaz de curar qualquer ferida.",
    "Você tem uma alma iluminada.",
    "Seu sorriso faz o mundo inteiro parecer melhor.",
    "Eu não consigo imaginar a vida sem você.",
    "Você tem um coração enorme.",
    "Você sempre sabe como me fazer sorrir.",
    "Sua presença traz conforto e paz.",
    "Você é minha maior inspiração.",
    "Seu apoio me fortalece em todos os momentos.",
    "Você tem o poder de fazer tudo parecer possível.",
    "Você sempre me faz sentir importante.",
    "Sua energia é única e especial.",
    "Você faz qualquer lugar se tornar especial.",
    "Sua autenticidade é algo raro.",
    "Você é uma pessoa extraordinária.",
    "Sua sinceridade é uma qualidade preciosa.",
    "Você me faz querer ser melhor todos os dias.",
    "Sua beleza vai além do físico.",
    "Você é minha razão de sorrir todos os dias.",
    "Seu espírito é brilhante.",
    "Você é uma das melhores pessoas que eu já conheci.",
    "Sua alegria é contagiante.",
    "Eu sou grato(a) por ter você em minha vida.",
    "Seu jeito de ver o mundo me encanta.",
    "Você sempre me faz sentir amado(a).",
    "Você tem uma luz própria que ilumina tudo ao seu redor.",
    "Seu jeito de ser me fascina.",
    "Você é uma pessoa única e especial.",
    "Sua energia é capaz de fazer qualquer dia melhor.",
    "Você é mais do que eu poderia pedir.",
    "Sua amizade é o maior presente.",
    "Eu te admiro mais do que palavras podem expressar.",
    "Você tem uma força interior admirável.",
    "Sua bondade me emociona.",
    "Você é meu porto seguro.",
    "Eu amo sua visão de mundo.",
    "Você sempre consegue me animar.",
    "Eu te amo do jeito que você é.",
    "Seu amor me faz sentir completo(a).",
    "Você tem uma essência maravilhosa.",
    "Sua amizade é um verdadeiro tesouro.",
    "Você é minha alegria.",
    "Sua voz traz calma ao meu coração.",
    "Você é uma pessoa rara e especial.",
    "Seu coração é imenso.",
    "Você tem uma capacidade infinita de amar.",
    "Sua amizade é um verdadeiro tesouro.",
    "Eu sou uma pessoa melhor por te conhecer.",
    "Você faz a minha vida mais bonita."
];

const mural = document.querySelector('.mural');

// Adicionando os post-its ao mural
for (let i = 0; i < 100; i++) {
    const postIt = document.createElement('div');
    postIt.classList.add('post-it');
    postIt.textContent = (i + 1);
    postIt.setAttribute('title', motivos[i]);

    postIt.addEventListener('click', () => mostrarMensagem(motivos[i]));
    
    mural.appendChild(postIt);
}
