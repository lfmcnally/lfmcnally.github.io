// Analysis data for Tacitus Annals 14.3 interactive text
const textData = {
    "igitur-transition": {
        title: "igitur",
        translation: "therefore",
        device: "Logical Connector",
        description: "This conjunction marks the transition from contemplation to action. 'Igitur' suggests logical consequence - the decision flows from what preceded.",
        effect: "Creates sense of inevitability - matricide becomes the 'logical' conclusion to the situation described."
    },
    
    "vitare-secretos": {
        title: "vitare secretos eius congressus",
        translation: "to avoid secret meetings with her",
        device: "Psychological Distancing",
        description: "The infinitive 'vitare' (to avoid) with 'secretos congressus' (private meetings) shows Nero's first strategy - physical and emotional separation.",
        effect: "Reveals the psychological preparation for murder - first dehumanise through distance, then destroy."
    },
    
    "abscedentem-participle": {
        title: "abscedentem",
        translation: "going away",
        device: "Present Participle",
        description: "The accusative participle shows Agrippina in the act of departing - Nero watches her movements whilst planning her death.",
        effect: "Creates dramatic irony - he observes her living movements whilst plotting to make them cease forever."
    },
    
    "tusculanum-antiatem": {
        title: "Tusculanum vel Antiatem",
        translation: "Tusculan or Antian",
        device: "Geographical Specificity",
        description: "Real estates where imperial family members could retreat. The variation 'vel' suggests she moves between properties.",
        effect: "Shows Agrippina's restlessness and Nero's surveillance - he tracks her movements across multiple locations."
    },
    
    "laudare-irony": {
        title: "laudare",
        translation: "to praise",
        device: "Dramatic Irony",
        description: "The infinitive 'laudare' (to praise) is deeply ironic - Nero praises her absences whilst planning her permanent absence.",
        effect: "Shows the depth of hypocrisy - public praise masks private murder plans."
    },
    
    "otium-leisure": {
        title: "otium",
        translation: "leisure",
        device: "Loaded Term",
        description: "'Otium' (leisure, retirement) is what Romans sought in old age. Nero pretends to approve her seeking it naturally.",
        effect: "Makes murder seem like granting her wish for permanent rest - a twisted gift of eternal 'otium'."
    },
    
    "postremo-finally": {
        title: "postremo",
        translation: "finally",
        device: "Temporal Climax",
        description: "This adverb marks the end of deliberation and beginning of resolution - the decision point has arrived.",
        effect: "Creates narrative tension - 'finally' suggests long consideration ending in fatal resolution."
    },
    
    "ubicumque-anywhere": {
        title: "ubicumque",
        translation: "wherever",
        device: "Indefinite Location",
        description: "The indefinite 'wherever' shows Agrippina has become universally intolerable - location doesn't matter.",
        effect: "Makes her existence itself the problem, not her presence - she cannot be far enough away."
    },
    
    "praegravem-burden": {
        title: "praegravem",
        translation: "thoroughly burdensome",
        device: "Compound Intensification",
        description: "The prefix 'prae-' intensifies 'gravis' (heavy) - she's not just burdensome but excessively so.",
        effect: "Dehumanises Agrippina into a weight to be removed rather than a mother to be loved."
    },
    
    "interficere-murder": {
        title: "interficere constituit",
        translation: "decided to kill",
        device: "Matter-of-Fact Murder",
        description: "The stark infinitive 'interficere' (to kill) with 'constituit' (decided) presents matricide as simple decision.",
        effect: "The clinical language strips the decision of emotional weight - murder becomes administration."
    },
    
    "hactenus-consultans": {
        title: "hactenus consultans",
        translation: "deliberating only this far",
        device: "Limited Deliberation",
        description: "'Hactenus' (only so far) shows the limits of consideration - not whether to kill but how.",
        effect: "Shows moral blindness - the only question is method, not morality."
    },
    
    "tricolon-methods": {
        title: "veneno an ferro vel qua alia vi",
        translation: "by poison or sword or some other force",
        device: "Tricolon",
        description: "Three murder methods presented in ascending vagueness - specific (poison), specific (sword), general (other violence).",
        effect: "Reduces matricide to multiple choice question - technical problem rather than moral crisis."
    },
    
    "placuit-euphemism": {
        title: "placuit",
        translation: "it pleased/was decided",
        device: "Euphemistic Verb",
        description: "'Placuit' literally means 'it pleased' but here means 'was decided' - pleasure and murder grotesquely linked.",
        effect: "Makes choosing a murder method sound like selecting wine - aesthetic choice rather than atrocity."
    },
    
    "venenum-poison": {
        title: "venenum",
        translation: "poison",
        device: "Traditional Method",
        description: "Poison was the classic Roman method for eliminating rivals - subtle, deniable, with precedent.",
        effect: "Shows Nero initially choosing the conventional path - following imperial tradition of poisoning."
    },
    
    "si-daretur": {
        title: "si daretur",
        translation: "if it were given",
        device: "Conditional Reasoning",
        description: "The imperfect subjunctive in conditional shows hypothetical planning - working through scenarios.",
        effect: "Makes murder seem rational and considered - careful planning rather than passionate crime."
    },
    
    "casum-chance": {
        title: "casum",
        translation: "chance",
        device: "Deniability Concern",
        description: "The key concern is making murder look like 'casus' (accident, chance) - appearance matters more than act.",
        effect: "Shows priority is reputation not morality - the crime is getting caught, not killing mother."
    },
    
    "tali-britannici": {
        title: "tali iam Britannici exitio",
        translation: "with such destruction of Britannicus already",
        device: "Historical Precedent",
        description: "Reference to the recent poisoning of Britannicus - the same method twice would be too obvious.",
        effect: "Shows how previous murders constrain future ones - criminal precedent limits criminal options."
    },
    
    "temptare-bribe": {
        title: "temptare",
        translation: "to try/bribe",
        device: "Euphemism for Corruption",
        description: "'Temptare' (to test, try) euphemistically means to bribe or corrupt - testing loyalty with money.",
        effect: "Shows the assumed venality of everyone - loyalty is just a matter of price."
    },
    
    "arduum-difficult": {
        title: "arduum",
        translation: "difficult",
        device: "Understatement",
        description: "Calling bribing servants to kill their mistress merely 'difficult' rather than monstrous shows moral blindness.",
        effect: "Technical difficulty replaces moral impossibility - practical not ethical concerns dominate."
    },
    
    "mulieris-usu": {
        title: "mulieris usu scelerum",
        translation: "of a woman experienced in crimes",
        device: "Experience as Defence",
        description: "Agrippina's criminal experience ('usu scelerum') ironically becomes her protection - she knows the tricks.",
        effect: "Shows how corruption breeds paranoia which breeds survival skills - evil teaches self-defence."
    },
    
    "insidias-plots": {
        title: "insidias",
        translation: "plots",
        device: "Military Metaphor",
        description: "'Insidiae' originally meant military ambush - domestic murder described in warfare terms.",
        effect: "Transforms palace into battlefield where mother and son are enemy combatants."
    },
    
    "intentae-alert": {
        title: "intentae",
        translation: "on guard",
        device: "Stretched Metaphor",
        description: "From 'intendere' (to stretch) - like a bow stretched ready to fire, Agrippina is constantly alert.",
        effect: "Creates image of exhausting vigilance - she lives in perpetual defensive tension."
    },
    
    "ipsa-emphasis": {
        title: "ipsa",
        translation: "she herself",
        device: "Emphatic Pronoun",
        description: "The intensive pronoun emphasises Agrippina's personal precautions beyond just loyal servants.",
        effect: "Shows layers of defence - not just external protection but self-protection too."
    },
    
    "praesumendo-remedia": {
        title: "praesumendo remedia",
        translation: "by taking antidotes in advance",
        device: "Prophylactic Protection",
        description: "The gerund shows ongoing action - she regularly takes antidotes (mithridatism) as prevention.",
        effect: "Reveals the normalisation of paranoia - taking antidotes is routine, like daily vitamins against murder."
    },
    
    "munierat-fortified": {
        title: "munierat",
        translation: "had fortified",
        device: "Military Metaphor",
        description: "'Munire' means to fortify with walls - her body becomes a fortress against poison.",
        effect: "Makes Agrippina's body a castle under siege - physical fortification against chemical assault."
    },
    
    "ferrum-caedes": {
        title: "ferrum et caedes",
        translation: "sword and slaughter",
        device: "Hendiadys",
        description: "Two nouns expressing one idea - violent murder. The pairing emphasises the brutality of this option.",
        effect: "The harsh sounds and violent imagery make this option seem too crude for sophisticated criminals."
    },
    
    "quonam-modo": {
        title: "quonam modo",
        translation: "in what way",
        device: "Interrogative Emphasis",
        description: "The enclitic '-nam' adds emphasis to the question - not just 'how' but 'how on earth' could it be hidden.",
        effect: "Shows the apparent impossibility of concealing violent murder - the problem seems unsolvable."
    },
    
    "occultaretur-concealed": {
        title: "occultaretur",
        translation: "could be concealed",
        device: "Passive Subjunctive",
        description: "The imperfect subjunctive passive suggests ongoing concealment would be needed - not just the act but aftermath.",
        effect: "Shows concern extends beyond murder to cover-up - the crime continues after death."
    },
    
    "nemo-absolute": {
        title: "nemo",
        translation: "no one",
        device: "Absolute Negation",
        description: "'Nemo' is more emphatic than 'non quis' - absolutely nobody could solve this problem.",
        effect: "Creates sense of impossible puzzle until Anicetus provides the solution."
    },
    
    "ne-fear": {
        title: "ne quis",
        translation: "that someone",
        device: "Fear Clause",
        description: "The 'ne' clause expresses fear that someone chosen might refuse - even finding willing killers is risky.",
        effect: "Shows the isolation of tyranny - even ordering murder is dangerous when you can't trust anyone."
    },
    
    "tanto-facinori": {
        title: "tanto facinori",
        translation: "for such a great crime",
        device: "Euphemistic Greatness",
        description: "Calling matricide a 'great' crime (tantum facinus) perversely makes it sound grand rather than evil.",
        effect: "Language elevates atrocity to epic deed - murder becomes magnificent in its monstrosity."
    },
    
    "delectus-chosen": {
        title: "delectus",
        translation: "chosen",
        device: "Military Selection",
        description: "'Delectus' is military term for levy/selection of soldiers - choosing an assassin like recruiting troops.",
        effect: "Continues militarisation of domestic murder - this is war requiring special forces."
    },
    
    "sperneret-reject": {
        title: "sperneret",
        translation: "might reject",
        device: "Contemptuous Refusal",
        description: "'Spernere' implies contemptuous rejection - the assassin might be disgusted enough to refuse.",
        effect: "Shows even Nero recognises the horror - some crimes are too much even for criminals."
    },
    
    "obtulit-offered": {
        title: "obtulit",
        translation: "offered",
        device: "Voluntary Evil",
        description: "The verb shows Anicetus volunteers his plan - not commanded but freely given evil counsel.",
        effect: "Makes Anicetus complicit rather than coerced - he's eager accomplice not reluctant servant."
    },
    
    "ingenium-plan": {
        title: "ingenium",
        translation: "clever plan",
        device: "Perverse Creativity",
        description: "'Ingenium' means natural talent or clever idea - murder becomes opportunity for innovation.",
        effect: "Transforms atrocity into artistry - creative genius applied to matricide."
    },
    
    "anicetus-freedman": {
        title: "Anicetus libertus",
        translation: "Anicetus the freedman",
        device: "Social Inversion",
        description: "A former slave will engineer the death of a noble matron - social hierarchy inverted through crime.",
        effect: "Shows how imperial corruption empowers the servile while destroying the noble."
    },
    
    "classi-praefectus": {
        title: "classi apud Misenum praefectus",
        translation: "commander of the fleet at Misenum",
        device: "Technical Authority",
        description: "His naval command provides both expertise and resources - professional qualification for maritime murder.",
        effect: "Makes murder seem technically feasible - he has the knowledge and means."
    },
    
    "pueritiae-educator": {
        title: "pueritiae Neronis educator",
        translation: "tutor of Nero's boyhood",
        device: "Perverted Pedagogy",
        description: "The childhood teacher returns to teach a final lesson - how to kill mother.",
        effect: "Corrupts the sacred teacher-student bond - education twisted into instruction in evil."
    },
    
    "mutuis-odiis": {
        title: "mutuis odiis",
        translation: "with mutual hatred",
        device: "Reciprocal Hostility",
        description: "The hatred is 'mutual' - both Anicetus and Agrippina hate each other, making him motivated accomplice.",
        effect: "Personal vendetta combines with professional service - private hatred enables public crime."
    },
    
    "invisus-hated": {
        title: "invisus",
        translation: "hated",
        device: "Passive Hostility",
        description: "The passive participle shows he is hated by Agrippina - their enmity has history.",
        effect: "Provides psychological motivation - this is revenge as well as service."
    },
    
    "ergo-therefore": {
        title: "ergo",
        translation: "therefore",
        device: "Logical Progression",
        description: "Presents the ship plan as logical conclusion from Anicetus's qualifications - expertise leads to solution.",
        effect: "Makes murder seem reasonable consequence of matching skills to needs."
    },
    
    "navem-ship": {
        title: "navem",
        translation: "ship",
        device: "Instrument of Death",
        description: "The ship transforms from vehicle to weapon - transportation becomes termination.",
        effect: "Perverts the ship's purpose - what should carry to safety will deliver to death."
    },
    
    "componi-constructed": {
        title: "componi",
        translation: "be constructed",
        device: "Artificial Creation",
        description: "'Componi' suggests careful construction - this is engineered death, not accident.",
        effect: "Shows premeditation through preparation - building the murder weapon in advance."
    },
    
    "cuius-pars": {
        title: "cuius pars",
        translation: "part of which",
        device: "Partial Collapse",
        description: "Only part will collapse - sophisticated engineering to ensure targeted destruction.",
        effect: "Shows technical precision - not random destruction but calculated catastrophe."
    },
    
    "ipso-mari": {
        title: "ipso in mari",
        translation: "in the sea itself",
        device: "Emphatic Location",
        description: "'Ipso' emphasises the sea as location - the crime scene that destroys evidence.",
        effect: "The sea becomes both weapon and accomplice - hiding the crime it helps commit."
    },
    
    "per-artem": {
        title: "per artem",
        translation: "through skill",
        device: "Technical Expertise",
        description: "'Ars' (skill, craft) makes murder into technical achievement requiring professional competence.",
        effect: "Transforms killing into craft - murder as engineering problem requiring expertise."
    },
    
    "soluta-loosened": {
        title: "soluta",
        translation: "loosened",
        device: "Euphemistic Dissolution",
        description: "The participle 'soluta' (loosened, released) sounds gentle - like untying rather than destroying.",
        effect: "Sanitises violence through soft language - murder becomes mere 'loosening'."
    },
    
    "effunderet-cast": {
        title: "effunderet",
        translation: "would cast out",
        device: "Violent Ejection",
        description: "'Effundere' means to pour out - Agrippina becomes liquid to be spilled.",
        effect: "Dehumanises victim into substance to be disposed of - mother becomes waste water."
    },
    
    "ignaram-unaware": {
        title: "ignaram",
        translation: "unaware",
        device: "Innocent Victim",
        description: "Agrippina's ignorance makes her vulnerable - despite all precautions, she won't expect this.",
        effect: "Adds pathos - for all her paranoia and preparation, she'll be caught completely off guard."
    },
    
    "nihil-capax": {
        title: "nihil tam capax fortuitorum",
        translation: "nothing so capable of accidents",
        device: "Natural Alibi",
        description: "The sea's capacity for accidents provides perfect cover - nature notorious for random death.",
        effect: "Makes murder deniable through natural precedent - the sea kills regularly without human help."
    },
    
    "mare-sea": {
        title: "mare",
        translation: "sea",
        device: "Elemental Force",
        description: "The sea becomes character in the plot - vast, unpredictable, and lethal.",
        effect: "Nature becomes accomplice to human crime - the elements enlisted in evil."
    },
    
    "si-naufragio": {
        title: "si naufragio",
        translation: "if by shipwreck",
        device: "Conditional Cover-up",
        description: "The conditional presents the cover story - 'if' she dies by shipwreck (which they'll ensure).",
        effect: "Shows the pre-planned narrative - the lie prepared before the crime."
    },
    
    "intercepta-euphemism": {
        title: "intercepta",
        translation: "carried off",
        device: "Euphemism for Death",
        description: "'Intercepta' (intercepted, carried off) avoids saying 'killed' - death as interruption.",
        effect: "Continues linguistic sanitisation - even in planning, they avoid naming the deed."
    },
    
    "rhetorical-question": {
        title: "quem adeo iniquum",
        translation: "who so unjust",
        device: "Rhetorical Question",
        description: "The question assumes its answer - no one would be so unreasonable as to suspect murder.",
        effect: "Uses logic to justify illogic - reasonable argument for unreasonable act."
    },
    
    "sceleri-crime": {
        title: "sceleri",
        translation: "to crime",
        device: "Frank Admission",
        description: "Suddenly using 'scelus' (crime) openly - momentary honesty about what they're planning.",
        effect: "Brief breakthrough of truth in ocean of euphemism - they know it's crime."
    },
    
    "adsignet-attribute": {
        title: "adsignet",
        translation: "would assign",
        device: "False Attribution",
        description: "To 'assign' to crime what nature did - the absurdity of blaming human action for natural disaster.",
        effect: "Makes suspicion seem paranoid - only conspiracy theorists would see murder in accident."
    },
    
    "quod-venti": {
        title: "quod venti et fluctus",
        translation: "what winds and waves",
        device: "Natural Forces",
        description: "Winds and waves personified as actors - they will have 'committed' the crime.",
        effect: "Transfers agency from humans to nature - the elements become the killers."
    },
    
    "deliquerint-fault": {
        title: "deliquerint",
        translation: "will have committed",
        device: "Transferred Guilt",
        description: "The verb 'delinquere' (to fail, commit crime) attributes moral failing to natural forces.",
        effect: "Absurdly makes nature guilty to make humans innocent - winds and waves as criminals."
    },
    
    "additurum-future": {
        title: "additurum",
        translation: "would add",
        device: "Future Performance",
        description: "Future participle shows planned hypocrisy - the mourning performance already scripted.",
        effect: "Shows complete cynicism - grief planned before the death, mourning before murder."
    },
    
    "defunctae-euphemism": {
        title: "defunctae",
        translation: "deceased",
        device: "Respectful Euphemism",
        description: "'Defuncta' (having finished with life) sounds respectful - proper term for honoured dead.",
        effect: "The respect in language contrasts with disrespect in deed - honouring in words while murdering in action."
    },
    
    "templum-aras": {
        title: "templum et aras",
        translation: "temple and altars",
        device: "Religious Hypocrisy",
        description: "Temple and altars represent highest religious honour - deification of the murdered mother.",
        effect: "Ultimate perversion - transforming victim into goddess to hide making her a corpse."
    },
    
    "cetera-vague": {
        title: "cetera",
        translation: "other things",
        device: "Vague Accumulation",
        description: "'Cetera' (the rest, other things) vaguely suggests endless honours without specifying.",
        effect: "Shows the emptiness of planned gestures - unlimited hollow honours to mask unlimited evil."
    },
    
    "ostentandae-pietati": {
        title: "ostentandae pietati",
        translation: "for displaying filial duty",
        device: "Gerundive of Purpose",
        description: "The gerundive shows purpose - these honours exist specifically 'for display' of duty that doesn't exist.",
        effect: "Makes clear this is performance not piety - theatrical grief to hide theatrical murder."
    }
};
