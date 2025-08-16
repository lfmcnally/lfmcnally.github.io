// Analysis data for Tacitus Annals 14.12 interactive text
const textData = {
    "miro-certamine": {
        title: "miro tamen certamine procerum",
        translation: "with remarkable rivalry of nobles",
        device: "Ironic Competition",
        description: "'Miro' (remarkable) with 'certamine' (competition) shows senators competing in flattery, not virtue.",
        effect: "Transforms noble competition into base sycophancy - racing to praise matricide."
    },
    
    "decernuntur-decreed": {
        title: "decernuntur",
        translation: "are decreed",
        device: "Present Tense Immediacy",
        description: "Historic present makes the decreeing immediate - we witness the corruption.",
        effect: "Brings reader into Senate chamber - watching democracy debase itself."
    },
    
    "supplicationes-prayers": {
        title: "supplicationes",
        translation: "public thanksgivings",
        device: "Religious Perversion",
        description: "Sacred prayers of gratitude offered for matricide - holiness inverted.",
        effect: "Makes gods accomplices to murder - divine sanction for ultimate crime."
    },
    
    "pulvinaria-couches": {
        title: "omnia pulvinaria",
        translation: "all sacred couches",
        device: "Comprehensive Sacrilege",
        description: "Pulvinaria were ceremonial couches for gods - all contaminated by false thanks.",
        effect: "No deity left unpolluted - entire pantheon enlisted in lie."
    },
    
    "quinquatrus-festival": {
        title: "Quinquatrus",
        translation: "Quinquatrus festival",
        device: "Festival Corruption",
        description: "Minerva's festival rebranded as celebrating the 'plot's discovery' - sacred time perverted.",
        effect: "Transforms holy festival into anniversary of matricide - time itself corrupted."
    },
    
    "quibus-relative": {
        title: "quibus apertae insidiae essent",
        translation: "at which the plot was revealed",
        device: "False Narrative",
        description: "Subjunctive in relative clause presents fiction as fact - the fake plot becomes real.",
        effect: "Official lie embedded in grammar - language itself conscripted to serve falsehood."
    },
    
    "celebrarentur-celebrated": {
        title: "celebrarentur",
        translation: "should be celebrated",
        device: "Perpetual Commemoration",
        description: "Imperfect subjunctive mandates annual celebration - murder becomes recurring holiday.",
        effect: "Matricide institutionalised - every year Rome must celebrate mother-killing."
    },
    
    "aureum-simulacrum": {
        title: "aureum Minervae simulacrum",
        translation: "golden statue of Minerva",
        device: "Divine Endorsement",
        description: "Goddess of wisdom's golden image paired with Nero - wisdom approving folly.",
        effect: "Makes wisdom herself endorse stupidity - intellectual goddess supports evil."
    },
    
    "curia-senate": {
        title: "in curia",
        translation: "in Senate House",
        device: "Sacred Space Violation",
        description: "Senate House was sacred political space - now houses monument to matricide.",
        effect: "Democracy's heart contaminated - murder commemorated where laws are made."
    },
    
    "iuxta-principis": {
        title: "iuxta principis imago",
        translation: "emperor's image nearby",
        device: "Proximity Statement",
        description: "Nero's image beside Minerva - murderer next to wisdom goddess.",
        effect: "Visual equation of tyranny with divine wisdom - blasphemous juxtaposition."
    },
    
    "dies-nefastos": {
        title: "dies natalis...inter nefastos",
        translation: "birthday among cursed days",
        device: "Calendrical Erasure",
        description: "Birthday becomes religiously forbidden day - erased from acceptable time.",
        effect: "Attempts to delete her from time itself - even birth date cursed."
    },
    
    "thrasea-resistance": {
        title: "Thrasea Paetus",
        translation: "Thrasea Paetus",
        device: "Named Resistance",
        description: "Stoic senator who begins resistance - conscience amid corruption.",
        effect: "One man's integrity highlights universal cowardice - moral island in evil sea."
    },
    
    "silentio-brevi": {
        title: "silentio vel brevi adsensu",
        translation: "in silence or brief assent",
        device: "Minimal Compliance",
        description: "Previous tolerance through silence or minimal agreement - passive acceptance.",
        effect: "Shows even good men compromised - silence enables evil."
    },
    
    "adulationes-flatteries": {
        title: "adulationes",
        translation: "flatteries",
        device: "Sycophantic Term",
        description: "Direct naming of Senate behaviour as flattery - no pretence of genuine praise.",
        effect: "Strips away pretence - calls bootlicking what it is."
    },
    
    "exiit-walked": {
        title: "exiit",
        translation: "walked out",
        device: "Physical Protest",
        description: "Perfect tense marks decisive action - bodily removal from corruption.",
        effect: "Body speaks where voice cannot - feet protest what mouth won't."
    },
    
    "sibi-causam": {
        title: "sibi causam periculi fecit",
        translation: "created danger for himself",
        device: "Self-Endangerment",
        description: "Knowingly creates personal risk - conscience over safety.",
        effect: "Shows cost of integrity - doing right means risking life."
    },
    
    "ceteris-libertatis": {
        title: "ceteris libertatis initium non praebuit",
        translation: "didn't offer beginning of freedom to others",
        device: "Failed Leadership",
        description: "His protest doesn't inspire others - individual not collective resistance.",
        effect: "Highlights isolation of virtue - one man's stand doesn't spark revolution."
    },
    
    "prodigia-omens": {
        title: "prodigia",
        translation: "omens",
        device: "Divine Signs",
        description: "Traditional Roman prodigies suggesting divine anger - heaven's response.",
        effect: "Nature itself protests - universe disturbed by matricide."
    },
    
    "crebra-inrita": {
        title: "crebra et inrita",
        translation: "numerous and ineffectual",
        device: "Futile Frequency",
        description: "Many omens but no effect - quantity without quality of divine intervention.",
        effect: "Gods seem to protest but not punish - heaven impotent or indifferent."
    },
    
    "anguem-snake": {
        title: "anguem enixa mulier",
        translation: "woman gave birth to snake",
        device: "Monstrous Birth",
        description: "Traditional omen of evil - unnatural offspring suggesting cosmic disorder.",
        effect: "Nature produces monsters when rulers commit monstrous acts."
    },
    
    "alia-fulmine": {
        title: "alia in concubitu...fulmine exanimata",
        translation: "another killed by lightning during sex",
        device: "Sexual Violence",
        description: "Lightning strike during intercourse - divine intrusion into most intimate moment.",
        effect: "Even procreation cursed - life-making becomes death-bringing."
    },
    
    "sol-obscuratus": {
        title: "sol repente obscuratus",
        translation: "sun suddenly darkened",
        device: "Cosmic Darkness",
        description: "Solar eclipse or darkening - light itself withdraws from evil world.",
        effect: "Universe goes dark in response to moral darkness - as above, so below."
    },
    
    "tactae-caelo": {
        title: "tactae de caelo",
        translation: "struck from heaven",
        device: "Divine Strike",
        description: "Lightning from heaven hits city - direct divine intervention suggested.",
        effect: "Heaven attacks earth - gods striking at human corruption."
    },
    
    "quattuordecim-fourteen": {
        title: "quattuordecim",
        translation: "fourteen",
        device: "Comprehensive Number",
        description: "All fourteen districts hit - total coverage of Rome by divine wrath.",
        effect: "No part of Rome escapes - universal guilt, universal punishment."
    },
    
    "adeo-sine": {
        title: "adeo sine cura deum",
        translation: "so much without care of gods",
        device: "Divine Indifference",
        description: "Despite omens, gods don't care - signs without consequences.",
        effect: "Suggests absent or uncaring deities - evil continues unpunished."
    },
    
    "multos-annos": {
        title: "multos post annos",
        translation: "many years later",
        device: "Historical Perspective",
        description: "Tacitus's hindsight shows Nero's continued rule - prodigies meant nothing.",
        effect: "Historian's knowledge deflates superstition - omens were meaningless."
    },
    
    "scelera-crimes": {
        title: "imperium et scelera",
        translation: "power and crimes",
        device: "Paired Evils",
        description: "Links empire with crime - power and evil as inseparable twins.",
        effect: "Makes crime intrinsic to Nero's rule - criminality defines reign."
    },
    
    "continuaverit-continued": {
        title: "continuaverit",
        translation: "continued",
        device: "Perfect Subjunctive",
        description: "Shows result despite omens - evil persisted regardless of signs.",
        effect: "Deflates supernatural - human evil defeats divine warning."
    },
    
    "quo-purpose": {
        title: "quo gravaret invidiam",
        translation: "to increase hatred",
        device: "Purpose Clause",
        description: "Explicit purpose - pardons meant to make Agrippina look worse.",
        effect: "Reveals calculated propaganda - mercy as weapon against dead mother."
    },
    
    "auctam-lenitatem": {
        title: "auctam lenitatem suam",
        translation: "his increased mercy",
        device: "False Clemency",
        description: "Claims greater mercy after matricide - killing mother makes him kinder.",
        effect: "Perverse logic - murder enables mercy, evil produces good."
    },
    
    "feminas-inlustres": {
        title: "feminas inlustres",
        translation: "distinguished women",
        device: "Noble Victims",
        description: "High-status women as Agrippina's victims - she oppressed even aristocrats.",
        effect: "Makes Agrippina enemy of her own class - no natural allies."
    },
    
    "iuniam-calpurniam": {
        title: "Iuniam et Calpurniam",
        translation: "Junia and Calpurnia",
        device: "Named Individuals",
        description: "Specific names humanise victims - real people suffered under Agrippina.",
        effect: "Documentary evidence - actual persons testify to Agrippina's cruelty."
    },
    
    "reddidit-restored": {
        title: "reddidit",
        translation: "restored",
        device: "Act of Restitution",
        description: "Perfect tense shows completed action - justice done for past wrongs.",
        effect: "Nero as righter of mother's wrongs - son correcting parent's evil."
    },
    
    "lolliae-paulinae": {
        title: "Lolliae Paulinae",
        translation: "Lollia Paulina",
        device: "Famous Victim",
        description: "Former empress (Caligula's wife) killed by Agrippina - high-profile murder.",
        effect: "Shows Agrippina killed even empresses - no one too high to escape."
    },
    
    "cineres-ashes": {
        title: "cineres",
        translation: "ashes",
        device: "Posthumous Justice",
        description: "Even ashes get justice - burial rights restored to cremated remains.",
        effect: "Justice extends beyond death - correcting wrongs to the dead."
    },
    
    "ipse-nuper": {
        title: "ipse nuper",
        translation: "he himself recently",
        device: "Self-Correction",
        description: "Nero pardons his own victims - admitting his own injustice.",
        effect: "Makes him seem capable of admitting error - false humility."
    },
    
    "silana-death": {
        title: "Silana",
        translation: "Silana",
        device: "Convenient Death",
        description: "Agrippina's enemy dies just in time - narrative convenience.",
        effect: "Even enemies dying proves Agrippina's evil influence waning."
    },
    
    "tarentum-location": {
        title: "Tarentum",
        translation: "to Tarentum",
        device: "Geographic Return",
        description: "Specific location of return from exile - concrete detail.",
        effect: "Documentary precision - real places anchor propaganda in fact."
    },
    
    "labante-agrippina": {
        title: "labante iam Agrippina",
        translation: "Agrippina now declining",
        device: "Waning Power",
        description: "Ablative absolute shows her power already failing - doom approaching.",
        effect: "Suggests natural decline - murder almost unnecessary."
    },
    
    "vel-mitigata": {
        title: "vel mitigata",
        translation: "or appeased",
        device: "Alternative Explanation",
        description: "Offers two possibilities - declining or softening - uncertainty preserved.",
        effect: "Even Tacitus unsure - was Agrippina weakening or mellowing?"
    },
    
    "competitive-flattery": {
        title: "miro certamine",
        translation: "remarkable competition",
        device: "Sycophantic Contest",
        description: "Senators compete to flatter most - rivalry in servility.",
        effect: "Democracy becomes bootlicking contest - racing to debase themselves."
    },
    
    "religious-corruption": {
        title: "supplicationes...pulvinaria",
        translation: "prayers at sacred couches",
        device: "Sacred Contamination",
        description: "Holy rituals perverted to celebrate unholy act.",
        effect: "Religion weaponised - gods made accomplices to matricide."
    },
    
    "calendar-erasure": {
        title: "inter nefastos",
        translation: "among cursed days",
        device: "Temporal Damnation",
        description: "Birthday becomes forbidden time - existence itself cursed.",
        effect: "Attempts to delete person from time - birth becomes curse."
    },
    
    "failed-omens": {
        title: "inrita intercessere",
        translation: "proved ineffectual",
        device: "Divine Failure",
        description: "Multiple supernatural signs achieve nothing - heaven protests but doesn't punish.",
        effect: "Questions divine justice - where are the gods when evil rules?"
    },
    
    "retrospective-mercy": {
        title: "quo gravaret...testificaretur",
        translation: "to increase hatred...demonstrate mercy",
        device: "Calculated Clemency",
        description: "Pardons designed to damn the dead - mercy as propaganda.",
        effect: "Weaponises forgiveness - clemency becomes cruelty to memory."
    }
};
