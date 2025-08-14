// Analysis data for Tacitus Annals 14.1 interactive text
const textData = {
    "ablative-absolute": {
        title: "Gaio Vipstano C. Fonteio consulibus",
        translation: "In the consulships of Gaius Vipstanus and C. Fonteius",
        device: "Ablative Absolute",
        description: "Tacitus opens with a traditional Roman dating formula using the ablative absolute construction, establishing historical context whilst maintaining the annalistic tradition.",
        effect: "Creates an official, documentary tone that contrasts sharply with the sordid domestic drama that follows, emphasising the gap between public dignity and private corruption."
    },
    
    "diu-meditatum": {
        title: "diu meditatum",
        translation: "long contemplated",
        device: "Temporal Emphasis",
        description: "The juxtaposition of 'diu' (for a long time) with 'meditatum' (contemplated) emphasises the premeditated nature of the crime, showing this was not an impulsive act.",
        effect: "Establishes Nero's calculated malevolence from the opening, whilst the delayed revelation of the crime's nature creates suspense."
    },
    
    "scelus-word": {
        title: "scelus",
        translation: "crime",
        device: "Loaded Vocabulary",
        description: "Tacitus uses the morally charged term 'scelus' rather than a neutral word like 'factum', immediately condemning the action before revealing what it is.",
        effect: "The historian's moral judgement is embedded in the vocabulary choice, guiding the reader's interpretation before the facts are presented."
    },
    
    "vetustate-imperii": {
        title: "vetustate imperii",
        translation: "duration of his power",
        device: "Causal Analysis",
        description: "The phrase suggests that length of rule breeds corruption, a recurring theme in Tacitus about how absolute power degrades character over time.",
        effect: "Implies that tyranny is progressive rather than innate, showing how unchecked power inevitably corrupts even those who might have begun well."
    },
    
    "audacia-nero": {
        title: "audacia",
        translation: "daring",
        device: "Character Development",
        description: "The term 'audacia' (boldness/recklessness) charts Nero's moral decline - what might once have been courage has become criminal rashness.",
        effect: "Shows how power transforms virtues into vices, as confidence becomes arrogance and then murderous boldness."
    },
    
    "flagrantior-in-dies": {
        title: "flagrantior in dies",
        translation: "daily more ardent",
        device: "Metaphorical Intensification",
        description: "The comparative 'flagrantior' (more burning) uses fire imagery to describe passion, whilst 'in dies' (day by day) emphasises gradual escalation.",
        effect: "Creates a sense of inexorable momentum towards disaster, with passion as a destructive fire that grows beyond control."
    },
    
    "amore-poppaeae": {
        title: "amore Poppaeae",
        translation: "love for Poppaea",
        device: "Ironic Word Choice",
        description: "Tacitus uses 'amor' for what is clearly destructive lust, ironically applying the noble term to a relationship that will lead to matricide.",
        effect: "The perversion of love into a motive for murder highlights the moral inversion at Nero's court."
    },
    
    "matrimonium-discidium": {
        title: "matrimonium et discidium",
        translation: "marriage and divorce",
        device: "Antithetical Pairing",
        description: "The juxtaposition of 'matrimonium' (marriage) and 'discidium' (divorce) encapsulates Poppaea's dual agenda in a balanced phrase.",
        effect: "The pairing shows how destruction (divorce) is inseparable from creation (marriage) in this corrupt relationship."
    },
    
    "incolumi-agrippina": {
        title: "incolumi Agrippina",
        translation: "while Agrippina was unharmed",
        device: "Ablative Absolute with Threat",
        description: "The participle 'incolumi' (unharmed/safe) is ominous in context, implying that Agrippina's safety is the obstacle to be removed.",
        effect: "Creates dramatic irony as the reader understands that Agrippina's 'safety' is precisely what is threatened."
    },
    
    "crebris-criminationibus": {
        title: "crebris criminationibus",
        translation: "with frequent accusations",
        device: "Alliteration",
        description: "The harsh 'cr' sounds in 'crebris criminationibus' create an aggressive, grating effect that mirrors Poppaea's persistent nagging.",
        effect: "The sound pattern reinforces the sense of relentless verbal assault, making the reader feel the wearing effect of constant criticism."
    },
    
    "per-facetias": {
        title: "per facetias",
        translation: "in jest",
        device: "Manipulative Rhetoric",
        description: "Poppaea alternates between serious accusations and jest, a classic manipulation technique that keeps the victim off-balance.",
        effect: "Shows Poppaea's psychological sophistication - she can retreat behind humour if challenged whilst still planting poisonous ideas."
    },
    
    "pupillum-insult": {
        title: "pupillum",
        translation: "ward",
        device: "Emasculating Insult",
        description: "Calling the emperor a 'pupillus' (ward/minor) attacks Nero's masculinity and autonomy, the two things he most values.",
        effect: "This calculated insult strikes at Nero's deepest insecurities about his authority and manhood, making him more susceptible to manipulation."
    },
    
    "obnoxius-word": {
        title: "obnoxius",
        translation: "submissive",
        device: "Political Vocabulary",
        description: "The term 'obnoxius' implies not just obedience but shameful subservience, suggesting Nero is enslaved to his mother.",
        effect: "Transforms the normal Roman virtue of filial piety into a source of shame and weakness."
    },
    
    "imperii-libertatis": {
        title: "non modo imperii sed libertatis",
        translation: "not only of supreme power but even of freedom",
        device: "Climactic Gradation",
        description: "The structure moves from the greater (imperium) to the lesser but more fundamental (libertas), reversing normal expectations.",
        effect: "Suggests that Nero lacks even the basic freedom of a common citizen, let alone the power of an emperor - a devastating rhetorical blow."
    },
    
    "rhetorical-questions": {
        title: "cur... an... an...",
        translation: "why... or... or...",
        device: "Rhetorical Question Series",
        description: "Poppaea uses a barrage of rhetorical questions to overwhelm Nero's defences, each one more provocative than the last.",
        effect: "The questions force Nero to confront uncomfortable possibilities whilst giving Poppaea deniability - she's 'just asking questions'."
    },
    
    "scilicet-sarcasm": {
        title: "scilicet",
        translation: "of course",
        device: "Sarcastic Particle",
        description: "The word 'scilicet' drips with sarcasm, making Poppaea's supposed self-deprecation actually an attack on Nero's judgement.",
        effect: "The false humility makes the accusation more cutting - she pretends to accept blame whilst actually blaming Nero."
    },
    
    "formam-beauty": {
        title: "formam",
        translation: "beauty",
        device: "Physical Attraction",
        description: "Poppaea begins with her physical beauty, knowing this is what actually attracts Nero, before moving to nobler qualities.",
        effect: "Shows her understanding of Nero's superficiality whilst maintaining a pretence of deeper values."
    },
    
    "triumphales-avos": {
        title: "triumphales avos",
        translation: "ancestors who had triumphs",
        device: "Aristocratic Pride",
        description: "Reference to ancestors who celebrated triumphs emphasises Poppaea's noble lineage, contrasting with Nero's freed slave ancestry.",
        effect: "Subtly reminds Nero that she's sacrificing social status to be with him, increasing his sense of obligation."
    },
    
    "fecunditatem-word": {
        title: "fecunditatem",
        translation: "fertility",
        device: "Dynastic Concern",
        description: "Fertility was crucial for imperial succession; Poppaea implies Octavia is barren whilst she could provide heirs.",
        effect: "Appeals to Nero's political anxieties about succession, making the personal political."
    },
    
    "timeri-passive": {
        title: "timeri",
        translation: "was it feared",
        device: "Impersonal Passive",
        description: "The passive construction 'timeri' avoids naming who fears, creating a sense of vague, pervasive anxiety.",
        effect: "Suggests mysterious forces working against their relationship, increasing Nero's paranoia."
    },
    
    "iniurias-iram": {
        title: "iniurias patrum, iram populi",
        translation: "injustices of the senators, anger of the people",
        device: "Political Threat",
        description: "Poppaea invokes both Senate and people, the twin pillars of Roman authority, as victims of Agrippina's misrule.",
        effect: "Transforms personal desire into political necessity - removing Agrippina becomes a duty to Rome."
    },
    
    "superbiam-avaritiam": {
        title: "superbiam avaritiamque",
        translation: "pride and greed",
        device: "Vice Pairing",
        description: "These two vices were particularly associated with tyranny in Roman political discourse, making Agrippina seem a tyrant.",
        effect: "Uses traditional Roman moral vocabulary to justify an immoral act - matricide becomes almost virtuous."
    },
    
    "non-nisi": {
        title: "non nisi",
        translation: "nothing except",
        device: "Double Negative",
        description: "The emphatic 'non nisi' construction creates an absolute statement about Agrippina's impossible standards.",
        effect: "Makes compromise seem impossible, forcing a binary choice between mother and lover."
    },
    
    "infestam-word": {
        title: "infestam",
        translation: "hostile",
        device: "Military Metaphor",
        description: "The word 'infestam' comes from military vocabulary, suggesting Poppaea would be an enemy in Nero's own household.",
        effect: "Frames the domestic situation in terms of war, making violent action seem more justified."
    },
    
    "quoquo-terrarum": {
        title: "quoquo terrarum",
        translation: "anywhere in the world",
        device: "Hyperbolic Devotion",
        description: "The indefinite 'quoquo' with partitive genitive 'terrarum' expresses unlimited willingness to suffer exile.",
        effect: "Her exaggerated devotion contrasts with Agrippina's supposed hostility, making Poppaea seem the victim."
    },
    
    "audiret-viseret": {
        title: "audiret potius... quam viseret",
        translation: "would rather hear... than see",
        device: "Preference Construction",
        description: "The contrast between hearing insults from afar and seeing dangers up close shows Poppaea's supposed selflessness.",
        effect: "Positions Poppaea as protective and self-sacrificing, inverting the reality of her manipulative agenda."
    },
    
    "lacrimis-arte": {
        title: "lacrimis et arte adulterae",
        translation: "tears and skill of the adulteress",
        device: "Manipulative Performance",
        description: "Tacitus exposes the theatrical nature of Poppaea's appeal, combining genuine emotion (tears) with calculated technique (art).",
        effect: "The narrator's intervention reminds us this is performance, not genuine feeling, whilst 'adulterae' provides moral judgement."
    },
    
    "caedem-word": {
        title: "caedem",
        translation: "murder",
        device: "Climactic Revelation",
        description: "The word 'caedem' finally reveals what the 'scelus' mentioned at the beginning actually entails - matricide.",
        effect: "The delayed revelation creates maximum impact, showing how unthinkable the crime was even to those who wanted Agrippina gone."
    },
    
    "odia-word": {
        title: "odia",
        translation: "hatred",
        device: "Emotional Culmination",
        description: "The plural 'odia' suggests multiple, complex resentments rather than simple anger, showing the depth of the estrangement.",
        effect: "The final word emphasises that this is not just political calculation but deep personal hatred, making the coming tragedy inevitable."
    }
};
