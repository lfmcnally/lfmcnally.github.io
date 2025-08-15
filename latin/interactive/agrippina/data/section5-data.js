// Analysis data for Tacitus Annals 14.5 interactive text
const textData = {
    "noctem-sideribus": {
        title: "noctem sideribus inlustrem",
        translation: "night bright with stars",
        device: "Pathetic Fallacy",
        description: "The perfect clarity of the night becomes ironic - ideal conditions for navigation make 'accident' implausible.",
        effect: "Nature seems to conspire against the crime by providing witnesses in the stars."
    },
    
    "placido-mari": {
        title: "placido mari quietam",
        translation: "calm with peaceful sea",
        device: "Double Emphasis",
        description: "Both 'placidum' (peaceful) and 'quietam' (calm) emphasise the sea's tranquillity - too perfect for shipwreck.",
        effect: "The very calmness that should aid murder makes it incredible - no waves to blame."
    },
    
    "quasi-convincendum": {
        title: "quasi convincendum ad scelus",
        translation: "as if to expose the crime",
        device: "Divine Purpose Clause",
        description: "'Quasi' suggests the gods deliberately provided perfect conditions to reveal, not conceal, the crime.",
        effect: "Makes the gods seem to oppose Nero - heaven itself witnesses against matricide."
    },
    
    "dii-praebuere": {
        title: "dii praebuere",
        translation: "the gods offered",
        device: "Divine Agency",
        description: "The gods actively 'offer' conditions - they're not neutral but engaged in exposing evil.",
        effect: "Frames the failed assassination as divinely thwarted - even gods reject matricide."
    },
    
    "progressa-navis": {
        title: "progressa navis",
        translation: "ship had advanced",
        device: "Measured Progress",
        description: "The ship hasn't gone far - the crime scene remains close to shore and witnesses.",
        effect: "Proximity to land makes rescue possible and covers difficult - poor planning exposed."
    },
    
    "ablative-absolute-comitantibus": {
        title: "duobus...comitantibus",
        translation: "with two accompanying",
        device: "Ablative Absolute",
        description: "The construction shows limited companionship - only two friends, making her vulnerable.",
        effect: "Small entourage emphasises Agrippina's misplaced trust in apparent reconciliation."
    },
    
    "crepereius-victim": {
        title: "Crepereius Gallus",
        translation: "Crepereius Gallus",
        device: "Named Victim",
        description: "Naming the victim humanises collateral damage - an innocent dies for being in wrong place.",
        effect: "Shows how plots destroy the innocent alongside the intended - murder's ripple effect."
    },
    
    "gubernaculis-rudders": {
        title: "gubernaculis",
        translation: "near the rudders",
        device: "Fatal Positioning",
        description: "Standing near the steering mechanism places him directly under the collapsing ceiling.",
        effect: "Precise positioning creates forensic reconstruction - we see exactly how death occurred."
    },
    
    "acerronia-companion": {
        title: "Acerronia",
        translation: "Acerronia",
        device: "Loyal Friend",
        description: "Acerronia Polla was Agrippina's confidante - her presence shows this was social not suspicious occasion.",
        effect: "Loyalty becomes liability - friendship leads to death in the imperial court."
    },
    
    "super-pedes": {
        title: "super pedes cubitantis reclinis",
        translation: "reclining above the feet of the lying one",
        device: "Intimate Positioning",
        description: "The detailed physical arrangement shows casual intimacy - friends relaxing together.",
        effect: "Domestic tranquillity about to be shattered - the cosy scene makes violence more shocking."
    },
    
    "paenitentiam-gratiam": {
        title: "paenitentiam filii et reciperatam gratiam",
        translation: "son's repentance and recovered favour",
        device: "Tragic Irony",
        description: "Acerronia rejoices about reconciliation while the murder plot unfolds - joy before death.",
        effect: "Dramatic irony at its most painful - celebrating the very deception that kills."
    },
    
    "gaudium-ironic": {
        title: "per gaudium",
        translation: "through joy",
        device: "Emotional Irony",
        description: "Joy is the emotion of the moment before attempted murder - happiness precedes horror.",
        effect: "Makes the betrayal more monstrous - striking when victims are most happy and trusting."
    },
    
    "dato-signo": {
        title: "dato signo",
        translation: "at the given signal",
        device: "Coordinated Crime",
        description: "The ablative absolute shows premeditation - someone gave a signal for murder to begin.",
        effect: "Removes any possibility of accident - this is coordinated, signalled assassination."
    },
    
    "ruere-tectum": {
        title: "ruere",
        translation: "crashed down",
        device: "Violent Verb",
        description: "The infinitive 'ruere' suggests violent collapse, not gentle descent - destructive force.",
        effect: "The violence of the verb mirrors the violence of the act - sudden catastrophe."
    },
    
    "multo-plumbo": {
        title: "multo plumbo grave",
        translation: "heavy with much lead",
        device: "Weighted Death",
        description: "Lead weighting ensures fatal impact - this is engineered for maximum lethality.",
        effect: "Shows careful preparation for murder - the ceiling designed specifically to kill."
    },
    
    "statim-exanimatus": {
        title: "statim exanimatus",
        translation: "immediately killed",
        device: "Instant Death",
        description: "The immediacy shows the mechanism's lethal effectiveness - at least for unintended victims.",
        effect: "Crepereius's instant death contrasts with Agrippina's survival - fate's bitter irony."
    },
    
    "eminentibus-parietibus": {
        title: "eminentibus lecti parietibus",
        translation: "by high walls of the couch",
        device: "Protective Structure",
        description: "The couch's high sides create accidental shelter - furniture becomes fortification.",
        effect: "Chance architecture saves life - random furniture placement thwarts elaborate planning."
    },
    
    "forte-validioribus": {
        title: "forte validioribus",
        translation: "by chance stronger",
        device: "Fortune's Intervention",
        description: "'Forte' (by chance) emphasises randomness - luck not planning saves Agrippina.",
        effect: "Chance defeats calculation - Fortune protects whom the gods favour."
    },
    
    "protectae-saved": {
        title: "protectae sunt",
        translation: "were protected",
        device: "Passive Salvation",
        description: "The passive voice suggests they were saved by external forces, not their own action.",
        effect: "Emphasises helplessness and luck - survival through furniture, not skill."
    },
    
    "dissolutio-failure": {
        title: "dissolutio",
        translation: "breaking apart",
        device: "Technical Failure",
        description: "The ship's failure to break apart as designed shows mechanical malfunction.",
        effect: "Engineering fails at crucial moment - complexity breeds failure points."
    },
    
    "ablative-absolute-turbatis": {
        title: "turbatis omnibus",
        translation: "with everyone confused",
        device: "Ablative Absolute - Chaos",
        description: "Universal confusion prevents coordinated action - chaos defeats conspiracy.",
        effect: "Panic undermines planning - emotional breakdown prevents mechanical execution."
    },
    
    "quod-plerique": {
        title: "quod plerique ignari",
        translation: "because the ignorant majority",
        device: "Causal Explanation",
        description: "Most crew members don't know the plan - secrecy becomes liability.",
        effect: "Irony of conspiracy - limiting knowledge for secrecy prevents effective execution."
    },
    
    "conscios-ignari": {
        title: "conscios",
        translation: "those in the know",
        device: "Knowledge Contrast",
        description: "Sharp division between conspirators ('conscios') and ignorant ('ignari') crew.",
        effect: "Knowledge becomes burden - those who know the plot can't execute it properly."
    },
    
    "visum-impersonal": {
        title: "visum",
        translation: "it seemed good",
        device: "Impersonal Construction",
        description: "The impersonal passive suggests group decision without clear leadership.",
        effect: "Shows improvisation replacing planning - desperate measures when machinery fails."
    },
    
    "unum-latus": {
        title: "unum in latus inclinare",
        translation: "to lean to one side",
        device: "Improvised Method",
        description: "Plan B involves crude weight shift - primitive solution when technology fails.",
        effect: "From elaborate engineering to simple tipping - desperation breeds simplicity."
    },
    
    "submergere-sink": {
        title: "submergere",
        translation: "to sink",
        device: "Direct Intent",
        description: "The infinitive states murderous purpose plainly - no more pretence of accident.",
        effect: "Abandonment of subtlety - open attempt at drowning when machinery fails."
    },
    
    "neque-promptus": {
        title: "neque ipsis promptus",
        translation: "not ready themselves",
        device: "Coordination Failure",
        description: "Even the conspirators can't coordinate quickly enough for sudden change of plan.",
        effect: "Improvisation requires skills they lack - planning doesn't prepare for chaos."
    },
    
    "consensus-agreement": {
        title: "consensus",
        translation: "agreement",
        device: "Failed Coordination",
        description: "Lack of 'consensus' (acting together) shows organisational breakdown.",
        effect: "Group action requires unity they can't achieve - conspiracy needs better rehearsal."
    },
    
    "alii-contra": {
        title: "alii contra nitentes",
        translation: "others pressing opposite",
        device: "Counterbalancing",
        description: "Uncoordinated crew members accidentally counterbalance the tilting.",
        effect: "Ignorance saves life - not knowing the plan, they accidentally prevent it."
    },
    
    "lenioris-iactus": {
        title: "lenioris in mare iactus",
        translation: "gentler casting into sea",
        device: "Diminished Violence",
        description: "Instead of violent drowning, a 'gentler' entry into water - attempted murder becomes swim.",
        effect: "Anticlimax of evil - the grand murder plot produces mere dunking."
    },
    
    "imprudentia-fatal": {
        title: "imprudentia",
        translation: "through bad judgement",
        device: "Fatal Error",
        description: "Acerronia's 'imprudentia' (lack of foresight) in claiming to be Agrippina seals her fate.",
        effect: "Good intentions lead to death - trying to save friend by deception kills her."
    },
    
    "dum-temporal": {
        title: "dum",
        translation: "while",
        device: "Temporal Conjunction",
        description: "Shows simultaneous action - while claiming identity, she's being killed.",
        effect: "Compressed timeframe - death follows immediately upon false claim."
    },
    
    "subveniretur-help": {
        title: "subveniretur",
        translation: "help might be given",
        device: "Impersonal Passive Subjunctive",
        description: "The impersonal construction with purpose clause shows her expectation of rescue.",
        effect: "Tragic misunderstanding - she expects salvation but receives slaughter."
    },
    
    "clamitat-shouting": {
        title: "clamitat",
        translation: "keeps shouting",
        device: "Frequentative Verb",
        description: "The frequentative form shows repeated shouting - desperate, continuous claims.",
        effect: "Persistence seals doom - the more she insists, the more certain her death."
    },
    
    "contis-remis": {
        title: "contis et remis",
        translation: "with poles and oars",
        device: "Improvised Weapons",
        description: "Naval equipment becomes murder weapons - tools repurposed for killing.",
        effect: "Brutal improvisation - everyday objects turned lethal in murderous hands."
    },
    
    "quae-fors": {
        title: "quae fors obtulerat",
        translation: "whatever chance offered",
        device: "Random Violence",
        description: "Murder weapons are whatever's at hand - spontaneous rather than planned killing.",
        effect: "Chaotic brutality - the killing is messy, improvised, desperate."
    },
    
    "conficitur-killed": {
        title: "conficitur",
        translation: "is finished off",
        device: "Present Tense",
        description: "Shift to present tense for the killing makes it immediate and vivid.",
        effect: "Brings reader into the moment of murder - we witness rather than hear about death."
    },
    
    "silens-strategic": {
        title: "silens",
        translation: "silent",
        device: "Strategic Silence",
        description: "Agrippina's silence contrasts with Acerronia's fatal shouting - wisdom in quietness.",
        effect: "Silence as survival strategy - knowing when not to speak saves life."
    },
    
    "adgnita-recognised": {
        title: "minus adgnita",
        translation: "less recognised",
        device: "Anonymity Saves",
        description: "Not being recognised protects her - anonymity becomes armour.",
        effect: "Identity is danger - being unknown allows survival where being known means death."
    },
    
    "parenthesis-wound": {
        title: "unum tamen vulnus",
        translation: "one wound however",
        device: "Parenthetical Detail",
        description: "The parenthesis adds crucial detail - she was wounded, providing later evidence.",
        effect: "Documentary precision - the wound will prove the assassination attempt really happened."
    },
    
    "nando-swimming": {
        title: "nando",
        translation: "by swimming",
        device: "Gerund of Means",
        description: "The ablative gerund shows method of escape - physical ability saves her.",
        effect: "Agrippina's unexpected swimming ability - aristocratic woman with survival skills."
    },
    
    "lenunculorum-boats": {
        title: "lenunculorum",
        translation: "of little boats",
        device: "Diminutive",
        description: "The diminutive emphasises small, humble vessels - fishing boats, not warships.",
        effect: "Ironic rescue - saved by humble fishermen after grand assassination attempt fails."
    },
    
    "lucrinum-lake": {
        title: "Lucrinum in lacum",
        translation: "to the Lucrine Lake",
        device: "Geographic Precision",
        description: "Specific location of safety - the Lucrine Lake near her villa provides refuge.",
        effect: "Documentary detail - we can map her escape route from sea to safety."
    },
    
    "infertur-brought": {
        title: "infertur",
        translation: "is brought in",
        device: "Passive Final Verb",
        description: "The passive present brings her journey to safe conclusion - she's carried to safety.",
        effect: "From active swimming to passive carrying - from self-rescue to being rescued."
    }
};
