// Analysis data for Avunculus Meus Section 1 interactive text
const textData = {
    "ante-lucem": {
        title: "ante lucem",
        translation: '"before dawn"',
        device: "Temporal Setting",
        description: "The opening phrase immediately establishes the uncle's extraordinary dedication - beginning work before daylight breaks.",
        effect: "Creates an impression of almost superhuman commitment to duty and learning, setting the tone for the entire portrait of relentless scholarship."
    },

    "ibat": {
        title: "ibat",
        translation: '"he used to go"',
        device: "Habitual Imperfect",
        description: "The imperfect tense indicates this was not a one-off occurrence but his regular, established routine.",
        effect: "Emphasises the uncle's consistency and reliability - this demanding schedule was maintained day after day."
    },

    "vespasianum-imperatorem": {
        title: "Vespasianum imperatorem",
        translation: '"the emperor Vespasian"',
        device: "Imperial Context",
        description: "The placement of the emperor's name emphasises the high level at which Pliny the Elder operated within the Roman administration.",
        effect: "Establishes the uncle's importance and proximity to power, whilst also explaining why such early starts were necessary."
    },

    "nam-ille-quoque": {
        title: "nam ille quoque noctibus utebatur",
        translation: '"for he also used the nights"',
        device: "Parenthetical Comment",
        description: "Pliny inserts this explanatory aside to justify his uncle's early start - Vespasian himself worked through the night, making pre-dawn meetings necessary.",
        effect: "The parenthetical structure creates intimacy between narrator and reader, whilst emphasising the emperor's own dedication to work. This detail validates Pliny the Elder's extreme schedule as appropriate court behaviour."
    },

    "deinde": {
        title: "deinde",
        translation: '"then, next"',
        device: "Temporal Sequencing",
        description: "This transitional adverb structures the narrative chronologically, showing how the uncle's day progressed systematically.",
        effect: "Creates a sense of methodical progression through a carefully organised daily routine, reinforcing the impression of disciplined time management."
    },

    "officium-delegatum": {
        title: "officium sibi delegatum",
        translation: '"the duty delegated to him"',
        device: "Passive Participle",
        description: "The perfect passive participle 'delegatum' emphasises that this was official responsibility entrusted to him by higher authority.",
        effect: "Shows the uncle's position within the imperial bureaucracy whilst suggesting he fulfilled duties imposed by others before pursuing his own scholarly interests."
    },

    "reversus": {
        title: "reversus",
        translation: '"having returned"',
        device: "Perfect Participle",
        description: "The participle creates a temporal sequence, showing the completion of one action before the beginning of another.",
        effect: "Emphasises the clear division between public duty and private scholarly pursuit - only after completing official business could learning begin."
    },

    "domum": {
        title: "domum",
        translation: '"home"',
        device: "Accusative of Motion",
        description: "The construction indicates movement towards a destination, here used without a preposition in the idiomatic manner.",
        effect: "The simple, direct expression suggests home was truly a refuge where the uncle could pursue his real passion for learning."
    },

    "reliquum-tempus": {
        title: "reliquum tempus studiis dabat",
        translation: '"he devoted the remaining time to studies"',
        device: "Key Vocabulary",
        description: "The phrase 'reliquum tempus' emphasises how Pliny the Elder organised his entire day around learning - even official duties were merely interruptions to his true passion.",
        effect: "By framing study time as 'remaining' rather than primary, Pliny subtly shows his uncle's priorities: scholarship filled every available moment between necessary obligations."
    },

    "studiis": {
        title: "studiis",
        translation: '"to studies"',
        device: "Dative of Purpose",
        description: "The dative case with 'dare' expresses the allocation or dedication of time to scholarly pursuits.",
        effect: "The grammatical construction emphasises deliberate choice - the uncle actively chose to devote his free time to learning rather than leisure."
    },

    "saepe": {
        title: "saepe",
        translation: '"often"',
        device: "Frequency Marker",
        description: "This adverb indicates that the following routine was regular but not invariable, adding realistic detail to the portrait.",
        effect: "Prevents the account from seeming impossibly rigid whilst still emphasising the uncle's general dedication to maximising study opportunities."
    },

    "cibum": {
        title: "cibum",
        translation: '"food"',
        device: "Simple Vocabulary",
        description: "The basic word 'cibum' rather than more elaborate terms suggests the uncle's practical, unadorned approach to meals.",
        effect: "Implies that food was viewed functionally rather than as a source of pleasure - fuel for further study rather than an end in itself."
    },

    "qui-veterum-more": {
        title: "qui veterum more interdiu levis et facilis erat",
        translation: '"which in the manner of the ancients was light and easy during the day"',
        device: "Relative Clause",
        description: "This long relative clause describing food customs interrupts the main narrative flow, creating a scholarly digression typical of Pliny's epistolary style.",
        effect: "The technical detail about ancestral dining habits demonstrates Pliny's own learned approach whilst characterising his uncle as someone who followed traditional Roman values even in eating."
    },

    "aestate": {
        title: "aestate",
        translation: '"in summer"',
        device: "Temporal Limitation",
        description: "The ablative of time specifies when this particular routine occurred, showing awareness of seasonal variation.",
        effect: "Adds realistic detail whilst suggesting the uncle adapted his scholarly methods to practical circumstances - even obsession had rational limits."
    },

    "si-quid-otii": {
        title: "si quid otii erat",
        translation: '"if there was any free time"',
        device: "Conditional Clause",
        description: "The conditional construction with partitive genitive 'quid otii' suggests that leisure time was scarce and precious.",
        effect: "Emphasises how busy the uncle's schedule was - even small periods of freedom were seized as opportunities for study."
    },

    "iacebat": {
        title: "iacebat",
        translation: '"he would lie"',
        device: "Imperfect of Custom",
        description: "The imperfect tense indicates this was his habitual practice when conditions allowed.",
        effect: "Shows that even physical relaxation became an opportunity for intellectual activity - rest and study were combined."
    },

    "sole": {
        title: "sole",
        translation: '"sun"',
        device: "Natural Setting",
        description: "The simple reference to lying in the sun suggests a practical Roman approach to health and comfort.",
        effect: "Creates an image of scholarly activity conducted in natural surroundings, combining physical wellbeing with intellectual pursuit."
    },

    "liber": {
        title: "liber",
        translation: '"a book"',
        device: "Central Motif",
        description: "Books appear throughout this passage as the constant companions of the uncle's daily routine.",
        effect: "The recurring presence of books emphasises how thoroughly learning permeated every aspect of life - they were never absent from any activity."
    },

    "legebatur": {
        title: "legebatur",
        translation: '"was being read"',
        device: "Imperfect Passive",
        description: "The passive construction indicates that someone else was reading aloud whilst the uncle listened and processed the information.",
        effect: "Shows the uncle's efficiency in using human resources to maximise learning - even relaxation time became productive through delegation."
    },

    "adnotabat-excerpebat": {
        title: "adnotabat excerpebatque",
        translation: '"he made notes and extracted (passages)"',
        device: "Asyndeton",
        description: "The rapid succession of verbs connected only by '-que' creates a sense of continuous, methodical activity.",
        effect: "The breathless rhythm mirrors the uncle's relentless scholarly activity - even leisure time was productive and systematic."
    },

    "nihil-non": {
        title: "nihil...non",
        translation: '"nothing...not"',
        device: "Double Negative",
        description: "The emphatic double negative construction 'nihil...quod non excerperet' strengthens the assertion that absolutely everything was useful.",
        effect: "This creates an absolute statement that emphasises the uncle's thoroughness and optimistic approach to learning - no text was beneath his attention."
    },

    "etiam": {
        title: "etiam",
        translation: '"even, also"',
        device: "Emphatic Particle",
        description: "This particle strengthens the following statement, suggesting the uncle went beyond normal scholarly practice.",
        effect: "Introduces the uncle's personal philosophy about books, marking this as particularly characteristic of his generous intellectual approach."
    },

    "solebat": {
        title: "solebat",
        translation: '"he was accustomed to"',
        device: "Imperfect of Custom",
        description: "This verb emphasises that saying this was the uncle's regular habit, not an occasional remark.",
        effect: "Shows this optimistic view of learning was a fundamental part of his character - he consistently expressed faith in the value of all knowledge."
    },

    "nullum-librum": {
        title: "nullum librum esse tam malum",
        translation: '"no book to be so bad"',
        device: "Reported Speech",
        description: "Pliny reports his uncle's own words about the value of books, using indirect speech to present his scholarly philosophy.",
        effect: "By quoting the uncle directly, Pliny gives authority to this optimistic view of learning whilst revealing his uncle's generous intellectual character."
    },

    "tam-malum": {
        title: "tam malum",
        translation: '"so bad"',
        device: "Hyperbolic Expression",
        description: "The intensifying 'tam' with 'malum' creates an extreme case to make the philosophical point stronger.",
        effect: "By choosing the most negative possible example, the uncle's saying becomes more persuasive and memorable."
    },

    "non-aliqua": {
        title: "non aliqua parte prodesset",
        translation: '"would not be useful in some part"',
        device: "Litotes",
        description: "The understated negative 'non...prodesset' rather than a positive assertion creates modest, scholarly tone.",
        effect: "This restrained language reflects Roman intellectual humility whilst making the point more persuasively - even bad books have redeeming features."
    },

    "plerumque": {
        title: "plerumque",
        translation: '"generally, usually"',
        device: "Qualification",
        description: "This adverb adds realistic detail by showing the uncle's routine was regular but not absolutely invariable.",
        effect: "Prevents the account from seeming impossibly rigid whilst maintaining the impression of consistent scholarly dedication."
    },

    "aqua-frigida": {
        title: "aqua frigida",
        translation: '"cold water"',
        device: "Roman Custom",
        description: "Cold water bathing was considered healthy and invigorating in Roman culture, showing the uncle's traditional approach to physical fitness.",
        effect: "Suggests the uncle maintained his body as efficiently as his mind - practical health measures supporting continued scholarly activity."
    },

    "gustabat": {
        title: "gustabat",
        translation: '"he would have a snack"',
        device: "Modest Consumption",
        description: "The verb suggests light eating rather than full meals, indicating the uncle's practical approach to sustaining energy.",
        effect: "Shows how even eating was subordinated to scholarly goals - just enough nourishment to continue studying effectively."
    },

    "minimum": {
        title: "minimum",
        translation: '"for a very short time"',
        device: "Temporal Limitation",
        description: "The superlative emphasises how briefly the uncle allowed himself to sleep during the day.",
        effect: "Demonstrates his reluctance to 'waste' time on rest - even necessary sleep was minimised to maximise study opportunities."
    },

    "mox": {
        title: "mox",
        translation: '"soon"',
        device: "Temporal Immediacy",
        description: "This adverb emphasises how quickly the uncle returned to scholarly activity after his brief rest.",
        effect: "Shows his eagerness to resume learning - rest was merely a brief interruption before the real business of study continued."
    },

    "quasi-alio-die": {
        title: "quasi alio die",
        translation: '"as if on another day"',
        device: "Simile",
        description: "The comparison suggests that after his brief rest, Pliny the Elder approached study with renewed energy as if beginning afresh.",
        effect: "This simile emphasises the uncle's remarkable stamina and dedication - he could refresh himself so completely that afternoon study felt like a new beginning."
    },

    "cenae-tempus": {
        title: "cenae tempus",
        translation: '"dinnertime"',
        device: "Temporal Boundary",
        description: "This phrase marks the limit of the afternoon study session, showing how the uncle structured his day around meals.",
        effect: "Suggests even dinner was not an end to learning but merely a transition to a different mode of study - the day's intellectual activity continued."
    },

    "quidem-cursim": {
        title: "et quidem cursim",
        translation: '"and indeed hastily"',
        device: "Emphatic Addition",
        description: "'Quidem' adds emphasis whilst 'cursim' provides a final detail about the dinner-time reading being done quickly.",
        effect: "The concluding detail suggests even social meals were opportunities for learning, though necessarily rushed - showing how study permeated every aspect of life."
    }
};
