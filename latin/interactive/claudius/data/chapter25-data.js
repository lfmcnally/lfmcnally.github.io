// Analysis data for The Death of Claudius Chapter 25 interactive text
const textData = {
    "annalistic-dating": {
        title: "C. Antistio M. Suillio consulibus",
        translation: "In the consulship of C. Antistius and M. Suillius",
        device: "Annalistic Dating",
        description: "Establishes the year (AD 50) and grounds the narrative in formal Roman historical tradition. This dating formula was a conventional opening for Roman historical writing, lending authority and chronological precision to the account.",
        effect: "Creates a sense of official historical record whilst immediately establishing the formal, archival tone that Tacitus uses to present this momentous political decision."
    },

    "adoptio-keyword": {
        title: "adoptio",
        translation: "adoption",
        device: "Key Thematic Word",
        description: "The central legal and political act around which the entire passage revolves. This single word encapsulates the transfer of imperial succession from Britannicus to Nero.",
        effect: "Immediately signals to the reader the gravity of what follows - this adoption will reshape the empire and seal Britannicus' fate."
    },

    "domitius-nero": {
        title: "Domitium",
        translation: "Domitius (Nero)",
        device: "Character Reference",
        description: "Tacitus deliberately uses Nero's birth name rather than his adopted imperial name, subtly emphasising his status as an outsider to the Claudian family.",
        effect: "Reminds readers that this 'son' is actually an interloper, making Claudius' preference for him over his biological son Britannicus seem more unnatural."
    },

    "passive-agent": {
        title: "festinatur auctoritate Pallantis",
        translation: "was hurried along on the authority of Pallas",
        device: "Passive Voice with Indirect Agent",
        description: "The passive construction with ablative of agent suggests that Claudius is not in control of this decision. Pallas, a freedman, is pulling the strings behind imperial policy.",
        effect: "Undermines Claudius' authority by showing that a former slave is orchestrating major dynastic decisions, highlighting the emperor's weakness and manipulation."
    },

    "agrippina-control": {
        title: "Agrippinae",
        translation: "to Agrippina",
        device: "Character Analysis",
        description: "Agrippina appears as the puppet master behind Pallas, who is himself manipulating Claudius. The dative case shows her as the beneficiary of Pallas' actions.",
        effect: "Establishes the power hierarchy: Agrippina controls Pallas, who controls Claudius, revealing the emperor as the weakest figure in his own court."
    },

    "stupro-derogatory": {
        title: "stupro eius inligatus",
        translation: "bound by adultery with her",
        device: "Derogatory Language",
        description: "The word 'stupro' carries connotations of disgrace and moral corruption. 'Inligatus' suggests being trapped or ensnared, painting Pallas as morally compromised and politically enslaved.",
        effect: "Presents Pallas not as a powerful manipulator but as a corrupt tool, completely controlled by Agrippina through sexual scandal."
    },

    "claudius-manipulation": {
        title: "Claudium",
        translation: "Claudius",
        device: "Character Portrayal",
        description: "Claudius appears as the object of manipulation rather than the subject of imperial decision-making. He is 'urged' and 'pressed' rather than deciding independently.",
        effect: "Diminishes the emperor's dignity and authority, presenting him as a weak figure who can be easily swayed by the arguments of freedmen and women."
    },

    "chiasmus-duty": {
        title: "consuleret rei publicae, Britannici pueritiam",
        translation: "consider the interests of the state, the boyhood of Britannicus",
        device: "Chiasmus",
        description: "The balanced structure (verb-object, object-noun) creates a chiastic pattern that balances duty to state with duty to family, highlighting Claudius' supposed dilemma.",
        effect: "The rhetorical balance makes Pallas' argument appear reasonable and well-structured, whilst actually concealing the manipulation behind elegant persuasion."
    },

    "military-metaphor": {
        title: "circumdaret robore",
        translation: "surround with strength",
        device: "Military Metaphor",
        description: "'Circumdaret' is a military term meaning to surround or encircle. Combined with 'robore' (strength/oak), it suggests Britannicus needs defensive protection.",
        effect: "Implies that Britannicus is vulnerable and under siege, requiring military-style protection - ironically foreshadowing how Nero will eliminate rather than protect him."
    },

    "augustus-exemplum": {
        title: "divum Augustum",
        translation: "the divine Augustus",
        device: "Historical Exemplum",
        description: "Reference to Augustus provides historical precedent and divine authority for the adoption. The epithet 'divus' emphasises Augustus' deified status and unquestionable authority.",
        effect: "Lends legitimacy to Nero's adoption by comparing it to Augustus' successful use of adoption, making Claudius' decision appear historically justified."
    },

    "chiasmus-augustus": {
        title: "nepotibus subnixum, viguisse privignos",
        translation: "relying on grandsons, stepsons flourished",
        device: "Chiasmus",
        description: "The chiastic structure (noun-verb, verb-noun) contrasts natural descendants with adopted heirs, justifying the preferment of stepsons over biological relatives.",
        effect: "The balanced rhetoric makes the unnatural seem natural, persuasively arguing that adoption can be more successful than blood succession."
    },

    "tiberius-exemplum": {
        title: "Tiberio",
        translation: "by Tiberius",
        device: "Historical Exemplum",
        description: "Another precedent citing Tiberius' adoption of Germanicus, providing a second imperial example to strengthen the argument for Nero's adoption.",
        effect: "Creates a pattern of imperial adoptions, making Claudius' decision appear as part of established imperial tradition rather than unprecedented manipulation."
    },

    "super-propriam": {
        title: "super propriam stirpem",
        translation: "over his own offspring",
        device: "Juxtaposition and Contrast",
        description: "The preposition 'super' (over/above) emphasises the preferment of an adopted son over biological children. 'Propria stirps' stresses the unnaturalness of this choice.",
        effect: "Highlights the shocking nature of preferring adopted children over one's own blood, making Claudius' similar choice seem more acceptable by historical precedent."
    },

    "military-accingeret": {
        title: "accingeret",
        translation: "should arm himself",
        device: "Military Metaphor",
        description: "From 'accingere' meaning to gird oneself with a sword or prepare for battle. The reflexive form suggests Claudius must prepare himself for the challenges of rule.",
        effect: "Creates urgency and suggests that rule is warfare requiring military preparation, making the need for a strong heir seem immediate and practical."
    },

    "alliteration-curarum": {
        title: "curarum capessituro",
        translation: "who would take on the cares",
        device: "Alliteration",
        description: "The repeated 'c' sounds create rhythm and emphasis, drawing attention to the burdens of imperial administration that need to be shared.",
        effect: "The sound pattern emphasises the weight of imperial responsibility, making the argument for sharing power appear reasonable and necessary."
    },

    "temporal-precision": {
        title: "triennio",
        translation: "by three years",
        device: "Precise Temporal Detail",
        description: "The specific age difference adds factual authority to the narrative whilst subtly justifying the decision based on Nero's maturity advantage over Britannicus.",
        effect: "The precision lends credibility to the account whilst providing rational justification for choosing the older candidate, masking the political manipulation."
    },

    "domitium-filio": {
        title: "Domitium filio anteponit",
        translation: "he preferred Domitius to his son",
        device: "Juxtaposition and Contrast",
        description: "The direct juxtaposition of 'Domitium' and 'filio' emphasises the shocking nature of preferring a stepson over one's biological child.",
        effect: "Highlights the unnaturalness of Claudius' choice, emphasising how thoroughly he has been manipulated into acting against natural parental instincts."
    },

    "liberto-irony": {
        title: "eundem in quem a liberto acceperat modum",
        translation: "in the same manner as he had received from his freedman",
        device: "Irony and Imperial Degradation",
        description: "The emperor delivers a speech to the Senate using the exact words provided by a freedman (Pallas). The lexical choice 'liberto' emphasises the social degradation.",
        effect: "Devastatingly undermines Claudius' dignity - the emperor of Rome is reduced to parroting a slave's words to the Senate, showing complete loss of imperial authority."
    },

    "periti-authority": {
        title: "periti",
        translation: "experts",
        device: "Appeal to Authority",
        description: "Tacitus invokes the opinion of learned authorities to provide weight to the criticism of Claudius' unprecedented decision, suggesting widespread elite disapproval.",
        effect: "Adds scholarly and traditional weight against Claudius' decision, implying that knowledgeable Romans recognised the adoption as a dangerous break with tradition."
    },

    "patricios-claudios": {
        title: "patricios Claudios",
        translation: "the patrician Claudians",
        device: "Aristocratic Emphasis",
        description: "The adjective 'patricios' emphasises the ancient noble status of the Claudian family, highlighting the significance of breaking their unbroken bloodline.",
        effect: "Stresses the magnitude of Claudius' decision - he is the first to contaminate an ancient patrician lineage, adding gravity to his betrayal of family tradition."
    },

    "atto-clauso": {
        title: "Atto Clauso",
        translation: "Attus Clausus",
        device: "Ancient Lineage",
        description: "Reference to the legendary founder of the Claudian family (6th century BC) emphasises the incredible antiquity and continuity of the bloodline that Claudius is breaking.",
        effect: "The reference to the family's ancient origins makes Claudius' adoption appear as a betrayal of centuries of tradition, adding historical weight to the criticism."
    },

    "continuos-duravisse": {
        title: "continuos duravisse",
        translation: "had lasted as an unbroken line",
        device: "Emphasis on Continuity",
        description: "'Continuos' emphasises the unbroken nature of the succession whilst 'duravisse' suggests strength and endurance through centuries, now potentially ending.",
        effect: "The language of strength and continuity makes Claudius' decision appear as a catastrophic break with the past, potentially ending centuries of family honour and tradition."
    }
};
