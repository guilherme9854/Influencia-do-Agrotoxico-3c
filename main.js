let currentLang = 'pt';
let totalScore = 0;
let currentQuestionIndex = 0;

const quizData = [
    {
        question: { pt: "Qual é o principal objetivo do Controle Biológico na agricultura sustentável?" },
        options: {
            pt: [
                "Eliminar toda a biodiversidade local para proteger as plantas.",
                "Utilizar inimigos naturais (como insetos benéficos) para controlar pragas.",
                "Aumentar o uso de herbicidas sintéticos na lavoura.",
                "Substituir a irrigação por produtos químicos concentrados."
            ]
        },
        correct: 1
    },
    {
        question: { pt: "Qual é uma das principais vantagens do manejo biológico em relação aos defensivos químicos?" },
        options: {
            pt: [
                "Deixar resíduos tóxicos nos alimentos colhidos.",
                "Preservar insetos polinizadores importantes, como as abelhas.",
                "Exigir reaplicações diárias que aumentam os custos.",
                "Tornar o solo totalmente infértil a longo prazo."
            ]
        },
        correct: 1
    },
    {
        question: { pt: "A Embrapa apoia o uso do MIP. O que significa essa sigla?" },
        options: {
            pt: [
                "Manejo Integrado de Pragas.",
                "Mistura Intensiva de Pesticidas.",
                "Monitoramento Isolado de Plantas.",
                "Maximização Industrial de Produtos."
            ]
        },
        correct: 0
    }
];

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMenuLateral();
    initLanguageSystem();
    initQuizSystem();
    initCookiesAndFeedback();
    initScrollReveal();
});

// SISTEMA DO QUIZ COM COMPUTAÇÃO DE PONTOS
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
    const progressEl = document.getElementById('quiz-progress');
    const scoreLiveEl = document.getElementById('quiz-score-live');

    if (!questionEl || !optionsContainer) return;

    feedbackEl.classList.add('hidden');
    nextBtn.classList.add('hidden');
    optionsContainer.innerHTML = '';

    progressEl.textContent = `Pergunta ${currentQuestionIndex + 1} de ${quizData.length}`;
    scoreLiveEl.textContent = `Acertos: ${totalScore}`;

    const currentQuiz = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuiz.question.pt;

    currentQuiz.options.pt.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = optionText;
        button.addEventListener('click', () => {
            const buttons = optionsContainer.querySelectorAll('.option-btn');
            buttons.forEach(b => b.disabled = true);

            if (index === currentQuiz.correct) {
                button.classList.add('correct');
                feedbackEl.className = "quiz-feedback success";
                feedbackEl.textContent = "Correto! Resposta perfeita. 🌿";
                totalScore++;
                scoreLiveEl.textContent = `Acertos: ${totalScore}`;
            } else {
                button.classList.add('wrong');
                buttons[currentQuiz.correct].classList.add('correct');
                feedbackEl.className = "quiz-feedback error";
                feedbackEl.textContent = "Incorreto. A alternativa verde destaca a opção correta.";
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
    const progressEl = document.getElementById('quiz-progress');
    const nextBtn = document.getElementById('btn-next-quiz');
    
    progressEl.textContent = "Fim do Quiz";
    nextBtn.classList.add('hidden');
    questionEl.textContent = `Desafio Concluído! Você acertou ${totalScore} de ${quizData.length} perguntas.`;
    optionsContainer.innerHTML = `<p style='font-size:0.9rem; text-align:center; padding:10px; color:var(--accent); font-weight:600;'>Parabéns por exercitar sua consciência ambiental! 🌱</p>`;
}

// COOKIES & ECO-FEEDBACK WIDGET
function initCookiesAndFeedback() {
    const banner = document.getElementById('cookie-banner');
    const widget = document.getElementById('emoji-feedback-widget');
    const trigger = document.getElementById('feedback-trigger-btn');
    const card = document.getElementById('feedback-card');
    const closeBtn = document.querySelector('.close-widget-action');

    if (banner && !localStorage.getItem('cookies_accepted')) {
        banner.classList.add('show');
    } else if (widget) {
        widget.className = "feedback-widget cookie-hidden";
    }

    document.getElementById('cookie-accept-btn')?.addEventListener('click', () => {
        localStorage.setItem('cookies_accepted', true);
        banner.classList.remove('show');
        if (widget) widget.className = "feedback-widget cookie-hidden";
    });

    document.getElementById('cookie-decline-btn')?.addEventListener('click', () => {
        banner.classList.remove('show');
        if (widget) widget.className = "feedback-widget cookie-hidden";
    });

    trigger?.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.toggle('hidden');
    });

    closeBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.add('hidden');
    });
}

function submitEmojiVote(rating) {
    const screenVoting = document.getElementById('feedback-screen-voting');
    const screenThanks = document.getElementById('feedback-screen-thanks');
    localStorage.setItem('site_rating', rating);
    
    screenVoting.classList.add('hidden');
    screenThanks.classList.remove('hidden');
    
    setTimeout(() => {
        document.getElementById('feedback-card').classList.add('hidden');
        setTimeout(() => {
            screenVoting.classList.remove('hidden');
            screenThanks.classList.add('hidden');
        }, 300);
    }, 2000);
}

// FORMULÁRIO DE SUGESTÕES POR EMAIL
function handleEmailSubmit(event) {
    event.preventDefault();
    const fb = document.getElementById('email-feedback');
    fb.classList.remove('hidden');
    document.getElementById('email-form').reset();
    setTimeout(() => fb.classList.add('hidden'), 4000);
}

// UTILS NAVEGAÇÃO
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

function initLanguageSystem() {
    const btn = document.getElementById('lang-dropdown-btn');
    const dropdown = document.querySelector('.lang-dropdown');
    if (btn && dropdown) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });
        document.addEventListener('click', () => dropdown.classList.remove('active'));
    }
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