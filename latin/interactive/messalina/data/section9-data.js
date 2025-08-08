// Analysis data for Messalina Section 9 interactive text
const textData = {
    "adsidebat-mater": {
        title: "adsidebat mater Lepida",
        translation: '"her mother Lepida was sitting beside her"',
        device: "Imperfect Tense",
        description: "The imperfect 'adsidebat' suggests sustained, gentle presence - a mother maintaining vigil beside her doomed daughter.",
        effect: "Creates poignancy and establishes maternal compassion that contrasts with the coming violence and Lepida's earlier disapproval."
    },
    
    "florenti-filiae": {
        title: "florenti filiae",
        translation: '"her flourishing daughter"',
        device: "Evocative Description",
        description: "The phrase evokes Messalina in her prime - powerful, beautiful, and immoral. 'Florenti' suggests blooming youth and vitality now lost.",
        effect: "Creates bitter irony by contrasting her former glory with her current desperate state, emphasising the magnitude of her fall."
    },
    
    "haud-concors": {
        title: "haud concors fuerat",
        translation: '"had not been in harmony"',
        device: "Maternal Disapproval",
        description: "Reveals that Lepida, morally upright, could not reconcile herself to her daughter's scandalous lifestyle when Messalina was powerful.",
        effect: "Shows how Messalina's behaviour alienated even family, whilst making Lepida's current compassion more touching and significant."
    },
    
    "supremis-necessitatibus": {
        title: "supremis eius necessitatibus",
        translation: '"her final necessities"',
        device: "Sibilance",
        description: "Heavy sibilance in 'sed supremis...necessitatibus' creates hissing sounds that may echo Tacitus's moral disdain for both women.",
        effect: "The stylistic venom creeps into the rhythm, suggesting authorial disapproval even in this moment of maternal pity."
    },
    
    "percussorem": {
        title: "percussorem",
        translation: '"assassin, striker"',
        device: "Violent Terminology",
        description: "The word emphasises the brutal, mechanical nature of state execution - she will be struck down like an animal.",
        effect: "Removes any dignity from her coming death and emphasises the cold efficiency of imperial justice."
    },
    
    "transiisse": {
        title: "transiisse vitam",
        translation: '"life has passed"',
        device: "Emphatic Placement",
        description: "The perfect infinitive 'transiisse' is emphatically placed at the start - life is done, finished. It marks the final turning point.",
        effect: "Creates finality and resignation, showing there's no return, no appeal to Claudius - only the manner of death remains to be chosen."
    },
    
    "mortem-decoram": {
        title: "mortem decoram quaerendum",
        translation: '"a noble death should be sought"',
        device: "Roman Dignity",
        description: "Lepida calls for 'decus' - honour - echoing traditional Roman aristocratic values about dying with dignity.",
        effect: "Presents the mother as a voice of old Roman virtue, offering her daughter one last chance to redeem herself through noble suicide."
    },
    
    "nihil-honestum": {
        title: "nihil honestum inerat Messalinae animo",
        translation: '"nothing honourable was in Messalina\'s spirit"',
        device: "Moral Judgment",
        description: "Tacitus is brutally blunt - there was nothing honourable left in her spirit, corrupted by lust. Pure moral condemnation.",
        effect: "Shows she cannot rise to her mother's ideal of Roman dignity, being too degraded by her own excesses to achieve noble death."
    },
    
    "per-libidines": {
        title: "per libidines corrupto",
        translation: '"corrupted by lusts"',
        device: "Causal Agency",
        description: "The preposition 'per' makes lust the active agent of her corruption - she has been destroyed by her own desires.",
        effect: "Makes her downfall seem inevitable and self-inflicted, fitting the Roman worldview that moral transgression leads to destruction."
    },
    
    "lacrimae-questus": {
        title: "lacrimae et questus inriti effundebantur",
        translation: '"tears and futile complaints were pouring forth"',
        device: "Imperfect Duration",
        description: "The imperfect tense stresses the drawn-out, fruitless nature of her grief - prolonged but useless weeping.",
        effect: "Emphasises her helplessness and inability to change her fate through emotion, making her seem pathetic rather than tragic."
    },
    
    "impetu-venientium": {
        title: "impetu venientium",
        translation: '"by the force of those arriving"',
        device: "Faceless Violence",
        description: "Tacitus uses a participle as noun 'venientium' to create a slightly faceless image of the execution squad - not individuals but agents of state violence.",
        effect: "Makes the violence seem impersonal and inevitable, like a force of nature rather than human choice."
    },
    
    "adstitit-tribunus": {
        title: "adstitque tribunus",
        translation: '"and the tribune stood"',
        device: "Parallel Contrast",
        description: "Contrasts with earlier 'adsidebat mater' - the mother seated in compassion, now the tribune standing in cold authority.",
        effect: "The parallel word placement emphasises the shift from maternal care to stern inevitability, from feeling to duty."
    },
    
    "tunc-primum": {
        title: "tunc primum intellexit",
        translation: '"then for the first time she understood"',
        device: "Delayed Recognition",
        description: "Only now, at the very last moment, does Messalina finally understand her fate and see the reality she has denied.",
        effect: "Shows her complete inability to face truth until confronted with imminent death, emphasising her self-delusion throughout."
    },
    
    "ferrum": {
        title: "ferrumque accepit",
        translation: '"and she took the sword"',
        device: "Poetic Diction",
        description: "Tacitus uses the poetic word 'ferrum' (iron) instead of the prosaic 'gladius' - elevated, tragic language for her final act.",
        effect: "Momentarily lifts the register as if granting her brief dignity, but this proves illusory as she cannot use it properly."
    },
    
    "iugulo-pectori": {
        title: "iugulo aut pectori",
        translation: '"to throat or chest"',
        device: "Poetic Vocabulary",
        description: "Both are highly poetic words for body parts, whilst the repeated 'p' sounds reflect her trembling panic and hesitation.",
        effect: "The elevated diction contrasts with her inability to act, whilst the alliteration mimics her breathless fear."
    },
    
    "per-trepidationem": {
        title: "per trepidationem",
        translation: '"because of panic"',
        device: "Physical Failure",
        description: "Her panic and trembling prevent her from achieving even this final act of self-determination.",
        effect: "Shows she cannot even manage a Roman death, failing in this last chance to reclaim some dignity."
    },
    
    "ictu-tribuni": {
        title: "ictu tribuni transigitur",
        translation: '"she is pierced by the tribune\'s blow"',
        device: "Brutal Finality",
        description: "Just three words end her life. The harsh 'tr' alliteration gives brutal finality after all the fear and delay.",
        effect: "The death itself is delivered abruptly, efficiently, without dignity - typical of Tacitus's cold, official endings."
    },
    
    "corpus-matri": {
        title: "corpus matri concessum",
        translation: '"the body was granted to the mother"',
        device: "Reduction to Object",
        description: "Three words reduce the empress to mere 'corpus' - no longer a person but a body handed back to her mother.",
        effect: "Shows ultimate dehumanisation - after detailed moral collapse, once dead she becomes unworthy of attention, just disposal."
    }
};
