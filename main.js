// CONFIGURAÇÕES DE TRADUÇÃO
const langData = {
    pt: {
        heroTitle: "O Futuro do Campo com Manejo Biológico",
        heroDesc: "Uma análise científica sobre como a substituição de defensivos químicos por defensores naturais protege a biodiversidade.",
        signup: "Criar conta", signin: "Entrar",
        stat1: "Custos Reduzidos", stat2: "Preservação",
        evalTitle: "Avalie sua experiência", evalBad: "Lamentamos. Como podemos melhorar?",
        evalThanks: "Obrigado pela sua avaliação! 💚", cookie: "Utilizamos cookies para melhorar sua experiência acadêmica."
    },
    en: {
        heroTitle: "The Future of Farming with Biological Management",
        heroDesc: "A scientific analysis of how replacing chemical pesticides with natural defenders protects biodiversity.",
        signup: "Sign Up", signin: "Sign In",
        stat1: "Reduced Costs", stat2: "Preservation",
        evalTitle: "Rate your experience", evalBad: "We are sorry. How can we improve?",
        evalThanks: "Thank you for your rating! 💚", cookie: "We use cookies to improve your academic experience."
    }
    // Adicione os outros idiomas seguindo este padrão...
};

// DADOS DO QUIZ (5 Questões)
const quizQuestions = [
    { q: "Qual o principal benefício do manejo biológico?", options: ["Redução química", "Aumento de veneno", "Gasto de água"], correct: 0 },
    { q: "As joaninhas são exemplos de quê?", options: ["Pragas", "Controle biológico", "Fertilizantes"], correct: 1 },
    { q: "O manejo biológico protege as abelhas?", options: ["Não", "Sim, totalmente", "Às vezes"], correct: 1 },
    { q: "Qual o foco do Agrinho 2026?", options: ["Indústria", "Sustentabilidade", "Mineração"], correct: 1 },
    { q: "Bio-defensivos deixam resíduos tóxicos?", options: ["Sim", "Não", "Apenas no solo"], correct: 1 }
];

let currentQuestion = 0;
let score = 0;

// INICIALIZAÇÃO
document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
    setupMenus();
    initScrollReveal();
});

// NAVEGAÇÃO E MENUS
function setupMenus() {
    const mainBtn = document.getElementById('main-menu-btn');
    const langBtn = document.getElementById('lang-menu-btn');
    const sideMenu = document.getElementById('side-menu');
    const langMenu = document.getElementById('lang-side-menu');

    mainBtn.onclick = () => sideMenu.classList.toggle('active');
    langBtn.onclick = () => langMenu.classList.toggle('active');

    // Fechar menus ao clicar fora
    document.addEventListener('click', (e) => {
        if (!mainBtn.contains(e.target) && !sideMenu.contains(e.target)) sideMenu.classList.remove('active');
        if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) langMenu.classList.remove('active');
    });
}

// LOGICA DO QUIZ
function loadQuestion() {
    const qBox = document.getElementById('quiz-question');
    const oBox = document.getElementById('quiz-options');
    const data = quizQuestions[currentQuestion];

    qBox.innerText = data.q;
    oBox.innerHTML = "";

    data.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = "option-btn";
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(idx);
        oBox.appendChild(btn);
    });
}

function checkAnswer(idx) {
    if (idx === quizQuestions[currentQuestion].correct) score++;
    
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        loadQuestion();
    } else {
        document.getElementById('quiz-box').innerHTML = `<h3>Fim do Quiz! Pontuação: ${score}/${quizQuestions.length}</h3>`;
    }
}

// AVALIAÇÃO
function handleRating(type) {
    const s1 = document.getElementById('eval-screen-1');
    if (type === 'bad') {
        s1.classList.add('hidden');
        document.getElementById('eval-screen-bad').classList.remove('hidden');
    } else {
        s1.classList.add('hidden');
        document.getElementById('eval-screen-thanks').classList.remove('hidden');
        setTimeout(toggleEval, 3000);
    }
}

function submitBadRating() {
    document.getElementById('eval-screen-bad').classList.add('hidden');
    document.getElementById('eval-screen-thanks').classList.remove('hidden');
    setTimeout(toggleEval, 3000);
}

function toggleEval() {
    document.getElementById('eval-widget').classList.add('hidden');
}

// IDIOMAS
function setLanguage(lang) {
    const data = langData[lang] || langData.pt;
    document.getElementById('ui-hero-title').innerText = data.heroTitle;
    document.getElementById('ui-hero-desc').innerText = data.heroDesc;
    document.getElementById('ui-btn-signup').innerText = data.signup;
    document.getElementById('ui-btn-signin').innerText = data.signin;
    document.getElementById('ui-stat-1').innerText = data.stat1;
    document.getElementById('ui-stat-2').innerText = data.stat2;
    // ... continue para os outros elementos
}

// COOKIES
function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
}

// ANIMAÇÃO DE SCROLL
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}