// Lesson data for Chapter 41a - chapter41a-data.js
const grammarData = {
    phrase1: {
        title: "Ti. Claudio quintum Servio Cornelio Orfito consulibus",
        vocab: [
            "Ti. = Tiberius (abbreviated)",
            "Claudio = Claudius (ablative)",
            "quintum = for the fifth time (adverb)",
            "Servio = Servius (ablative)",
            "Cornelio = Cornelius (ablative)",
            "Orfito = Orfitus (ablative)",
            "consulibus = consuls (ablative plural)"
        ],
        grammar: "Ablative absolute construction used for dating. This formal opening gives the passage historical weight and emphasises Claudius' fifth consulship.",
        translation: "In the consulships of Tiberius Claudius for the fifth time and Servius Cornelius Orfitus"
    },
    phrase2: {
        title: "virilis toga Neroni",
        vocab: [
            "virilis = manly, of manhood (nominative feminine)",
            "toga = toga (nominative)",
            "Neroni = to/for Nero (dative)"
        ],
        grammar: "The toga virilis was the coming-of-age toga worn by adult Roman men, normally received around age 16-17. This marked transition to full citizenship.",
        translation: "the manly toga for Nero"
    },
    phrase3: {
        title: "maturata",
        vocab: [
            "maturata = was accelerated, was hastened (perfect passive participle, nominative feminine singular)"
        ],
        grammar: "Perfect passive participle agreeing with 'toga'. The passive form emphasises that the timing was artificially accelerated by others, not a natural development.",
        translation: "was accelerated"
    },
    phrase4: {
        title: "quo capessendae rei publicae habilis videretur",
        vocab: [
            "quo = so that (purpose conjunction with comparative)",
            "capessendae = to be undertaken (gerundive, genitive feminine singular)",
            "rei = role, business (genitive)",
            "publicae = public (genitive feminine)",
            "habilis = suitable, fit (nominative)",
            "videretur = he might seem (imperfect subjunctive)"
        ],
        grammar: "Purpose clause with 'quo' + subjunctive (used instead of 'ut' when there's a comparative). Note 'videretur' (might seem) rather than 'esset' (might be) - appearance matters more than reality.",
        translation: "so that he might seem suitable to undertake a public role"
    },
    phrase5: {
        title: "et Caesar adulationibus senatus libens cessit",
        vocab: [
            "et = and, also",
            "Caesar = the emperor (nominative)",
            "adulationibus = to the flatteries (dative plural)",
            "senatus = of the Senate (genitive)",
            "libens = willingly (nominative present participle)",
            "cessit = yielded, gave way (perfect)"
        ],
        grammar: "Tacitus uses 'adulationibus' (flatteries) rather than neutral terms like 'rogationes' (proposals), revealing his contempt for Senate servility.",
        translation: "and the emperor willingly yielded to the flattering suggestions of the Senate"
    },
    phrase6: {
        title: "ut vicesimo aetatis anno consulatum Nero iniret",
        vocab: [
            "ut = that (result/indirect command)",
            "vicesimo = twentieth (ablative)",
            "aetatis = of age (genitive)",
            "anno = in the year (ablative)",
            "consulatum = consulship (accusative)",
            "Nero = Nero (nominative)",
            "iniret = should enter upon (imperfect subjunctive)"
        ],
        grammar: "Result clause or indirect command. The minimum age for consul was traditionally 42 under the Republic, later reduced to around 30. At 20, this is extraordinarily irregular.",
        translation: "that Nero should enter upon the consulship in the 20th year of his life"
    },
    phrase7: {
        title: "atque interim designatus",
        vocab: [
            "atque = and",
            "interim = in the meantime",
            "designatus = designated, appointed (nominative)"
        ],
        grammar: "Being 'consul designatus' meant being officially designated for the consulship before actually holding office. This gave Nero official status immediately.",
        translation: "and in the meantime, as consul designate"
    },
    phrase8: {
        title: "proconsulare imperium extra urbem haberet",
        vocab: [
            "proconsulare = proconsular (accusative neuter)",
            "imperium = power, command (accusative)",
            "extra = outside (+ accusative)",
            "urbem = the city (accusative)",
            "haberet = he should hold (imperfect subjunctive)"
        ],
        grammar: "Proconsular imperium granted military and administrative authority over provinces, typically held by former consuls. Giving this to a teenager is unprecedented.",
        translation: "he should hold proconsular power outside the city"
    },
    phrase9: {
        title: "ac princeps iuventutis appellaretur",
        vocab: [
            "ac = and",
            "princeps = leader, first man (nominative)",
            "iuventutis = of the youth (genitive)",
            "appellaretur = should be called (imperfect subjunctive passive)"
        ],
        grammar: "This title had been given to Augustus' grandsons Gaius and Lucius Caesar, marking them as heirs. By giving it to Nero, succession is publicly established.",
        translation: "and be called leader of the youth"
    },
    phrase10: {
        title: "additum nomine eius donativum militi, congiarium plebei",
        vocab: [
            "additum = was added (perfect passive participle)",
            "nomine = in the name (ablative)",
            "eius = his (genitive)",
            "donativum = donative, gift (nominative)",
            "militi = to/for the soldier (dative)",
            "congiarium = handout, distribution (nominative)",
            "plebei = to/for the plebs (dative)"
        ],
        grammar: "A donativum was cash payment to soldiers (buying military loyalty), whilst a congiarium was for ordinary citizens (buying popularity). Both are transactional.",
        translation: "a donative was added for the soldiers in his name, a handout for the plebs"
    },
    phrase11: {
        title: "et ludicro circensium, quod adquirendis vulgi studiis edebatur",
        vocab: [
            "et = and, also",
            "ludicro = at/in the performance (ablative)",
            "circensium = of the circus games (genitive plural)",
            "quod = which (nominative neuter)",
            "adquirendis = to be obtained (gerundive, dative neuter plural)",
            "vulgi = of the mob, of the crowd (genitive)",
            "studiis = goodwill, enthusiasm (dative/ablative plural)",
            "edebatur = was provided, was staged (imperfect passive)"
        ],
        grammar: "Relative clause of purpose with gerundive. Tacitus explicitly states the manipulative purpose - 'vulgi studiis' (mob's goodwill) shows slight contempt.",
        translation: "and at a performance of the circus games, which was provided in order to get the goodwill of the mob"
    },
    phrase12: {
        title: "Britannicus in praetexta",
        vocab: [
            "Britannicus = Britannicus (nominative)",
            "in = in (+ ablative)",
            "praetexta = toga praetexta (ablative - bordered toga worn by boys)"
        ],
        grammar: "The toga praetexta was worn by boys before coming of age, marking Britannicus as still a child, not yet an adult citizen.",
        translation: "Britannicus in the toga praetexta"
    },
    phrase13: {
        title: "Nero triumphali veste",
        vocab: [
            "Nero = Nero (nominative)",
            "triumphali = triumphal (ablative feminine)",
            "veste = clothing, dress (ablative)"
        ],
        grammar: "Triumphal dress was reserved for victorious generals celebrating a triumph. Nero wears it despite having won no battles - pure theatre.",
        translation: "Nero in triumphal clothing"
    },
    phrase14: {
        title: "travecti sunt",
        vocab: [
            "travecti = rode past, were carried across (perfect passive participle, nominative plural)",
            "sunt = are, were (perfect)"
        ],
        grammar: "Perfect passive with 'sunt' describing the ceremonial procession through Rome.",
        translation: "rode past"
    },
    phrase15: {
        title: "spectaret populus hunc decore imperatorio, illum puerili habitu",
        vocab: [
            "spectaret = should watch (imperfect subjunctive)",
            "populus = the people (nominative)",
            "hunc = this one, the latter (accusative)",
            "decore = in glory, with splendour (ablative)",
            "imperatorio = imperial (ablative neuter)",
            "illum = that one, the former (accusative)",
            "puerili = boyish, childish (ablative neuter)",
            "habitu = in appearance, in dress (ablative)"
        ],
        grammar: "Purpose/jussive subjunctive expressing the organisers' intention. 'hunc... illum' creates stark binary opposition - this one vs that one.",
        translation: "let the people watch the latter in imperial glory, the former in boyish dress"
    },
    phrase16: {
        title: "ac perinde fortunam utriusque praesumeret",
        vocab: [
            "ac = and",
            "perinde = accordingly, in consequence",
            "fortunam = fortune, fate (accusative)",
            "utriusque = of both (genitive)",
            "praesumeret = might anticipate, might assume (imperfect subjunctive)"
        ],
        grammar: "Purpose clause continuing from 'spectaret'. The word 'fortuna' carries implications of both fate and luck - the spectacle is designed to predetermine how people view each boy's future.",
        translation: "and would therefore anticipate the fortune of both"
    }
};

const styleData = {
    style1: {
        title: "Britannicus in praetexta, Nero triumphali veste",
        device: "Visual Contrast",
        effect: "The juxtaposition of boyish dress versus imperial clothing creates an unmistakable binary in the public mind, publicly humiliating the legitimate heir whilst elevating the adopted son."
    },
    style2: {
        title: "maturata",
        device: "Loaded Vocabulary",
        effect: "The word suggests artificial acceleration and premature advancement, immediately signalling that natural order is being violated for political expediency."
    },
    style3: {
        title: "videretur",
        device: "Subjunctive of Appearance",
        effect: "Using 'might seem' rather than 'might be' reveals that this is about optics and manipulation - Nero needs to appear ready, not actually be ready."
    },
    style4: {
        title: "adulationibus senatus",
        device: "Pejorative Diction",
        effect: "Calling Senate proposals 'flatteries' rather than neutral terms exposes Tacitus' contempt for their servility and the corrupt emperor-Senate relationship."
    },
    style5: {
        title: "libens cessit",
        device: "Ironic Emphasis",
        effect: "Highlighting that Claudius yielded 'willingly' suggests he was easily manipulated or complicit in undermining his own son's succession."
    },
    style6: {
        title: "vicesimo aetatis anno",
        device: "Age Emphasis",
        effect: "Explicitly stating Nero's age of 20 underscores how radically irregular this is - the traditional minimum was 42, later reduced to 30."
    },
    style7: {
        title: "donativum militi, congiarium plebei",
        device: "Parallel Structure",
        effect: "The balanced phrasing emphasises the calculated, transactional nature of buying loyalty from both military and civilians."
    },
    style8: {
        title: "adquirendis vulgi studiis",
        device: "Contemptuous Language",
        effect: "Describing the purpose as getting the 'mob's goodwill' reveals disdain for both the masses and those who pander to them through staged spectacles."
    },
    style9: {
        title: "spectaret... praesumeret",
        device: "Imperfect Subjunctives",
        effect: "The repeated subjunctives emphasise intention and planning - every detail was choreographed to manipulate public perception."
    },
    style10: {
        title: "hunc... illum",
        device: "Demonstrative Opposition",
        effect: "The binary 'this one... that one' forces viewers into a simple choice, eliminating any middle ground between imperial glory and childish irrelevance."
    },
    style11: {
        title: "decore imperatorio... puerili habitu",
        device: "Antithesis",
        effect: "The stark contrast between 'imperial splendour' and 'boyish dress' creates maximum visual and emotional impact."
    },
    style12: {
        title: "fortunam utriusque",
        device: "Dramatic Irony",
        effect: "The word 'fortuna' carries implications of fate - readers who know the outcome recognise the tragic irony of this manipulated spectacle."
    }
};

function generateGrammarCards() {
    const container = document.getElementById('grammarCards');
    
    for (const [id, data] of Object.entries(grammarData)) {
        const card = document.createElement('div');
        card.className = 'analysis-card';
        card.id = id;
        
        let vocabHTML = data.vocab.map(v => `<p>• ${v}</p>`).join('');
        
        card.innerHTML = `
            <div class="badge">Grammar & Vocabulary</div>
            <h4>${data.title}</h4>
            
            <p><strong>Vocabulary:</strong></p>
            ${vocabHTML}
            
            <p style="margin-top: 0.75rem;"><strong>Grammar:</strong> ${data.grammar}</p>
            
            <button class="reveal-translation" onclick="revealTranslation(this)">Show Translation</button>
            <div class="translation-reveal">
                <strong>Translation:</strong>
                <p>"${data.translation}"</p>
            </div>
        `;
        
        container.appendChild(card);
    }
}

function generateStyleCards() {
    const container = document.getElementById('styleCards');
    
    for (const [id, data] of Object.entries(styleData)) {
        const card = document.createElement('div');
        card.className = 'analysis-card';
        card.id = id;
        
        card.innerHTML = `
            <div class="badge">Literary Device</div>
            <h4>${data.title}</h4>
            <p><strong>Device:</strong> ${data.device}</p>
            <p><strong>Description:</strong> ${data.description}</p>
            <p><strong>Effect:</strong> ${data.effect}</p>
        `;
        
        container.appendChild(card);
    }
}
