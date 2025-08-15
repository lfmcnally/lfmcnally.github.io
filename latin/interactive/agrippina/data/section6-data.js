// Analysis data for Tacitus Annals 14.6 interactive text
const textData = {
    "illic-reputans": {
        title: "illic reputans",
        translation: "there reflecting",
        device: "Scene Setting with Present Participle",
        description: "'Illic' places us in Agrippina's villa; 'reputans' (calculating, reconsidering) shows her analytical mind processing evidence methodically.",
        effect: "Creates intimate scene of survivor using logic not emotion - we enter her rational thought process."
    },
    
    "fallacibus-litteris": {
        title: "fallacibus litteris",
        translation: "by a false letter",
        device: "Deceptive Documentation",
        description: "The adjective 'fallacibus' (deceptive, treacherous) reveals the invitation itself was part of the murder plot.",
        effect: "Shows premeditation - even the written invitation was weaponised, making the betrayal absolute."
    },
    
    "accitam-participle": {
        title: "accitam",
        translation: "summoned",
        device: "Perfect Passive Participle",
        description: "The passive participle emphasises she was acted upon - summoned like prey to a trap.",
        effect: "Shows her powerlessness in being drawn into the plot despite her intelligence."
    },
    
    "honore-praecipuo": {
        title: "honore praecipuo habitam",
        translation: "held in particular respect",
        device: "Ironic Elevation",
        description: "'Praecipuo' (special, exceptional) emphasises how excessive honour masked murderous intent.",
        effect: "The greater the honour shown, the deeper the betrayal - elevation as preparation for elimination."
    },
    
    "litus-iuxta": {
        title: "litus iuxta",
        translation: "near the shore",
        device: "Geographic Evidence",
        description: "Proximity to shore rules out deep-sea accident - the location itself proves criminal intent.",
        effect: "Physical evidence speaks louder than words - geography exposes the lie of 'accident'."
    },
    
    "non-ventis": {
        title: "non ventis acta",
        translation: "not driven by winds",
        device: "Anaphora with Negation",
        description: "First 'non' in parallel structure eliminating natural causes - no wind drove the ship.",
        effect: "Systematic elimination of innocent explanations builds the case for murder."
    },
    
    "non-saxis": {
        title: "non saxis impulsa",
        translation: "not dashed on rocks",
        device: "Continued Anaphora",
        description: "Second 'non' continues the forensic elimination - no rocks caused damage.",
        effect: "Repetition of 'non' drums home the impossibility of accident - this was deliberate."
    },
    
    "summa-sui": {
        title: "summa sui parte",
        translation: "in its upper part",
        device: "Technical Precision",
        description: "The ship collapsed from above ('summa parte'), not below - unnatural for maritime disaster.",
        effect: "Forensic detail proves engineering not nature - ships don't naturally collapse downward."
    },
    
    "veluti-terrestre": {
        title: "veluti terrestre machinamentum",
        translation: "like a land contrivance",
        device: "Revealing Simile",
        description: "'Veluti' introduces comparison to land-based machinery - this was mechanical engineering, not shipwreck.",
        effect: "The comparison exposes the unnatural mechanism - murder disguised as maritime accident."
    },
    
    "concidisset-subjunctive": {
        title: "concidisset",
        translation: "had collapsed",
        device: "Pluperfect Subjunctive",
        description: "The subjunctive in indirect statement shows her mental processing of past events.",
        effect: "Grammatically embeds us in her thought process - we think through the evidence with her."
    },
    
    "observans-participle": {
        title: "observans",
        translation: "observing",
        device: "Present Participle Accumulation",
        description: "Another present participle adds to 'reputans' - she's simultaneously observing and reflecting.",
        effect: "Multiple participles show her mind working on multiple levels - comprehensive analysis."
    },
    
    "necem-murder": {
        title: "necem",
        translation: "slaughter",
        device: "Brutal Diction",
        description: "'Nex' is violent death, murder - not the neutral 'mors' but deliberate killing.",
        effect: "Word choice reveals truth - Acerronia wasn't a casualty but a murder victim."
    },
    
    "simul-aspiciens": {
        title: "simul suum vulnus aspiciens",
        translation: "simultaneously looking at her own wound",
        device: "Physical Evidence",
        description: "'Simul' emphasises simultaneity - she examines her wound while processing Acerronia's death.",
        effect: "The wound becomes proof - her own body testifies to attempted murder."
    },
    
    "solum-remedium": {
        title: "solum insidiarum remedium",
        translation: "only remedy against plots",
        device: "Emphatic Limitation",
        description: "'Solum' (only) emphasises the single option - no alternatives exist for survival.",
        effect: "Shows desperate strategic clarity - only one path to survival remains."
    },
    
    "si-non-intellegerentur": {
        title: "si non intellegerentur",
        translation: "if they were not understood",
        device: "Conditional Survival",
        description: "The imperfect subjunctive in conditional clause - survival depends on feigning ignorance.",
        effect: "Makes ignorance a weapon - understanding means death, pretending ignorance might mean life."
    },
    
    "agerinum-messenger": {
        title: "Agerinum",
        translation: "Agerinus",
        device: "Named Agent",
        description: "The freedman Agerinus becomes her messenger - a specific person in this deadly game.",
        effect: "Naming humanises the drama - real people caught in imperial murder plots."
    },
    
    "nuntiaret-purpose": {
        title: "nuntiaret",
        translation: "to announce",
        device: "Purpose Clause with Subjunctive",
        description: "The subjunctive shows purpose - Agerinus sent specifically to deliver false message.",
        effect: "Every action has calculated purpose - nothing spontaneous in this survival game."
    },
    
    "benignitate-deum": {
        title: "benignitate deum",
        translation: "through kindness of gods",
        device: "Divine Attribution",
        description: "She credits gods for survival - pious gratitude that deflects from human agency.",
        effect: "Invokes divine protection to shame human murder - makes Nero fight the gods."
    },
    
    "fortuna-eius": {
        title: "fortuna eius",
        translation: "his good fortune",
        device: "Ironic Attribution",
        description: "Credits Nero's fortune for her survival - his luck that she lived, not died.",
        effect: "Masterful psychological manipulation - makes her survival seem like his success."
    },
    
    "evasisse-infinitive": {
        title: "evasisse",
        translation: "had escaped",
        device: "Perfect Infinitive in Indirect Statement",
        description: "The perfect infinitive in accusative-infinitive construction reports the escape as fact.",
        effect: "Presents survival as accomplished fact - no questioning or accusation."
    },
    
    "casum-disaster": {
        title: "gravem casum",
        translation: "serious disaster",
        device: "Euphemistic Language",
        description: "'Casus' (accident, misfortune) maintains fiction - not attempted murder but mishap.",
        effect: "Perpetuates the lie to survive - calling it accident prevents confrontation."
    },
    
    "orare-begging": {
        title: "orare",
        translation: "she begged",
        device: "Submissive Verb",
        description: "'Orare' suggests humble request, not demand - playing the vulnerable mother.",
        effect: "Performs weakness to disarm threat - begging suggests no danger to Nero."
    },
    
    "quamvis-exterritus": {
        title: "quamvis periculo matris exterritus",
        translation: "however frightened by mother's danger",
        device: "Concessive Clause",
        description: "'Quamvis' with participle assumes Nero's concern - performs belief in his filial anxiety.",
        effect: "Maintains fiction of loving son - gives him role to play in the charade."
    },
    
    "visendi-curam": {
        title: "visendi curam",
        translation: "duty of visiting",
        device: "Gerundive Obligation",
        description: "The gerundive suggests filial duty - visiting as obligation he can postpone.",
        effect: "Uses duty language to prevent proximity - keeps killer at distance through propriety."
    },
    
    "ad-praesens": {
        title: "ad praesens",
        translation: "for the present",
        device: "Temporal Limitation",
        description: "Emphasises temporary nature - not permanent separation but current need.",
        effect: "Keeps options open - temporary distance while she plans next moves."
    },
    
    "quiete-rest": {
        title: "quiete",
        translation: "rest",
        device: "Deceptive Simplicity",
        description: "Claims to need only rest - simple, non-threatening request that hides complex planning.",
        effect: "Makes herself seem harmless - resting victims don't threaten emperors."
    },
    
    "securitate-simulata": {
        title: "securitate simulata",
        translation: "with feigned carefreeness",
        device: "Ablative of Manner",
        description: "'Simulata' (pretended) with 'securitate' (freedom from care) shows conscious performance.",
        effect: "Every gesture calculated - even casualness is carefully performed."
    },
    
    "medicamina-fomenta": {
        title: "medicamina vulneri et fomenta corpori",
        translation: "medicines for wound and poultices for body",
        device: "Chiasmus",
        description: "Crossed arrangement (medicine-wound :: poultices-body) creates rhetorical balance.",
        effect: "Even in crisis, maintains proper form - control through structured action."
    },
    
    "adhibet-present": {
        title: "adhibet",
        translation: "she applies",
        device: "Historic Present",
        description: "Shift to present tense for vividness - we watch her treating wounds in real time.",
        effect: "Immediacy makes scene vivid - we're present as she tends her injuries."
    },
    
    "testamentum-will": {
        title: "testamentum",
        translation: "will",
        device: "Legal Procedure",
        description: "Dealing with Acerronia's will shows proper legal process amid chaos.",
        effect: "Maintains normal procedures - performing ordinary life while processing attempted murder."
    },
    
    "requiri-passive": {
        title: "requiri",
        translation: "to be sought",
        device: "Passive Infinitive",
        description: "Passive voice with 'iubet' shows she orders others - maintains authority despite vulnerability.",
        effect: "Still commands despite wounds - authority intact even after assassination attempt."
    },
    
    "obsignari-sealed": {
        title: "obsignari",
        translation: "to be sealed",
        device: "Official Procedure",
        description: "Sealing possessions was legal requirement - proper procedure for protecting estate.",
        effect: "Shows attention to detail - even in crisis, proper legal forms observed."
    },
    
    "id-tantum": {
        title: "id tantum",
        translation: "this alone",
        device: "Emphatic Limitation",
        description: "'Tantum' (only) emphasises uniqueness - this single action was genuine.",
        effect: "One truth amid lies - grief for Acerronia breaks through performance."
    },
    
    "simulationem-pretence": {
        title: "non per simulationem",
        translation: "not through pretence",
        device: "Litotes",
        description: "Double negative (non...simulationem) emphasises this was genuine by denying pretence.",
        effect: "Tacitus's final irony - in a passage of performance, one action was real."
    },
    
    "parallel-participles": {
        title: "reputans...observans...aspiciens",
        translation: "reflecting...observing...looking",
        device: "Accumulation of Participles",
        description: "Three present participles build cumulative mental activity - thinking on multiple levels.",
        effect: "Shows sophisticated simultaneous processing - the mind of a political survivor."
    },
    
    "mechanical-evidence": {
        title: "navis summa sui parte",
        translation: "ship in its top part",
        device: "Technical Detail",
        description: "Precise description of damage location provides forensic evidence of sabotage.",
        effect: "Engineering precision exposes the lie - mechanical failure not maritime accident."
    },
    
    "divine-irony": {
        title: "benignitate deum et fortuna eius",
        translation: "gods' kindness and his fortune",
        device: "Ironic Attribution",
        description: "Credits both gods and Nero's luck for survival from his murder attempt.",
        effect: "Layers of irony - thanks gods and would-be killer for escaping his plot."
    },
    
    "performance-verbs": {
        title: "simulata...misit...orare",
        translation: "pretended...sent...beg",
        device: "Sequence of Deception",
        description: "Verbs trace performance - pretending calm, sending message, begging delay.",
        effect: "Action sequence shows calculated response - each step planned for survival."
    },
    
    "false-concern": {
        title: "quamvis periculo matris exterritus",
        translation: "however terrified by mother's danger",
        device: "Assumed Emotion",
        description: "Pretends to believe Nero would be terrified by her danger - maintains filial fiction.",
        effect: "Gives Nero script to follow - easier to play concerned son than admitted killer."
    },
    
    "temporal-markers": {
        title: "interim...ad praesens",
        translation: "meanwhile...for now",
        device: "Time Management",
        description: "Temporal markers show she's buying time - temporary measures while planning.",
        effect: "Every moment calculated - time becomes resource in survival strategy."
    },
    
    "legal-language": {
        title: "testamentum...requiri...obsignari",
        translation: "will...sought...sealed",
        device: "Official Terminology",
        description: "Legal terminology maintains normal procedures despite extraordinary circumstances.",
        effect: "Normalcy as camouflage - routine legal processes hide recognition of murder attempt."
    },
    
    "accumulation-proof": {
        title: "litteris...honore...litus...ventis...saxis",
        translation: "letter...honour...shore...winds...rocks",
        device: "Evidence Accumulation",
        description: "Series of nouns builds evidential case - each detail adds to proof of attempted murder.",
        effect: "Methodical proof construction - reasoning not emotion reveals truth."
    },
    
    "final-contrast": {
        title: "id tantum non per simulationem",
        translation: "this alone not through pretence",
        device: "Conclusive Exception",
        description: "Final phrase isolates single genuine act amid universal performance.",
        effect: "Poignant ending - even master performers have moments of authentic grief."
    }
};
