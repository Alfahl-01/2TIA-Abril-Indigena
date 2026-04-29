const listaTextos = [
    "Lázaro Gonzaga de Souza nasceu em 20 de março de 1940 e se tornou um símbolo de resistência para o povo Kiriri. Sua trajetória é marcada por um compromisso inabalável com a defesa dos direitos de sua comunidade, refletindo sua forte liderança.",
    "Cacique Lázaro é casado com Dona Eduarda e pai de sete filhos. A estrutura familiar é central na cultura Kiriri, refletindo a importância das relações e do legado cultural transmitido pela família.",
    "Cacique Lázaro nasceu entre as tradições e a cultura Kiriri, o que moldou sua identidade desde cedo. Sua infância foi marcada por ensinamentos ancestrais que fortaleceram sua conexão com o povo e a terra. Lázaro compartilha uma vida de parceria e apoio com Dona Eduarda, que desempenha um papel fundamental na manutenção da cultura e tradições Kiriri. Seu casamento é um exemplo de união na luta pela comunidade.",
    "A liderança de Lázaro é crucial para a unidade e resistência do povo Kiriri. Ele não apenas defende seus direitos, mas também preside assembleias e eventos que fortalecem a identidade cultural e a coesão da comunidade. Em 2 de outubro de 1972, Lázaro Gonzaga de Souza foi nomeado cacique de sua comunidade kiriri, um símbolo de confiança e respeito de seu povo. Sua liderança começou em uma época em que as comunidades indígenas enfrentavam grandes desafios e continuidade na luta pela preservação de suas culturas.",
    "Ele tem sido uma figura essencial na mediação de conflitos e na representação da comunidade em esferas políticas. Sua dedicação em amplificar as vozes dos Kiriri tem resultado em conquistas significativas em direitos territoriais e reconhecimento cultural."

];

let indice = 0; 

const txtParagrafo = document.getElementById('texto-paragrafo');
const btnVoltar = document.getElementById('btn-voltar2');
const btnAvancar = document.getElementById('btn-avancar');


function atualizarConteudo() {
    
    txtParagrafo.innerHTML = listaTextos[indice];

    
    if (indice === 0) {
        btnVoltar.style.display = "none";
    } else {
        btnVoltar.style.display = "inline-block";
    }

    
    if (indice === listaTextos.length - 1) {
        btnAvancar.style.display = "none";
    } else {
        btnAvancar.style.display = "inline-block";
    }
}


btnAvancar.addEventListener('click', () => {
    if (indice < listaTextos.length - 1) {
        indice++;
        atualizarConteudo();
    }
});


btnVoltar.addEventListener('click', () => {
    if (indice > 0) {
        indice--;
        atualizarConteudo();
    }
});