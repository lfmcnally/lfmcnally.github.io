// Analysis data for Tacitus Annals 14.9 interactive text
const textData = {
    "consensu-agreement": {
        title: "consensu",
        translation: "with agreement",
        device: "Historiographical Authority",
        description: "Establishes that sources agree on main events, lending credibility to the account.",
        effect: "Creates documentary authority whilst acknowledging some details remain disputed."
    },
    
    "produntur-reported": {
        title: "produntur",
        translation: "are reported",
        device: "Present Passive",
        description: "Present tense makes the reporting ongoing - these accounts still circulate.",
        effect: "Suggests living tradition of the story rather than dead history."
    },
    
    "aspexeritne-indirect": {
        title: "aspexeritne",
        translation: "whether he looked",
        device: "Indirect Question",
        description: "Perfect subjunctive in indirect question about disputed detail - did Nero view the corpse?",
        effect: "Introduces uncertainty about most grotesque detail - even ancients weren't sure."
    },
    
    "exanimem-lifeless": {
        title: "exanimem",
        translation: "lifeless",
        device: "Euphemistic Adjective",
        description: "'Exanimis' (without breath) is less brutal than 'dead' - softer term for mother's corpse.",
        effect: "Even in describing viewing corpse, language maintains some dignity."
    },
    
    "formam-corporis": {
        title: "formam corporis",
        translation: "beauty of body",
        device: "Physical Aestheticisation",
        description: "Viewing mother's corpse for beauty suggests perverse, incestuous undertones.",
        effect: "Makes Nero's alleged behaviour even more disturbing - sexualising dead mother."
    },
    
    "laudaverit-praise": {
        title: "laudaverit",
        translation: "praised",
        device: "Perfect Subjunctive",
        description: "The subjunctive maintains uncertainty - we don't know if he really praised her beauty.",
        effect: "Grotesque possibility left open - did son admire dead mother's body?"
    },
    
    "sunt-qui": {
        title: "sunt qui...sunt qui",
        translation: "some...others",
        device: "Balanced Sources",
        description: "Parallel structure presents conflicting accounts with equal weight.",
        effect: "Tacitus as neutral historian - presenting both versions without choosing."
    },
    
    "cremata-burned": {
        title: "cremata",
        translation: "cremated",
        device: "Immediate Disposal",
        description: "Perfect passive participle - the burning already done, no ceremony described.",
        effect: "Speed of cremation prevents proper rites - rushed disposal of evidence."
    },
    
    "nocte-eadem": {
        title: "nocte eadem",
        translation: "that same night",
        device: "Temporal Immediacy",
        description: "Emphasis on 'same night' - no time for proper preparation or mourning.",
        effect: "Haste suggests guilt and fear - destroy evidence quickly."
    },
    
    "convivali-lecto": {
        title: "convivali lecto",
        translation: "dining couch",
        device: "Degrading Furniture",
        description: "Burned on dining furniture, not proper funeral bier - domestic not ceremonial.",
        effect: "Ultimate disrespect - treated like rubbish, not royalty."
    },
    
    "exequiis-vilibus": {
        title: "exequiis vilibus",
        translation: "cheap rites",
        device: "Deliberate Dishonour",
        description: "'Vilis' (cheap, worthless) emphasises the calculated insult of poor funeral.",
        effect: "Not poverty but policy - deliberately minimal honours for empress mother."
    },
    
    "dum-temporal": {
        title: "dum Nero rerum potiebatur",
        translation: "while Nero held power",
        device: "Temporal Limitation",
        description: "Links denial of burial directly to Nero's reign - his power prevents honour.",
        effect: "Shows state suppression of memory - power actively erases the dead."
    },
    
    "congesta-clausa": {
        title: "congesta aut clausa",
        translation: "heaped or sealed",
        device: "Denied Burial Rites",
        description: "Two standard burial practices both denied - no earth heaped, no tomb sealed.",
        effect: "Complete denial of proper Roman burial - attempt to erase from earth."
    },
    
    "humus-earth": {
        title: "humus",
        translation: "earth",
        device: "Elemental Denial",
        description: "Not even basic earth to cover her - most fundamental burial right refused.",
        effect: "Denying earth denies humanity - treated worse than common criminal."
    },
    
    "domesticorum-cura": {
        title: "domesticorum cura",
        translation: "servants' care",
        device: "Loyal Resistance",
        description: "Household slaves risk punishment to honour her - loyalty survives death.",
        effect: "Shows Agrippina inspired genuine loyalty despite her crimes."
    },
    
    "levem-tumulum": {
        title: "levem tumulum",
        translation: "modest mound",
        device: "Minimal Memorial",
        description: "'Light' mound suggests small, unimpressive burial - but better than nothing.",
        effect: "Humble monument still defies Nero's erasure - memory persists."
    },
    
    "viam-miseni": {
        title: "viam Miseni propter",
        translation: "near Misenum road",
        device: "Geographic Specificity",
        description: "Exact location preserved - near the road where travellers would see.",
        effect: "Public location ensures remembrance - visible defiance of erasure."
    },
    
    "villam-caesaris": {
        title: "villam Caesaris dictatoris",
        translation: "villa of Caesar the dictator",
        device: "Historical Connection",
        description: "Links Agrippina to Julius Caesar - both ambitious, both assassinated.",
        effect: "Places her among the powerful dead - Caesar's neighbour in death."
    },
    
    "quae-prospectat": {
        title: "quae...editissima prospectat",
        translation: "which from height looks over",
        device: "Elevated Position",
        description: "Superlative 'editissima' emphasises commanding height overlooking bay.",
        effect: "Even humble grave has magnificent view - some dignity in death."
    },
    
    "accenso-ablative": {
        title: "accenso rogo",
        translation: "pyre having been lit",
        device: "Ablative Absolute",
        description: "Construction marks moment of cremation as context for freedman's suicide.",
        effect: "Links servant's death directly to mistress's burning - simultaneous ends."
    },
    
    "mnester-freedman": {
        title: "Mnester",
        translation: "Mnester",
        device: "Named Loyalty",
        description: "Freedman named and remembered - his loyalty recorded in history.",
        effect: "Individual loyalty contrasts with state dishonour - one man's tribute."
    },
    
    "ferro-sword": {
        title: "ferro",
        translation: "with sword",
        device: "Honourable Suicide",
        description: "Death by sword was honourable Roman method - military dignity.",
        effect: "Chooses noble death unlike his mistress's brutal murder."
    },
    
    "transegit-killed": {
        title: "se transegit",
        translation: "killed himself",
        device: "Reflexive Violence",
        description: "Emphatic reflexive 'se ipse' - deliberate self-destruction.",
        effect: "Active choice not passive victimhood - controls his own end."
    },
    
    "incertum-caritate": {
        title: "incertum caritate...an metu",
        translation: "uncertain whether love or fear",
        device: "Ambiguous Motivation",
        description: "Two possible motives - genuine grief or fear of torture - left unresolved.",
        effect: "Maintains mystery - even freedman's loyalty might be self-preservation."
    },
    
    "hunc-finem": {
        title: "hunc sui finem",
        translation: "this end of herself",
        device: "Prophetic Knowledge",
        description: "Emphatic word order - she knew exactly this end would come.",
        effect: "Transforms murder into destiny - she always knew this would happen."
    },
    
    "crediderat-believed": {
        title: "crediderat",
        translation: "had believed",
        device: "Pluperfect Certainty",
        description: "Pluperfect shows long-held belief - years of knowing her fate.",
        effect: "Living with death sentence - every day knowing son would kill her."
    },
    
    "consulenti-dative": {
        title: "consulenti",
        translation: "to her consulting",
        device: "Dative of Reference",
        description: "Present participle in dative - she actively sought this knowledge.",
        effect: "Not passive recipient but active seeker of prophecy - wanted to know."
    },
    
    "chaldaei-astrologers": {
        title: "Chaldaei",
        translation: "Chaldaeans",
        device: "Oriental Authority",
        description: "Babylonian astrologers considered most skilled in prophecy despite Roman suspicion.",
        effect: "Exotic, reliable source - their prophecies taken seriously."
    },
    
    "fore-ut": {
        title: "fore ut imperaret",
        translation: "that he would rule",
        device: "Future Periphrastic",
        description: "Alternative future construction emphasises certainty of prediction.",
        effect: "Grammatically marks this as certain future - destiny not possibility."
    },
    
    "occideret-kill": {
        title: "occideret",
        translation: "would kill",
        device: "Imperfect Subjunctive",
        description: "Part of indirect statement - the prophecy of matricide.",
        effect: "Matter-of-fact prediction of ultimate crime - stated simply."
    },
    
    "occidat-dum": {
        title: "occidat",
        translation: "let him kill",
        device: "Jussive Subjunctive",
        description: "Present subjunctive as command - she orders her own future murder.",
        effect: "Active acceptance of fate - not victim but co-author of destiny."
    },
    
    "dum-imperet": {
        title: "dum imperet",
        translation: "as long as he rules",
        device: "Conditional Acceptance",
        description: "'Dum' with subjunctive - death acceptable if power achieved.",
        effect: "Ultimate statement of ambition - son's power worth mother's life."
    },
    
    "historiographical-balance": {
        title: "tradiderint...abnuant",
        translation: "have reported...deny",
        device: "Conflicting Sources",
        description: "Perfect subjunctives show ongoing disagreement among historians.",
        effect: "Even history uncertain - some things unknowable even to ancients."
    },
    
    "temporal-progression": {
        title: "nocte eadem...mox",
        translation: "same night...later",
        device: "Time Sequence",
        description: "Immediate dishonour followed by delayed honour - time brings justice.",
        effect: "Truth emerges over time - immediate suppression fails eventually."
    },
    
    "social-inversion": {
        title: "domesticorum cura",
        translation: "servants' care",
        device: "Status Reversal",
        description: "Slaves provide honour emperor denies - lowest give what highest refuses.",
        effect: "Moral inversion - servants more honourable than emperor."
    },
    
    "geographical-symbolism": {
        title: "villam Caesaris",
        translation: "Caesar's villa",
        device: "Historical Parallel",
        description: "Burial near Julius Caesar's property links two ambitious figures.",
        effect: "Places Agrippina in tradition of powerful Romans destroyed by politics."
    },
    
    "prophetic-frame": {
        title: "multos ante annos",
        translation: "many years before",
        device: "Retrospective Prophecy",
        description: "Prophecy revealed after fulfilment - explains everything retrospectively.",
        effect: "Makes matricide seem inevitable - always going to happen."
    },
    
    "direct-speech-climax": {
        title: "occidat...dum imperet",
        translation: "let him kill...as long as he rules",
        device: "Direct Quote Finale",
        description: "Actual words provide shocking conclusion - her voice from beyond death.",
        effect: "Agrippina gets last word - her prophecy frames entire narrative."
    },
    
    "death-details": {
        title: "convivali lecto et exequiis vilibus",
        translation: "dining couch and cheap rites",
        device: "Degrading Specifics",
        description: "Specific items emphasise calculated dishonour - not accident but policy.",
        effect: "Itemised insults - each detail another deliberate degradation."
    },
    
    "burial-denial": {
        title: "neque...congesta aut clausa humus",
        translation: "neither heaped nor sealed earth",
        device: "Double Negation",
        description: "Neither basic burial right granted - comprehensive denial.",
        effect: "Total erasure attempted - not even basic earth covering."
    },
    
    "loyalty-ambiguity": {
        title: "incertum caritate...an metu",
        translation: "uncertain love or fear",
        device: "Motivational Uncertainty",
        description: "Even freedman's suicide has unclear motive - loyalty or terror?",
        effect: "Nothing certain in Nero's Rome - even devotion might be fear."
    },
    
    "power-price": {
        title: "dum imperet",
        translation: "as long as he rules",
        device: "Conditional Clause",
        description: "Subjunctive makes power the condition for accepting death.",
        effect: "Calculates exact price of power - mother's life for son's throne."
    }
};
