// Analysis data for The Death of Claudius Chapter 26 interactive text
const textData = {
    "quaesitiore-irony": {
        title: "quaesitiore in Domitium adulatione",
        translation: "with more elaborate flattery of Domitius",
        device: "Ironic Commentary",
        description: "The word 'quaesitiore' ('more carefully sought/flattering') implies the Senate had to search for compliments for Nero, suggesting insincerity or lack of substance. Tacitus frequently adds pointed comments to colour events with his own irony.",
        effect: "Reveals the artificiality of the Senate's praise for Nero, highlighting their political opportunism and the contrast between genuine respect for Claudius and manufactured adulation for his successor."
    },

    "legal-language": {
        title: "rogataque lex",
        translation: "and a law was proposed",
        device: "Formal Legal Language",
        description: "Tacitus mimics bureaucratic phrasing to highlight the manipulation of legal process for political gain. The technical terminology masks what is essentially a dynastic power grab.",
        effect: "Creates ironic distance by using official language to describe an essentially corrupt process, showing how legal machinery can be manipulated for personal ambition."
    },

    "claudian-family": {
        title: "familiam Claudiam",
        translation: "the Claudian family",
        device: "Word Order and Emphasis",
        description: "The placement emphasises Nero's absorption into the imperial family not through birth, but through legal fiction. The formal language disguises the artificiality of the arrangement.",
        effect: "Highlights how political necessity, not natural succession, drives imperial adoption, undermining traditional concepts of family and legitimacy."
    },

    "nero-name": {
        title: "nomen Neronis",
        translation: "the name of Nero",
        device: "Character Development",
        description: "The formal adoption of the name 'Nero' marks a crucial transformation - Domitius becomes the future emperor through legal manipulation rather than merit or natural succession.",
        effect: "Signals the beginning of Nero's official elevation whilst subtly questioning the legitimacy of his rise to power through artificial means."
    },

    "historic-present": {
        title: "augetur",
        translation: "is honoured/increased",
        device: "Historic Present",
        description: "Tacitus breaks tense for emphasis, moving from past narrative to present tense to give a sense of immediacy or significance to Agrippina's elevation.",
        effect: "Creates dramatic emphasis on this moment of Agrippina's triumph, making her acquisition of the Augusta title seem more vivid and significant."
    },

    "agrippina-augusta": {
        title: "Agrippina",
        translation: "Agrippina",
        device: "Character Analysis",
        description: "Agrippina's elevation to Augusta status represents the peak of her influence and ambition, rivalling the power once held by Livia, wife of Augustus.",
        effect: "Marks Agrippina's ultimate achievement of imperial status, whilst Tacitus' tone hints at her grasping for legitimacy and power beyond traditional boundaries."
    },

    "augusta-title": {
        title: "cognomento Augustae",
        translation: "with the title Augusta",
        device: "Historical Allusion",
        description: "The title Augusta was once given to Livia, wife of Augustus. Tacitus signals Agrippina's attempt to rival Livia's power and elevate her public status to unprecedented heights.",
        effect: "Shows Agrippina reaching the pinnacle of female imperial power whilst suggesting she may be overreaching traditional boundaries of influence."
    },

    "litotes-pity": {
        title: "nemo adeo expers misericordiae",
        translation: "no one so lacking in pity",
        device: "Litotes",
        description: "A double negative used to emphasise universal sympathy for Britannicus. This rhetorical device strengthens the assertion by appearing to understate it.",
        effect: "Powerfully conveys the widespread public sympathy for Britannicus whilst highlighting the injustice of his situation through understated rhetoric."
    },

    "britannicus-sympathy": {
        title: "Britannici fortuna",
        translation: "Britannicus' misfortune",
        device: "Pathos and Character Analysis",
        description: "Tacitus emphasises the tragic fate of the legitimate heir, generating sympathy for Britannicus whilst implicitly criticising the political machinations that displaced him.",
        effect: "Creates emotional resonance with readers, positioning Britannicus as a tragic victim of imperial politics and making Nero's elevation seem less legitimate."
    },

    "assonance-sorrow": {
        title: "misericordiae... fortuna maerore",
        translation: "pity... fortune... sorrow",
        device: "Assonance",
        description: "The repeated vowel sounds create a melancholy harmony that heightens the emotional tone, reflecting the public's sorrowful reaction to Britannicus' fall from favour.",
        effect: "The musical quality of the language reinforces the emotional content, making the reader feel the weight of public sympathy for the displaced prince."
    },

    "desolatus-poetry": {
        title: "desolatus",
        translation: "abandoned",
        device: "Poetic Diction",
        description: "This word is borrowed from Virgil, raising the emotional level and pathos of Britannicus' isolation. The poetic register elevates the tragedy of his situation.",
        effect: "Creates a sense of epic tragedy around Britannicus' abandonment, comparing his fall to the great tragic figures of literature."
    },

    "perintempestiva-compound": {
        title: "perintempestiva",
        translation: "very untimely",
        device: "Heavy Compound Word",
        description: "This intensifying compound word emphasises the complete inappropriateness of Agrippina's behaviour. Tacitus borrows a Virgilian tone for stylistic force.",
        effect: "The weight of the word mirrors the heaviness of Agrippina's false kindness, making her attempts at reconciliation seem grotesquely inappropriate."
    },

    "novercae-stepmother": {
        title: "novercae",
        translation: "stepmother",
        device: "Loaded Literary Term",
        description: "In Roman literature, 'noverca' (stepmother) often connotes cruelty and deceit. The word carries negative associations that feed anti-Agrippina sentiment.",
        effect: "Immediately prejudices the reader against Agrippina by invoking the stereotype of the wicked stepmother, making her actions seem inherently suspicious."
    },

    "ludibrium-irony": {
        title: "in ludibrium vertebat",
        translation: "turned into a joke",
        device: "Dramatic Irony",
        description: "Shows Britannicus' wit and awareness as he mocks Agrippina's false kindness. The verb 'vertebat' suggests active, deliberate mockery rather than passive acceptance.",
        effect: "Presents Britannicus as intelligent and perceptive, able to see through political manipulation, which makes his ultimate fate more tragic."
    },

    "segnem-emphasis": {
        title: "segnem",
        translation: "sluggish",
        device: "Emphatic Word Order",
        description: "Placing 'segnem' (sluggish/stupid) first in the clause emphasises what Britannicus was not - highlighting his capabilities by denying their opposite.",
        effect: "Strongly asserts Britannicus' intelligence and potential by emphatically rejecting suggestions of weakness or stupidity."
    },

    "ferunt-hearsay": {
        title: "ferunt",
        translation: "they say",
        device: "Indirect Statement",
        description: "Tacitus distances himself from the statement about Britannicus' character whilst still endorsing it subtly. This creates objectivity whilst allowing the praise to stand.",
        effect: "Allows Tacitus to praise Britannicus whilst maintaining historical objectivity, suggesting widespread recognition of the prince's abilities."
    },

    "variatio-sive": {
        title: "sive verum, seu",
        translation: "whether it was true, or",
        device: "Variatio",
        description: "Classical rhetorical variation using 'sive... seu' to present two contrasting explanations without stating which is correct. This creates balanced uncertainty.",
        effect: "Reflects the ambiguity of historical memory and the difficulty of assessing Britannicus' true capabilities when he was never given a chance to prove himself."
    },

    "oxymoron-fama": {
        title: "famam sine experimento",
        translation: "reputation without proof",
        device: "Oxymoron",
        description: "The contradiction highlights tragic irony - Britannicus was never given the chance to prove himself, yet still retained his good reputation. The phrase encapsulates his wasted potential.",
        effect: "Powerfully conveys the tragedy of Britannicus' situation - respected for potential that would never be tested, making his displacement seem even more unjust."
    }
};
