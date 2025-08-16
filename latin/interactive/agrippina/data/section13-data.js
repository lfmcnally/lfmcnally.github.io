// Analysis data for Tacitus Annals 14.13 interactive text
const textData = {
    "tamen-opening": {
        title: "tamen",
        translation: "however",
        device: "Transitional Adversative",
        description: "Opens with contrast - despite everything, he still hesitates. Links back whilst marking new psychological phase.",
        effect: "Shows lingering conscience or fear - even a matricide can feel anxiety."
    },
    
    "cunctari-delay": {
        title: "cunctari",
        translation: "to delay",
        device: "Psychological Hesitation",
        description: "Infinitive captures ongoing hesitation - the guilty conscience manifests as procrastination.",
        effect: "Delay reveals inner turmoil - the body resists what the mind has done."
    },
    
    "campaniae-location": {
        title: "in oppidis Campaniae",
        translation: "in the towns of Campania",
        device: "Geographic Lingering",
        description: "Multiple towns, not just Baiae - wandering from place to place avoiding Rome.",
        effect: "Physical wandering mirrors mental uncertainty - can't settle anywhere."
    },
    
    "quonam-anxious": {
        title: "quonam modo...an...an",
        translation: "in what way...whether...or",
        device: "Triple Indirect Question",
        description: "Three anxious questions pile up - how to enter, will Senate obey, will people love?",
        effect: "Cascading anxieties reveal guilty conscience - knows he deserves hatred."
    },
    
    "obsequium-studia": {
        title: "obsequium senatus...studia plebis",
        translation: "obedience of Senate...affection of people",
        device: "Political Duality",
        description: "Seeks both institutional submission and popular love - tyrant's impossible dream.",
        effect: "Wants both fear and love - the contradictory desires of every despot."
    },
    
    "anxius-nervous": {
        title: "anxius",
        translation: "anxious",
        device: "Psychological State",
        description: "Explicitly names his mental state - anxiety after matricide, not triumph.",
        effect: "The matricide is nervous, not confident - crime brings fear, not freedom."
    },
    
    "deterrimus-superlative": {
        title: "deterrimus quisque",
        translation: "all the very worst",
        device: "Superlative Condemnation",
        description: "Absolute superlative - not just bad, but the worst possible people.",
        effect: "Moral bottom-feeders surround him - evil attracts evil."
    },
    
    "quorum-fecundior": {
        title: "quorum non alia regia fecundior",
        translation: "of whom no other palace more fertile",
        device: "Metaphorical Fertility",
        description: "Palace as breeding ground for vileness - architectural womb of evil.",
        effect: "Nero's court produces moral monsters - corruption breeds corruption."
    },
    
    "invisum-accensum": {
        title: "invisum...accensum",
        translation: "hated...inflamed",
        device: "Antithetical Emotions",
        description: "Agrippina hated, so her death inflames love - perverse emotional logic.",
        effect: "Makes matricide seem popular - killing mother increases approval."
    },
    
    "iret-intrepidus": {
        title: "iret intrepidus",
        translation: "he should go fearlessly",
        device: "Jussive Subjunctive",
        description: "Commands fearlessness - but needing the command reveals existing fear.",
        effect: "Having to be told to be brave shows he isn't - encouragement reveals weakness."
    },
    
    "venerationem-coram": {
        title: "venerationem sui coram",
        translation: "reverence for him face to face",
        device: "Religious Language",
        description: "'Veneratio' usually for gods - they promise quasi-divine worship in person.",
        effect: "Elevates matricide to godhood - worship for the mother-killer."
    },
    
    "praegredi-advance": {
        title: "praegredi",
        translation: "to go ahead",
        device: "Advance Preparation",
        description: "They go ahead to prepare reception - spontaneity will be choreographed.",
        effect: "Manufacturing consent - the 'natural' joy will be carefully staged."
    },
    
    "promptiora-promiserant": {
        title: "promptiora quam promiserant",
        translation: "more ready than they had promised",
        device: "Exceeded Expectations",
        description: "Reality surpasses promises - but because they arranged it themselves.",
        effect: "Self-fulfilling prophecy - they create the enthusiasm they predicted."
    },
    
    "obvias-tribus": {
        title: "obvias tribus",
        translation: "tribes coming to meet",
        device: "Civic Mobilisation",
        description: "All voting tribes turn out - complete political participation in welcoming matricide.",
        effect: "Democracy celebrates tyranny - citizens welcome their enslaver."
    },
    
    "festo-cultu": {
        title: "festo cultu senatum",
        translation: "Senate in holiday dress",
        device: "Ceremonial Clothing",
        description: "Festal attire for matricide's return - holiday clothes for history's darkest day.",
        effect: "Perverse celebration - dressed for joy while freedom dies."
    },
    
    "coniugum-liberorum": {
        title: "coniugum ac liberorum agmina",
        translation: "troops of wives and children",
        device: "Military Language",
        description: "'Agmina' usually means battle-lines - families arranged like armies.",
        effect: "Militarises domesticity - even women and children conscripted for show."
    },
    
    "per-sexum": {
        title: "per sexum et aetatem disposita",
        translation: "arranged by sex and age",
        device: "Ceremonial Organisation",
        description: "Careful sorting like religious procession - staged to look spontaneous.",
        effect: "Choreographed joy - natural enthusiasm requires elaborate planning."
    },
    
    "extructos-spectaculorum": {
        title: "extructos...spectaculorum gradus",
        translation: "erected steps of grandstands",
        device: "Theatrical Architecture",
        description: "Temporary structures built for viewing - matricide as entertainment spectacle.",
        effect: "Murder becomes theatre - Rome watches matricide like a show."
    },
    
    "triumphi-comparison": {
        title: "quo modo triumphi visuntur",
        translation: "the way triumphs are watched",
        device: "Triumph Parallel",
        description: "Explicitly compares to military triumph - matricide equals defeating enemies.",
        effect: "Perverts sacred ritual - mother-killing becomes military victory."
    },
    
    "superbus-victor": {
        title: "superbus ac publici servitii victor",
        translation: "proud and victor over public slavery",
        device: "Paradoxical Victory",
        description: "Conquers not enemies but Roman servility - victor over slavery he created.",
        effect: "Inverted triumph - celebrates conquering his own people's freedom."
    },
    
    "capitolium-sacred": {
        title: "Capitolium",
        translation: "the Capitol",
        device: "Sacred Location",
        description: "Rome's holiest site where triumphant generals thanked Jupiter.",
        effect: "Ultimate sacrilege - thanks gods at their temple for matricide."
    },
    
    "grates-thanks": {
        title: "grates exolvit",
        translation: "paid thanks",
        device: "Religious Ritual",
        description: "Technical term for ritual thanksgiving - follows triumph protocol exactly.",
        effect: "Makes matricide religiously sanctioned - gods receive thanks for mother's death."
    },
    
    "omnes-libidines": {
        title: "omnes libidines",
        translation: "all lusts",
        device: "Comprehensive Vice",
        description: "Not some but all lusts - total moral collapse, no desire left unindulged.",
        effect: "Complete abandonment - every possible vice now unleashed."
    },
    
    "effudit-poured": {
        title: "effudit",
        translation: "poured out",
        device: "Liquid Metaphor",
        description: "Vice as liquid bursting forth - dam broken, flood released.",
        effect: "Uncontrollable overflow - evil gushes out like burst dam."
    },
    
    "male-coercitas": {
        title: "male coercitas",
        translation: "badly restrained",
        device: "Inadequate Control",
        description: "Never well controlled, just poorly - restraint was always insufficient.",
        effect: "Suggests vice always struggled against weak barriers - now free."
    },
    
    "qualiscumque-reverentia": {
        title: "qualiscumque matris reverentia",
        translation: "whatever respect for mother",
        device: "Dismissive Qualification",
        description: "'Qualiscumque' minimises - even this tiny respect was still something.",
        effect: "Even minimal maternal influence was better than nothing - now totally gone."
    },
    
    "tardaverat-delayed": {
        title: "tardaverat",
        translation: "had delayed",
        device: "Pluperfect Finality",
        description: "Pluperfect marks completed past - that restraining phase is definitively over.",
        effect: "Closes moral history - restraint belongs to past, vice owns the future."
    },
    
    "toxic-enablers": {
        title: "deterrimus quisque",
        translation: "all the worst people",
        device: "Moral Nadir",
        description: "Surrounded by absolute worst - moral bottom-feeders as advisors.",
        effect: "Evil counsel from evil men - corruption advising corruption."
    },
    
    "staged-spontaneity": {
        title: "praegredi...inveniunt",
        translation: "go ahead...they find",
        device: "Manufactured Discovery",
        description: "They 'find' what they've arranged - false spontaneity carefully prepared.",
        effect: "Choreographed authenticity - genuine joy requires advance planning."
    },
    
    "perverse-triumph": {
        title: "triumphi visuntur",
        translation: "triumphs are watched",
        device: "Ritual Perversion",
        description: "Sacred military ceremony for defeating enemies applied to killing mother.",
        effect: "Inverts Roman values - domestic crime becomes foreign victory."
    },
    
    "public-slavery": {
        title: "publici servitii",
        translation: "public slavery",
        device: "Political Oxymoron",
        description: "Public (free citizens) + slavery - Romans enslaved to their emperor.",
        effect: "Names the unnamed - Rome has become nation of slaves."
    },
    
    "moral-flood": {
        title: "seque...effudit",
        translation: "poured himself out",
        device: "Overflow Metaphor",
        description: "Reflexive verb - he floods himself into vice, dissolves into corruption.",
        effect: "Total dissolution - personality liquefies into pure appetite."
    },
    
    "mother-restraint": {
        title: "matris reverentia tardaverat",
        translation: "mother's respect had delayed",
        device: "Lost Influence",
        description: "Even bad mother provided some check - her existence limited evil.",
        effect: "Last brake removed - even minimal maternal influence better than none."
    },
    
    "anxiety-guilt": {
        title: "anxius",
        translation: "anxious",
        device: "Psychological Revelation",
        description: "Anxiety reveals awareness of guilt - knows he deserves punishment.",
        effect: "Conscience still functions enough to fear - not yet totally dead inside."
    },
    
    "theatrical-reception": {
        title: "spectaculorum gradus",
        translation: "grandstand steps",
        device: "Entertainment Architecture",
        description: "Viewing platforms like for games - matricide as public entertainment.",
        effect: "Rome watches moral collapse like sporting event - evil as spectacle."
    },
    
    "religious-perversion": {
        title: "Capitolium...grates",
        translation: "Capitol...thanks",
        device: "Sacred Contamination",
        description: "Holiest place receives thanks for unholiest act - ultimate blasphemy.",
        effect: "Gods made accomplices - heaven enlisted in matricide."
    },
    
    "democratic-death": {
        title: "obvias tribus",
        translation: "tribes coming to meet",
        device: "Civic Participation",
        description: "Democratic units celebrate tyranny - voters welcome their disenfranchisement.",
        effect: "Democracy commits suicide - citizens celebrate their own enslavement."
    },
    
    "final-collapse": {
        title: "omnes libidines effudit",
        translation: "poured out all lusts",
        device: "Total Release",
        description: "Comprehensive moral collapse - every vice simultaneously unleashed.",
        effect: "Marks reign's turning point - from bad to apocalyptic."
    },
    
    "palace-corruption": {
        title: "non alia regia fecundior",
        translation: "no palace more fertile",
        device: "Architectural Metaphor",
        description: "Palace breeds evil like womb breeds life - architectural fertility of vice.",
        effect: "Physical space corrupts - building itself generates evil."
    },
    
    "orchestrated-joy": {
        title: "promptiora quam promiserant",
        translation: "more ready than promised",
        device: "Exceeded Expectations",
        description: "Enthusiasm surpasses prediction - because they manufactured it.",
        effect: "Creating reality - they make true what they promised would be true."
    },
    
    "family-conscription": {
        title: "coniugum ac liberorum",
        translation: "wives and children",
        device: "Domestic Militarisation",
        description: "Families deployed like troops - domestic sphere militarised for display.",
        effect: "Total mobilisation - even children must celebrate matricide."
    },
    
    "sorted-humanity": {
        title: "per sexum et aetatem",
        translation: "by sex and age",
        device: "Human Cataloguing",
        description: "People sorted like objects - humans become demographic categories.",
        effect: "Dehumanising organisation - individuals dissolved into statistical groups."
    }
};
