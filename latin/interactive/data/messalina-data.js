// Analysis data for Messalina interactive text
const messalinaData = {
    "messalina-intro": {
        title: "Messalina",
        translation: "The empress Messalina",
        device: "Character Introduction",
        description: "Opening with her name immediately establishes her as the focus and sets up her agency in the narrative.",
        effect: "Tacitus places Messalina at the center of the action from the very first word, emphasizing her role as the driving force behind the scandal."
    },
    
    "novo-insano": {
        title: "novo et quasi insano amore",
        translation: '"with a new and almost insane love"',
        device: "Alliteration + Hyperbole",
        description: "The repetition of 'n' sounds (novo...insano) creates alliteration, while 'quasi insano' uses hyperbole to emphasize the extremity of her passion.",
        effect: "The alliteration makes the phrase memorable and rhythmic, while the hyperbole immediately signals that this is not ordinary love but dangerous obsession that will lead to disaster."
    },
    
    "incensa": {
        title: "incensa est",
        translation: '"was inflamed/set on fire"',
        device: "Metaphor",
        description: "Fire imagery suggests passion that burns out of control and destroys everything in its path.",
        effect: "The fire metaphor foreshadows destruction and suggests Messalina's passion is dangerous and consuming, setting the tone for the tragic events to follow."
    },
    
    "silius": {
        title: "C. Silium",
        translation: '"Gaius Silius"',
        device: "Historical Figure",
        description: "Gaius Silius was a real Roman politician and the object of Messalina's obsession.",
        effect: "Using his full formal name (praenomen + nomen) gives gravity and historical authenticity to the account."
    },
    
    "superlative": {
        title: "iuventutis Romanae pulcherrimum", 
        translation: '"the most handsome of Roman youth"',
        device: "Superlative",
        description: "'pulcherrimum' is the superlative form of 'pulcher' (beautiful/handsome).",
        effect: "The superlative emphasizes Silius's exceptional attractiveness, explaining why Messalina became so obsessed and making her actions seem more understandable (though not excusable)."
    },
    
    "exarserat": {
        title: "exarserat",
        translation: '"she had burned with love"',
        device: "Pluperfect + Fire Imagery", 
        description: "Continues the fire metaphor from 'incensa' - this burning had already occurred and intensified.",
        effect: "The pluperfect tense shows this passion had been building over time, while the fire imagery reinforces the dangerous, consuming nature of her obsession."
    },
    
    "result-clause": {
        title: "ut...exturbaret",
        translation: '"so that she drove out..."',
        device: "Result Clause",
        description: "'ut' + imperfect subjunctive shows the consequence of her burning passion.",
        effect: "The result clause emphasizes how her obsession led directly to destructive actions - she destroyed another woman's marriage to get what she wanted."
    },
    
    "alliteration": {
        title: "liberoque adultero potiretur",  
        translation: '"and take possession of an unrestricted adulterer"',
        device: "Alliteration",
        description: "The 'p' sounds in 'potiretur' connect with 'pulcherrimum' earlier, creating sonic links.",
        effect: "'libero adultero' is almost oxymoronic - a 'free adulterer' suggests someone available for her exclusive use, showing her desire to possess him completely."
    },
    
    "silius-awareness": {
        title: "Silius flagitii aut periculi nescius erat",
        translation: '"Silius was not unaware of the disgrace or danger"',
        device: "Litotes",
        description: "'neque...nescius' (not unaware) is a double negative emphasizing that he fully understood the risks.",
        effect: "This shows Silius was not a naive victim but made a calculated decision despite knowing the dangers, making him complicit in the scandal."
    },
    
    "indirect-statement": {
        title: "intellexit", 
        translation: '"he realized"',
        device: "Indirect Statement Introduction",
        description: "Introduces the complex indirect statement showing his reasoning process.",
        effect: "Takes us inside Silius's mind to show his calculating, rational analysis of an impossible situation."
    },
      
    "conditional-contrast": {
        title: "exitium, si abnueret, fore certum",
        translation: '"that ruin, if he refused, would be certain"',
        device: "Conditional Clause + Hyperbaton",
        description: "'si abnueret' is embedded within the main clause, while 'certum' emphasizes the certainty of destruction.", 
        effect: "The embedded conditional and strong 'certum' show he had no real choice - refusal meant certain death."
    },
    
    "conditional-hope": {
        title: "si consentiret, nonnullam facinoris celandi spem esse",
        translation: '"if he agreed, there was some hope of concealing the crime"',
        device: "Contrast + Euphemism",
        description: "Contrasts with the certainty of death; 'nonnullam...spem' (some hope) is deliberately vague.",
        effect: "The contrast between 'certain ruin' and 'some hope' shows his impossible dilemma - death vs. a slim chance of survival through compliance."  
    },
    
    "rewards": {
        title: "magna praemia accepturum",
        translation: '"he would receive great rewards"',
        device: "Material Motivation",
        description: "Shows he wasn't just motivated by fear but also by greed and ambition.",
        effect: "Reveals Silius's character - he's not just a victim but someone willing to profit from a dangerous liaison with the emperor's wife."
    },
    
    "decision-infinitives": {
        title: "neglegere futura praesentibus frui",
        translation: '"to ignore future events and enjoy present circumstances"',
        device: "Balanced Infinitives + Antithesis",
        description: "Two infinitives balance each other; 'futura' vs 'praesentibus' creates antithesis between future and present.",
        effect: "The balanced structure mirrors his balanced decision, while the antithesis shows his choice to live for the moment despite future consequences - a fatally shortsighted decision."
    },

    "illa-non-furtim": {
        title: "illa non furtim sed multis cum comitibus ventitat domum",
        translation: '"she visited the house frequently, not secretly, but with many companions"',
        device: "Antithesis + Frequentative Verb",
        description: "'non furtim sed' creates stark contrast, whilst 'ventitat' (frequentative of venio) emphasises repeated visits.",
        effect: "Shows Messalina's brazen confidence and escalating recklessness - she's no longer trying to hide the affair."
    },

    "egredienti-adhaeret": {
        title: "egredienti adhaeret",
        translation: '"clung to him when he went out"',
        device: "Physical Metaphor", 
        description: "'adhaeret' (sticks to/clings to) suggests obsessive, possessive behaviour.",
        effect: "Creates an image of desperate, clingy behaviour that would be inappropriate for an empress in public."
    },

    "dat-opes": {
        title: "dat opes honoresque",
        translation: '"gave him honours and gifts"',
        device: "Zeugma + Climax",
        description: "Single verb 'dat' governs both nouns, building to the most shocking revelation about imperial property.",
        effect: "Shows how she's abusing her imperial position to shower her lover with state resources."
    },
     
    "servi-liberti": {
        title: "servi, liberti, paratus principis apud adulterum saepe videbantur",
        translation: '"slaves, freedmen, and imperial furnishings were often seen at the adulterer\'s house"',
        device: "Tricolon + Metonymy",
        description: "Three groups escalating in significance; 'paratus' represents all imperial luxury.",
        effect: "The climactic 'paratus principis' shows she's essentially moving the imperial household to her lover's house - the ultimate scandal."
    },

    "claudius-ignarus": {
        title: "Claudius matrimonii sui ignarus",  
        translation: '"Claudius was unaware of his own marriage"',
        device: "Dramatic Irony",
        description: "The emperor doesn't know what everyone else can see - his wife's public adultery.",  
        effect: "Creates pathos for Claudius whilst emphasising the magnitude of Messalina's betrayal and public humiliation."
    },
  
    "messalina-facilitate": {
        title: "Messalina propter facilitate adulteriorum ad novas libidines versa est",
        translation: '"Messalina, because of the easiness of the adulteries, turned to new lusts"',
        device: "Progression + Euphemism", 
        description: "Shows escalation from simple adultery to more extreme desires; 'libidines' is deliberately vague.",
        effect: "Suggests Messalina's appetite for scandal and transgression is insatiable - simple adultery no longer satisfies her."
    },

    "silius-fatali": {
        title: "Silius, sive fatali insania an ipsa pericula remedium imminentium periculorum ratus", 
        translation: '"Silius, whether because of his fateful folly or thinking that the very dangers were a cure for the imminent dangers"',
        device: "Disjunctive Question + Paradox",
        description: "'sive...an' presents alternatives; 'pericula remedium periculorum' is paradoxical.",
        effect: "Shows Silius's twisted logic - thinking more danger might somehow solve his dangerous situation." 
    },
    
    "abrumpi-dissimulationem": {
        title: "abrumpi dissimultationem urgebat",
        translation: '"pressed for the concealment to be cast aside"',
        device: "Violent Metaphor",
        description: "'abrumpi' (to break off/snap) suggests violent, sudden action rather than gradual revelation.",
        effect: "Shows Silius wants to abandon all pretence dramatically - a reckless escalation."
    },
    
    "non-exspectandum": {
        title: "non exspectandum, dum princeps senesceret",
        translation: '"they should not wait whilst the emperor grows old"',
        device: "Gerundive + Euphemism",
        description: "'non exspectandum' shows urgent necessity; 'senesceret' euphemistically refers to Claudius's death.",
        effect: "Reveals their treasonous thinking - they're planning for Claudius's death and their own rise to power."
    },

    "caelibem-orbum": {
        title: "caelibem, orbum",
        translation: '"single, childless"',
        device: "Asyndeton",
        description: "Terse adjectives with no conjunction stress his availability for marriage.",
        effect: "Presents Silius as a viable replacement for Claudius, making their plan seem less outrageous."
    },

    "nuptiis-adoptando": {
        title: "nuptiis et adoptando Britannico paratum",
        translation: '"ready for marriage and adopting Britannicus"',
        device: "Zeugma + Shock Value",
        description: "'paratum' governing two clauses builds to the shocking idea of usurping Claudius's fatherly role.",
        effect: "Underscores their treasonous intent to supplant Claudius entirely, both as husband and father."  
    },

    "eandem-potentiam": {
        title: "eandem Messalinae potentiam mansuram esse",
        translation: '"the same power for Messalina would remain"',
        device: "Indirect Statement",  
        description: "Future infinitive 'mansuram esse' in indirect statement presents her power as a sure thing.",
        effect: "Shows Messalina's confidence that her imperial status will continue, revealing her arrogance."
    },  

    "addita-securitate": {
        title: "addita securitate, si praevenirent Claudium",
        translation: '"with added security, if they forestalled Claudius"',
        device: "Conditional Clause",
        description: "'si' clause presents striking down Claudius as a condition for their security.",
        effect: "Bluntly lays out their murderous logic - Claudius must be eliminated for their plan to work."
    },

    "insidiis-incautus": {
        title: "insidiis incautus sed ad iram celer esset",
        translation: '"was oblivious to treachery but swift to anger"',
        device: "Antithesis", 
        description: "Claudius's dangerous unawareness contrasted with his quickness to anger once provoked.",
        effect: "Sets up Claudius as an easy target for betrayal but a formidable foe if roused - hence their need to act first."
    },  

    "messalina-non-amore": {
        title: "Messalina, non amore in maritum, sed verita ne Silius summa adeptus se sperneret",
        translation: '"Messalina hesitated for a long time, not (because of) love for her husband, but fearing that Silius, if he obtained supreme power, might reject her"',
        device: "Antithesis + Complex Syntax",
        description: "'non amore...sed' sets up a misleading expectation before the second clause reveals her true selfish motive.", 
        effect: "Messalina's hesitation is not from affection but fear of losing her lover - underscoring her self-centered nature."
    },

    "diu-haesitavit": {
        title: "diu haesitavit", 
        translation: '"hesitated for a long time"',
        device: "Imperfect Tense",
        description: "The imperfect 'haesitavit' stresses the duration of her uncertainty.",
        effect: "Builds narrative tension as her fateful decision hangs in the balance."  
    },
    
    "nomen-matrimonii": {
        title: "nomen enim matrimonii concupivit ob magnitudinem infamiae",
        translation: '"for she craved the title of marriage because of the magnitude of the disgrace"',
        device: "Surprising Motivation",
        description: "Messalina desires marriage not despite but because of the scandalous disgrace it will bring.",
        effect: "Reveals her twisted values - she's attracted to the infamy, showing how far she's fallen morally."  
    },

    "sacrificii-gratia": {
        title: "sacrificii gratia Claudius Ostia proficisceretur",
        translation: '"Claudius set out for Ostia for the purpose of a sacrifice"',  
        device: "Religious Pretext", 
        description: "Claudius's religious duty provides the perfect cover for Messalina's plan.",
        effect: "The contrast between sacred rites and profane scandal heightens the shock; also makes Claudius seem more oblivious."
    },

    "cuncta-nuptiarum": {
        title: "cuncta nuptiarum sollemnia celebrat",
        translation: '"she celebrated all the rites of marriage"',
        device: "Irony + Totality",
        description: "'cuncta' (all) stresses that every ritual was observed, making a mockery of the sacred rites.",
        effect: "Heightens the sacrilege and audacity of Messalina's sham marriage, revealing her utter shamelessness."
    },

    "igitur-domus": {
        title: "igitur domus principis inhorruit",
        translation: '"therefore the emperor\'s household shuddered"',
        device: "Personification",
        description: "The house itself is given human emotion, shuddering in horror at Messalina's actions.",
        effect: "Conveys the deep sense of shock and revulsion felt by all at this unprecedented scandal."
    },

    "maximeque-ei": {
        title: "maximeque ei qui potentiam habebant timuereunt ne res verterentur",
        translation: '"and particularly those who held any power feared lest the state be overturned"',
        device: "Alliteration",
        description: "'potentiam...timuereunt...verterentur' repeats 't' sounds, linking power, fear, and upheaval.",
        effect: "The alliteration connects the powerful men's self-interest with their fear of political chaos."
    },

    "spem-tamen": {
        title: "spem tamen habebant, si Claudio de atrocitate sceleris persuasissent, Messalinam posse opprimi sine quaestione damnatam",
        translation: '"nevertheless they had (some) hope, (that) if they convinced Claudius about the enormity of the crime, Messalina could be condemned without a trial (and) overthrown"',
        device: "Conditional Clause + Asyndeton",
        description: "'si' sets up hopeful condition; asyndeton in 'opprimi damnatam' emphasizes swift justice.",
        effect: "Shows influential men plotting to bring Messalina down decisively if they can sway Claudius."
    },

    "periculum-esse": {
        title: "periculum esse ne ille defensionem audiret, neve clausae aures etiam confitenti non essent",
        translation: '"there was a danger that Claudius might listen to her defence or that his ears might not be closed to her, even if she confessed"',
        device: "Parallelism + Litotes",
        description: "Two parallel 'ne' clauses present Claudius listening as a danger; litotes 'non essent' for emphasis.",
        effect: "Expresses the plotters' fear that Claudius's love for Messalina might lead him to forgive her if given a chance."
    },

    "narcissus-occasiones": {
        title: "Narcissus, occasiones quarenes",
        translation: '"Narcissus, looking for opportunities"',
        device: "Character Introduction",
        description: "Narcissus is introduced as a schemer on the lookout for chances to act against Messalina.",
        effect: "Sets up Narcissus as a key player who will help bring about Messalina's downfall."
    },

    "caesar-moraretur": {
        title: "Caesar diu apud Ostiam moraretur",
        translation: '"Caesar was delaying for a long time at Ostia"',
        device: "Ominous Delay",
        description: "Claudius's extended absence creates a window of opportunity for both Messalina's marriage and Narcissus's plot.",
        effect: "Builds a sense of suspense - key events are unfolding while Claudius is away and unaware."
    },

    "duas-paelices": {
        title: "duas eius paelices largitione et promissis perpulit delationem subrire",
        translation: '"compelled two of his mistresses by means of largesse and promises to submit an accusation"',
        device: "Wealth + Deception",
        description: "Narcissus uses gifts and promises to manipulate Claudius's mistresses into denouncing Messalina.",
        effect: "Reveals the treacherous intrigues surrounding Claudius and his susceptibility to rumors from his inner circle." 
    },

    "calpurnia-secretum": {
        title: "Calpurnia (id alteri paelici nomen), ubi datum est secretum, ad genua Caesaris provoluta nupsisse Messalinam Silio exclamat",
        translation: '"Calpurnia (that was the name of one of the two mistresses), when she was given a secret audience, fell down at the knees of Caesar, shouted that Messalina had married Silius"',
        device: "Dramatic Revelation",
        description: "Calpurnia's physical supplication and emotional outburst make her accusation seem genuine and urgent.",
        effect: "The shocking news is delivered in a way that makes it credible, helping to turn Claudius against Messalina."
    },

    "calpurnia-cieri": {
        title: "Calpurnia cieri Narcissum postulat",
        translation: '"Calpurnia demanded that Narcissus be summoned"',
        device: "Strategic Support",
        description: "Calpurnia calls for Narcissus to back up her story, putting his influence into play.",
        effect: "Shows the mistresses and Narcissus working together to convince Claudius of Messalina's guilt."
    },

    "discidiumne-tuum": {
        title: "'discidiumne tuum' inquit 'novisti?",
        translation: '"'Do you know about your divorce?' he said"',
        device: "Rhetorical Question",
        description: "Narcissus opens with a rhetorical question that assumes Claudius has been wronged, priming him to accept the story.",
        effect: "The leading question gets Claudius to start seeing himself as a victim before the full case is presented."
    },

    "nam-matrimonium": {
        title: "nam matrimonium Silii vidit populus et senatus et milites",
        translation: '"for the people, the senate and the soldiers have seen Silius' marriage"',
        device: "Tricolon",
        description: "The triplet of 'populus et senatus et milites' emphasizes that all of Roman society witnessed the sham wedding.",
        effect: "Stresses the public nature of the scandal, making it impossible for Claudius to ignore or cover up."
    },
    
    "ac-nisi-celeriter": {
        title: "ac nisi celeriter agis, tenet urbem maritus",
        translation: '"and unless you act quickly, the husband will control the city"',
        device: "Urgent Threat",
        description: "Narcissus warns Claudius he must act swiftly to prevent Silius from seizing power through the marriage.",
        effect: "Frames inaction as a dire threat to Claudius's rule, spurring him to decisive action against Messalina and Silius."
    },

    "non-solum-rumor": {
        title: "non solum rumor interea, sed undique nuntii ad Messalinam contendunt",
        translation: '"meanwhile, (there was) not only rumour, but from all sides messengers were hastening to Messalina"',
        device: "Negative Parallelism",
        description: "'non solum rumor...sed' construction contrasts vague rumors with concrete messengers racing to Messalina.",
        effect: "Creates a sense of escalating crisis - the scandal is spreading rapidly and Messalina is soon to be besieged."
    },

    "claudium-cognovisse": {
        title: "Claudium omnia cognovisse et venire promptum ultioni adferrent",
        translation: '"reported that Claudius knew everything and was coming eager for revenge"',
        device: "Indirect Speech + Revenge",
        description: "The messengers' reports are given in indirect speech, culminating in the Emperor's vengeful return.",
        effect: "The multiplying reports of Claudius's wrath create a mounting sense of doom for Messalina."
    },
    
    "igitur-messalina": {
        title: "igitur Messalina Lucullianos in hortos, Silius dissimulando metui ad forum digrediuntur",
        translation: '"Therefore, Messalina and Silius departed in different directions, she to the gardens of Lucullus, he to the forum to hide his fear"',
        device: "Contrasting Destinations",
        description: "Messalina and Silius separate, fleeing to contrasting locations that reveal their respective mindsets.",
        effect: "Messalina's retreat to private gardens suggests lingering hopes of clemency; Silius's public forum points to political desperation."
    },
    
    "illa-tamen": {
        title: "illa tamen, quamquam res adversae consilium eximerent, ire obviam et aspici a marito statim constituit",
        translation: '"She, however, although unfavourable circumstances were taking away time for deliberation, immediately decided to meet and be seen by her husband"',
        device: "Concessive Clause",
        description: "The 'quamquam' clause concedes the dire situation before pivoting to Messalina's bold decision.",
        effect: "Emphasizes Messalina's audacity and determination even in the face of impending catastrophe."
    },

    "quod-saepe": {
        title: "quod saepe ei fuerat subsidium",
        translation: '"which had often been a help to her"',
        device: "Relative Clause + Understatement",
        description: "The relative 'quod' refers back to Messalina's prior success in manipulating Claudius in person.",
        effect: "Suggests a pattern of Messalina exploiting Claudius's weakness through personal encounters."
    },

    "misitque-ut": {
        title: "misitque ut Britannicus et Octavia in complexum patris irent",
        translation: '"and she sent instructions that Britannicus and Octavia should go to embrace their father"',
        device: "Emotional Manipulation",
        description: "Messalina tries to use the children to evoke Claudius's familial feelings and soften his anger.",
        effect: "Shows Messalina's ruthless use of any means to influence Claudius, even exploiting his love for his children."
    },

    "atque-interim": {
        title: "atque interim, tribus omnino comitantibus - tam repens erat sollitudo -",
        translation: '"and meanwhile, with three at the most accompanying here, so sudden was the isolation"',
        device: "Parenthetical Aside",
        description: "The interjected clause highlights Messalina's abrupt fall from power and favor.",
        effect: "The sudden shift from thronging attendants to near solitude underscores the precariousness of imperial fortunes."
    },

    "postquam-per": {
        title: "postquam per urbem pedibus ivit, vehiculo, quo purgamenta hortorum eripiuntur, Ostiensem viam intrat",
        translation: '"after she went on foot through the city, she entered the Ostian road in a cart, by which the rubbish of the garden was being taken away"',
        device: "Contrasting Transportation",
        description: "Messalina's mode of travel changes from walking to riding in a lowly cart for hauling away refuse.",
        effect: "The degrading transport symbolizes Messalina's precipitous descent from empress to outcast."
    },

    "nullam-misericordiam": {
        title: "nullam misericordiam civibus commovit quia flagitorum deformitas praevalebat",
        translation: '"She aroused no pity in the citizens, because the hideousness of the scandal prevailed"',
        device: "Litotes + Repulsiveness",
        description: "The litotes 'nullam misericordiam' stresses the utter lack of sympathy, explained by the repugnance of her crimes.",
        effect: "Messalina receives no compassion due to the extreme depravity of her actions, leaving her utterly alone."
    },

    "clamitabatque-ut": {
        title: "clamitabatque ut audiret Octaviae et Britannici matrem",
        translation: '"and she kept shouting that he should listen to the mother of Octavia and Britannicus"', 
        device: "Maternal Appeal",
        description: "Messalina tries to leverage her status as mother of Claudius's children to gain an audience.",
        effect: "Shows Messalina's desperate attempt to use any remaining familial influence to save herself."
    },

    "narcissus-tamen": {
        title: "Narcissus tamen obstrepuit, Silium et nuptias referens",
        translation: '"Narcissus, however, shouted her down, referring to Silius and the marriage"',
        device: "Verbal Interruption",
        description: "Narcissus actively drowns out Messalina's pleas by loudly re-emphasizing her crimes.",
        effect: "Narcissus dynamically steers Claudius away from Messalina's influence and back to the severity of her offenses."
    },

    "codicillos-libidinum": {
        title: "codicillos libidinum indices tradidit, quibus visus Caesaris averteret",
        translation: '"he handed over a writing tablet as proof of her lusts, by which he might avert the glances of Caesar"',
        device: "Written Evidence",
        description: "Narcissus provides written documents to substantiate the charges and redirect Claudius's attention.",
        effect: "The physical evidence makes the accusations tangible and draws Claudius's focus from Messalina to the record of her misdeeds." 
    },

    "offerebantur-liberi": {
        title: "offerebantur liberi, sed Narcissus amoveri eos iussit",
        translation: '"the children tried to present themselves (to Claudius), but Narciuss ordered them to be moved away"',
        device: "Failed Intercession",
        description: "The children's attempt to reach Claudius is blocked by Narcissus's swift intervention.",
        effect: "Shows Narcissus actively thwarting any remaining source of sympathy or influence Messalina might have over Claudius."
    },

    "mirum-inter": {
        title: "mirum inter haec silentium Claudii",
        translation: '"Claudius's silence amid these events was surprising"',
        device: "Ominous Silence",
        description: "Claudius's uncharacteristic silence in the midst of the crisis creates tension and uncertainty.",
        effect: "The emperor's inscrutable reaction leaves everyone anxiously awaiting his final judgment."
    },

    "omnia-liberto": {
        title: "omnia liberto oboediebat", 
        translation: '"he obeyed the freedman in every respect"',
        device: "Total Control",
        description: "Claudius is completely subservient to Narcissus's direction, following his every command.",
        effect: "Underscores the enormous power Narcissus wields, effectively dictating the emperor's actions."
    },

    "contionem-militum": {
        title: "contionem militum in castris paravit",
        translation: '"(Narcissus) prepared a meeting of the soldiers in the camp"',
        device: "Military Intervention",
        description: "Narcissus arranges for Claudius to address the army, ensuring their support against Messal
