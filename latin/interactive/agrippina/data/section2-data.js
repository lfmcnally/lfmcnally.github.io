// Lesson data for Tacitus Annals 14.2 - section2-data.js
const grammarData = {
    phrase1: {
        title: "tradit Cluvius",
        vocab: [
            "tradit = records, hands down (present)",
            "Cluvius = Cluvius Rufus (nominative)"
        ],
        grammar: "Historical present for vividness. Cluvius Rufus was a contemporary historian. Explicit source citation creates scholarly distance whilst introducing scandalous content.",
        translation: "Cluvius records"
    },
    phrase2: {
        title: "ardore retinendae Agrippinam potentiae",
        vocab: [
            "ardore = with burning desire (ablative)",
            "retinendae = of retaining (gerundive, genitive)",
            "Agrippinam = Agrippina (accusative)",
            "potentiae = of power (genitive)"
        ],
        grammar: "Accusative subject of indirect statement. Ablative of cause with gerundive construction. The 'burning desire to retain power' drives everything that follows.",
        translation: "that Agrippina, in her eagerness to retain power"
    },
    phrase3: {
        title: "eo usque provectam",
        vocab: [
            "eo = to such a point (adverb)",
            "usque = all the way (adverb)",
            "provectam = carried forward, advanced (perfect passive participle, accusative)"
        ],
        grammar: "Continues indirect statement. Emphatic degree phrase suggesting she's been swept along by her own desires to an extreme point.",
        translation: "had been carried so far"
    },
    phrase4: {
        title: "ut medio diei",
        vocab: [
            "ut = that (result conjunction)",
            "medio = middle (ablative)",
            "diei = of day (genitive)"
        ],
        grammar: "Result clause after 'eo usque'. Ablative of time when with partitive genitive. Midday timing violates all Roman sexual decorum.",
        translation: "that in the middle of the day"
    },
    phrase5: {
        title: "cum id temporis Nero per vinum et epulas incalesceret",
        vocab: [
            "cum = when (temporal conjunction)",
            "id = that (accusative)",
            "temporis = of time (partitive genitive)",
            "Nero = Nero (nominative)",
            "per = through (+ accusative)",
            "vinum = wine (accusative)",
            "et = and",
            "epulas = feast (accusative plural)",
            "incalesceret = was becoming heated (imperfect subjunctive)"
        ],
        grammar: "Temporal cum clause with subjunctive. 'Id temporis' is partitive genitive idiom. Heat metaphor links alcohol and arousal.",
        translation: "when at that time Nero was becoming heated through wine and feasting"
    },
    phrase6: {
        title: "offerret se saepius temulento",
        vocab: [
            "offerret = she offered (imperfect subjunctive)",
            "se = herself (reflexive accusative)",
            "saepius = quite often (comparative adverb)",
            "temulento = to the drunken one (dative)"
        ],
        grammar: "Main verb of result clause. Reflexive shows she makes herself the offering. Dative shows Nero as vulnerable target.",
        translation: "she would offer herself quite often to the drunken (Nero)"
    },
    phrase7: {
        title: "comptam et incesto paratam",
        vocab: [
            "comptam = adorned, arranged (perfect passive participle, accusative)",
            "et = and",
            "incesto = for incest (dative)",
            "paratam = prepared, ready (perfect passive participle, accusative)"
        ],
        grammar: "Paired participles describing Agrippina (agreeing with 'se'). Shows deliberate preparation for the ultimate taboo - she dresses for incest.",
        translation: "adorned and ready for incest"
    },
    phrase8: {
        title: "iamque lasciva oscula et praenuntias flagitii blanditias",
        vocab: [
            "iam = already",
            "-que = and (enclitic)",
            "lasciva = wanton, lustful (accusative neuter plural)",
            "oscula = kisses (accusative neuter plural)",
            "et = and",
            "praenuntias = announcing beforehand (accusative feminine plural)",
            "flagitii = of scandal (genitive)",
            "blanditias = caresses (accusative feminine plural)"
        ],
        grammar: "Direct objects of implied 'being noticed'. The caresses are prophetic - physical signs of coming moral catastrophe.",
        translation: "and already wanton kisses and caresses foretelling scandal"
    },
    phrase9: {
        title: "adnotantibus proximis",
        vocab: [
            "adnotantibus = noticing (present participle, ablative plural)",
            "proximis = those closest (ablative plural)"
        ],
        grammar: "Ablative absolute showing concurrent action. The courtiers are witnesses to unfolding corruption.",
        translation: "with those closest noticing"
    },
    phrase10: {
        title: "Senecam contra muliebres inlecebras",
        vocab: [
            "Senecam = Seneca (accusative)",
            "contra = against (+ accusative)",
            "muliebres = womanly, feminine (accusative feminine plural)",
            "inlecebras = enticements, allurements (accusative plural)"
        ],
        grammar: "Accusative subject of indirect statement. The threat is gendered as specifically feminine, requiring gendered response.",
        translation: "Seneca against the feminine enticements"
    },
    phrase11: {
        title: "subsidium a femina petivisse",
        vocab: [
            "subsidium = help, reinforcement (accusative)",
            "a = from (+ ablative)",
            "femina = woman (ablative)",
            "petivisse = to have sought (perfect infinitive)"
        ],
        grammar: "Military metaphor - 'subsidium' is military reinforcement. Ironic that help against woman comes from woman.",
        translation: "sought help from a woman"
    },
    phrase12: {
        title: "immissamque Acten libertam",
        vocab: [
            "immissam = sent in (perfect passive participle, accusative)",
            "-que = and (enclitic)",
            "Acten = Acte (Greek accusative)",
            "libertam = freedwoman (accusative in apposition)"
        ],
        grammar: "Military vocabulary continues. Acte's status as freedwoman emphasised - former slave has more moral authority than patrician mother.",
        translation: "and Acte the freedwoman was sent in"
    },
    phrase13: {
        title: "quae simul suo periculo et infamia Neronis anxia",
        vocab: [
            "quae = who (nominative feminine)",
            "simul = at the same time, both",
            "suo = her own (ablative)",
            "periculo = danger (ablative)",
            "et = and",
            "infamia = disgrace (ablative)",
            "Neronis = of Nero (genitive)",
            "anxia = anxious (nominative feminine)"
        ],
        grammar: "Relative clause. Double motivation shown by 'simul' - self-preservation and protecting Nero's reputation.",
        translation: "who, anxious both for her own danger and Nero's disgrace"
    },
    phrase14: {
        title: "deferret pervulgatum esse incestum",
        vocab: [
            "deferret = reported (imperfect subjunctive)",
            "pervulgatum = widely spread (perfect passive participle, accusative)",
            "esse = to be (infinitive)",
            "incestum = incest (accusative)"
        ],
        grammar: "Subjunctive in relative clause. Accusative-infinitive for indirect statement. Private shame has become public knowledge.",
        translation: "reported that incest was widely known"
    },
    phrase15: {
        title: "gloriante matre",
        vocab: [
            "gloriante = boasting (present participle, ablative)",
            "matre = mother (ablative)"
        ],
        grammar: "Ablative absolute explaining cause. Agrippina's pride in her corruption leads to exposure.",
        translation: "with the mother boasting"
    },
    phrase16: {
        title: "nec toleraturos milites profani principis imperium",
        vocab: [
            "nec = and not",
            "toleraturos = would tolerate (future participle, accusative masculine plural)",
            "milites = soldiers (accusative)",
            "profani = unholy, polluted (genitive)",
            "principis = emperor (genitive)",
            "imperium = rule, command (accusative)"
        ],
        grammar: "Continuation of indirect statement. Future participle with esse understood. Military support determines legitimacy - the ultimate threat.",
        translation: "and that soldiers would not tolerate the rule of an unholy emperor"
    },
    phrase17: {
        title: "Fabius Rusticus non Agrippinae sed Neroni cupitum id memorat",
        vocab: [
            "Fabius Rusticus = Fabius Rusticus (nominative)",
            "non = not",
            "Agrippinae = by Agrippina (dative of agent)",
            "sed = but",
            "Neroni = by Nero (dative of agent)",
            "cupitum = desired (perfect passive participle, accusative)",
            "id = it (accusative)",
            "memorat = records (present)"
        ],
        grammar: "Alternative source with sharp antithesis reversing agency. Datives of agent with passive. Historical present.",
        translation: "Fabius Rusticus records that it was desired not by Agrippina but by Nero"
    },
    phrase18: {
        title: "eiusdemque libertae astu disiectum",
        vocab: [
            "eiusdem = of the same (genitive)",
            "-que = and (enclitic)",
            "libertae = freedwoman (genitive)",
            "astu = by cleverness (ablative)",
            "disiectum = scattered, ruined (perfect passive participle, accusative)"
        ],
        grammar: "Elliptical with esse understood. Violent metaphor - plot 'shattered' by intelligence not force.",
        translation: "and was ruined by the same freedwoman's cleverness"
    },
    phrase19: {
        title: "sed quae Cluvius eadem ceteri quoque auctores prodidere",
        vocab: [
            "sed = but",
            "quae = what things (accusative neuter plural)",
            "Cluvius = Cluvius (nominative)",
            "eadem = the same things (accusative neuter plural)",
            "ceteri = the rest (nominative plural)",
            "quoque = also",
            "auctores = authors (nominative plural)",
            "prodidere = have handed down (perfect)"
        ],
        grammar: "Relative clause with elliptical verb. Perfect tense shows established tradition. Creates illusion of consensus.",
        translation: "but what Cluvius (relates), the same things other authors too have handed down"
    },
    phrase20: {
        title: "et fama huc inclinat",
        vocab: [
            "et = and",
            "fama = rumour, report (nominative)",
            "huc = this way, toward this (adverb)",
            "inclinat = inclines, leans (present)"
        ],
        grammar: "Personification of rumour as judge. Though rumour typically favours the most scandalous version.",
        translation: "and rumour inclines this way"
    },
    phrase21: {
        title: "seu concepit animo tantum immanitatis Agrippina",
        vocab: [
            "seu = whether (conjunction)",
            "concepit = conceived (perfect)",
            "animo = in mind (ablative)",
            "tantum = so much (accusative)",
            "immanitatis = of monstrosity (genitive of quantity)",
            "Agrippina = Agrippina (nominative)"
        ],
        grammar: "First alternative with 'seu'. Genitive of quantity. Makes incest seem inhuman in scope - monstrous.",
        translation: "whether Agrippina conceived such great monstrosity in her mind"
    },
    phrase22: {
        title: "seu credibilior novae libidinis meditatio in ea visa est",
        vocab: [
            "seu = or whether",
            "credibilior = more believable (comparative nominative)",
            "novae = new (genitive)",
            "libidinis = of lust (genitive)",
            "meditatio = contemplation (nominative)",
            "in = in (+ ablative)",
            "ea = her (ablative)",
            "visa = seemed (perfect passive participle, nominative)",
            "est = is (present)"
        ],
        grammar: "Second alternative. Comparative suggests character makes any depravity believable.",
        translation: "or the contemplation of a new lust seemed more believable in her"
    },
    phrase23: {
        title: "quae puellaribus annis stuprum cum Lepido",
        vocab: [
            "quae = who (nominative)",
            "puellaribus = girlhood (ablative plural)",
            "annis = in years (ablative of time)",
            "stuprum = adultery, debauchery (accusative)",
            "cum = with (+ ablative)",
            "Lepido = Lepidus (ablative)"
        ],
        grammar: "Relative clause explaining her character. Shows early corruption - sexual scheming from youth.",
        translation: "who in girlhood years (committed) adultery with Lepidus"
    },
    phrase24: {
        title: "spe dominationis admiserat",
        vocab: [
            "spe = in hope (ablative)",
            "dominationis = of domination (genitive)",
            "admiserat = had admitted/allowed (pluperfect)"
        ],
        grammar: "Ablative of cause reveals motivation. Sex was always about power, never passion.",
        translation: "had admitted in hope of domination"
    },
    phrase25: {
        title: "pari cupidine usque ad libita Pallantis provoluta",
        vocab: [
            "pari = equal (ablative)",
            "cupidine = with desire (ablative of manner)",
            "usque = all the way",
            "ad = to (+ accusative)",
            "libita = whims, pleasures (accusative neuter plural)",
            "Pallantis = of Pallas (genitive)",
            "provoluta = prostrated (perfect passive participle, nominative)"
        ],
        grammar: "Shows progression of degradation. Pallas was a freedman - complete social inversion. 'Provoluta' suggests physical abasement.",
        translation: "with equal desire had prostrated herself even to the whims of Pallas"
    },
    phrase26: {
        title: "et exercita ad omne flagitium patrui nuptiis",
        vocab: [
            "et = and",
            "exercita = practised, trained (perfect passive participle, nominative)",
            "ad = for (+ accusative)",
            "omne = every (accusative)",
            "flagitium = disgrace (accusative)",
            "patrui = uncle (genitive)",
            "nuptiis = by marriage (ablative plural)"
        ],
        grammar: "Training metaphor - expert through practice. Marriage to Claudius was already incestuous, preparing for worse.",
        translation: "and practised in every disgrace through marriage to her uncle"
    }
};

const styleData = {
    style1: {
        title: "tradit Cluvius",
        device: "Source Citation",
        effect: "Opens with explicit historiographical marker. Creates scholarly distance whilst lending authority - Tacitus reports but doesn't vouch for the scandal."
    },
    style2: {
        title: "potentiae",
        device: "Political Emphasis",
        effect: "Makes clear this is about power, not passion. Every action is politically calculated, even the most intimate corruption."
    },
    style3: {
        title: "eo usque provectam",
        device: "Metaphor of Motion",
        effect: "Suggests being swept along by forces beyond control. The passive voice implies she's driven by desires rather than driving them - corruption has its own momentum."
    },
    style4: {
        title: "medio diei",
        device: "Temporal Transgression",
        effect: "Midday seduction violates all Roman decorum. The brazen daylight timing shows complete abandonment of shame - not even darkness hides this."
    },
    style5: {
        title: "per vinum et epulas",
        device: "Hendiadys",
        effect: "Wine and food presented as dual corruption agents. Creates atmosphere of dissolute luxury where normal boundaries dissolve."
    },
    style6: {
        title: "incalesceret",
        device: "Heat Metaphor",
        effect: "Links alcohol, temperature, and desire in crescendo of lost control. The imperfect shows gradual heating toward dangerous levels."
    },
    style7: {
        title: "comptam et incesto paratam",
        device: "Shocking Juxtaposition",
        effect: "Pairs careful grooming with unspeakable purpose. The deliberate preparation for incest creates visceral horror - she dresses for the ultimate taboo."
    },
    style8: {
        title: "lasciva oscula",
        device: "Alliterative Sensuality",
        effect: "The lustful modifier transforms maternal kisses into sexual advances. Makes the physical reality visceral and disturbing."
    },
    style9: {
        title: "Senecam",
        device: "Moral Authority",
        effect: "Introduces philosophical wisdom against base passion. The Stoic philosopher becomes the voice of reason in moral chaos."
    },
    style10: {
        title: "contra muliebres inlecebras",
        device: "Gendered Combat",
        effect: "Frames situation as specifically feminine threat requiring feminine counter-attack. Makes this gender warfare."
    },
    style11: {
        title: "subsidium a femina",
        device: "Ironic Strategy",
        effect: "The irony of seeking 'help from a woman' against 'womanly enticements' - fighting fire with fire in gendered battle."
    },
    style12: {
        title: "immissam",
        device: "Military Metaphor",
        effect: "Acte 'sent in' like troops into battle. Domestic drama becomes military campaign for Nero's soul."
    },
    style13: {
        title: "Acten libertam",
        device: "Social Inversion",
        effect: "Freedwoman has more moral authority than patrician mother. Palace corruption has inverted normal social hierarchies."
    },
    style14: {
        title: "Fabius Rusticus",
        device: "Alternative Source",
        effect: "Creates historiographical complexity. Shows Tacitus weighing evidence whilst clearly favouring Cluvius's more scandalous version."
    },
    style15: {
        title: "non Agrippinae sed Neroni",
        device: "Sharp Antithesis",
        effect: "Complete reversal of agency - Nero becomes predator, not victim. Shows how different sources can completely reshape moral dynamics."
    },
    style16: {
        title: "fama huc inclinat",
        device: "Personification",
        effect: "Rumour becomes rational judge 'leaning' toward truth. Though rumour typically favours the most scandalous version."
    },
    style17: {
        title: "seu credibilior",
        device: "Character Assassination",
        effect: "Appears balanced whilst damning either way - guilty in fact or in character. Past behaviour becomes proof of present corruption."
    },
    style18: {
        title: "pari cupidine",
        device: "Parallel Degradation",
        effect: "Each affair equally degrading - no hierarchy in corruption. Suggests insatiable appetite that never diminishes."
    },
    style19: {
        title: "exercita ad omne flagitium",
        device: "Training Metaphor",
        effect: "Corruption as skill developed through practice. She's graduated from amateur to professional in depravity."
    },
    style20: {
        title: "patrui nuptiis",
        device: "Climactic Irony",
        effect: "Uncle-marriage was already incestuous preparation for mother-son incest. Shows progression in taboo-breaking - logical next step in corruption."
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
            <p><strong>Effect:</strong> ${data.effect}</p>
        `;
        
        container.appendChild(card);
    }
}
