// Analysis data for Tacitus Annals 14.11 interactive text
const textData = {
    "adiciebat-adding": {
        title: "adiciebat",
        translation: "he was adding",
        device: "Imperfect of Accumulation",
        description: "The imperfect tense suggests ongoing addition of charges - piling up accusations.",
        effect: "Creates sense of desperate accumulation - throwing everything at the wall to see what sticks."
    },
    
    "crimina-accusations": {
        title: "crimina",
        translation: "accusations",
        device: "Legal Language",
        description: "Uses formal term for criminal charges - treating matricide as prosecution.",
        effect: "Transforms murder into justice - killer becomes prosecutor of his victim."
    },
    
    "longius-repetita": {
        title: "longius repetita",
        translation: "sought from further back",
        device: "Temporal Reach",
        description: "Reaching far into past for accusations - desperation for justification.",
        effect: "Shows weakness of case - must dig deep in history to find excuses."
    },
    
    "consortium-imperii": {
        title: "consortium imperii",
        translation: "partnership in power",
        device: "Power Sharing Horror",
        description: "The idea of shared emperorship presented as outrageous ambition.",
        effect: "Makes Agrippina's influence seem like usurpation - mother as threat to son's power."
    },
    
    "iuraturas-accusative": {
        title: "iuraturas",
        translation: "would swear oath",
        device: "Future Participle in Indirect",
        description: "Accusative with infinitive construction shows alleged future plan.",
        effect: "Presents hypothetical as near-reality - what she wanted becomes what she almost did."
    },
    
    "feminae-verba": {
        title: "in feminae verba",
        translation: "to a woman's words",
        device: "Gendered Scandal",
        description: "Emphasises gender transgression - military oath to woman unthinkable.",
        effect: "Uses Roman misogyny as justification - female power as inherent threat."
    },
    
    "praetorias-cohortes": {
        title: "praetorias cohortes",
        translation: "praetorian cohorts",
        device: "Military Authority",
        description: "Elite guards swearing to woman would overturn military tradition.",
        effect: "Makes her ambition seem to threaten core Roman institutions."
    },
    
    "idemque-dedecus": {
        title: "idemque dedecus",
        translation: "same disgrace",
        device: "Extended Shame",
        description: "The disgrace would extend to Senate and people - universal degradation.",
        effect: "Amplifies scandal - not just military but entire state dishonoured."
    },
    
    "speravisset-hoped": {
        title: "speravisset",
        translation: "she had hoped",
        device: "Pluperfect Subjunctive",
        description: "Shows alleged past hope in indirect statement - unverifiable claim.",
        effect: "Presents speculation as fact - what she might have wanted becomes crime."
    },
    
    "postquam-temporal": {
        title: "postquam frustra habita sit",
        translation: "after she was thwarted",
        device: "Temporal Clause",
        description: "Links her hostility to being denied power - revenge motive constructed.",
        effect: "Creates narrative of woman scorned - rejection breeds vengeance."
    },
    
    "infensa-hostile": {
        title: "infensa militi patribusque et plebi",
        translation: "hostile to soldiers, senators and people",
        device: "Universal Opposition",
        description: "Claims she opposed all three constituencies of Roman state.",
        effect: "Makes her enemy of everyone - no one left to mourn her."
    },
    
    "dissuasisset-opposed": {
        title: "dissuasisset",
        translation: "had advised against",
        device: "Pluperfect Subjunctive",
        description: "Alleges she opposed popular policies - turned against people's interests.",
        effect: "Retroactively makes her anti-popular - justifies murder as public good."
    },
    
    "donativum-largesse": {
        title: "donativum et congiarium",
        translation: "military bonus and civilian handout",
        device: "Financial Opposition",
        description: "Claims she opposed both military and civilian payments - universal stinginess.",
        effect: "Makes her seem to deny everyone money - greed as justification for death."
    },
    
    "viris-inlustribus": {
        title: "viris inlustribus",
        translation: "distinguished men",
        device: "Elite Victims",
        description: "Claims she threatened nobility - elite class endangered.",
        effect: "Enlists aristocratic fear - protecting senators from dangerous woman."
    },
    
    "quanto-labore": {
        title: "quanto suo labore",
        translation: "with how much effort of his",
        device: "Ironic Emphasis",
        description: "Exaggerates Nero's supposed efforts to restrain mother - false heroism.",
        effect: "Makes Nero the victim - exhausted son controlling overbearing mother."
    },
    
    "ne-inrumperet": {
        title: "ne inrumperet curiam",
        translation: "lest she burst into Senate",
        device: "Negative Purpose",
        description: "The violent verb 'inrumpere' suggests forceful entry - invasion imagery.",
        effect: "Makes her seem aggressive invader of male space - violent transgressor."
    },
    
    "gentibus-externis": {
        title: "gentibus externis",
        translation: "to foreign nations",
        device: "Diplomatic Transgression",
        description: "Answering foreign embassies would usurp emperor's role.",
        effect: "Shows her overstepping crucial boundaries - acting as ruler not mother."
    },
    
    "claudianorum-obliqua": {
        title: "Claudianorum obliqua insectatione",
        translation: "with indirect attack on Claudian times",
        device: "Sideways Criticism",
        description: "'Obliqua' (sideways) shows indirect attack on previous reign.",
        effect: "Clever rhetoric - criticises dead emperor to condemn living mother."
    },
    
    "dominationis-rule": {
        title: "dominationis",
        translation: "of domination",
        device: "Tyrannical Term",
        description: "'Dominatio' implies tyranny not legitimate rule - loaded language.",
        effect: "Makes Claudius's reign sound despotic - and blames it on Agrippina."
    },
    
    "flagitia-scandals": {
        title: "flagitia",
        translation: "scandals",
        device: "Moral Condemnation",
        description: "Strong term for disgraceful acts - moral outrage vocabulary.",
        effect: "Transfers all Claudius's sins to Agrippina - comprehensive blame shift."
    },
    
    "transtulit-transferred": {
        title: "transtulit",
        translation: "transferred",
        device: "Blame Shift",
        description: "Perfect tense makes transfer complete - all guilt moved to her.",
        effect: "Historical revisionism complete - she becomes author of all past evils."
    },
    
    "publica-fortuna": {
        title: "publica fortuna",
        translation: "public fortune",
        device: "State Benefit",
        description: "Her death presented as good fortune for the state - public blessing.",
        effect: "Transforms private murder into public service - matricide as patriotism."
    },
    
    "referens-relating": {
        title: "referens",
        translation: "relating",
        device: "Present Participle",
        description: "Ongoing act of narration - Nero actively spinning the story.",
        effect: "Shows conscious narrative construction - history being written in real time."
    },
    
    "naufragium-shipwreck": {
        title: "naufragium",
        translation: "shipwreck",
        device: "Absurd Inclusion",
        description: "Including the fake shipwreck as real undermines entire narrative.",
        effect: "Self-defeating lie - too obvious to be believed."
    },
    
    "fortuitum-accidental": {
        title: "fortuitum",
        translation: "accidental",
        device: "Chance Claim",
        description: "Claiming engineered shipwreck was chance stretches credibility.",
        effect: "Insulting audience intelligence - lie too transparent."
    },
    
    "quis-hebes": {
        title: "quis adeo hebes",
        translation: "who so stupid",
        device: "Rhetorical Contempt",
        description: "Tacitus's scorn erupts - direct challenge to anyone believing this.",
        effect: "Author's voice breaks through - open mockery of official story."
    },
    
    "muliere-naufraga": {
        title: "a muliere naufraga",
        translation: "by shipwrecked woman",
        device: "Absurd Agent",
        description: "Emphasises absurdity - shipwreck survivor sending assassin.",
        effect: "Logical impossibility - wounded woman organising immediate assassination."
    },
    
    "telo-weapon": {
        title: "cum telo",
        translation: "with weapon",
        device: "Single Armed",
        description: "One person with one weapon against imperial guards - impossible odds.",
        effect: "Highlights ridiculous disproportion - David versus Goliath's army."
    },
    
    "unum-one": {
        title: "unum",
        translation: "one person",
        device: "Numerical Emphasis",
        description: "Emphasises singleness - one assassin against empire.",
        effect: "Makes story mathematically impossible - one versus thousands."
    },
    
    "cohortes-classes": {
        title: "cohortes et classes",
        translation: "cohorts and fleets",
        device: "Military Magnitude",
        description: "Land and sea forces - comprehensive military protection.",
        effect: "Shows impossible barrier - no single assassin could penetrate."
    },
    
    "perfringeret-break": {
        title: "perfringeret",
        translation: "break through",
        device: "Violent Verb",
        description: "Suggests smashing through - impossible force required.",
        effect: "Makes alleged plan sound like fantasy - beyond human capability."
    },
    
    "non-nero": {
        title: "non iam Nero",
        translation: "no longer Nero",
        device: "Subject Shift",
        description: "Blame moves from obvious culprit Nero to unexpected Seneca.",
        effect: "Ironic deflection - philosopher blamed more than tyrant."
    },
    
    "immanitas-savagery": {
        title: "immanitas",
        translation: "savagery",
        device: "Beast Metaphor",
        description: "'Immanitas' suggests inhuman cruelty - bestial behaviour.",
        effect: "Nero beyond human evil - transcends normal wickedness."
    },
    
    "anteibat-surpassed": {
        title: "anteibat",
        translation: "surpassed",
        device: "Exceeding Limits",
        description: "His evil goes beyond all complaints - unmeasurable wickedness.",
        effect: "Evil so great it defeats criticism - beyond words."
    },
    
    "seneca-blamed": {
        title: "Seneca",
        translation: "Seneca",
        device: "Philosopher Implicated",
        description: "The Stoic philosopher becomes accomplice through words.",
        effect: "Intellectual corruption - philosophy serving tyranny."
    },
    
    "rumore-reputation": {
        title: "adverso rumore",
        translation: "hostile reputation",
        device: "Public Opinion",
        description: "Public turns against Seneca for his role - reputation destroyed.",
        effect: "Shows how serving tyrants corrupts even philosophers."
    },
    
    "oratione-tali": {
        title: "oratione tali",
        translation: "with such a speech",
        device: "Quality Problem",
        description: "'Such' implies the speech's quality exposed its falseness.",
        effect: "Too good to be true - excellence reveals deception."
    },
    
    "confessionem-admission": {
        title: "confessionem",
        translation: "confession",
        device: "Ironic Term",
        description: "Calls it confession when it's really fabrication - truth inverted.",
        effect: "Language itself lies - confession that confesses nothing true."
    },
    
    "scripsisset-written": {
        title: "scripsisset",
        translation: "had written",
        device: "Pluperfect Subjunctive",
        description: "Causal subjunctive - he's blamed because he wrote.",
        effect: "Writing as complicity - pen mightier than sword in evil."
    },
    
    "accumulation-effect": {
        title: "crimina longius repetita",
        translation: "charges from far back",
        device: "Desperate Accumulation",
        description: "Piling up old accusations shows weakness of present justification.",
        effect: "Quantity replaces quality - many weak charges instead of one strong one."
    },
    
    "gender-transgression": {
        title: "in feminae verba",
        translation: "to woman's words",
        device: "Gender Boundary",
        description: "Military oath to woman violates fundamental Roman gender roles.",
        effect: "Uses patriarchy as justification - female power inherently criminal."
    },
    
    "historical-revision": {
        title: "cuncta...flagitia...transtulit",
        translation: "transferred all scandals",
        device: "Complete Rewriting",
        description: "Comprehensive transfer of blame rewrites entire previous reign.",
        effect: "Memory itself murdered - past reconstructed to justify present."
    },
    
    "rhetorical-exposure": {
        title: "quis adeo hebes",
        translation: "who so dull",
        device: "Authorial Intervention",
        description: "Tacitus breaks narrative to mock - direct address to reader.",
        effect: "Historian as judge - verdicts delivered through rhetorical questions."
    },
    
    "intellectual-complicity": {
        title: "Seneca...scripsisset",
        translation: "Seneca...had written",
        device: "Philosophical Corruption",
        description: "Philosophy's greatest voice ventriloquises tyranny's lies.",
        effect: "Shows how power corrupts all - even wisdom serves evil."
    }
};
