// Analysis data for Tacitus Annals 14.2 interactive text
const textData = {
    "tradit-opening": {
        title: "tradit Cluvius",
        translation: "Cluvius records",
        device: "Source Citation",
        description: "Tacitus opens with explicit source attribution to Cluvius Rufus, a contemporary historian. This historiographical marker lends authority whilst also creating distance - Tacitus reports but doesn't vouch for the scandalous content.",
        effect: "Establishes scholarly credibility whilst maintaining plausible deniability about the shocking allegations that follow."
    },
    
    "ardore-retinendae": {
        title: "ardore retinendae",
        translation: "in eagerness of retaining",
        device: "Abstract Noun + Gerundive",
        description: "The abstract 'ardor' (burning passion) with gerundive 'retinendae' (of retaining) presents Agrippina's motivation as desperate heat. The construction emphasises the compulsive nature of her power-lust.",
        effect: "Makes her desire for power seem like a consuming fire that drives her to any extreme, including incest."
    },
    
    "agrippinam-subject": {
        title: "Agrippinam",
        translation: "Agrippina",
        device: "Accusative Subject Placement",
        description: "Agrippina appears as the accusative subject of the indirect statement, making her the focal point of the scandal. Her name appears early, ensuring we know who the subject is.",
        effect: "Centres culpability on Agrippina from the start - she is the agent of corruption in Cluvius's version."
    },
    
    "potentiae-motive": {
        title: "potentiae",
        translation: "of power",
        device: "Genitive of Desire",
        description: "The genitive 'potentiae' depends on 'ardore retinendae' - her burning desire is specifically for political power, not maternal love or even lust.",
        effect: "Exposes the political calculation behind the sexual advance - this is about power retention, not passion."
    },
    
    "eo-usque": {
        title: "eo usque",
        translation: "so far",
        device: "Emphatic Degree",
        description: "The combination 'eo usque' (to such a point) emphasises the extremity of her behaviour. This prepares us for something beyond normal corruption.",
        effect: "Builds anticipation for an unprecedented scandal - even for Agrippina, this is going too far."
    },
    
    "provectam-metaphor": {
        title: "provectam",
        translation: "carried forward",
        device: "Metaphor of Motion",
        description: "'Provectam' (carried forward, advanced) suggests being swept along by forces beyond control. The passive form implies she's driven by her desires rather than driving them.",
        effect: "Makes Agrippina seem helplessly propelled by her own ambition, as if corruption has its own momentum."
    },
    
    "medio-diei": {
        title: "medio diei",
        translation: "in the middle of the day",
        device: "Temporal Emphasis",
        description: "Midday seduction violates Roman decorum - sexual activity belongs to night. The brazen daylight timing shows complete abandonment of shame.",
        effect: "Heightens the scandal through temporal transgression - not even darkness hides this shamelessness."
    },
    
    "cum-temporal": {
        title: "cum id temporis",
        translation: "when at that time",
        device: "Cum Temporal Clause",
        description: "The temporal clause with 'id temporis' (at that point of time) precisely locates when Agrippina struck - when Nero was most vulnerable.",
        effect: "Shows calculated timing - she chooses the moment of maximum weakness for her attack."
    },
    
    "vinum-epulas": {
        title: "per vinum et epulas",
        translation: "through wine and feasting",
        device: "Hendiadys",
        description: "Wine and food are presented as the dual means of corruption. The combination suggests decadent banquets where inhibitions dissolve.",
        effect: "Creates atmosphere of dissolute luxury where normal boundaries collapse."
    },
    
    "incalesceret-heat": {
        title: "incalesceret",
        translation: "was becoming heated",
        device: "Metaphor of Heat",
        description: "The verb suggests both physical warmth from wine and sexual arousal. The imperfect tense shows gradual heating up.",
        effect: "Links alcohol, temperature, and desire in a crescendo of lost control."
    },
    
    "offerret-se": {
        title: "offerret se",
        translation: "offered herself",
        device: "Reflexive Prostitution",
        description: "The reflexive 'se' with 'offerret' makes Agrippina the active agent of her own degradation - she presents herself as a sexual offering.",
        effect: "Emphasises deliberate self-prostitution rather than seduction - she makes herself the commodity."
    },
    
    "saepius-frequency": {
        title: "saepius",
        translation: "quite often",
        device: "Frequentative Comparative",
        description: "The comparative 'saepius' (more often/quite often) indicates repeated attempts, not a single moment of weakness.",
        effect: "Transforms this from an isolated incident into a campaign of seduction - persistence in perversion."
    },
    
    "temulento-drunk": {
        title: "temulento",
        translation: "to the drunken one",
        device: "Dative of Disadvantage",
        description: "'Temulentus' emphasises heavy intoxication. The dative shows Nero as the target of her advances when he's most vulnerable.",
        effect: "Adds predatory element - she exploits his drunkenness for her sexual assault."
    },
    
    "comptam-incesto": {
        title: "comptam et incesto paratam",
        translation: "adorned and ready for incest",
        device: "Paired Participles",
        description: "Two participles describe her preparation: 'comptam' (carefully arranged/adorned) shows premeditation, while 'incesto paratam' shockingly specifies the purpose.",
        effect: "Creates visceral image of deliberate preparation for the ultimate taboo - she dresses for incest."
    },
    
    "iamque-temporal": {
        title: "iamque",
        translation: "and already",
        device: "Temporal Acceleration",
        description: "'Iam' with '-que' shows rapid progression from attempt to action. Events are moving quickly toward catastrophe.",
        effect: "Creates urgency - the scandal is already in progress when intervention comes."
    },
    
    "lasciva-oscula": {
        title: "lasciva oscula",
        translation: "wanton kisses",
        device: "Alliterative Sensuality",
        description: "The adjective 'lasciva' (lustful, wanton) with 'oscula' creates a disturbing image of inappropriate maternal affection turned sexual.",
        effect: "Makes the physical reality visceral and disturbing - these are not motherly kisses."
    },
    
    "praenuntias-flagitii": {
        title: "praenuntias flagitii blanditias",
        translation: "caresses foretelling scandal",
        device: "Prophetic Imagery",
        description: "'Praenuntias' (announcing beforehand) makes the caresses into omens. 'Flagitii' (of disgrace) specifies what they prophesy.",
        effect: "The touches become harbingers of doom - physical signs predicting moral catastrophe."
    },
    
    "ablative-absolute-adnotantibus": {
        title: "adnotantibus proximis",
        translation: "with those closest noticing",
        device: "Ablative Absolute",
        description: "The ablative absolute shows concurrent action - courtiers are watching and understanding what's happening.",
        effect: "Creates witnesses to the scandal - this isn't private but observed corruption."
    },
    
    "seneca-advisor": {
        title: "Senecam",
        translation: "Seneca",
        device: "Named Authority",
        description: "Seneca appears as moral counterweight to corruption. As Nero's tutor and advisor, he represents philosophical wisdom against passion.",
        effect: "Introduces the voice of reason and philosophy attempting to combat base desire."
    },
    
    "contra-muliebres": {
        title: "contra muliebres inlecebras",
        translation: "against feminine enticements",
        device: "Gender Warfare",
        description: "'Muliebres inlecebras' (womanly allurements) presents the threat as specifically feminine. The preposition 'contra' makes this combat.",
        effect: "Frames the situation as gendered battle - masculine reason must fight feminine seduction."
    },
    
    "subsidium-femina": {
        title: "subsidium a femina",
        translation: "help from a woman",
        device: "Ironic Strategy",
        description: "The irony that Seneca seeks 'help from a woman' against 'womanly enticements' - fighting fire with fire.",
        effect: "Shows sophisticated understanding that only feminine influence can counter feminine manipulation."
    },
    
    "immissam-military": {
        title: "immissam",
        translation: "sent in",
        device: "Military Metaphor",
        description: "'Immissa' often describes troops sent into battle. Acte is deployed like a weapon against Agrippina.",
        effect: "Makes this domestic drama into military campaign - Acte is a soldier in the war for Nero's soul."
    },
    
    "acte-freedwoman": {
        title: "Acten libertam",
        translation: "Acte the freedwoman",
        device: "Social Status Marker",
        description: "Her status as 'liberta' (freedwoman) is emphasised - a former slave combats a noble mother, inverting social hierarchy.",
        effect: "Shows how corrupted the palace has become when freedwomen have more moral authority than patricians."
    },
    
    "simul-double": {
        title: "simul suo periculo et infamia Neronis",
        translation: "both by her danger and Nero's disgrace",
        device: "Double Motivation",
        description: "'Simul' (at the same time) shows Acte's twin concerns - self-preservation and protecting Nero's reputation.",
        effect: "Makes Acte's intervention both selfish and selfless - complex motivation for complex situation."
    },
    
    "anxia-worried": {
        title: "anxia",
        translation: "anxious",
        device: "Emotional State",
        description: "The adjective 'anxia' shows genuine worry, not just political calculation. This humanises Acte.",
        effect: "Creates emotional authenticity in contrast to Agrippina's cold political seduction."
    },
    
    "pervulgatum-incestum": {
        title: "pervulgatum esse incestum",
        translation: "incest was widely known",
        device: "Public Knowledge",
        description: "'Pervulgatum' (spread among the common people) shows the scandal has escaped the palace. The accusative-infinitive makes this reported speech.",
        effect: "Transforms private shame into public crisis - the damage to reputation is already done."
    },
    
    "ablative-absolute-gloriante": {
        title: "gloriante matre",
        translation: "with mother boasting",
        device: "Ablative Absolute - Cause",
        description: "The present participle 'gloriante' (boasting) in ablative absolute explains how the rumour spread - Agrippina herself bragged.",
        effect: "Makes Agrippina complicit in her own exposure - her pride in corruption becomes her downfall."
    },
    
    "toleraturos-milites": {
        title: "toleraturos milites",
        translation: "soldiers would tolerate",
        device: "Military Legitimacy",
        description: "The future participle with 'milites' makes military acceptance the ultimate arbiter of imperial power.",
        effect: "Shows that moral authority ultimately rests on military force - soldiers, not senators, determine legitimacy."
    },
    
    "profani-principis": {
        title: "profani principis",
        translation: "unholy emperor",
        device: "Religious Violation",
        description: "'Profanus' means outside sacred law - incest would make Nero religiously polluted and thus illegitimate.",
        effect: "Adds religious dimension to political crisis - incest violates divine as well as human law."
    },
    
    "fabius-alternative": {
        title: "Fabius Rusticus",
        translation: "Fabius Rusticus",
        device: "Alternative Source",
        description: "Introduction of second historian creates historiographical complexity. Fabius was Seneca's friend, explaining his different version.",
        effect: "Shows Tacitus weighing sources like a judge, though his preference is clear."
    },
    
    "non-agrippinae-neroni": {
        title: "non Agrippinae sed Neroni",
        translation: "not by Agrippina but by Nero",
        device: "Antithesis",
        description: "Sharp contrast reverses agency - in this version, Nero is the predator, not Agrippina.",
        effect: "Completely inverts the moral dynamic, showing how different sources can reshape the same scandal."
    },
    
    "cupitum-desired": {
        title: "cupitum",
        translation: "desired",
        device: "Passive Desire",
        description: "The perfect passive participle makes the incest something 'desired' rather than attempted - more psychological than physical.",
        effect: "Shifts focus from action to intention - the corruption lies in the desire itself."
    },
    
    "memorat-reports": {
        title: "memorat",
        translation: "records",
        device: "Historiographical Verb",
        description: "Like 'tradit,' 'memorat' is technical vocabulary for historical sources. Tacitus maintains scholarly distance.",
        effect: "Preserves the pretence of objective historical reporting despite clear bias."
    },
    
    "eiusdem-libertae": {
        title: "eiusdemque libertae",
        translation: "of the same freedwoman",
        device: "Emphatic Identification",
        description: "'Eiusdem' (the same) emphasises that Acte plays the heroic role in both versions - she's the consistent moral agent.",
        effect: "Makes Acte the reliable constant in conflicting narratives - the freedwoman as moral anchor."
    },
    
    "astu-cleverness": {
        title: "astu",
        translation: "by cleverness",
        device: "Intellectual Solution",
        description: "'Astus' implies cunning intelligence rather than force. Acte defeats corruption through wit.",
        effect: "Shows brains defeating base desire - intelligence as the antidote to passion."
    },
    
    "disiectum-scattered": {
        title: "disiectum",
        translation: "scattered/ruined",
        device: "Violent Metaphor",
        description: "'Disiectum' suggests violent scattering or breaking apart. The plot is shattered rather than simply stopped.",
        effect: "Makes Acte's intervention forceful and complete - total destruction of the incestuous plan."
    },
    
    "eadem-ceteri": {
        title: "eadem ceteri quoque auctores",
        translation: "the same things other authors too",
        device: "Consensus Building",
        description: "Tacitus notes that other sources agree with Cluvius, building weight of authority for this version.",
        effect: "Creates illusion of historical consensus whilst actually showing Tacitus's selectivity."
    },
    
    "prodidere-handed": {
        title: "prodidere",
        translation: "handed down",
        device: "Historical Transmission",
        description: "'Prodere' means to bring forth or transmit. The perfect tense shows completed historical tradition.",
        effect: "Makes the scandal part of established historical record, not mere gossip."
    },
    
    "fama-inclinat": {
        title: "fama huc inclinat",
        translation: "rumour inclines this way",
        device: "Personification",
        description: "Fame/rumour is personified as 'leaning' toward Cluvius's version. Popular opinion becomes a judge.",
        effect: "Makes public opinion seem like rational arbiter, though rumour often prefers the most scandalous version."
    },
    
    "seu-alternatives": {
        title: "seu... seu",
        translation: "whether... or",
        device: "Alternative Explanations",
        description: "The double 'seu' presents two explanations for why Cluvius's version is believable - either it happened or it fits her character.",
        effect: "Appears balanced whilst actually damning Agrippina either way - guilty in fact or in character."
    },
    
    "tantum-immanitatis": {
        title: "tantum immanitatis",
        translation: "such great monstrosity",
        device: "Genitive of Quantity",
        description: "'Tantum' (so much) with genitive 'immanitatis' (of monstrousness) emphasises the enormous scale of the moral violation.",
        effect: "Makes the incest seem inhuman in scope - beyond normal human corruption."
    },
    
    "immanitatis-monstrosity": {
        title: "immanitatis",
        translation: "monstrosity",
        device: "Dehumanising Vocabulary",
        description: "'Immanitas' suggests savage, inhuman behaviour - bestial rather than merely immoral.",
        effect: "Places Agrippina outside human moral categories - she becomes monstrous."
    },
    
    "credibilior-comparative": {
        title: "credibilior",
        translation: "more believable",
        device: "Comparative Credibility",
        description: "The comparative form suggests degrees of believability - this is about what seems plausible given her character.",
        effect: "Makes character assassination seem like logical deduction - her past makes any depravity credible."
    },
    
    "novae-libidinis": {
        title: "novae libidinis",
        translation: "of new lust",
        device: "Ironic Novelty",
        description: "'Nova' (new) is ironic given Agrippina's extensive sexual history - incest would just be the latest innovation.",
        effect: "Suggests she needs ever more extreme acts to satisfy her corruption - normal vice no longer suffices."
    },
    
    "quae-relative": {
        title: "quae",
        translation: "who",
        device: "Relative Connection",
        description: "The relative pronoun connects the incest allegation to Agrippina's sexual history, making past predict present.",
        effect: "Creates logical flow from past behaviour to present scandal - character as destiny."
    },
    
    "puellaribus-annis": {
        title: "puellaribus annis",
        translation: "in girlhood years",
        device: "Temporal Corruption",
        description: "Emphasises early corruption - even as a young girl ('puellaris'), she was already sexually scheming.",
        effect: "Shows corruption as lifelong pattern, not late development - she was always this way."
    },
    
    "stuprum-adultery": {
        title: "stuprum",
        translation: "debauchery/adultery",
        device: "Legal-Moral Term",
        description: "'Stuprum' is the legal term for illicit sex. Its use makes this a criminal as well as moral charge.",
        effect: "Frames her behaviour in legal terms - these are crimes, not just sins."
    },
    
    "lepidus-affair": {
        title: "Lepido",
        translation: "with Lepidus",
        device: "Historical Scandal",
        description: "Marcus Lepidus was Agrippina's brother-in-law. This affair was politically motivated conspiracy as much as sex.",
        effect: "Shows sex as political weapon from the beginning - she never separated desire from power."
    },
    
    "spe-dominationis": {
        title: "spe dominationis",
        translation: "in hope of domination",
        device: "Motivational Phrase",
        description: "The ablative 'spe' with genitive reveals motivation - sex was always about power ('dominatio').",
        effect: "Exposes the political calculation behind every sexual act - body as route to tyranny."
    },
    
    "pari-cupidine": {
        title: "pari cupidine",
        translation: "with equal desire",
        device: "Parallel Degradation",
        description: "'Pari' (equal) shows each affair was equally degrading - no hierarchy in her corruptions.",
        effect: "Suggests insatiable appetite that never diminishes - constant hunger for power through sex."
    },
    
    "libita-whims": {
        title: "libita",
        translation: "whims/pleasures",
        device: "Slavish Submission",
        description: "'Libita' implies capricious desires. She submitted even to a freedman's arbitrary wishes.",
        effect: "Shows complete abandonment of aristocratic dignity - she'll submit to anyone for power."
    },
    
    "pallas-freedman": {
        title: "Pallantis",
        translation: "of Pallas",
        device: "Social Inversion",
        description: "Pallas was a freedman (former slave) yet Agrippina, a patrician, prostituted herself to him for influence.",
        effect: "Demonstrates how far she'll sink - aristocratic birth means nothing against ambition."
    },
    
    "provoluta-degradation": {
        title: "provoluta",
        translation: "prostrated/rolled forward",
        device: "Physical Degradation",
        description: "The verb suggests rolling in dirt or prostrating oneself - complete physical abasement.",
        effect: "Creates visceral image of self-degradation - she literally lowers herself for power."
    },
    
    "exercita-practiced": {
        title: "exercita",
        translation: "practiced/trained",
        device: "Training Metaphor",
        description: "'Exercita' suggests practice and training - she's become expert in disgrace through repetition.",
        effect: "Makes corruption a skill developed through practice - she's a professional at depravity."
    },
    
    "flagitium-disgrace": {
        title: "flagitium",
        translation: "disgrace",
        device: "Moral Summation",
        description: "'Flagitium' encompasses all forms of disgraceful behaviour - a comprehensive term for moral pollution.",
        effect: "Summarises her entire life as training in disgrace - she's graduated to the ultimate corruption."
    },
    
    "patrui-nuptiis": {
        title: "patrui nuptiis",
        translation: "by marriage to uncle",
        device: "Climactic Incest",
        description: "Marriage to her uncle Claudius was already incestuous by Roman law - this prepared her for mother-son incest.",
        effect: "Shows progression in incestuous relationships - uncle to son is the logical next step in her corruption."
    }
};
