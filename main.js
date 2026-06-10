let currentLang = 'pt';
const quizData = [{
    question: {
        pt: "Qual é o principal objetivo do Controle Biológico na agricultura sustentável?",
        en: "What is the main objective of Biological Control in sustainable agriculture?"
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
        ]
    },
    correct: 1
}];

let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMenuLateral();
    initLanguageSystem();
    initQuizSystem();
    initFeedbackWidget();
    initCookies();
    initScrollReveal();
});

function initLanguageSystem() {
    const btn = document.getElementById('lang-dropdown-btn');
    const dropdown = document.querySelector('.lang-dropdown');
    const options = document.querySelectorAll('[data-lang-select]');
    if (!btn || !dropdown) return;

    btn.addEventListener('click', (e) => { e.stopPropagation(); dropdown.classList.toggle('active'); });
    document.addEventListener('click', () => dropdown.classList.remove('active'));

    options.forEach(opt => {
        opt.addEventListener('click', () => {
            const selectedLang = opt.getAttribute('data-lang-select');
            currentLang = selectedLang;
            btn.textContent = `🌐 ${selectedLang.toUpperCase()}`;
            renderQuizQuestion();
        });
    });
}

function initQuizSystem() {
    const nextBtn = document.getElementById('btn-next-quiz');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) renderQuizQuestion();
            else showQuizFinished();
        });
    }
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

    const currentQuiz = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuiz.question[currentLang] || currentQuiz.question['pt'];

    const optionsList = currentQuiz.options[currentLang] || currentQuiz.options['pt'];
    optionsList.forEach((optionText, index) => {
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
    document.getElementById('quiz-question').textContent = "Desafio Concluído!";
    document.getElementById('quiz-options').innerHTML = '';
}

function initFeedbackWidget() {
    const trigger = document.getElementById('feedback-trigger-btn');
    const card = document.getElementById('feedback-card');
    const closeButtons = document.querySelectorAll('.close-widget-action');
    const screenVoting = document.getElementById('feedback-screen-voting');
    const screenThanks = document.getElementById('feedback-screen-thanks');
    const emojis = document.querySelectorAll('.emoji-btn');

    if (!trigger || !card) return;

    trigger.addEventListener('click', (e) => { e.stopPropagation(); card.classList.toggle('hidden'); });
    closeButtons.forEach(btn => btn.addEventListener('click', (e) => { e.stopPropagation(); card.classList.add('hidden'); }));

    emojis.forEach(emoji => {
        emoji.addEventListener('click', (e) => {
            e.stopPropagation();
            screenVoting.classList.add('hidden');
            screenThanks.classList.remove('hidden');
            setTimeout(() => {
                card.classList.add('hidden');
                setTimeout(() => {
                    screenVoting.classList.remove('hidden');
                    screenThanks.classList.add('hidden');
                }, 300);
            }, 2500);
        });
    });
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
    if (burger && menu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            menu.classList.toggle('active');
        });
    }
}

function filterAlternativas(category) {
    const cards = document.querySelectorAll('.alternativas-container .card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) card.classList.remove('hidden');
        else card.classList.add('hidden');
    });
}

function switchStep(step) {
    const cards = document.querySelectorAll('.infographic-steps .step-card');
    cards.forEach((c, idx) => {
        if (idx + 1 === step) c.classList.add('active');
        else c.classList.remove('active');
    });
}

function initCookies() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;
    banner.classList.add('show');
    document.getElementById('cookie-accept-btn').addEventListener('click', () => banner.classList.remove('show'));
    document.getElementById('cookie-decline-btn').addEventListener('click', () => banner.classList.remove('show'));
}

function initScrollReveal() {
    const els = document.querySelectorAll('.reveal');
    els.forEach(el => el.classList.add('visible'));
}