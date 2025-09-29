// Analysis data for Nero Enters Public Life Chapter 41a interactive text
const textData = {
    "ablative-absolute-consuls": {
        title: "Ti. Claudio quintum... consulibus",
        translation: "In the consulships of Tiberius Claudius for the fifth time and Servius Cornelius Orfitus",
        device: "Ablative Absolute - Historical Dating",
        description: "Tacitus uses the formal ablative absolute construction to date this pivotal moment. The emphasis on Claudius' fifth consulship underscores his long reign and makes the transfer of power to Nero seem more significant.",
        effect: "Provides historical gravitas whilst subtly highlighting Claudius' authority - authority that is about to be undermined as his adopted son is pushed forward at the expense of his biological son."
    },

    "virilis-toga": {
        title: "virilis toga",
        translation: "manly toga",
        device: "Cultural Symbol - Coming of Age",
        description: "The toga virilis marked a Roman boy's transition to manhood, normally around age 16-17. This was a crucial rite of passage that signalled readiness for public life and military service.",
        effect: "By mentioning this ceremony explicitly, Tacitus draws attention to its significance whilst preparing to reveal its manipulation - the timing is being rushed for political purposes."
    },

    "maturata-rushed": {
        title: "maturata",
        translation: "was accelerated, was hastened",
        device: "Loaded Vocabulary - Political Manipulation",
        description: "The word 'maturata' suggests artificial acceleration and premature advancement. Tacitus signals that the natural order of things is being violated for political expediency.",
        effect: "Immediately reveals the manipulation behind Nero's promotion, suggesting that he is not genuinely ready for power but is being thrust forward artificially."
    },

    "purpose-clause": {
        title: "quo... habilis videretur",
        translation: "so that he might seem suitable to undertake a public role",
        device: "Purpose Clause with Subjunctive",
        description: "The subjunctive mood emphasises intention and planning. More importantly, 'videretur' (might seem) rather than 'esset' (might be) suggests appearance over reality - Nero needs to appear ready, not actually be ready.",
        effect: "The emphasis on seeming rather than being reveals the superficiality of Nero's elevation - it's all about optics and manipulation of public perception."
    },

    "adulationibus-criticism": {
        title: "adulationibus",
        translation: "flattering suggestions, flatteries",
        device: "Pejorative Diction",
        description: "Tacitus characteristically describes senatorial proposals as 'adulationes' (flatteries) rather than using neutral terms like 'rogationes' (proposals). This reveals his contempt for the Senate's servility.",
        effect: "Exposes the corrupt relationship between emperor and Senate, showing how the Senate debases itself through excessive flattery rather than providing genuine counsel."
    },

    "result-clause": {
        title: "ut vicesimo aetatis anno consulatum Nero iniret",
        translation: "that Nero should enter upon the consulship in the 20th year of his life",
        device: "Result Clause - Highlighting Irregularity",
        description: "The minimum age for consul was traditionally 42 (later reduced to around 30 under the Empire). At 20, Nero would be extraordinarily young for this office, highlighting how traditional norms are being discarded.",
        effect: "Emphasises the radical nature of Nero's promotion and the complete abandonment of Republican precedent in favour of dynastic ambition."
    },

    "designatus-title": {
        title: "designatus",
        translation: "designated, appointed",
        device: "Technical Political Terminology",
        description: "Being 'consul designatus' meant being officially designated for the consulship before actually holding office. This gave Nero official status and authority even before reaching the minimum age.",
        effect: "Shows how political machinery is being manipulated to grant Nero power immediately whilst maintaining a veneer of constitutional propriety."
    },

    "proconsular-power": {
        title: "proconsulare imperium",
        translation: "proconsular power",
        device: "Constitutional Authority",
        description: "Proconsular imperium granted military and administrative authority over provinces. This was typically held by senior magistrates who had completed a consulship, not teenagers.",
        effect: "Reveals the extraordinary and unprecedented nature of the powers being granted to Nero, showing how traditional career progression is being completely bypassed."
    },

    "princeps-iuventutis": {
        title: "princeps iuventutis",
        translation: "leader of the youth",
        device: "Traditional Honorific Title",
        description: "This title had been given to Augustus' grandsons Gaius and Lucius Caesar, marking them as heirs apparent. By giving it to Nero, Claudius signals him as the designated successor.",
        effect: "Establishes Nero's position as heir whilst evoking the Augustan precedent, lending historical legitimacy to the succession plan at Britannicus' expense."
    },

    "donativum-military": {
        title: "donativum militi",
        translation: "a donative to the soldiers",
        device: "Political Vocabulary - Military Loyalty",
        description: "A 'donativum' was a cash payment to soldiers, often used to secure their loyalty during succession. This reveals the calculated effort to bind the military to Nero.",
        effect: "Exposes the transactional nature of imperial power - loyalty must be bought with cash, and Nero's succession depends on military support secured through bribes."
    },

    "congiarium-plebs": {
        title: "congiarium plebei",
        translation: "a handout to the plebs",
        device: "Political Vocabulary - Public Popularity",
        description: "A 'congiarium' was a distribution of money or goods to Roman citizens. Like the military donative, this was a calculated political move to secure popular support for Nero.",
        effect: "Reveals the orchestrated campaign to build Nero's popularity through material benefits rather than genuine merit or achievement."
    },

    "relative-purpose": {
        title: "quod adquirendis vulgi studiis edebatur",
        translation: "which was provided in order to win the goodwill of the mob",
        device: "Relative Clause of Purpose",
        description: "Tacitus explicitly states the manipulative purpose behind the games. The phrase 'vulgi studiis' (goodwill of the mob) shows slight contempt for both the masses and those who pander to them.",
        effect: "Strips away any pretence of genuine celebration, revealing the games as calculated political propaganda designed to manipulate public opinion."
    },

    "britannicus-praetexta": {
        title: "Britannicus in praetexta",
        translation: "Britannicus in the toga praetexta",
        device: "Symbolic Contrast - Visual Rhetoric",
        description: "The toga praetexta (worn by boys before coming of age) marks Britannicus as still a child, not yet an adult citizen. This visual symbol publicly demonstrates his inferior status.",
        effect: "Creates a powerful visual contrast that publicly humiliates Britannicus by displaying him as a child whilst Nero appears as a conquering hero."
    },

    "nero-triumphalis": {
        title: "Nero triumphali veste",
        translation: "Nero in triumphal clothing",
        device: "Symbolic Contrast - Imperial Imagery",
        description: "Triumphal dress was reserved for victorious generals celebrating a triumph. By dressing Nero thus, the staging presents him as a military victor despite having won no battles.",
        effect: "The contrast with Britannicus' childish dress could not be starker - Nero is presented as an imperial victor whilst the legitimate heir is reduced to boyish irrelevance."
    },

    "jussive-subjunctive": {
        title: "spectaret populus",
        translation: "let the people watch",
        device: "Jussive Subjunctive - Authorial Commentary",
        description: "Tacitus shifts to the subjunctive mood to reveal the intended purpose behind the spectacle. This grammatical construction exposes the manipulative staging of the event.",
        effect: "Reveals that every detail was carefully choreographed as political theatre, designed to shape public perception and legitimise the succession."
    },

    "demonstrative-contrast": {
        title: "hunc... illum",
        translation: "the latter... the former",
        device: "Demonstrative Pronouns - Binary Opposition",
        description: "The demonstratives 'hunc' and 'illum' create a stark binary opposition, forcing the viewer to choose between two mutually exclusive futures. The rhetorical structure eliminates any middle ground.",
        effect: "Creates an artificial but powerful dichotomy - imperial glory versus childish insignificance - that manipulates the audience into accepting Nero as the inevitable choice."
    },

    "fortunam-fate": {
        title: "fortunam utriusque",
        translation: "the fortune of both",
        device: "Dramatic Irony - Prophetic Language",
        description: "The word 'fortuna' carries heavy implications in Roman thought - it suggests both fate and luck. Tacitus allows readers who know the outcome to recognise the tragic irony of this staged spectacle.",
        effect: "Creates dramatic irony for knowledgeable readers who understand that this carefully staged propaganda will ultimately lead to Britannicus' murder and Nero's tyrannical reign."
    }
};
