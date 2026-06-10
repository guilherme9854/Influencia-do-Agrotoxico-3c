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
        evalTitle: "Avalie nosso site", evalBad: "Lamentamos. Como podemos melhorar?", evalThanks: "Obrigado pela sua avaliação! 💚",
        refTitle: "Referências e Fontes Oficiais", refC1: "Diretrizes Nacionais para o Manejo Integrado de Pragas (MIP).",
        refC2: "Relatórios globais sobre o uso seguro de insumos biológicos na lavoura.",
        cookieMsg: "Nós valorizamos sua privacidade! Utilizamos cookies e tecnologias semelhantes para coletar dados de navegação, melhorar o desempenho do ecossistema e personalizar seu conteúdo acadêmico de acordo com a nossa Política de Cookies.", 
        copy: "&copy; 2026 AgroSustentável. Todos os direitos reservados.",
        aboutTitle: "Sobre este Ecossistema Digital",
        aboutDesc: "Esta plataforma foi desenvolvida como uma ferramenta educacional e científica focada na disseminação de dados sobre agricultura regenerativa e manejo biológico de pragas. O objetivo central é conscientizar a comunidade escolar e produtores rurais a respeito da viabilidade econômica da substituição de defensivos químicos por organismos macrobiológicos, promovendo a conservação dos polinizadores nativos, o equilíbrio dos solos agrícolas e a segurança alimentar a longo prazo em total conformidade com as diretrizes do Programa Agrinho.",
        btnSend: "Enviar", btnAccept: "Aceitar Tudo", btnReject: "Recusar", btnSettings: "Preferências", correctTxt: "Correto!", wrongTxt: "Incorreto."
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
        evalTitle: "Rate our site", evalBad: "We are sorry. How can we improve?", evalThanks: "Thank you for your rating! 💚",
        refTitle: "References and Official Sources", refC1: "National Guidelines for Integrated Pest Management (IPM).",
        refC2: "Global reports on the safe use of biological inputs in farming.",
        cookieMsg: "We value your privacy! We use cookies and similar technologies to collect browsing data, improve ecosystem performance, and personalize your academic content according to our Cookies Policy.", 
        copy: "&copy; 2026 AgroSustentável. All rights reserved.",
        aboutTitle: "About this Digital Ecosystem",
        aboutDesc: "This platform was developed as an educational and scientific tool focused on the dissemination of data on regenerative agriculture and biological pest management. The central objective is to raise awareness among the school community and rural producers regarding the economic viability of replacing chemical pesticides with macrobiological organisms, promoting the conservation of native pollinators, the balance of agricultural soils, and long-term food security in full compliance with the guidelines of the Agrinho Program.",
        btnSend: "Send", btnAccept: "Accept All", btnReject: "Reject", btnSettings: "Preferences", correctTxt: "Correct!", wrongTxt: "Incorrect."
    },
    es: {
        logo: "Agro<span>Sustentable</span>", navHeader: "Navegación", lnkInicio: "Inicio", lnkDados: "Datos Generales",
        lnkPasso: "Paso a Paso", lnkPraticas: "Prácticas de Campo", lnkQuiz: "Quiz Educativo", lnkReferencias: "Referencias",
        contatoHeader: "Contacto", langHeader: "Elegir Idioma", btnCriar: "Crear cuenta", btnEntrar: "Ingresar",
        heroTag: "Sustentabilidad Racional", heroTitle: "El Futuro del Campo con Manejo Biológico",
        heroDesc: "Un análisis científico sobre cómo la sustitución de defensivos químicos por defensores naturales protege la biodiversidade.",
        stat1: "Reducción promedio en costos de manejo", stat2: "Más preservación de polinizadores", stat3: "Residuos tóxicos en producto final",
        stepTitle: "¿Cómo Funciona la Transición Sustentable?", stepInst: "Haga clic en las tarjetas de abajo para ver cada paso del proceso:",
        stepC1T: "Monitoreo", stepC1D: "Identificación precisa de brotes de plagas antes de actuar.",
        stepC2T: "Introducción", stepC2D: "Liberación controlada de enemigos naturales específicos.",
        stepC3T: "Equilibrio", stepC3D: "La propia naturaleza controla la población de plagas.",
        pracTitle: "Sustituciones Inteligentes en el Campo", fltAll: "Ver Todo", fltBio: "Manejo Biológico", fltQui: "Riesgos Químicos",
        cardQBadge: "Impacto Convencional", cardQTitle: "Defensivos Químicos Pesados", cardQLbl: "Degradación del Suelo",
        cardBBadge: "Alternativa Ecológica", cardBTitle: "Macrobiológicos (Mariquitas)", cardBLbl: "Preservación del Agua",
        quizTitle: "Desafío del Conocimiento", quizSubtitle: "Pruebe sus conocimientos sobre el impacto de las prácticas agroecológicas:",
        evalTitle: "Evalúe nuestro sitio", evalBad: "Lo sentimos. ¿Cómo podemos mejorar?", evalThanks: "¡Gracias por su evaluación! 💚",
        refTitle: "Referencias y Fuentes Oficiales", refC1: "Directrices Nacionales para el Manejo Integrado de Plagas (MIP).",
        refC2: "Informes globales sobre el uso seguro de insumos biológicos en la agricultura.",
        cookieMsg: "¡Valoramos su privacidad! Utilizamos cookies y tecnologías similares para recopilar datos de navegación y mejorar el rendimiento de acuerdo con nuestra Política de Cookies.", 
        copy: "&copy; 2026 AgroSustentable. Todos los derechos reservados.",
        aboutTitle: "Sobre este Ecosistema Digital",
        aboutDesc: "Esta plataforma fue desarrollada como una herramienta educativa y científica enfocada en la difusión de datos sobre agricultura regenerativa y manejo biológico de plagas.",
        btnSend: "Enviar", btnAccept: "Aceptar Todo", btnReject: "Rechazar", btnSettings: "Preferencias", correctTxt: "¡Correcto!", wrongTxt: "Incorrecto."
    },
    fr: {
        logo: "Agro<span>Durable</span>", navHeader: "Navigation", lnkInicio: "Accueil", lnkDados: "Données Générales",
        lnkPasso: "Étape par Étape", lnkPraticas: "Pratiques de Terrain", lnkQuiz: "Quiz Éducatif", lnkReferencias: "Références",
        contatoHeader: "Contact", langHeader: "Choisir la Langue", btnCriar: "Créer un compte", btnEntrar: "Connexion",
        heroTag: "Durabilité Rationnelle", heroTitle: "L'Avenir des Champs avec la Gestion Biologique",
        heroDesc: "Une analyse scientifique sur la façon dont le remplacement des pesticides chimiques par des défenseurs naturels protège la biodiversité.",
        stat1: "Réduction moyenne des coûts de gestion", stat2: "Plus de préservation des pollinisateurs", stat3: "Résidus toxiques dans le produit final",
        stepTitle: "Comment Fonctionne la Transition Durable?", stepInst: "Cliquez sur les cartes ci-dessous pour voir chaque étape:",
        stepC1T: "Surveillance", stepC1D: "Identification précise des foyers de ravageurs avant d'agir.",
        stepC2T: "Introduction", stepC2D: "Lâcher contrôlé d'ennemis naturels spécifiques.",
        stepC3T: "Équilibre", stepC3D: "La nature elle-même contrôle la population de ravageurs.",
        pracTitle: "Substitutions Intelligentes sur le Terrain", fltAll: "Voir Tout", fltBio: "Gestion Biologique", fltQui: "Risques Chimiques",
        cardQBadge: "Impact Conventionnel", cardQTitle: "Pesticides Chimiques Lourds", cardQLbl: "Dégradation des Sols",
        cardBBadge: "Alternative Écologique", cardBTitle: "Macrobiologiques (Coccinelles)", cardBLbl: "Préservation de l'Eau",
        quizTitle: "Défi des Connaissances", quizSubtitle: "Testez vos connaissances sur l'impact des pratiques agroécologiques:",
        evalTitle: "Évaluez notre site", evalBad: "Nous sommes désolés. Comment pouvons-nous nous améliorer?", evalThanks: "Merci pour votre évaluation! 💚",
        refTitle: "Références et Sources Oficielles", refC1: "Directives Nationales pour la Lutte Intégrée contre les Ravageurs (MIP).",
        refC2: "Rapports mondiaux sur l'utilisation sécurisée des intrants biologiques en agriculture.",
        cookieMsg: "Nous apprécions votre vie privée! Nous utilisons des cookies et des technologies similaires pour collecter des données de navigation conformément à notre Politique relative aux cookies.", 
        copy: "&copy; 2026 AgroDurable. Tous droits réservés.",
        aboutTitle: "À Propos de cet Écosystème Numérique",
        aboutDesc: "Cette plateforme a été développée comme un outil pédagogique et scientifique axé sur la diffusion de données sur l'agriculture régénérative.",
        btnSend: "Envoyer", btnAccept: "Tout Accepter", btnReject: "Refuser", btnSettings: "Options", correctTxt: "Correct!", wrongTxt: "Incorrect."
    }
};

const quizData = [
    {
        question: { 
            pt: "Qual é o principal objetivo do Controle Biológico na agricultura?", 
            en: "What is the main objective of Biological Control in farming?",
            es: "¿Cuál es el objetivo principal del Control Biológico en la agricultura?",
            fr: "Quel est l'objectif principal du Contrôle Biologique en agriculture?"
        },
        options: {
            pt: ["Eliminar toda a biodiversidade local para proteger as plantas.", "Utilizar inimigos naturais (como insetos benéficos) para controlar pragas.", "Aumentar o uso de herbicidas sintéticos na lavoura.", "Substituir a irrigação por produtos químicos concentrados."],
            en: ["Eliminate all local biodiversity to protect plants.", "Use natural enemies (like beneficial insects) to control pests.", "Increase the use of synthetic herbicides in the field.", "Replace irrigation with concentrated chemical products."],
            es: ["Eliminar toda la biodiversidad local para proteger las plantas.", "Utilizar enemigos naturales (como insectos benéficos) para controlar plagas.", "Aumentar el uso de herbicidas sintéticos en el cultivo.", "Sustituir el riego por productos químicos concentrados."],
            fr: ["Éliminer toute la biodiversité locale pour protéger les plantes.", "Utiliser des ennemis naturels (comme des insectes utiles) pour contrôler les ravageurs.", "Augmenter l'utilisation d'herbicides synthétiques.", "Remplacer l'irrigation par des produits chimiques concentrés."]
        }, correct: 1
    },
    {
        question: { 
            pt: "Qual inseto é famoso por atuar como predador natural de pulgões?", 
            en: "Which insect is famous for acting as a natural predator of aphids?",
            es: "¿Qué insecto é famoso por actuar como depredador natural de pulgones?",
            fr: "Quel insecte est célèbre pour être un prédateur naturel des pucerons?"
        },
        options: {
            pt: ["Lagarta do cartucho", "Mosca doméstica comum", "Joaninha maculada", "Gafanhoto migratório"],
            en: ["Fall armyworm", "Common housefly", "Spotted ladybug", "Migratory locust"],
            es: ["Oruga de la col", "Mosca doméstica común", "Mariquita manchada", "Langosta migratoria"],
            fr: ["Chenille légionnaire", "Mouche domestique commune", "Coccinelle tachetée", "Criquet migrateur"]
        }, correct: 2
    }
];

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMenusLaterais();
    initLanguageSystem();
    initQuizSystem();
    initScrollReveal();
    verificarCookies();
    applyTranslations();
});

function applyTranslations() {
    const lang = currentLang;
    const t = translations[lang] || translations['pt'];

    // Verificação de Segurança para cada ID antes de aplicar tradução
    if(document.getElementById('txt-logo')) document.getElementById('txt-logo').innerHTML = t.logo;
    if(document.getElementById('txt-footer-logo')) document.getElementById('txt-footer-logo').innerHTML = t.logo;
    if(document.getElementById('txt-nav-header')) document.getElementById('txt-nav-header').textContent = t.navHeader;
    if(document.getElementById('lnk-inicio')) document.getElementById('lnk-inicio').textContent = t.lnkInicio;
    if(document.getElementById('lnk-dados')) document.getElementById('lnk-dados').textContent = t.lnkDados;
    if(document.getElementById('lnk-passo')) document.getElementById('lnk-passo').textContent = t.lnkPasso;
    if(document.getElementById('lnk-praticas')) document.getElementById('lnk-praticas').textContent = t.lnkPraticas;
    if(document.getElementById('lnk-quiz')) document.getElementById('lnk-quiz').textContent = t.lnkQuiz;
    if(document.getElementById('lnk-referencias')) document.getElementById('lnk-referencias').textContent = t.lnkReferencias;
    if(document.getElementById('txt-contato-header')) document.getElementById('txt-contato-header').textContent = t.contatoHeader;
    if(document.getElementById('txt-lang-header')) document.getElementById('txt-lang-header').textContent = t.langHeader;
    if(document.getElementById('btn-criar-conta')) document.getElementById('btn-criar-conta').textContent = t.btnCriar;
    if(document.getElementById('btn-entrar')) document.getElementById('btn-entrar').textContent = t.btnEntrar;
    if(document.getElementById('txt-hero-tag')) document.getElementById('txt-hero-tag').textContent = t.heroTag;
    if(document.getElementById('txt-hero-title')) document.getElementById('txt-hero-title').textContent = t.heroTitle;
    if(document.getElementById('txt-hero-desc')) document.getElementById('txt-hero-desc').textContent = t.heroDesc;
    if(document.getElementById('txt-stat-1')) document.getElementById('txt-stat-1').textContent = t.stat1;
    if(document.getElementById('txt-stat-2')) document.getElementById('txt-stat-2').textContent = t.stat2;
    if(document.getElementById('txt-stat-3')) document.getElementById('txt-stat-3').textContent = t.stat3;
    if(document.getElementById('txt-step-title')) document.getElementById('txt-step-title').textContent = t.stepTitle;
    if(document.getElementById('txt-step-inst')) document.getElementById('txt-step-inst').textContent = t.stepInst;
    if(document.getElementById('txt-step-c1-t')) document.getElementById('txt-step-c1-t').textContent = t.stepC1T;
    if(document.getElementById('txt-step-c1-d')) document.getElementById('txt-step-c1-d').textContent = t.stepC1D;
    if(document.getElementById('txt-step-c2-t')) document.getElementById('txt-step-c2-t').textContent = t.stepC2T;
    if(document.getElementById('txt-step-c2-d')) document.getElementById('txt-step-c2-d').textContent = t.stepC2D;
    if(document.getElementById('txt-step-c3-t')) document.getElementById('txt-step-c3-t').textContent = t.stepC3T;
    if(document.getElementById('txt-step-c3-d')) document.getElementById('txt-step-c3-d').textContent = t.stepC3D;
    if(document.getElementById('txt-prac-title')) document.getElementById('txt-prac-title').textContent = t.pracTitle;
    if(document.getElementById('btn-flt-all')) document.getElementById('btn-flt-all').textContent = t.fltAll;
    if(document.getElementById('btn-flt-bio')) document.getElementById('btn-flt-bio').textContent = t.fltBio;
    if(document.getElementById('btn-flt-qui')) document.getElementById('btn-flt-qui').textContent = t.fltQui;
    if(document.getElementById('txt-card-q-badge')) document.getElementById('txt-card-q-badge').textContent = t.cardQBadge;
    if(document.getElementById('txt-card-q-title')) document.getElementById('txt-card-q-title').textContent = t.cardQTitle;
    if(document.getElementById('txt-card-q-lbl')) document.getElementById('txt-card-q-lbl').textContent = t.cardQLbl;
    if(document.getElementById('txt-card-b-badge')) document.getElementById('txt-card-b-badge').textContent = t.cardBBadge;
    if(document.getElementById('txt-card-b-title')) document.getElementById('txt-card-b-title').textContent = t.cardBTitle;
    if(document.getElementById('txt-card-b-lbl')) document.getElementById('txt-card-b-lbl').textContent = t.cardBLbl;
    if(document.getElementById('txt-quiz-title')) document.getElementById('txt-quiz-title').textContent = t.quizTitle;
    if(document.getElementById('txt-quiz-subtitle')) document.getElementById('txt-quiz-subtitle').textContent = t.quizSubtitle;
    if(document.getElementById('txt-ref-title')) document.getElementById('txt-ref-title').textContent = t.refTitle;
    if(document.getElementById('txt-ref-c1')) document.getElementById('txt-ref-c1').textContent = t.refC1;
    if(document.getElementById('txt-ref-c2')) document.getElementById('txt-ref-c2').textContent = t.refC2;
    if(document.getElementById('txt-footer-copy')) document.getElementById('txt-footer-copy').innerHTML = t.copy;
    if(document.getElementById('txt-about-title')) document.getElementById('txt-about-title').textContent = t.aboutTitle;
    if(document.getElementById('txt-about-desc')) document.getElementById('txt-about-desc').textContent = t.aboutDesc;

    // Elementos Variáveis de Cookies e Avaliação Otimizada
    if(document.getElementById('ui-eval-title')) document.getElementById('ui-eval-title').textContent = t.evalTitle;
    if(document.getElementById('ui-eval-bad')) document.getElementById('ui-eval-bad').textContent = t.evalBad;
    if(document.getElementById('ui-eval-thanks')) document.getElementById('ui-eval-thanks').textContent = t.evalThanks;
    if(document.getElementById('btn-send-eval')) document.getElementById('btn-send-eval').textContent = t.btnSend;
    
    if(document.getElementById('ui-cookie-txt')) document.getElementById('ui-cookie-txt').textContent = t.cookieMsg;
    if(document.getElementById('btn-accept-cookies')) document.getElementById('btn-accept-cookies').textContent = t.btnAccept;
    if(document.getElementById('btn-reject-cookies')) document.getElementById('btn-reject-cookies').textContent = t.btnReject;
    if(document.getElementById('btn-settings-cookies')) document.getElementById('btn-settings-cookies').textContent = t.btnSettings;

    renderQuizQuestion();
}

function initLanguageSystem() {
    const options = document.querySelectorAll('[data-lang-select]');
    options.forEach(opt => {
        opt.addEventListener('click', (e) => {
            e.stopPropagation();
            currentLang = opt.getAttribute('data-lang-select');
            document.getElementById('lang-menu').classList.remove('active');
            document.getElementById('menu-lang-toggle').classList.remove('active');
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
        burgerLang.classList.remove('active');
    });

    burgerLang.addEventListener('click', (e) => {
        e.stopPropagation();
        burgerLang.classList.toggle('active');
        langMenu.classList.toggle('active');
        burgerMain.classList.remove('active');
        mainMenu.classList.remove('active');
    });

    document.addEventListener('click', () => {
        burgerMain.classList.remove('active');
        mainMenu.classList.remove('active');
        burgerLang.classList.remove('active');
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
}

function renderQuizQuestion() {
    const questionEl = document.getElementById('quiz-question');
    const optionsContainer = document.getElementById('quiz-options');
    const feedbackEl = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('btn-next-quiz');
    const t = translations[currentLang] || translations['pt'];

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
                feedbackEl.textContent = t.correctTxt;
                quizScore++;
            } else {
                button.classList.add('wrong');
                buttons[currentQuiz.correct].classList.add('correct');
                feedbackEl.className = "quiz-feedback error";
                feedbackEl.textContent = t.wrongTxt;
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
    if (questionEl) questionEl.textContent = currentLang === 'en' ? "Challenge Completed!" : "Desafio Concluído!";
    if (optionsContainer) {
        optionsContainer.innerHTML = `
            <div style="text-align: center; padding: 10px 0;">
                <p style="font-size: 1.1rem; font-weight: bold; color: var(--accent);">${currentLang === 'en' ? 'Final Score' : 'Pontuação Final'}: ${quizScore} / ${quizData.length}</p>
                <button class="btn-submit" style="margin-top: 14px;" onclick="reiniciarQuiz()">${currentLang === 'en' ? 'Try Again' : 'Tentar Novamente'}</button>
            </div>
        `;
    }
}

function reiniciarQuiz() {
    quizScore = 0;
    currentQuestionIndex = 0;
    renderQuizQuestion();
}

function handleRating(type) {
    const s1 = document.getElementById('eval-screen-1');
    if (type === 'bad' || type === 'neutral') {
        s1.classList.add('hidden');
        document.getElementById('eval-screen-bad').classList.remove('hidden');
    } else {
        s1.classList.add('hidden');
        document.getElementById('eval-screen-thanks').classList.remove('hidden');
        setTimeout(toggleEval, 2500);
    }
}

function submitBadRating() {
    document.getElementById('eval-screen-bad').classList.add('hidden');
    document.getElementById('eval-screen-thanks').classList.remove('hidden');
    setTimeout(toggleEval, 2500);
}

function toggleEval() {
    const widget = document.getElementById('eval-widget');
    if(widget) widget.classList.add('hidden');
}

function verificarCookies() {
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        const banner = document.getElementById('cookie-banner');
        if(banner) banner.classList.add('hidden');
    }
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    const banner = document.getElementById('cookie-banner');
    if(banner) banner.classList.add('hidden');
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