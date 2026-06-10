let currentLang = 'pt';
let quizScore = 0;
let currentQuestionIndex = 0;

const translations = {
    pt: {
        logo: "Agro<span>Sustentável</span>", navHeader: "Navegação", lnkInicio: "Início", lnkDados: "Dados Gerais",
        lnkPasso: "Passo a Passo", lnkPraticas: "Práticas Práticas", lnkQuiz: "Quiz Educativo", lnkReferencias: "Referências",
        contatoHeader: "Contacto", langHeader: "Escolha o Idioma", btnCriar: "Criar conta", btnEntrar: "Entrar",
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
        evalTitle: "Avalie sua Experiência", evalDesc: "O que achou do nosso ecossistema digital?", btnEvalSend: "Enviar para Sugestões",
        refTitle: "Referências e Fontes Oficiais", refC1: "Diretrizes Nacionais para o Manejo Integrado de Pragas (MIP).",
        refC2: "Relatórios globais sobre o uso seguro de insumos biológicos na lavoura.",
        descTitle: "Sobre este Ecossistema", descContent: "Esta plataforma digital foi desenvolvida com o objetivo de disseminar dados científicos e práticos sobre o manejo biológico e a agricultura regenerativa. Alinhado com as metas globais de sustentabilidade, o projeto visa educar produtores e estudantes sobre a viabilidade econômica e ambiental da transição ecológica no campo.",
        cookieMsg: "Utilizamos cookies para garantir a melhor experiência no nosso ecossistema sustentável.", copy: "&copy; 2026 AgroSustentável. Todos os direitos reservados."
    },
    en: {
        logo: "Agro<span>Sustainable</span>", navHeader: "Navigation", lnkInicio: "Home", lnkDados: "General Data",
        lnkPasso: "Step by Step", lnkPraticas: "Practical Practices", lnkQuiz: "Educational Quiz", lnkReferencias: "References",
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
        evalTitle: "Rate Your Experience", evalDesc: "What did you think of our digital ecosystem?", btnEvalSend: "Send to Suggestions",
        refTitle: "References and Official Sources", refC1: "National Guidelines for Integrated Pest Management (IPM).",
        refC2: "Global reports on the safe use of biological inputs in farming.",
        descTitle: "About this Ecosystem", descContent: "This digital platform was developed to spread scientific and practical data on biological management and regenerative agriculture. Aligned with global sustainability goals, the project aims to educate farmers and students on the economic and environmental viability of the field's ecological transition.",
        cookieMsg: "We use cookies to ensure the best experience within our sustainable ecosystem.", copy: "&copy; 2026 AgroSustentável. All rights reserved."
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
            pt: ["Lagarta do cartucho", "Mosca doméstica comum", "Joaninha maculado", "Gafanhoto migratório"],
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
    document.getElementById('txt-eval-title').textContent = t.evalTitle;
    document.getElementById('txt-eval-desc').textContent = t.evalDesc;
    document.getElementById('btn-eval-send').textContent = t.btnEvalSend;
    document.getElementById('txt-ref-title').textContent = t.refTitle;
    document.getElementById('txt-ref-c1').textContent = t.refC1;
    document.getElementById('txt-ref-c2').textContent = t.refC2;
    document.getElementById('txt-desc-proj-title').textContent = t.descTitle;
    document.getElementById('txt-desc-proj-content').textContent = t.descContent;
    document.getElementById('txt-cookie-msg').textContent = t.cookieMsg;
    document.getElementById('txt-footer-copy').innerHTML = t.copy;

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

function votarEmoji(voto) {
    const feedbackBox = document.getElementById('eval-feedback-box');
    const responseText = document.getElementById('eval-response-text');
    const negativeAction = document.getElementById('eval-negative-action');

    feedbackBox.classList.remove('hidden');

    if (voto === 'ruim' || voto === 'regular') {
        responseText.textContent = "O que podemos melhorar no ecossistema?";
        negativeAction.classList.remove('hidden');
    } else {
        responseText.textContent = "Muito obrigado pelo seu feedback positivo!";
        negativeAction.classList.add('hidden');
    }
}

function enviarParaSugestao() {
    const msg = document.getElementById('eval-textarea').value;
    if(msg.trim() !== "") {
        alert("Obrigado pela sugestão!");
        document.getElementById('eval-textarea').value = "";
        fecharAvaliacao();
    }
}

function fecharAvaliacao() {
    document.getElementById('avaliacao-container').classList.add('hidden');
}

function verificarCookies() {
    if (localStorage.getItem('cookiesAceitos') === 'true') {
        document.getElementById('cookie-banner').classList.add('hidden');
    }
}

function aceitarCookies() {
    localStorage.setItem('cookiesAceitos', 'true');
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