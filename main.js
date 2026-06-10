let currentLang = 'pt';
let quizScore = 0;
let currentQuestionIndex = 0;

// SISTEMA DE TRADUÇÃO COMPLETA DO SITE MUDADO DETALHADAMENTE
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
        refC2: "Relatórios globais sobre o uso seguro de insumos biológicos na lavoura.", copy: "&copy; 2026 AgroSustentável. Todos os direitos reservados aos autores."
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
        refC2: "Global reports on the safe use of biological inputs in farming.", copy: "&copy; 2026 AgroSustentável. All rights reserved to authors."
    },
    es: {
        logo: "Agro<span>Sustentable</span>", navHeader: "Navegación", lnkInicio: "Inicio", lnkDados: "Datos Generales",
        lnkPasso: "Paso a Paso", lnkPraticas: "Prácticas Prácticas", lnkQuiz: "Quiz Educativo", lnkReferencias: "Referencias",
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
        quizTitle: "Desafío del Conocimiento", quizSubtitle: "Prueba tus conocimientos sobre el impacto de las prácticas agroecológicas:",
        evalTitle: "Evalúa tu Experiencia", evalDesc: "¿Qué te pareció nuestro ecosistema digital?", btnEvalSend: "Enviar a Sugerencias",
        refTitle: "Referencias y Fuentes Oficiales", refC1: "Directrices Nacionales para el Manejo Integrado de Plagas (MIP).",
        refC2: "Informes globales sobre el uso seguro de insumos biológicos en la agricultura.", copy: "&copy; 2026 AgroSustentável. Todos los derechos reservados."
    },
    fr: {
        logo: "Agro<span>Durable</span>", navHeader: "Navigation", lnkInicio: "Accueil", lnkDados: "Données Générales",
        lnkPasso: "Étape par Étape", lnkPraticas: "Pratiques Réelles", lnkQuiz: "Quiz Éducatif", lnkReferencias: "Références",
        contatoHeader: "Contact", langHeader: "Choisir la Langue", btnCriar: "Créer un compte", btnEntrar: "Connexion",
        heroTag: "Durabilité Rationnelle", heroTitle: "L'Avenir du Champ avec la Gestion Biologique",
        heroDesc: "Une analyse scientifique sur la façon dont le remplacement des pesticides chimiques par des défenseurs naturels protège la biodiversité, réduit les coûts et garantit des aliments sains.",
        stat1: "Réduction moyenne des coûts de gestion", stat2: "Plus de préservation des pollinisateurs", stat3: "Résidus toxiques dans le produit final",
        stepTitle: "Comment Fonctionne la Transition Durable?", stepInst: "Cliquez sur les cartes ci-dessous pour voir chaque étape du processus:",
        stepC1T: "Surveillance", stepC1D: "Identification précise des foyers de ravageurs avant d'agir.",
        stepC2T: "Introduction", stepC2D: "Lâcher contrôlé d'ennemis naturels spécifiques.",
        stepC3T: "Équilibre", stepC3D: "La nature elle-même contrôle la population de ravageurs.",
        pracTitle: "Substitutions Intelligentes sur le Terrain", fltAll: "Voir Tout", fltBio: "Gestion Biologique", fltQui: "Risques Chimiques",
        cardQBadge: "Impact Conventionnel", cardQTitle: "Pesticides Chimiques Lourds", cardQLbl: "Dégradation des Sols",
        cardBBadge: "Alternative Écologique", cardBTitle: "Macrobiologiques (Coccinelles)", cardBLbl: "Préservation de l'Eau",
        quizTitle: "Défi des Connaissances", quizSubtitle: "Testez vos connaissances sur l'impact des pratiques agroécologiques:",
        evalTitle: "Évaluez votre Expérience", evalDesc: "Qu'avez-vous pensé de notre écosystème numérique?", btnEvalSend: "Envoyer aux Suggestions",
        refTitle: "Références et Sources Officielles", refC1: "Directives nationales pour la gestion intégrée des ravageurs (GIR).",
        refC2: "Rapports mondiaux sur l'utilisation sûre des intrants biologiques dans l'agriculture.", copy: "&copy; 2026 AgroSustentável. Tous droits réservés."
    },
    de: {
        logo: "Agro<span>Nachhaltig</span>", navHeader: "Navigation", lnkInicio: "Startseite", lnkDados: "Allgemeine Daten",
        lnkPasso: "Schritt für Schritt", lnkPraticas: "Praktische Praktiken", lnkQuiz: "Lehrreiches Quiz", lnkReferencias: "Referenzen",
        contatoHeader: "Kontakt", langHeader: "Sprache Wählen", btnCriar: "Konto erstellen", btnEntrar: "Anmelden",
        heroTag: "Rationale Nachhaltigkeit", heroTitle: "Die Zukunft des Feldes mit biologischem Management",
        heroDesc: "Eine wissenschaftliche Analyse, wie der Ersatz chemischer Pestizide durch natürliche Schützer die Artenvielfalt schützt, Kosten senkt und gesündere Lebensmittel garantiert.",
        stat1: "Durchschnittliche Reduzierung der Managementkosten", stat2: "Mehr Schutz für Bestäuber", stat3: "Toxische Rückstände im Endprodukt",
        stepTitle: "Wie funktioniert der nachhaltige Übergang?", stepInst: "Klicken Sie auf die Karten unten, um jeden Schritt anzuzeigen:",
        stepC1T: "Überwachung", stepC1D: "Genaue Identifizierung von Schädlingsherden vor dem Handeln.",
        stepC2T: "Einführung", stepC2D: "Kontrollierte Freisetzung spezifischer natürlicher Feinde.",
        stepC3T: "Gleichgewicht", stepC3D: "Die Natur selbst kontrolliert die Schädlingspopulation.",
        pracTitle: "Intelligenter Ersatz auf dem Feld", fltAll: "Alles Sehen", fltBio: "Biologisches Management", fltQui: "Chemische Risiken",
        cardQBadge: "Konventionelle Auswirkungen", cardQTitle: "Schwere chemische Pestizide", cardQLbl: "Bodendegradation",
        cardBBadge: "Ökologische Alternative", cardBTitle: "Makrobiologische (Marienkäfer)", cardBLbl: "Wasserschutz",
        quizTitle: "Wissensherausforderung", quizSubtitle: "Testen Sie Ihr Wissen über die Auswirkungen agroökologischer Praktiken:",
        evalTitle: "Bewerten Sie Ihre Erfahrung", evalDesc: "Wie fanden Sie unser digitales Ökosystem?", btnEvalSend: "An Vorschläge Senden",
        refTitle: "Referenzen und offizielle Quellen", refC1: "Nationale Richtlinien für den integrierten Pflanzenschutz (IPS).",
        refC2: "Globale Berichte über die sichere Verwendung biologischer Betriebsmittel in der Landwirtschaft.", copy: "&copy; 2026 AgroSustentável. Alle Rechte vorbehalten."
    },
    it: {
        logo: "Agro<span>Sostenibile</span>", navHeader: "Navigazione", lnkInicio: "Inizio", lnkDados: "Dati Generali",
        lnkPasso: "Passo dopo Passo", lnkPraticas: "Pratiche Reali", lnkQuiz: "Quiz Educativo", lnkReferencias: "Riferimenti",
        contatoHeader: "Contatti", langHeader: "Scegli la Lingua", btnCriar: "Crea account", btnEntrar: "Accedi",
        heroTag: "Sostenibilità Razionale", heroTitle: "Il Futuro del Campo con la Gestione Biologica",
        heroDesc: "Un'analisi scientifica su come la sostituzione dei pesticidi chimici con difensori naturali protegga la biodiversità, riduca i costi e garantisca alimenti sani.",
        stat1: "Riduzione media dei costi di gestione", stat2: "Maggiore salvaguardia degli impollinatori", stat3: "Residui tossici nel prodotto finale",
        stepTitle: "Come Funziona la Transizione Sostenibile?", stepInst: "Clicca sulle schede sottostanti per visualizzare ogni fase del processo:",
        stepC1T: "Monitoraggio", stepC1D: "Identificazione precisa dei focolai di parassiti prima di agire.",
        stepC2T: "Introduzione", stepC2D: "Rilascio controllato di nemici naturali specifici.",
        stepC3T: "Equilibrio", stepC3D: "La natura stessa controlla la popolazione di parassiti.",
        pracTitle: "Sostituzioni Intelligenti sul Campo", fltAll: "Vedi Tutto", fltBio: "Gestione Biologica", fltQui: "Rischi Chimici",
        cardQBadge: "Impatto Convenzionale", cardQTitle: "Pesticidi Chimici Pesanti", cardQLbl: "Degradazione del Suolo",
        cardBBadge: "Alternativa Ecologica", cardBTitle: "Macrobiologici (Coccinelle)", cardBLbl: "Tutela dell'Acqua",
        quizTitle: "Sfida della Conoscenza", quizSubtitle: "Metti alla prova le tue conoscenze sull'impatto delle pratiche agroecologiche:",
        evalTitle: "Valuta la tua Esperienza", evalDesc: "Cosa ne pensi del nostro ecosistema digitale?", btnEvalSend: "Invia ai Suggerimenti",
        refTitle: "Riferimenti e Fonti Ufficiali", refC1: "Linee guida nazionali per la gestione integrata dei parassiti (IPM).",
        refC2: "Rapporti globali sull'uso sicuro degli input biologici in agricoltura.", copy: "&copy; 2026 AgroSustentável. Tutti i diritti riservati."
    }
};

// 5 PERGUNTAS DO QUIZ DISPONÍVEIS EM TODOS OS IDIOMAS
const quizData = [
    {
        question: { pt: "Qual é o principal objetivo do Controle Biológico?", en: "What is the main objective of Biological Control?", es: "¿Cuál es el objetivo principal del Control Biológico?", fr: "Quel est l'objectif principal du contrôle biologique?", de: "Was ist das Hauptziel der biologischen Schädlingsbekämpfung?", it: "Qual è l'obiettivo principale del controllo biologico?" },
        options: {
            pt: ["Eliminar toda a biodiversidade local.", "Utilizar inimigos naturais para controlar pragas.", "Aumentar defensivos químicos.", "Interromper a irrigação."],
            en: ["Eliminate all local biodiversity.", "Use natural enemies to control pests.", "Increase chemical pesticides.", "Stop irrigation."],
            es: ["Eliminar toda la biodiversidad.", "Utilizar enemigos naturales para plagas.", "Aumentar defensivos químicos.", "Interrumpir el riego."],
            fr: ["Éliminer la biodiversité.", "Utiliser des ennemis naturels.", "Augmenter les pesticides.", "Arrêter l'irrigation."],
            de: ["Die Artenvielfalt vernichten.", "Natürliche Feinde einsetzen.", "Chemische Pestizide erhöhen.", "Die Bewässerung stoppen."],
            it: ["Eliminare la biodiversità.", "Utilizzare nemici naturali.", "Aumentare i pesticidi chimici.", "Interrompere l'irrigazione."]
        }, correct: 1
    },
    {
        question: { pt: "Qual inseto é famoso por comer pulgões no campo?", en: "Which insect is famous for eating aphids in the field?", es: "¿Qué insecto é famoso por comer pulgones?", fr: "Quel insecte est célèbre pour manger des pucerons?", de: "Welches Insekt ist bekannt dafür, Blattläuse zu fressen?", it: "Quale insetto è famoso per mangiare gli afidi?" },
        options: {
            pt: ["Lagarta", "Mosca doméstica", "Joaninha (Macrobiológico)", "Gafanhoto"],
            en: ["Caterpillar", "Housefly", "Ladybug", "Grasshopper"],
            es: ["Oruga", "Mosca", "Mariquita", "Saltamontes"],
            fr: ["Chenille", "Mouche", "Coccinelle", "Criquet"],
            de: ["Raupe", "Stubenfliege", "Marienkäfer", "Heuschrecke"],
            it: ["Bruco", "Mosca", "Coccinella", "Cavalletta"]
        }, correct: 2
    },
    {
        question: { pt: "O manejo biológico ajuda a reduzir qual tipo de resíduo?", en: "Biological management helps reduce what type of residue?", es: "¿El manejo biológico ajuda a reducir qué residuo?", fr: "La gestion biologique aide à réduire quel type de résidu?", de: "Welche Rückstände werden durch biologisches Management reduziert?", it: "La gestione biologica aiuta a ridurre quale tipo di residuo?" },
        options: {
            pt: ["Resíduos orgânicos", "Resíduos tóxicos químicos", "Resíduos plásticos", "Água pura"],
            en: ["Organic waste", "Toxic chemical residues", "Plastic waste", "Pure water"],
            es: ["Residuos orgánicos", "Residuos químicos tóxicos", "Plásticos", "Agua pura"],
            fr: ["Déchets organiques", "Résidus chimiques toxiques", "Déchets plastiques", "Eau pure"],
            de: ["Organischer Abfall", "Toxische chemische Rückstände", "Plastikmüll", "Reines Wasser"],
            it: ["Rifiuti organici", "Residui chimici tossici", "Rifiuti plastici", "Acqua pura"]
        }, correct: 1
    },
    {
        question: { pt: "O que significa a sigla MIP?", en: "What does IPM stand for?", es: "¿Qué significa la sigla MIP?", fr: "Que signifie le sigle GIR?", de: "Was bedeutet die Abkürzung IPS?", it: "Cosa significa la sigla IPM?" },
        options: {
            pt: ["Manejo Integrado de Pragas", "Modernização da Infraestrutura de Plantas", "Mudança Intensa de Pesticidas", "Manutenção Industrial de Produtos"],
            en: ["Integrated Pest Management", "Modern Plant Infrastructure", "Intense Pesticide Movement", "Industrial Product Maintenance"],
            es: ["Manejo Integrado de Plagas", "Modernización de Plantas", "Movimiento de Pesticidas", "Mantenimiento Industrial"],
            fr: ["Gestion Intégrée des Ravageurs", "Gestion Interne des Plantes", "Génération Intensive de Pesticides", "Gestion Industrielle"],
            de: ["Integrierter Pflanzenschutz", "Infrastruktur für Pflanzen", "Intensiver Pestizideinsatz", "Industrielle Produktwartung"],
            it: ["Gestione Integrata dei Parassiti", "Infrastruttura delle Piante", "Movimento di Pesticidi", "Manutenzione Industriale"]
        }, correct: 0
    },
    {
        question: { pt: "Qual o benefício direto para os polinizadores (como abelhas)?", en: "What is the direct benefit for pollinators (like bees)?", es: "¿Qual es el beneficio directo para polinizadores?", fr: "Quel est le bénéfice direct pour les pollinisateurs?", de: "Was ist der direkte Nutzen für Bestäuber (wie Bienen)?", it: "Qual è il beneficio diretto per gli impollinatori?" },
        options: {
            pt: ["Nenhum benefício", "Maior preservação e sobrevivência no ecossistema", "Afastamento das plantações", "Redução da produção de mel"],
            en: ["No benefit", "Greater preservation and survival in the ecosystem", "Removal from crops", "Reduced honey production"],
            es: ["Ninguno", "Mayor preservación y supervivencia", "Alejamiento", "Reducción de miel"],
            fr: ["Aucun bénéfice", "Une plus grande préservation et survie dans l'écosystème", "Éloignement des cultures", "Production de miel réduite"],
            de: ["Kein Nutzen", "Besserer Schutz und Überleben im Ökosystem", "Entfernung von Pflanzen", "Reduzierte Honigproduktion"],
            it: ["Nessun beneficio", "Maggiore salvaguardia e sopravvivenza nell'ecosistema", "Allontanamento", "Ridotta produzione di miele"]
        }, correct: 1
    }
];

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMenusLaterais();
    initLanguageSystem();
    initQuizSystem();
    initScrollReveal();
});

// APLICAR AS TRADUÇÕES DINAMICAMENTE NO SITE INTEIRO
function applyTranslations() {
    const lang = currentLang;
    const t = translations[lang];

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

// CONTROLO DOS DOIS MENUS HAMBÚRGUER (PRINCIPAL E IDIOMAS)
function initMenusLaterais() {
    const burgerMain = document.getElementById('menu-main-toggle');
    const mainMenu = document.getElementById('main-menu');
    const burgerLang = document.getElementById('menu-lang-toggle');
    const langMenu = document.getElementById('lang-menu');

    burgerMain.addEventListener('click', (e) => {
        e.stopPropagation();
        burgerMain.classList.toggle('active');
        mainMenu.classList.toggle('active');
        // Fecha o outro se estiver aberto
        langMenu.classList.remove('active');
    });

    burgerLang.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('active');
        // Fecha o outro se estiver aberto
        burgerMain.classList.remove('active');
        mainMenu.classList.remove('active');
    });

    document.addEventListener('click', () => {
        burgerMain.classList.remove('active');
        mainMenu.classList.remove('active');
        langMenu.classList.remove('active');
    });
}

// SISTEMA DE QUIZ COM PONTUAÇÃO E HISTÓRICO
function initQuizSystem() {
    const nextBtn = document.getElementById('btn-next-quiz');
    if (!nextBtn) return;

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        renderQuizQuestion();
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
    questionEl.textContent = `(${currentQuestionIndex + 1}/${quizData.length}) ${currentQuiz.question[currentLang]}`;

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
                feedbackEl.textContent = currentLang === 'pt' ? "Correto! 🌿" : "Correct! 🌿";
                quizScore++;
            } else {
                button.classList.add('wrong');
                buttons[currentQuiz.correct].classList.add('correct');
                feedbackEl.className = "quiz-feedback error";
                feedbackEl.textContent = currentLang === 'pt' ? "Incorreto." : "Incorrect.";
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
    const nextBtn = document.getElementById('btn-next-quiz');
    
    nextBtn.classList.add('hidden');
    if (questionEl) {
        questionEl.textContent = currentLang === 'pt' ? "Desafio Concluído!" : "Quiz Completed!";
    }
    if (optionsContainer) {
        optionsContainer.innerHTML = `
            <div style="text-align: center; padding: 20px 0;">
                <p style="font-size: 1.2rem; font-weight: bold; color: var(--accent);">
                    ${currentLang === 'pt' ? 'Sua pontuação final:' : 'Your final score:'} ${quizScore} / ${quizData.length}
                </p>
                <button class="btn-submit" style="margin-top: 15px;" onclick="reiniciarQuiz()">
                    ${currentLang === 'pt' ? 'Tentar Novamente' : 'Try Again'}
                </button>
            </div>
        `;
    }
}

function reiniciarQuiz() {
    quizScore = 0;
    currentQuestionIndex = 0;
    renderQuizQuestion();
}

// SISTEMA DE AVALIAÇÃO INTELIGENTE COM LOGICA DE EMOJIS E BOTÃO DE SUGESTÃO
function votarEmoji(voto) {
    const feedbackBox = document.getElementById('eval-feedback-box');
    const responseText = document.getElementById('eval-response-text');
    const negativeAction = document.getElementById('eval-negative-action');

    feedbackBox.classList.remove('hidden');

    if (voto === 'ruim' || voto === 'regular') {
        responseText.textContent = currentLang === 'pt' 
            ? "Lamentamos que a sua experiência não tenha sido ideal. O que podemos melhorar?" 
            : "We are sorry that your experience was not ideal. What can we improve?";
        negativeAction.classList.remove('hidden');
    } else {
        responseText.textContent = currentLang === 'pt' 
            ? "Muito obrigado pela sua excelente avaliação! Ficamos felizes por ajudar." 
            : "Thank you very much for your excellent review! We are happy to help.";
        negativeAction.classList.add('hidden');
    }
}

function enviarParaSugestao() {
    const msg = document.getElementById('eval-textarea').value;
    if(msg.trim() !== "") {
        alert(currentLang === 'pt' ? "Obrigado! A sua sugestão foi guardada." : "Thank you! Your suggestion has been saved.");
        document.getElementById('eval-textarea').value = "";
        window.location.hash = "#fontes"; // Direciona para a aba final
    }
}

function fecharAvaliacao() {
    document.getElementById('avaliacao-container').classList.add('hidden');
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