function trocarPalavra() {
    /*___________Palavra escolhida para substituir______________*/
    var palavra = document.getElementById('substituicao').value;
    // alert(palavra)

    //Troca das palavras - VERSAO TAGNAME
    var trocar = document.getElementsByClassName('trocar')

    //______________Usar FOR para repetição___________________

    for (i = 0; i < trocar.length; i++) {
        trocar[i].innerHTML = palavra
        console.log(trocar[i])
    }
}

/* ════════════════════════════════════════════
    JAVASCRIPT COM FUNÇÕES ESTÉTICAS
════════════════════════════════════════════ */
// Gerar bolhas aleatorias
const bcont = document.getElementById('bubbles-container');
for (let i = 0; i < 18; i++) {
    const b = document.createElement('div');
    b.classList.add('bolha');
    const size = Math.random() * 28 + 8;
    b.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}vw;
        animation-duration:${(Math.random() * 7 + 5).toFixed(1)}s;
        animation-delay:${(Math.random() * 8).toFixed(1)}s;
      `;
    bcont.appendChild(b);
}

// Gerar particulas brilhantes no fundo
const pcont = document.getElementById('particles-container');
for (let i = 0; i < 70; i++) {
    const p = document.createElement('div');
    p.classList.add('particula');
    const size = Math.random() * 3.5 + 1;
    p.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}vw;
        top:${Math.random() * 100}vh;
        animation-duration:${(Math.random() * 3 + 2).toFixed(1)}s;
        animation-delay:${(Math.random() * 5).toFixed(1)}s;
      `;
    pcont.appendChild(p);
}

//Gerar peixes aleatorios
const fishSVGs = [
    `<img src="img/vermilion-snapper-fish-silhouette-svgrepo-com.svg" width="70" alt="peixe">`,
    `<img src="img/vermilion-snapper-fish-silhouette-svgrepo-com.svg" width="45" alt="peixe">`,
    `<img src="img/vermilion-snapper-fish-silhouette-svgrepo-com.svg" width="45" alt="peixe">`,
    `<img src="img/vermilion-snapper-fish-silhouette-svgrepo-com.svg" width="45" alt="peixe">`,
    `<img src="img/vermilion-snapper-fish-silhouette-svgrepo-com.svg" width="45" alt="peixe">`,
    `<img src="img/vermilion-snapper-fish-silhouette-svgrepo-com.svg" width="45" alt="peixe">`,
    `<img src="img/vermilion-snapper-fish-silhouette-svgrepo-com.svg" width="45" alt="peixe">`,
    `<img src="img/vermilion-snapper-fish-silhouette-svgrepo-com.svg" width="45" alt="peixe">`,
    `<img src="img/vermilion-snapper-fish-silhouette-svgrepo-com.svg" width="45" alt="peixe">`,
    `<img src="img/vermilion-snapper-fish-silhouette-svgrepo-com.svg" width="45" alt="peixe">`,
    `<img src="img/vermilion-snapper-fish-silhouette-svgrepo-com.svg" width="45" alt="peixe">`,
    `<img src="img/vermilion-snapper-fish-silhouette-svgrepo-com.svg" width="45" alt="peixe">`,
];

// Gerar Peixes na tela
const fcont = document.getElementById('fish-container');
for (let i = 0; i < 5; i++) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('peixe');
    wrapper.innerHTML = fishSVGs[i % fishSVGs.length];
    const topVal = 10 + Math.random() * 75;
    const dur = 18 + Math.random() * 20;
    const delay = Math.random() * 15;
    wrapper.style.cssText = `
        top:${topVal}vh;
        animation-duration:${dur.toFixed(1)}s;
        animation-delay:-${delay.toFixed(1)}s;
      `;
    fcont.appendChild(wrapper);
}

// ─── NAVBAR SCROLL ───
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 80);
    });
}

// ─── TÍTULO COM EFEITO ONDA ───
const titulo = document.getElementById('titulo');
if (titulo) {
    const letras = titulo.innerText.split('');
    titulo.innerHTML = letras.map((l, i) =>
        `<span style="animation-delay:${i * 0.12}s">${l === ' ' ? '&nbsp;' : l}</span>`
    ).join('');
}


// Iniciar o som no primeiro clique do usuário
document.addEventListener('click', function iniciarSom() {
    const audio = document.getElementById('som-bolhas');
    audio.volume = 0.15; // bem baixinho — 0.0 a 1.0
    audio.play();
    document.removeEventListener('click', iniciarSom); // toca só uma vez esse gatilho
}, { once: true });