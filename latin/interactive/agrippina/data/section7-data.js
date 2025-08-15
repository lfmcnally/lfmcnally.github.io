// Analysis data for Tacitus Annals 14.7 interactive text
const textData = {
    "nuntios-opperienti": {
        title: "nuntios patrati facinoris opperienti",
        translation: "waiting for news of accomplished crime",
        device: "Euphemistic Language",
        description: "'Facinus' (deed/crime) and 'patrare' (accomplish) make murder sound like administrative task completion.",
        effect: "Bureaucratic language masks the horror - matricide reduced to project management."
    },
    
    "adfertur-impersonal": {
        title: "adfertur",
        translation: "it is reported",
        device: "Impersonal Passive",
        description: "The impersonal passive maintains distance - news arrives without named source.",
        effect: "Creates atmosphere of rumour and uncertainty - information filtering through palace."
    },
    
    "evasisse-escape": {
        title: "evasisse",
        translation: "had escaped",
        device: "Perfect Infinitive - Catastrophic News",
        description: "The perfect infinitive in indirect statement delivers the worst possible news succinctly.",
        effect: "Single word destroys Nero's plans - survival means everything has failed."
    },
    
    "ictu-levi": {
        title: "ictu levi",
        translation: "with light blow",
        device: "Minimising Injury",
        description: "'Light blow' emphasises how close yet how far from success - almost but not quite dead.",
        effect: "The lightness of injury makes failure more frustrating - so close to success."
    },
    
    "sauciam-wounded": {
        title: "sauciam",
        translation: "wounded",
        device: "Evidential Adjective",
        description: "She's wounded - physical proof of attack that can't be explained away as accident.",
        effect: "The wound becomes evidence - her body testifies to attempted murder."
    },
    
    "hactenus-adito": {
        title: "hactenus adito discrimine",
        translation: "danger approached to such extent",
        device: "Measured Proximity",
        description: "Phrase measures how close to death she came - near enough to know it was attempted murder.",
        effect: "Proximity to death means certainty of intent - she knows someone tried to kill her."
    },
    
    "ne-dubitaretur": {
        title: "ne auctor dubitaretur",
        translation: "that the author not be doubted",
        device: "Result Clause with Litotes",
        description: "Double negative construction - she knows exactly who tried to kill her.",
        effect: "Certainty of knowledge seals Nero's doom - she knows and he knows she knows."
    },
    
    "pavore-exanimis": {
        title: "pavore exanimis",
        translation: "lifeless with panic",
        device: "Physical Terror",
        description: "'Exanimis' (lifeless, breathless) shows panic's physical effect - Nero almost dead from fear.",
        effect: "The would-be killer is more 'dead' from fear than his wounded victim."
    },
    
    "iam-iamque": {
        title: "iam iamque",
        translation: "now, right now",
        device: "Temporal Reduplication",
        description: "Repetition of 'iam' intensifies immediacy - she's coming any second.",
        effect: "Creates breathless panic - revenge feels seconds away."
    },
    
    "adfore-imminent": {
        title: "adfore",
        translation: "would be present",
        device: "Future Infinitive of Threat",
        description: "Future infinitive makes her arrival feel inevitable and imminent.",
        effect: "Grammar itself creates approaching doom - she's not just coming, she's almost here."
    },
    
    "vindictae-revenge": {
        title: "vindictae properam",
        translation: "swift for revenge",
        device: "Personified Vengeance",
        description: "Agrippina becomes embodiment of vengeance itself, 'swift' suggesting supernatural speed.",
        effect: "Mother transforms into avenging fury - natural relation becomes supernatural threat."
    },
    
    "sive-tricolon": {
        title: "sive...vel...sive",
        translation: "whether...or...whether",
        device: "Tricolon of Options",
        description: "Three alternative scenarios of revenge, each targeting different power base.",
        effect: "Shows comprehensive panic - Nero imagines every possible avenue of retaliation."
    },
    
    "naufragium-list": {
        title: "naufragium et vulnus et interfectos amicos",
        translation: "shipwreck and wound and murdered friends",
        device: "Accumulation of Evidence",
        description: "List of proofs she could present - physical evidence, personal injury, dead witnesses.",
        effect: "Catalogues the damning evidence - each item another nail in Nero's coffin."
    },
    
    "obiciendo-gerund": {
        title: "obiciendo",
        translation: "by charging",
        device: "Ablative Gerund",
        description: "The gerund shows method - she'll destroy him through public accusation.",
        effect: "Legal language enters - this becomes trial by public opinion."
    },
    
    "quod-subsidium": {
        title: "quod contra subsidium sibi",
        translation: "what help against her for himself",
        device: "Desperate Question",
        description: "The question structure shows Nero seeking solutions in panic - what defence exists?",
        effect: "Rhetorical question emphasises helplessness - no obvious salvation exists."
    },
    
    "burrus-seneca": {
        title: "Burrus et Seneca",
        translation: "Burrus and Seneca",
        device: "Named Advisers",
        description: "The two senior advisers represent institutional wisdom and military power.",
        effect: "Even the empire's best minds and strongest force might not save him."
    },
    
    "expergens-waking": {
        title: "expergens",
        translation: "waking up",
        device: "Night-time Crisis",
        description: "Present participle shows he rouses them from sleep - middle-of-night emergency.",
        effect: "Urgency so great it breaks normal protocol - panic overrides propriety."
    },
    
    "incertum-gnaros": {
        title: "incertum an et ante gnaros",
        translation: "uncertain whether previously aware",
        device: "Narratorial Ambiguity",
        description: "Tacitus refuses to clarify whether advisers knew of plot - maintains mystery.",
        effect: "Ambiguity implicates without accusing - readers must judge complicity themselves."
    },
    
    "longum-silentium": {
        title: "longum utriusque silentium",
        translation: "long silence of both",
        device: "Eloquent Silence",
        description: "Their extended silence speaks louder than words - processing the catastrophe.",
        effect: "Silence becomes communication - they understand perfectly without speaking."
    },
    
    "ne-inriti": {
        title: "ne inriti dissuaderent",
        translation: "lest they dissuade in vain",
        device: "Negative Purpose Clause",
        description: "They don't speak for fear of futile opposition - recognising inevitability.",
        effect: "Shows their pragmatism - why oppose what can't be stopped?"
    },
    
    "eo-descensum": {
        title: "eo descensum",
        translation: "descended to that point",
        device: "Metaphor of Decline",
        description: "'Descensum' suggests moral and practical descent - situation has hit bottom.",
        effect: "Vertical metaphor shows how far things have fallen - descent into necessity."
    },
    
    "nisi-praeveniretur": {
        title: "nisi praeveniretur Agrippina",
        translation: "unless Agrippina were forestalled",
        device: "Conditional Survival",
        description: "Imperfect subjunctive in condition - kill or be killed logic emerges.",
        effect: "Binary choice crystallises - only one can survive."
    },
    
    "pereundum-gerundive": {
        title: "pereundum Neroni",
        translation: "Nero must die",
        device: "Gerundive of Necessity",
        description: "The gerundive with dative shows absolute necessity - death is certain.",
        effect: "Grammar itself makes death inevitable - language of doom."
    },
    
    "hactenus-promptius": {
        title: "hactenus promptius",
        translation: "more ready to this extent",
        device: "Limited Initiative",
        description: "Seneca acts but only 'to this extent' - carefully limited involvement.",
        effect: "Shows calculated participation - helping but maintaining distance."
    },
    
    "respiceret-looking": {
        title: "respiceret",
        translation: "looked back at",
        device: "Physical Communication",
        description: "Looking back at Burrus rather than speaking - visual consultation.",
        effect: "Even words are dangerous - communication through glances."
    },
    
    "sciscitaretur-enquire": {
        title: "sciscitaretur",
        translation: "enquired",
        device: "Formal Inquiry",
        description: "The formal verb for inquiry makes this official consultation about murder.",
        effect: "Bureaucratises assassination - murder becomes administrative question."
    },
    
    "imperanda-gerundive": {
        title: "imperanda caedes",
        translation: "murder to be ordered",
        device: "Gerundive Construction",
        description: "Gerundive makes murder seem like routine order to be given.",
        effect: "Reduces matricide to military command - just another order."
    },
    
    "caedes-murder": {
        title: "caedes",
        translation: "slaughter",
        device: "Brutal Diction",
        description: "'Caedes' is violent slaughter, not the euphemistic 'death' - brutally honest.",
        effect: "One word strips away pretence - this is murder, not execution."
    },
    
    "praetorianos-guard": {
        title: "praetorianos toti Caesarum domui obstrictos",
        translation: "praetorians bound to whole house of Caesars",
        device: "Institutional Loyalty",
        description: "Emphasis on 'whole house' - their oath isn't to individual but dynasty.",
        effect: "Institutional memory defeats personal command - tradition trumps current power."
    },
    
    "germanici-memory": {
        title: "memoresque Germanici",
        translation: "remembering Germanicus",
        device: "Historical Memory",
        description: "Germanicus's memory still commands loyalty decades after death.",
        effect: "The dead father protects the living daughter - memory as shield."
    },
    
    "progeniem-offspring": {
        title: "progeniem eius",
        translation: "his offspring",
        device: "Dynastic Language",
        description: "'Progenies' emphasises bloodline and legitimate descent.",
        effect: "Blood matters more than current power - genetics trumps politics."
    },
    
    "perpetraret-complete": {
        title: "perpetraret",
        translation: "should complete",
        device: "Jussive Subjunctive",
        description: "The subjunctive suggests what Anicetus should do - indirect command to kill.",
        effect: "Murder becomes someone else's responsibility - delegation of evil."
    },
    
    "anicetus-volunteer": {
        title: "Anicetus",
        translation: "Anicetus",
        device: "The Willing Executioner",
        description: "Anicetus emerges as eager participant - no reluctance, only enthusiasm.",
        effect: "Someone wants to commit matricide - evil finds its willing instrument."
    },
    
    "nihil-cunctatus": {
        title: "nihil cunctatus",
        translation: "not delaying at all",
        device: "Immediate Eagerness",
        description: "Zero hesitation - Anicetus jumps at the chance to complete the murder.",
        effect: "Enthusiasm for matricide shows depths of corruption."
    },
    
    "poscit-demands": {
        title: "poscit",
        translation: "demands",
        device: "Assertive Verb",
        description: "'Poscere' is to demand forcefully - Anicetus takes charge.",
        effect: "The freedman commands the emperor - inversion of hierarchy."
    },
    
    "sceleris-crime": {
        title: "summam sceleris",
        translation: "complete control of crime",
        device: "Crime as Project",
        description: "'Summa' (sum, total) makes crime sound like account to be balanced.",
        effect: "Murder becomes administrative task with project manager."
    },
    
    "ad-vocem": {
        title: "ad eam vocem",
        translation: "at that utterance",
        device: "Moment of Relief",
        description: "Specific moment when Nero's panic transforms to relief.",
        effect: "Pinpoints the instant salvation arrives - through a freedman's offer."
    },
    
    "illo-die": {
        title: "illo sibi die",
        translation: "on that day for himself",
        device: "Historic Day",
        description: "Marks this as the significant day - when Nero truly becomes emperor.",
        effect: "Perverse birthday - empire born through matricide."
    },
    
    "imperium-power": {
        title: "imperium",
        translation: "supreme power",
        device: "Ultimate Authority",
        description: "Uses the technical term for supreme Roman power - full imperial authority.",
        effect: "Links matricide to imperial power - mother's death enables true rule."
    },
    
    "auctorem-libertum": {
        title: "auctoremque tanti muneris libertum",
        translation: "freedman author of such gift",
        device: "Social Inversion",
        description: "A former slave gives the emperor his empire - complete social reversal.",
        effect: "Ultimate perversion - highest power comes from lowest source."
    },
    
    "profitetur-declares": {
        title: "profitetur",
        translation: "declares",
        device: "Public Acknowledgement",
        description: "Present tense makes declaration immediate - Nero publicly credits freedman.",
        effect: "Open acknowledgement of debt to slave - shameless gratitude."
    },
    
    "propere-quickly": {
        title: "propere",
        translation: "quickly",
        device: "Urgent Command",
        description: "Adverb emphasises speed needed - every moment matters.",
        effect: "Urgency drives action - death can't come fast enough."
    },
    
    "promptissimos-readiest": {
        title: "promptissimos",
        translation: "most ready",
        device: "Superlative Selection",
        description: "Superlative ensures only the most willing killers are chosen.",
        effect: "Selecting for enthusiasm - wants eager murderers."
    },
    
    "audito-ablative": {
        title: "audito venisse",
        translation: "having heard he had come",
        device: "Ablative Absolute",
        description: "Construction shows Nero's immediate response to Agerinus's arrival.",
        effect: "Triggers instant action - arrival prompts staged scene."
    },
    
    "agerinum-victim": {
        title: "Agerinum",
        translation: "Agerinus",
        device: "Innocent Messenger",
        description: "The freedman messenger becomes unwitting victim of staged plot.",
        effect: "Innocence sacrificed for narrative - messenger framed for master's crime."
    },
    
    "scaenam-ultro": {
        title: "scaenam ultro criminis",
        translation: "crime scene of his own accord",
        device: "Theatrical Metaphor",
        description: "'Scaena' explicitly makes this theatre - crime as performance.",
        effect: "Reality becomes staged drama - power creates its own truth."
    },
    
    "parat-present": {
        title: "parat",
        translation: "prepares",
        device: "Historic Present",
        description: "Present tense makes staging immediate - we watch the false scene created.",
        effect: "Immediacy makes us witnesses to fabrication of evidence."
    },
    
    "dum-temporal": {
        title: "dum mandata perfert",
        translation: "while carrying out instructions",
        device: "Temporal Clause",
        description: "Shows simultaneous action - while Agerinus speaks, Nero plants evidence.",
        effect: "Betrayal happens during service - stabbed while serving."
    },
    
    "abicit-inter": {
        title: "abicit inter pedes",
        translation: "throws between feet",
        device: "Staged Evidence",
        description: "Physical action of planting sword - specific placement for discovery.",
        effect: "We watch false evidence being planted - crime manufactured before our eyes."
    },
    
    "quasi-deprehenso": {
        title: "quasi deprehenso",
        translation: "as if caught",
        device: "False Pretence",
        description: "'Quasi' signals the pretence - acting as if something true that isn't.",
        effect: "Grammar itself reveals the lie - the 'as if' exposes fabrication."
    },
    
    "vincla-chains": {
        title: "vincla",
        translation: "chains",
        device: "Physical Restraint",
        description: "Chains make the arrest visually dramatic and seemingly legitimate.",
        effect: "Props for the performance - chains 'prove' guilt."
    },
    
    "exitium-destruction": {
        title: "exitium principis",
        translation: "destruction of emperor",
        device: "Elevated Language",
        description: "'Exitium' is complete destruction - makes fake threat sound apocalyptic.",
        effect: "Inflates false threat to justify real murder."
    },
    
    "molitam-attempted": {
        title: "molitam",
        translation: "having attempted",
        device: "Perfect Participle",
        description: "Participle suggests completed attempt - she actively tried to kill.",
        effect: "Creates false history - inventing crimes that never happened."
    },
    
    "pudore-sponte": {
        title: "pudore...sponte mortem sumpsisse",
        translation: "through shame chose death voluntarily",
        device: "False Narrative",
        description: "Constructs story of shame-driven suicide - honourable response to dishonourable act.",
        effect: "Reverses victim and criminal - she dies as failed assassin, not murdered mother."
    },
    
    "confingeret-fabricate": {
        title: "confingeret",
        translation: "might fabricate",
        device: "Subjunctive of Purpose",
        description: "The verb 'confingere' means to fabricate, forge - explicitly about creating lies.",
        effect: "Tacitus exposes the lie in the grammar - this is fabrication, not fact."
    }
