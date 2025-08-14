// Analysis data for Tacitus Annals 14.1 interactive text
const textData = {
    "ablative-absolute": {
        title: "Gaio Vipstano C. Fonteio consulibus",
        translation: "In the consulships of Gaius Vipstanus and C. Fonteius",
        device: "Ablative Absolute",
        description: "Traditional Roman dating formula using the ablative absolute construction. This annalistic convention anchors the narrative in historical time, recording events year by year as in official records.",
        effect: "Creates documentary authority whilst ironically framing a sordid domestic drama within the dignified structure of state annals - the public record contains private corruption."
    },
    
    "diu-meditatum": {
        title: "diu meditatum",
        translation: "long contemplated",
        device: "Juxtaposition",
        description: "The adverb 'diu' (for a long time) placed directly next to 'meditatum' (contemplated) emphasises premeditation. The perfect passive participle suggests the crime has been thoroughly planned.",
        effect: "Establishes that this is calculated evil, not impulsive action. The long gestation period makes the crime more chilling - this is cold, deliberate matricide."
    },
    
    "scelus-word": {
        title: "scelus",
        translation: "crime",
        device: "Choice of Words (Diction)",
        description: "Tacitus chooses the morally loaded 'scelus' (wickedness, crime) rather than neutral terms like 'factum' (deed) or 'consilium' (plan). This is judgement embedded in vocabulary.",
        effect: "The historian passes moral verdict before revealing what actually happened - we know this is evil before we know what 'this' is, priming our interpretation."
    },
    
    "vetustate-imperii": {
        title: "vetustate imperii",
        translation: "by the duration of his power",
        device: "Abstract Noun + Genitive",
        description: "Uses abstract noun 'vetustate' (long duration) with genitive 'imperii' rather than saying Nero had ruled for a long time. This construction emphasises the corrupting nature of prolonged power.",
        effect: "Suggests power corruption is progressive and inevitable - the longer one rules absolutely, the more depraved one becomes. Time itself becomes corrosive."
    },
    
    "audacia-nero": {
        title: "audacia",
        translation: "daring",
        device: "Loaded Diction",
        description: "'Audacia' can mean boldness (positive) or recklessness (negative). In Tacitus, it almost always carries negative connotations of dangerous rashness, especially in imperial contexts.",
        effect: "Charts Nero's moral decline - what might once have been courage has become criminal boldness. The word suggests both confidence and moral blindness."
    },
    
    "flagrantior-in-dies": {
        title: "flagrantior in dies",
        translation: "daily more burning",
        device: "Metaphor + Climactic Structure",
        description: "The comparative 'flagrantior' uses fire imagery for passion, whilst 'in dies' (day by day) creates a sense of gradual but inexorable increase. The metaphor of burning desire is conventional but effective.",
        effect: "Passion as destructive fire that intensifies beyond control - each day brings greater heat until conflagration is inevitable. The gradual build suggests helpless momentum."
    },
    
    "amore-poppaeae": {
        title: "amore Poppaeae",
        translation: "love for Poppaea",
        device: "Irony",
        description: "Tacitus uses 'amor' (love) for what is clearly destructive lust. The noble word is ironically applied to a passion that will lead to matricide - the perversion of love into its opposite.",
        effect: "The corruption of Rome's moral vocabulary mirrors the corruption of its rulers - even 'love' becomes a euphemism for murderous obsession."
    },
    
    "matrimonium-discidium": {
        title: "matrimonium et discidium",
        translation: "marriage and divorce",
        device: "Antithesis",
        description: "Sharp juxtaposition of opposing concepts - 'matrimonium' (joining) and 'discidium' (separation). The balanced structure emphasises how Poppaea's desires require both creation and destruction.",
        effect: "Shows that in this corrupt world, building something new (marriage) requires destroying something existing (Octavia's position) - construction and demolition are inseparable."
    },
    
    "incolumi-agrippina": {
        title: "incolumi Agrippina",
        translation: "while Agrippina was unharmed",
        device: "Ablative Absolute with Irony",
        description: "The participle 'incolumi' (safe, unharmed) is ominous in context. The ablative absolute construction makes Agrippina's safety a temporal condition - implying it's temporary.",
        effect: "Heavy dramatic irony - the reader knows Agrippina's 'safety' is precisely what's threatened. Her being 'unharmed' is presented as an obstacle to be removed."
    },
    
    "crebris-criminationibus": {
        title: "crebris criminationibus",
        translation: "with frequent accusations",
        device: "Alliteration",
        description: "The harsh repetition of 'cr' sounds creates an aggressive, grating effect. The adjective 'crebris' (frequent, repeated) emphasises the relentless nature of Poppaea's verbal assault.",
        effect: "The sound pattern mimics the wearing effect of constant criticism - we hear the repetitive, grinding nature of her nagging in the consonant clusters."
    },
    
    "per-facetias": {
        title: "per facetias",
        translation: "through jests",
        device: "Psychological Manipulation",
        description: "Poppaea alternates between serious accusations and jokes ('facetiae' = witticisms). This is a classic manipulation technique - serious attacks disguised as humour, allowing deniability.",
        effect: "Shows Poppaea's sophistication - she can retreat behind 'just joking' if challenged, whilst still planting poisonous ideas. Nero can't respond without seeming humourless."
    },
    
    "pupillum-insult": {
        title: "pupillum",
        translation: "ward",
        device: "Diction - Emasculating Insult",
        description: "A 'pupillus' is a minor under guardianship, unable to act independently. For an emperor to be called this attacks both his masculinity and his authority - the two things Nero most values.",
        effect: "Calculated to trigger Nero's deepest insecurities. He killed Britannicus partly to avoid seeming the younger brother; now he's painted as a child to his mother."
    },
    
    "obnoxius-word": {
        title: "obnoxius",
        translation: "submissive",
        device: "Political Vocabulary",
        description: "'Obnoxius' originally meant 'liable to punishment' but came to mean 'slavishly subject to'. It's particularly shameful when applied to a free Roman, let alone an emperor.",
        effect: "Transforms normal Roman filial piety into shameful servitude. Nero isn't dutiful; he's enslaved. The word makes maternal respect seem like weakness."
    },
    
    "imperii-libertatis": {
        title: "non modo imperii sed libertatis",
        translation: "not only of power but even of freedom",
        device: "Climactic Structure (Anti-climax)",
        description: "Normally we'd expect escalation from lesser to greater, but here it moves from 'imperium' (supreme power) to 'libertas' (basic freedom) - a rhetorical reversal that's more devastating.",
        effect: "Suggests Nero lacks even what the lowest citizen has - freedom. The reversal makes the insult more cutting: he's not just not an emperor, he's not even free."
    },
    
    "rhetorical-questions": {
        title: "cur... an... an...",
        translation: "why... or... or...",
        device: "Rhetorical Questions (Anaphora)",
        description: "Series of rhetorical questions with repeated 'an' creating anaphora. Each question is more provocative than the last, building pressure without allowing response time.",
        effect: "Interrogation technique that overwhelms defences - Nero must confront uncomfortable possibilities whilst Poppaea maintains deniability through 'just asking questions'."
    },
    
    "scilicet-sarcasm": {
        title: "scilicet",
        translation: "of course",
        device: "Sarcasm/Irony",
        description: "The particle 'scilicet' (evidently, of course) drips with sarcasm here. Poppaea pretends to accept that her beauty is inadequate whilst actually attacking Nero's judgement.",
        effect: "False self-deprecation that's actually accusation - she pretends to blame herself whilst making Nero feel guilty for not appreciating her qualities."
    },
    
    "formam-beauty": {
        title: "formam",
        translation: "beauty",
        device: "Strategic Word Order",
        description: "Poppaea leads with 'formam' (physical beauty) because she knows this is what actually attracts Nero. She mentions superficial qualities before noble ones, understanding his priorities.",
        effect: "Reveals both characters - Poppaea's manipulative intelligence in knowing what to emphasise, and Nero's shallow nature in being susceptible to such appeals."
    },
    
    "triumphales-avos": {
        title: "triumphales avos",
        translation: "ancestors who had triumphs",
        device: "Historical Prestige",
        description: "Reference to ancestors who celebrated military triumphs - the highest honour in Rome. Poppaea's family could claim genuine aristocratic achievement, unlike Nero's freed slave ancestry through Claudius.",
        effect: "Subtle class superiority - reminds Nero she's sacrificing social status to be with him, increasing his sense of obligation and making rejection seem ungrateful."
    },
    
    "fecunditatem-word": {
        title: "fecunditatem",
        translation: "fertility",
        device: "Dynastic Concern",
        description: "Fertility was crucial for imperial succession. Octavia had produced no heirs, whilst Poppaea implies she could. This transforms personal desire into political necessity.",
        effect: "Makes the affair seem like duty rather than pleasure - Nero needs heirs for stability. The personal becomes political, justifying private immorality through public need."
    },
    
    "timeri-passive": {
        title: "timeri",
        translation: "is it feared",
        device: "Impersonal Passive",
        description: "The passive infinitive 'timeri' avoids naming who fears. This vague construction creates paranoid atmosphere - unnamed forces work against them.",
        effect: "Feeds Nero's paranoia - if even Poppaea's loyalty is feared by mysterious 'them', what else are 'they' planning? The vagueness makes the threat seem pervasive."
    },
    
    "iniurias-iram": {
        title: "iniurias patrum, iram populi",
        translation: "injuries of the fathers, anger of the people",
        device: "Parallel Structure (Balance)",
        description: "Balanced phrases with matching noun-genitive patterns. 'Patres' (senators) and 'populus' (people) represent the twin sources of Roman authority - SPQR itself.",
        effect: "Suggests universal disapproval of Agrippina - both Senate and People suffer under her. Removing her becomes not personal vendetta but public service."
    },
    
    "superbiam-avaritiam": {
        title: "superbiam avaritiamque",
        translation: "pride and greed",
        device: "Vice Pairing (Hendiadys)",
        description: "These two vices were stereotypically associated with tyranny in Roman political discourse. The '-que' enclitic bonds them as an inseparable pair of tyrannical characteristics.",
        effect: "Uses traditional Republican anti-tyranny vocabulary to justify the ultimate anti-Republican act (matricide). Moral language is weaponised for immoral purposes."
    },
    
    "non-nisi": {
        title: "non nisi",
        translation: "nothing except",
        device: "Litotes/Double Negative",
        description: "The emphatic double negative construction 'non...nisi' (not...except) creates absolute statement. This is litotes in reverse - overstatement through negation.",
        effect: "Makes compromise impossible - Agrippina will accept ONLY a hostile daughter-in-law. The absolute construction forces binary choice: mother or lover."
    },
    
    "infestam-word": {
        title: "infestam",
        translation: "hostile",
        device: "Military Metaphor",
        description: "'Infestam' comes from military vocabulary - it means 'hostile' in the sense of an enemy army. Domestic relations are described in terms of warfare.",
        effect: "Frames family dynamics as military conflict, making violent resolution seem more natural. If marriage is war, then killing becomes a tactical necessity."
    },
    
    "quoquo-terrarum": {
        title: "quoquo terrarum",
        translation: "anywhere in the world",
        device: "Hyperbole + Partitive Genitive",
        description: "The indefinite 'quoquo' (wherever) with partitive genitive 'terrarum' (of lands) expresses unlimited geographical scope. This is deliberate exaggeration of devotion.",
        effect: "Poppaea's theatrical willingness to suffer exile anywhere makes her seem the selfless victim, contrasting with Agrippina's possessive control."
    },
    
    "audiret-viseret": {
        title: "audiret potius... quam viseret",
        translation: "would rather hear... than see",
        device: "Antithesis with Preference",
        description: "Contrast between distant hearing of insults and present witnessing of dangers. The 'potius...quam' construction emphasises her supposed self-sacrifice.",
        effect: "Inverts reality - the manipulator poses as protector. She'd rather suffer exile than watch Nero in danger, painting herself as noble whilst plotting murder."
    },
    
    "lacrimis-arte": {
        title: "lacrimis et arte adulterae",
        translation: "tears and skill of the adulteress",
        device: "Narratorial Intrusion + Zeugma",
        description: "Tacitus breaks in to expose the performance - 'tears' (genuine emotion) and 'art' (calculated technique) are yoked together. The narrator labels her 'adultera' (adulteress) for moral clarity.",
        effect: "The mask slips - Tacitus reminds us this is theatre, not genuine feeling. The combination of real tears and fake emotion shows sophisticated manipulation."
    },
    
    "caedem-word": {
        title: "caedem",
        translation: "murder",
        device: "Climactic Revelation",
        description: "The word 'caedem' (slaughter, murder) finally specifies what the opening's 'scelus' entails. The delayed revelation of matricide as the ultimate crime creates maximum impact.",
        effect: "Even those wanting Agrippina gone hadn't imagined actual murder - the unthinkable is named. The word's violence contrasts with the sophisticated manipulation preceding it."
    },
    
    "odia-word": {
        title: "odia",
        translation: "hatreds",
        device: "Plural for Emphasis",
        description: "The plural 'odia' (hatreds) rather than singular suggests multiple, complex resentments. This isn't simple anger but layers of accumulated grievance.",
        effect: "The final word emphasises that matricide springs not from calculation but deep emotional poison. Multiple hatreds have festered into something monstrous."
    }
};
