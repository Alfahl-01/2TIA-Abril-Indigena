const listaTextos = [
    "O cacique Jonomonotô, também conhecido como Célio Kiriri, é uma liderança indígena do povo Kiriri, na Bahia. Ele atua na defesa da identidade cultural, especialmente na valorização dos nomes indígenas, além de participar da organização social da comunidade. Sua liderança é notada a partir do ano de 2020, onde começam as suas aparições em entrevistas pela internet.",
    "“É um sonho da gente poder colocar o nome da gente no documento e ainda não conquistamos isso. O índio tem que ter seu nome indígena, para que ele seja um índio de resistência para a sua comunidade e território”.  Essa foi a frase dita pelo líder, em uma entrevista para a TV Bahia, no programa da Conexão Bahia, a qual demonstrou que essa tribo almeja por mais relevância no cenário contemporâneo."
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