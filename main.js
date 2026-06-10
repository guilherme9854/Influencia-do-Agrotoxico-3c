let currentLang = 'pt';

const quizData = [
    {
        question: {
            pt: "Qual é o principal objetivo do Controle Biológico na agricultura sustentável?",
            en: "What is the main objective of Biological Control in sustainable agriculture?",
            es: "¿Cuál es el objetivo principal del Control Biológico en la agricultura sostenible?",
            fr: "Quel est l'objectif principal du contrôle biologique?",
            de: "Was ist das Hauptziel der biologischen Schädlingsbekämpfung?",
            it: "Qual è l'obiettivo principale del controllo biologico?"
        },
        options: {
            pt: [
                "Eliminar toda a biodiversidade local para proteger as plantas.",
                "Utilizar inimigos naturais (como insetos benéficos) para controlar pragas.",
                "Aumentar o uso de herbicidas sintéticos na lavoura.",
                "Substituir a irrigação por produtos químicos concentrados."
            ],
            en: [
                "Eliminate all local biodiversity to protect plants.",
                "Use natural enemies (like beneficial insects) to control pests.",
                "Increase the use of synthetic herbicides in the crop.",
                "Replace irrigation with concentrated chemical products."
            ],
            es: [
                "Eliminar toda la biodiversidad local para proteger las plantas.",
                "Utilizar enemigos naturales para controlar plagas.",
                "Aumentar el uso de herbicidas sintéticos.",
                "Reemplazar el riego por productos químicos."
            ],
            fr: [
                "Éliminer toute la biodiversité locale.",
                "Utiliser des ennemis naturels pour lutter contre les bioagresseurs.",
                "Augmenter l'utilisation d'herbicides.",
                "Remplacer l'irrigation par des produits chimiques."
            ],
            de: [
                "Die gesamte lokale Artenvielfalt vernichten.",
                "Natürliche Feinde zur Schädlingsbekämpfung einsetzen.",
                "Den Einsatz synthetischer Herbizide erhöhen.",
                "Die Bewässerung durch Chemikalien ersetzen."
            ],
            it: [
                "Eliminare tutta la biodiversità locale.",
                "Utilizzare nemici naturali per controllare i parassiti.",
                "Aumentare l'uso di erbicidi sintetici.",
                "Sostituire l'irrigazione con prodotti chimici."
            ]
        },
        correct: 1
    }
];

let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMenuLateral();
    initLanguageSystem();
    initQuizSystem();
    initScrollReveal();
});

function initLanguageSystem() {
    const btn = document.getElementById('lang-dropdown-btn');
    const dropdown = document.querySelector('.lang-dropdown');
    const options = document.querySelectorAll('[data-lang-select]');

    if (!btn || !dropdown) return;

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('active');
    });

    document.addEventListener('click', () => dropdown.classList.remove('active'));

    options.forEach(opt => {
        opt.addEventListener('click', () => {
            const selectedLang = opt.getAttribute('data-lang-select');
            currentLang = selectedLang;
            const labelMap = { pt: 'PT', en: 'EN', es: 'ES', fr: 'FR', de: 'DE', it: 'IT' };
            btn.textContent = `🌐 ${labelMap[selectedLang]}`;
            renderQuizQuestion();
        });
    });
}

function initQuizSystem() {
    const nextBtn = document.getElementById('btn-next-quiz');
    if (!nextBtn) return;

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            renderQuizQuestion();
        } else {
            showQuizFinished();
        }
    });
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const questionEl = document.getElementById('quiz-question');
    const optionsContainer = document.getElementById('quiz-options');
    const feedbackEl = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('btn-next-quiz');

    if (!questionEl || !optionsContainer) return;

    feedbackEl.classList.add('hidden');
    nextBtn.classList.add('hidden');
    optionsContainer.innerHTML = '';

    if (currentQuestionIndex >= quizData.length) {
        showQuizFinished();
        return;
    }

    const currentQuiz = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuiz.question[currentLang];

    currentQuiz.options[currentLang].forEach((optionText, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = optionText;
        button.addEventListener('click', () => {
            const buttons = optionsContainer.querySelectorAll('.option-btn');
            buttons.forEach(b => b.disabled = true);

            if (index === currentQuiz.correct) {
                button.classList.add('correct');
                feedbackEl.className = "quiz-feedback success";
                feedbackEl.textContent = "Correto! 🌿";
            } else {
                button.classList.add('wrong');
                buttons[currentQuiz.correct].classList.add('correct');
                feedbackEl.className = "quiz-feedback error";
                feedbackEl.textContent = "Incorreto.";
            }
            feedbackEl.classList.remove('hidden');
            nextBtn.classList.remove('hidden');
        });
        optionsContainer.appendChild(button);
    });
}

function showQuizFinished() {
    const questionEl = document.getElementById('quiz-question');
    const optionsContainer = document.getElementById('quiz-options');
    if (questionEl) questionEl.textContent = "Desafio Concluído!";
    if (optionsContainer) optionsContainer.innerHTML = '';
}

function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', () => {
        if (document.body.classList.contains('light-mode')) {
            document.body.className = 'dark-mode';
            toggle.textContent = '☀️';
        } else {
            document.body.className = 'light-mode';
            toggle.textContent = '🌙';
        }
    });
}

function initMenuLateral() {
    const burger = document.querySelector('.hamburger');
    const menu = document.querySelector('.nav-menu');
    if (!burger || !menu) return;
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });
}

function filterAlternativas(category) {
    const cards = document.querySelectorAll('.alternativas-container .card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

function switchStep(step) {
    const cards = document.querySelectorAll('.infographic-steps .step-card');
    cards.forEach((c, idx) => {
        if (idx + 1 === step) c.classList.add('active');
        else c.classList.remove('active');
    });
}

function initScrollReveal() {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.05 });
    els.forEach(el => obs.observe(el));
}