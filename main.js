let currentLang = 'pt';
let quizScore = 0;
let currentQuestionIndex = 0;

const translations = {
    pt: {
        logo: "Agro<span>Sustentável</span>", navHeader: "Navegação", lnkInicio: "Início", lnkDados: "Dados Gerais",
        lnkPasso: "Passo a Passo", lnkPraticas: "Práticas do Campo", lnkQuiz: "Quiz Educativo", lnkReferencias: "Referências",
        contatoHeader: "Contato", langHeader: "Escolha o Idioma", btnCriar: "Criar conta", btnEntrar: "Entrar",
        heroTag: "Sustentabilidade Racional", heroTitle: "O Futuro do Campo com Manejo Biológico",
        heroDesc: "Uma análise científica sobre como a substituição de defensivos químicos por defensores naturais protege a biodiversidade, reduz custos e garante alimentos mais saudáveis.",
        stat1: "Redução média nos custos de manejo", stat2: "Mais preservação de polinizadores", stat3: "Resíduos tóxicos no produto final",
        stepTitle: "Como Funciona a Transição Sustentável?", stepInst: "Clique nos cartões abaixo para visualizar cada etapa do processo no ecossistema:",
        stepC1T: "Monitoramento", stepC1D: "Identificação precisa dos focos de pragas antes de agir.",
        stepC2T: "Introdução", stepC2D: "Liberação controlada de inimigos naturais específicos.",
        stepC3T: "Equilíbrio", stepC3D: "A própria natureza controla a população de pragas.",
        pracTitle: "Substituições Inteligentes no Campo", fltAll: "Ver Tudo", fltBio: "Manejo Biológico", fltQui: "Riscos Químicos",
        cardQBadge: "Impacto Convencional", cardQTitle: "Defensivos Químicos Pesados", cardQLbl: "Degradação do Solo",
        cardBBadge: "Alternativa Ecológica", cardBTitle: "Macrobiológicos (Joaninhas)", cardBLbl: "Preservação de Água",
        quizTitle: "Desafio do Conhecimento", quizSubtitle: "Teste os seus conhecimentos sobre o impacto das práticas agroecológicas no campo:",
        evalTitle: "Avalie sua experiência", evalBad: "Lamentamos. Como podemos melhorar?", evalThanks: "Obrigado pela sua avaliação! 💚",
        refTitle: "Referências e Fontes Oficiais", refC1: "Diretrizes Nacionais para o Manejo Integrado de Pragas (MIP).",
        refC2: "Relatórios globais sobre o uso seguro de insumos biológicos na lavoura.",
        cookieMsg: "Utilizamos cookies para melhorar sua experiência acadêmica e garantir a navegação segura do ecossistema.", 
        copy: "&copy; 2026 AgroSustentável. Todos os direitos reservados.",
        aboutTitle: "Sobre este Ecossistema Digital",
        aboutDesc: "Esta plataforma foi desenvolvida como uma ferramenta educacional e científica focada na disseminação de dados sobre agricultura regenerativa e manejo biológico de pragas. O objetivo central é conscientizar a comunidade escolar e produtores rurais a respeito da viabilidade econômica da substituição de defensivos químicos por organismos macrobiológicos, promovendo a conservação dos polinizadores nativos, o equilíbrio dos solos agrícolas e a segurança alimentar a longo prazo em total conformidade com as diretrizes do Programa Agrinho."
    },
    en: {
        logo: "Agro<span>Sustainable</span>", navHeader: "Navigation", lnkInicio: "Home", lnkDados: "General Data",
        lnkPasso: "Step by Step", lnkPraticas: "Field Practices", lnkQuiz: "Educational Quiz", lnkReferencias: "References",
        contatoHeader: "Contact", langHeader: "Choose Language", btnCriar: "Create account", btnEntrar: "Sign in",
        heroTag: "Rational Sustainability", heroTitle: "The Future of the Field with Biological Management",
        heroDesc: "A scientific analysis of how replacing chemical pesticides with natural defenders protects biodiversity, reduces costs, and ensures healthier food.",
        stat1: "Average reduction in management costs", stat2: "More preservation of pollinators", stat3: "Toxic residues in final product",
        stepTitle: "How Does Sustainable Transition Work?", stepInst: "Click on the cards below to view each step of the ecosystem process:",
        stepC1T: "Monitoring", stepC1D: "Precise identification of pest outbreaks before acting.",
        stepC2T: "Introduction", stepC2D: "Controlled release of specific natural enemies.",
        stepC3T: "Balance", stepC3D: "Nature itself controls the pest population.",
        pracTitle: "Smart Substitutions in the Field", fltAll: "View All", fltBio: "Biological Management", fltQui: "Chemical Risks",
        cardQBadge: "Conventional Impact", cardQTitle: "Heavy Chemical Pesticides", cardQLbl: "Soil Degradation",
        cardBBadge: "Ecological Alternative", cardBTitle: "Macrobiologicals (Ladybugs)", cardBLbl: "Water Preservation",
        quizTitle: "Knowledge Challenge", quizSubtitle: "Test your knowledge about the impact of agroecological practices in the field:",
        evalTitle: "Rate your experience", evalBad: "We are sorry. How can we improve?", evalThanks: "Thank you for your rating! 💚",
        refTitle: "References and Official Sources", refC1: "National Guidelines for Integrated Pest Management (IPM).",
        refC2: "Global reports on the safe use of biological inputs in farming.",
        cookieMsg: "We use cookies to improve your academic experience and ensure secure navigation of the ecosystem.", 
        copy: "&copy; 2026 AgroSustentável. All rights reserved.",
        aboutTitle: "About this Digital Ecosystem",
        aboutDesc: "This platform was developed as an educational and scientific tool focused on the dissemination of data on regenerative agriculture and biological pest management. The central objective is to raise awareness among the school community and rural producers regarding the economic viability of replacing chemical pesticides with macrobiological organisms, promoting the conservation of native pollinators, the balance of agricultural soils, and long-term food security in full compliance with the guidelines of the Agrinho Program."
    }
};

const quizData = [
    {
        question: { pt: "Qual é o principal objetivo do Controle Biológico na agricultura?", en: "What is the main objective of Biological Control in farming?" },
        options: {
            pt: ["Eliminar toda a biodiversidade local para proteger as plantas.", "Utilizar inimigos naturais (como insetos benéficos) para controlar pragas.", "Aumentar o uso de herbicidas sintéticos na lavoura.", "Substituir a irrigação por produtos químicos concentrados."],
            en: ["Eliminate all local biodiversity to protect plants.", "Use natural enemies (like beneficial insects) to control pests.", "Increase the use of synthetic herbicides in the field.", "Replace irrigation with concentrated chemical products."]
        }, correct: 1
    },
    {
        question: { pt: "Qual inseto é famoso por atuar como predador natural de pulgões?", en: "Which insect is famous for acting as a natural predator of aphids?" },
        options: {
            pt: ["Lagarta do cartucho", "Mosca doméstica comum", "Joaninha maculada", "Gafanhoto migratório"],
            en: ["Fall armyworm", "Common housefly", "Spotted ladybug", "Migratory locust"]
        }, correct: 2
    },
    {
        question: { pt: "O manejo de base biológica reduz prioritariamente qual impacto?", en: "Biologically based management primarily reduces which impact?" },
        options: {
            pt: ["A quantidade de matéria orgânica saudável no solo.", "O acúmulo e descarte de resíduos tóxicos químicos.", "A reciclagem de embalagens plásticas descartáveis.", "O fluxo natural de água da chuva limpa."],
            en: ["The amount of healthy organic matter in the soil.", "The accumulation and disposal of toxic chemical residues.", "The recycling of disposable plastic packaging.", "The natural flow of clean rainwater."]
        }, correct: 1
    }
];

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMenusLaterais();
    initLanguageSystem();
    initQuizSystem();
    initScrollReveal();
    verificarCookies();
});

function applyTranslations() {
    const lang = currentLang;
    const t = translations[lang] || translations['pt'];

    document.getElementById('txt-logo').innerHTML = t.logo;
    document.getElementById('txt-nav-header').textContent = t.navHeader;
    document.getElementById('lnk-inicio').textContent = t.lnkInicio;
    document.getElementById('lnk-dados').textContent = t.lnkDados;
    document.getElementById('lnk-passo').textContent = t.lnkPasso;
    document.getElementById('lnk-praticas').textContent = t.lnkPraticas;
    document.getElementById('lnk-quiz').textContent = t.lnkQuiz;
    document.getElementById('lnk-referencias').textContent = t.lnkReferencias;
    document.getElementById('txt-contato-header').textContent = t.contatoHeader;
    document.getElementById('txt-lang-header').textContent = t.langHeader;
    document.getElementById('btn-criar-conta').textContent = t.btnCriar;
    document.getElementById('btn-entrar').textContent = t.btnEntrar;
    document.getElementById('txt-hero-tag').textContent = t.heroTag;
    document.getElementById('txt-hero-title').textContent = t.heroTitle;
    document.getElementById('txt-hero-desc').textContent = t.heroDesc;
    document.getElementById('txt-stat-1').textContent = t.stat1;
    document.getElementById('txt-stat-2').textContent = t.stat2;
    document.getElementById('txt-stat-3').textContent = t.stat3;
    document.getElementById('txt-step-title').textContent = t.stepTitle;
    document.getElementById('txt-step-inst').textContent = t.stepInst;
    document.getElementById('txt-step-c1-t').textContent = t.stepC1T;
    document.getElementById('txt-step-c1-d').textContent = t.stepC1D;
    document.getElementById('txt-step-c2-t').textContent = t.stepC2T;
    document.getElementById('txt-step-c2-d').textContent = t.stepC2D;
    document.getElementById('txt-step-c3-t').textContent = t.stepC3T;
    document.getElementById('txt-step-c3-d').textContent = t.stepC3D;
    document.getElementById('txt-prac-title').textContent = t.pracTitle;
    document.getElementById('btn-flt-all').textContent = t.fltAll;
    document.getElementById('btn-flt-bio').textContent = t.fltBio;
    document.getElementById('btn-flt-qui').textContent = t.fltQui;
    document.getElementById('txt-card-q-badge').textContent = t.cardQBadge;
    document.getElementById('txt-card-q-title').textContent = t.cardQTitle;
    document.getElementById('txt-card-q-lbl').textContent = t.cardQLbl;
    document.getElementById('txt-card-b-badge').textContent = t.cardBBadge;
    document.getElementById('txt-card-b-title').textContent = t.cardBTitle;
    document.getElementById('txt-card-b-lbl').textContent = t.cardBLbl;
    document.getElementById('txt-quiz-title').textContent = t.quizTitle;
    document.getElementById('txt-quiz-subtitle').textContent = t.quizSubtitle;
    document.getElementById('ui-eval-title').textContent = t.evalTitle;
    document.getElementById('ui-eval-bad').textContent = t.evalBad;
    document.getElementById('ui-eval-thanks').textContent = t.evalThanks;
    document.getElementById('txt-ref-title').textContent = t.refTitle;
    document.getElementById('txt-ref-c1').textContent = t.refC1;
    document.getElementById('txt-ref-c2').textContent = t.refC2;
    document.getElementById('ui-cookie-txt').textContent = t.cookieMsg;
    document.getElementById('txt-footer-copy').innerHTML = t.copy;
    document.getElementById('txt-about-title').textContent = t.aboutTitle;
    document.getElementById('txt-about-desc').textContent = t.aboutDesc;

    renderQuizQuestion();
}

function initLanguageSystem() {
    const options = document.querySelectorAll('[data-lang-select]');
    const menuLang = document.getElementById('lang-menu');
    const toggleLang = document.getElementById('menu-lang-toggle');

    options.forEach(opt => {
        opt.addEventListener('click', () => {
            currentLang = opt.getAttribute('data-lang-select');
            menuLang.classList.remove('active');
            toggleLang.classList.remove('active');
            applyTranslations();
        });
    });
}

function initMenusLaterais() {
    const burgerMain = document.getElementById('menu-main-toggle');
    const mainMenu = document.getElementById('main-menu');
    const burgerLang = document.getElementById('menu-lang-toggle');
    const langMenu = document.getElementById('lang-menu');

    burgerMain.addEventListener('click', (e) => {
        e.stopPropagation();
        burgerMain.classList.toggle('active');
        mainMenu.classList.toggle('active');
        langMenu.classList.remove('active');
    });

    burgerLang.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('active');
        burgerMain.classList.remove('active');
        mainMenu.classList.remove('active');
    });

    document.addEventListener('click', () => {
        burgerMain.classList.remove('active');
        mainMenu.classList.remove('active');
        langMenu.classList.remove('active');
    });
}

function initQuizSystem() {
    const nextBtn = document.getElementById('btn-next-quiz');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            renderQuizQuestion();
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

    if (currentQuestionIndex >= quizData.length) {
        showQuizFinished();
        return;
    }

    const currentQuiz = quizData[currentQuestionIndex];
    const qLang = currentQuiz.question[currentLang] || currentQuiz.question['pt'];
    questionEl.textContent = `(${currentQuestionIndex + 1}/${quizData.length}) ${qLang}`;

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
                feedbackEl.textContent = "Correto!";
                quizScore++;
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
    if (optionsContainer) {
        optionsContainer.innerHTML = `
            <div style="text-align: center; padding: 10px 0;">
                <p style="font-size: 1.1rem; font-weight: bold; color: var(--accent);">Pontuação Final: ${quizScore} / ${quizData.length}</p>
                <button class="btn-submit" style="margin-top: 14px;" onclick="reiniciarQuiz()">Tentar Novamente</button>
            </div>
        `;
    }
}

function reiniciarQuiz() {
    quizScore = 0;
    currentQuestionIndex = 0;
    renderQuizQuestion();
}

// LOGICA SISTEMA DE AVALIAÇÃO RESTAURADO
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

// SISTEMA DE COOKIES
function verificarCookies() {
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        document.getElementById('cookie-banner').classList.add('hidden');
    }
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-banner').classList.add('hidden');
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