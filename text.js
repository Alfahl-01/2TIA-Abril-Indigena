// 1. Lista de textos (adicione quantos quiser aqui)
const listaTextos = [
    "As mulheres da comunidade indígena Kiriri têm um papel muito importante dentro e fora da aldeia, mas nem sempre recebem a visibilidade que merecem. Dar voz a essas mulheres é essencial, porque são elas que carregam saberes ancestrais, tradições culturais e a força da resistência do seu povo. Quando suas histórias são ouvidas, a gente passa a entender melhor a riqueza da cultura indígena e a importância de preservá-la.",
    "Na sociedade em geral, muitas vezes as mulheres Kiriri ainda são vistas de forma estereotipada ou até invisibilizadas. Isso acontece por falta de conhecimento e também por preconceito. Por isso, a representatividade é tão importante: quando elas aparecem em espaços públicos, eventos e projetos, ajudam a quebrar essas ideias erradas e mostram quem realmente são mulheres fortes, diversas e cheias de história",
    "presença das mulheres Kiriri em eventos culturais, projetos sociais e até nas redes sociais tem crescido cada vez mais, o que contribui diretamente para aumentar sua visibilidade na sociedade. Esses espaços são importantes porque permitem que elas mostrem sua cultura, compartilhem suas vivências e expressem suas próprias narrativas, sem depender da visão de outras pessoas. Além disso, essa participação fortalece a identidade do povo Kiriri e valoriza seus costumes e tradições.",
    "Ao ocuparem esses espaços, elas também ajudam a combater estereótipos e preconceitos que ainda existem sobre os povos indígenas. Isso faz com que mais pessoas conheçam a realidade da comunidade e passem a enxergar essas mulheres com mais respeito e reconhecimento. Dessa forma, os eventos e projetos funcionam como uma ponte entre a comunidade Kiriri e a sociedade, ampliando o diálogo, a compreensão e a valorização cultural, o que se conecta diretamente com a importância da representatividade e da voz dessas mulheres.",
    "Além disso, a participação política das mulheres Kiriri vem crescendo, o que fortalece a luta por direitos, visibilidade e melhores condições de vida. Essa atuação não fica só na política, mas se reflete diretamente na comunidade. Na área da saúde, por exemplo, muitas mulheres têm um papel essencial, unindo conhecimentos tradicionais com cuidados do dia a dia, garantindo o bem-estar coletivo.",
    "Já na educação, elas são fundamentais na transmissão de saberes, ensinando às novas gerações sobre a cultura, a língua e as tradições do povo Kiriri. Assim, tudo se conecta: política, saúde e educação caminham juntas, mostrando como a atuação dessas mulheres é completa e indispensável.",
    "No geral, falar sobre as mulheres Kiriri é reconhecer sua importância, sua resistência e sua contribuição para a sociedade. Dar visibilidade a elas é um passo importante para construir um futuro com mais respeito, igualdade e valorização das culturas indígenas. É bem comum falar sobre projetos e eventos feitos por indígenas, e muitos desses projetos têm uma forte participação feminina, principalmente vinda dos kiriri, onde vemos exemplos como o MUPOIBA, o movimento contra “PL 490” ETC.",
    "A importância das mulheres Kiriri na preservação cultural é fundamental para que a identidade e a história desse povo continuem vivas. Mesmo diante de desafios sociais, territoriais e estruturais, a atuação feminina se destaca como um eixo de resistência. Elas garantem que os saberes tradicionais sejam transmitidos e permaneçam acessíveis para as futuras gerações.",
    "Elas cuidam da “palavra”, vista como uma semente essencial para a identidade do povo, garantindo que o conhecimento não se perca ao ensiná-lo aos mais novos. O domínio sobre as plantas medicinais e o uso dos recursos naturais estão ligados diretamente à preservação da cultura e à identidade do grupo.",
    "No entanto, a atuação dessas mulheres acontece em um cenário de grandes dificuldades. A luta pela demarcação e pela posse das terras tradicionais é uma questão central, pois a manutenção do modo de vida delas depende disso. As mulheres Kiriri ainda enfrentam uma dupla discriminação, o sexismo e o racismo, sendo muitas vezes colocadas em situações de vulnerabilidade.",
    "A isso somam-se as dificuldades para acessar serviços básicos, como saúde, educação de qualidade e assistência técnica para a agricultura e o artesanato. Além disso, persistem os desafios para gerar renda própria e garantir a segurança alimentar, problemas que pioram com os conflitos ambientais e territoriais.",
    "Assim, a importância das mulheres Kiriri na cultura não pode ser separada das condiçõessociais e políticas em que vivem. Isso mostra tanto o papel essencial delas na continuidadecultural quanto os obstáculos que enfrentam para exercer suas funções plenamente dentroda comunidade."
];
const listaTitulos = [
    "Representatividade e visibilidade",
    "Representatividade e visibilidade",
    "Representatividade e visibilidade",
    "Representatividade e visibilidade",
    "Representatividade e visibilidade",
    "Representatividade e visibilidade",
    "Mulheres kiriris na preservação cultural",
    "Mulheres kiriris na preservação cultural",
    "Mulheres kiriris na preservação cultural",
    "Mulheres kiriris na preservação cultural",
    "Mulheres kiriris na preservação cultural",
    "Mulheres kiriris na preservação cultural"
];
const listaImagens = [
    "fabiana3.jpeg",
    "fabiana3.jpeg",
    "fabiana3.jpeg",
    "fabiana3.jpeg",
    "fabiana3.jpeg",
    "fabiana3.jpeg",
    "fabiana4.jpeg",
    "fabiana4.jpeg",
    "fabiana4.jpeg",
    "fabiana4.jpeg",
    "fabiana4.jpeg",
    "fabiana4.jpeg",
];

let indice = 0;

const txtParagrafo = document.getElementById('texto-paragrafo');
const txtTitulo = document.getElementById('texto-titulo');
const txtImagem = document.getElementById('imagem-troca')
const btnVoltar = document.getElementById('btn-voltar');
const btnAvancar = document.getElementById('btn-avancar');


function atualizarConteudo() {
    // Atualiza o texto
    txtParagrafo.innerHTML = listaTextos[indice];
    txtTitulo.innerHTML = listaTitulos[indice];
    txtImagem.src = listaImagens[indice];

    // Regra do botão Voltar: esconde se estiver no primeiro texto
    if (indice === 0) {
        btnVoltar.style.display = "none";
    } else {
        btnVoltar.style.display = "inline-block";
    }

    // Regra do botão Avançar: esconde se chegar no último texto
    if (indice === listaTextos.length - 1) {
        btnAvancar.style.display = "none";
    } else {
        btnAvancar.style.display = "inline-block";
    }
}

// 3. Evento de Avançar
btnAvancar.addEventListener('click', () => {
    if (indice < listaTextos.length - 1) {
        indice++;
        atualizarConteudo();
    }
});

// 4. Evento de Voltar
btnVoltar.addEventListener('click', () => {
    if (indice > 0) {
        indice--;
        atualizarConteudo();
    }
});