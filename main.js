// VARIÁVEIS DE ESTADO DO ECOSSISTEMA
let currentLang = 'pt';

// TRADUÇÕES COMPLETAS E DETALHADAS CONTENDO TODAS AS SEÇÕES DO SITE
const translations = {
    pt: {
        logo: "Agro<span>Sustentável</span>", navHeader: "Navegação", lnkInicio: "Início", lnkDados: "Dados Gerais",
        lnkPasso: "Passo a Passo", lnkPraticas: "Práticas Práticas", lnkReferencias: "Referências",
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
        evalTriggerMsg: "Nos Avalie ⭐", evalTitle: "Avalie sua Experiência", evalDesc: "O que achou do nosso ecossistema digital?", btnEvalSend: "Enviar para Sugestões",
        refTitle: "Referências e Fontes Oficiais", refC1: "Diretrizes Nacionais para o Manejo Integrado de Pragas (MIP).",
        refC2: "Relatórios globais sobre o uso seguro de insumos biológicos na lavoura.",
        descTitle: "Sobre este Ecossistema", descContent: "Esta plataforma digital foi desenvolvida com o objetivo de disseminar dados científicos e práticos sobre o manejo biológico e a agricultura regenerativa. Alinhado com as metas globais de sustentabilidade, o projeto visa educar produtores e estudantes sobre a viabilidade econômica e ambiental da transição ecológica no campo.",
        cookieMsg: "Utilizamos cookies para garantir a melhor experiência no nosso ecossistema sustentável.", copy: "&copy; 2026 AgroSustentável. Todos os direitos reservados aos autores."
    },
    en: {
        logo: "Agro<span>Sustainable</span>", navHeader: "Navigation", lnkInicio: "Home", lnkDados: "General Data",
        lnkPasso: "Step by Step", lnkPraticas: "Practical Practices", lnkReferencias: "References",
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
        evalTriggerMsg: "Rate Us ⭐", evalTitle: "Rate Your Experience", evalDesc: "What did you think of our digital ecosystem?", btnEvalSend: "Send to Suggestions",
        refTitle: "References and Official Sources", refC1: "National Guidelines for Integrated Pest Management (IPM).",
        refC2: "Global reports on the safe use of biological inputs in farming.",
        descTitle: "About this Ecosystem", descContent: "This digital platform was developed to spread scientific and practical data on biological management and regenerative agriculture. Aligned with global sustainability goals, the project aims to educate farmers and students on the economic and environmental viability of the field's ecological transition.",
        cookieMsg: "We use cookies to ensure the best experience within our sustainable ecosystem.", copy: "&copy; 2026 AgroSustentável. All rights reserved to authors."
    },
    es: {
        logo: "Agro<span>Sustentable</span>", navHeader: "Navegación", lnkInicio: "Inicio", lnkDados: "Datos Generales",
        lnkPasso: "Paso a Paso", lnkPraticas: "Prácticas Prácticas", lnkReferencias: "Referencias",
        contatoHeader: "Contacto", langHeader: "Elegir Idioma", btnCriar: "Crear cuenta", btnEntrar: "Acceder",
        heroTag: "Sustentabilidad Racional", heroTitle: "El Futuro del Campo con Manejo Biológico",
        heroDesc: "Un análisis científico sobre cómo la sustitución de defensivos químicos por defensores naturales protege la biodiversidad, reduce costos y garantiza alimentos más saludables.",
        stat1: "Reducción promedio en costos de manejo", stat2: "Más preservación de polinizadores", stat3: "Residuos tóxicos en el producto final",
        stepTitle: "¿Cómo Funciona la Transición Sustentable?", stepInst: "Haga clic en las tarjetas a continuación para ver cada paso del proceso:",
        stepC1T: "Monitoreo", stepC1D: "Identificación precisa de los focos de plagas antes de actuar.",
        stepC2T: "Introducción", stepC2D: "Liberación controlada de enemigos naturales específicos.",
        stepC3T: "Equilibrio", stepC3D: "La propia naturaleza controla la población de plagas.",
        pracTitle: "Sustituciones Inteligentes en el Campo", fltAll: "Ver Todo", fltBio: "Manejo Biológico", fltQui: "Riesgos Químicos",
        cardQBadge: "Impacto Convencional", cardQTitle: "Defensivos Químicos Pesados", cardQLbl: "Degradación del Suelo",
        cardBBadge: "Alternativa Ecológica", cardBTitle: "Macrobiológicos (Mariquitas)", cardBLbl: "Preservación de Agua",
        evalTriggerMsg: "Calificanos ⭐", evalTitle: "Evalúa tu Experiencia", evalDesc: "¿Qué te pareció nuestro ecosistema digital?", btnEvalSend: "Enviar a Sugerencias",
        refTitle: "Referencias y Fuentes Oficiales", refC1: "Directrices Nacionales para el Manejo Integrado de Plagas (MIP).",
        refC2: "Informes globales sobre el uso seguro de insumos biológicos en la agricultura.",
        descTitle: "Sobre este Ecosistema", descContent: "Esta plataforma digital fue desarrollada con el objetivo de difundir datos científicos y prácticos sobre el manejo biológico y la agricultura regenerativa. El proyecto busca educar a productores y estudiantes sobre la viabilidad económica y ambiental del campo.",
        cookieMsg: "Utilizamos cookies para garantizar la mejor experiencia en nuestro ecosistema sustentable.", copy: "&copy; 2026 AgroSustentável. Todos os direitos reservados a los autores."
    }
};

// APLICAÇÃO DE TRADUÇÃO NOS ARQUIVOS DE UI
function applyTranslations() {
    const lang = currentLang;
    const t = translations[lang] || translations['pt'];

    document.getElementById('txt-logo').innerHTML = t.logo;
    document.getElementById('txt-nav-header').textContent = t.navHeader;
    document.getElementById('lnk-inicio').textContent = t.lnkInicio;
    document.getElementById('lnk-dados').textContent = t.lnkDados;
    document.getElementById('lnk-passo').textContent = t.lnkPasso;
    document.getElementById('lnk-praticas').textContent = t.lnkPraticas;
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
    document.getElementById('txt-eval-trigger-msg').textContent = t.evalTriggerMsg;
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

// LOGICA DE EXPANSÃO DA JANELA DE AVALIAÇÃO
function expandirAvaliacao() {
    const container = document.getElementById('avaliacao-container');
    const triggerBtn = document.getElementById('eval-trigger-btn');
    const expandedContent = document.getElementById('eval-expanded-content');

    container.classList.remove('style-closed');
    container.classList.add('style-expanded');
    triggerBtn.classList.add('hidden');
    expandedContent.classList.remove('hidden');
}

function votarEmoji(voto) {
    const feedbackBox = document.getElementById('eval-feedback-box');
    const responseText = document.getElementById('eval-response-text');
    const negativeAction = document.getElementById('eval-negative-action');

    feedbackBox.classList.remove('hidden');

    if (voto === 'ruim' || voto === 'regular') {
        responseText.textContent = currentLang === 'en' ? "How can we improve?" : currentLang === 'es' ? "¿Cómo podemos mejorar?" : "O que podemos melhorar no ecossistema?";
        negativeAction.classList.remove('hidden');
    } else {
        responseText.textContent = currentLang === 'en' ? "Thank you for your rating! 💚" : currentLang === 'es' ? "¡Gracias por tu calificación! 💚" : "Muito obrigado pelo seu feedback positivo! 💚";
        negativeAction.classList.add('hidden');
        setTimeout(() => { fecharFinal(); }, 2500);
    }
}

function enviarParaSugestao() {
    const msg = document.getElementById('eval-textarea').value;
    if(msg.trim() !== "") {
        alert(currentLang === 'en' ? "Thank you for your suggestions!" : currentLang === 'es' ? "¡Gracias por sus sugerencias!" : "Obrigado pela sugestão!");
        document.getElementById('eval-textarea').value = "";
        fecharFinal();
    }
}

function fecharAvaliacao(event) {
    if (event) event.stopPropagation(); // Evita reabrir acidentalmente
    fecharFinal();
}

function fecharFinal() {
    const container = document.getElementById('avaliacao-container');
    const triggerBtn = document.getElementById('eval-trigger-btn');
    const expandedContent = document.getElementById('eval-expanded-content');
    const feedbackBox = document.getElementById('eval-feedback-box');

    feedbackBox.classList.add('hidden');
    expandedContent.classList.add('hidden');
    container.classList.remove('style-expanded');
    container.classList.add('style-closed');
    triggerBtn.classList.remove('hidden');
}

// CONVENÇÃO DE COOKIES
function verificarCookies() {
    if (localStorage.getItem('cookiesAceitos') === 'true') {
        document.getElementById('cookie-banner').classList.add('hidden');
    }
}

function aceitarCookies() {
    localStorage.setItem('cookiesAceitos', 'true');
    document.getElementById('cookie-banner').classList.add('hidden');
}

// SELEÇÃO DE TEMA CLARO E ESCURO
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

// FILTRO DINÂMICO DE PRÁTICAS
function filterAlternativas(category) {
    const cards = document.querySelectorAll('.alternativas-container .card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
    
    const buttons = document.querySelectorAll('.filter-buttons .btn-filter');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// ABAS DO INFOGRÁFICO
function switchStep(step) {
    const cards = document.querySelectorAll('.infographic-steps .step-card');
    cards.forEach((c, idx) => {
        if (idx + 1 === step) c.classList.add('active');
        else c.classList.remove('active');
    });
}

// REVEAL ANIMATION
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

// DISPARO INICIAL
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMenusLaterais();
    initLanguageSystem();
    initScrollReveal();
    verificarCookies();
});