// In Verrem - Complete Data
// All content for the In Verrem lesson organized by section

const sectionData = {
    opening: {
        title: "Chapters 1-4: The Opening Attack",
        passages: [
            {
                chapter: "1-2",
                heading: "Framing the Trial as Divine Opportunity",
                quote: "The thing which was desired most of all, O Judges, and which alone was thought to be the foremost factor in allaying the unpopularity of your order and the dishonour of the courts, seems, at this crucial time for the republic, to have been offered to and bestowed upon you; not by human counsel, but almost by divine influence.",
                techniques: ["ETHOS - Authority", "PATHOS - Emotion"],
                analysis: "Cicero IMMEDIATELY elevates the trial's importance. This isn't just another case - it's a DIVINE OPPORTUNITY for the Senate to restore its reputation. By calling it 'divine influence,' he makes voting guilty feel like a sacred duty.",
                highlighted: true
            },
            {
                chapter: "1",
                heading: "The Central Problem",
                quote: "The rumour is spreading, not only among the Roman people, but also among foreign nations, that in these courts as they exist now, no wealthy man, however guilty he may be, can possibly be convicted.",
                techniques: ["PATHOS - Shame", "LOGOS - Evidence"],
                analysis: "Cicero doesn't accuse the judges directly - he reports what 'everyone says.' This is BRILLIANT because it pressures them without insulting them. The phrase 'no wealthy man' sets up the central conflict: WEALTH vs JUSTICE.",
                context: {
                    title: "Why Were Courts Unpopular?",
                    content: "In 81 BC, dictator Sulla made ONLY SENATORS eligible for jury service. This created a corrupt system where wealthy senators judged other wealthy senators - and repeatedly let them off. The public was furious."
                },
                highlighted: true
            },
            {
                chapter: "2",
                heading: "Verres: Condemned by Actions, Acquitted by Wealth",
                quote: "Gaius Verres has been brought to trial as a criminal. He is a man already condemned in everyone's opinion by his life and actions, yet acquitted by the magnitude of his wealth, according to his own hope and public boast.",
                techniques: ["ANTITHESIS", "PATHOS - Outrage"],
                analysis: "ANTITHESIS - 'condemned...yet acquitted' creates shocking contrast. Cicero shows Verres KNOWS he's guilty and is openly boasting that money will save him. This turns the trial into a test: will the judges prove Verres right?",
                highlighted: true
            },
            {
                chapter: "2",
                heading: "Piling On the Crimes",
                quote: "I have brought a man before you whose case will enable you to restore the lost reputation of your courts, return to favour with the people of Rome, and satisfy foreign nations: a man, the embezzler of public funds, the abuser of Asia and Pamphyliae, the thief of the city's rights, and the shame and ruin of the province of Sicily.",
                techniques: ["TRICOLON", "ASYNDETON"],
                analysis: "TRICOLON - Three parallel phrases ('restore...return...satisfy') create rhythm. Then FIVE damning descriptions with NO connecting words (asyndeton) - making the crimes feel endless and overwhelming.",
                context: {
                    title: "Asia and Pamphylia",
                    content: "Roman provinces in modern Turkey. Verres served as legate there in the 80s BC and was notorious for theft even then. Cicero reminds the jury Verres has been a criminal for DECADES."
                }
            },
            {
                chapter: "4",
                heading: "The Key Quote",
                quote: "Nothing is so holy that it cannot be corrupted, nor anything so fortified that it cannot be conquered by money.",
                techniques: ["CHARACTERISATION"],
                analysis: "This is allegedly what VERRES HIMSELF says. Whether true or not, it becomes the trial's defining statement - and Cicero will make the judges prove him wrong.",
                highlighted: true
            }
        ]
    },

    schemes: {
        title: "Chapters 5-13: Verres' Criminal History",
        passages: [
            {
                chapter: "5",
                heading: "Audacious Stupidity",
                quote: "If he was as subtle in his actions as he is bold in his endeavours, perhaps he would have eventually escaped our notice somehow. It so happens, however, that a remarkable stupidity has been joined to his incredible audacity.",
                techniques: ["CHARACTERISATION", "PATHOS - Contempt"],
                analysis: "Cicero presents Verres as simultaneously DANGEROUS (audacious) and PATHETIC (stupid). This combination makes him unworthy of protection - he's not even a clever criminal worth respecting.",
                highlighted: true
            },
            {
                chapter: "6-7",
                heading: "The Sham Inquiry",
                quote: "When I had requested a very short amount of time in which to conduct my investigation in Sicily, he found a man who would require two days less to make inquiries in Achaia - not that he would do the same with the diligence and industry that I have accomplished.",
                techniques: ["LOGOS - Absurdity", "ETHOS - Diligence"],
                analysis: "Roman law allowed defendants to delay trials by claiming someone else should be prosecuted first. Verres found a puppet prosecutor who didn't even bother going to the province! Meanwhile, Cicero spent 50 DAYS gathering evidence.",
                context: {
                    title: "The Divinatio",
                    content: "A preliminary hearing to determine who had the right to prosecute. Verres tried to get his own man appointed (who would deliberately lose). Cicero won this hearing, earning the right to prosecute."
                }
            },
            {
                chapter: "11",
                heading: "A Career of Betrayal",
                quote: "What else happened in his quaestorship except that Gnaeus Carbo was robbed of public money by his own quaestor? That the consul was plundered and betrayed? His army deserted? His province abandoned?",
                techniques: ["RHETORICAL QUESTIONS", "ASYNDETON"],
                analysis: "Rhetorical question expects answer 'NOTHING ELSE' - Verres' ENTIRE quaestorship was criminal. Four crimes with NO connecting words make them feel rapid and relentless.",
                context: {
                    title: "Gnaeus Carbo",
                    content: "Consul in 85-84 BC during civil war. Verres was his quaestor (financial officer) but stole the army's pay chest and defected to Sulla. This was Verres' FIRST major crime."
                }
            },
            {
                chapter: "13",
                heading: "Killing Citizens Like Slaves",
                quote: "Roman citizens were tortured and killed like slaves; the greatest criminals were acquitted in court through bribery; the most honest men with the greatest integrity were prosecuted while absent, condemned and exiled without the chance to speak in their defence.",
                techniques: ["CLIMAX", "PATHOS - Horror"],
                analysis: "MOST POWERFUL LINE: 'Roman citizens...tortured and killed like slaves.' This would SHOCK the jury. Roman citizenship guaranteed protection from arbitrary punishment. Treating citizens 'like slaves' violated the core of Roman identity.",
                context: {
                    title: "Provocatio - The Right to Appeal",
                    content: "Roman citizens had the right of PROVOCATIO - appeal to Rome rather than face execution in a province. Governors could execute non-citizens, but killing a citizen without trial was MURDER."
                },
                highlighted: true
            }
        ]
    },

    crisis: {
        title: "Chapters 14-21: The Political Conspiracy",
        passages: [
            {
                chapter: "15-16",
                heading: "Verres' Notoriety",
                quote: "I think that there is no man who, upon hearing his name, is not also able to relate his evil deeds; thus I ought to be more afraid of being thought to omit many of his crimes rather than inventing any charges against him.",
                techniques: ["ETHOS - Credibility", "HYPERBOLE"],
                analysis: "Cicero claims Verres is SO notorious everyone already knows his crimes. This pre-empts defense claims of exaggeration - he's actually HOLDING BACK. It also flatters the audience (you're all informed citizens)."
            },
            {
                chapter: "17",
                heading: "The Dramatic Reversal",
                quote: "All of a sudden, that man, previously so cheerful and happy, became so low and downcast that he seemed to be condemned, not only by the Roman people, but even by himself. But look! Suddenly, in these few days, with the consular comitia having taken place, he has returned to the same old plan with even more money.",
                techniques: ["NARRATIVE - Drama", "PATHOS - Suspense"],
                analysis: "Cicero creates mini-drama. Verres was DESPAIRING (after honest judges selected), but became CONFIDENT again (after consular elections). Why? Because Hortensius was elected consul - giving Verres hope that connections will save him.",
                context: {
                    title: "The Consular Comitia",
                    content: "The assembly that elected consuls. Hortensius (Verres' lawyer) won election as consul for 69 BC. After January 1st, he'd have MASSIVE power - which Verres hopes to exploit."
                }
            },
            {
                chapter: "18-19",
                heading: "The Infamous Congratulation",
                quote: "He sees Verres in the crowd by the arch of Fabius; he calls to the man and with a loud voice, congratulates him. 'I tell you,' he says, 'that you have been acquitted by today's comitia.'",
                techniques: ["VIVID NARRATION", "LOGOS - Evidence"],
                analysis: "Gaius Curio saw Hortensius' election and immediately congratulated VERRES instead of the actual consul-elect. The implication: Hortensius becoming consul means Verres will be acquitted through political manipulation. This is the SMOKING GUN.",
                context: {
                    title: "Gaius Curio",
                    content: "Prominent senator. Cicero claims Curio spoke 'openly in a large assembly' - meaning lots of witnesses. Whether it happened exactly this way or Cicero is embellishing, the story is DEVASTATING."
                },
                highlighted: true
            },
            {
                chapter: "21",
                heading: "The Metellus Celebration",
                quote: "On those very days when the praetors elect were dividing their duties by lot, and the role of holding trials regarding the extortion of money fell to Marcus Metellus, I was informed that he was receiving such congratulations that he also sent boys to his house to announce the news to his wife.",
                techniques: ["SPECIFIC DETAIL", "PATHOS - Scandal"],
                analysis: "Marcus Metellus was assigned extortion trials STARTING JANUARY 1ST. Verres is so confident this will save him that Metellus sends messengers home to celebrate. The detail ('boys to his house') makes it feel authentic and damning.",
                context: {
                    title: "The Metellus Family",
                    content: "THREE Metelli brothers coordinating to protect Verres: (1) Quintus Metellus - Consul-elect for 69 BC (2) Marcus Metellus - Will become extortion court judge (3) Lucius Metellus - Previous Sicily governor. All three working together!"
                },
                highlighted: true
            }
        ]
    },

    strategy: {
        title: "Chapters 22-37: Cicero's Tactical Masterstroke",
        passages: [
            {
                chapter: "22-23",
                heading: "The Bribery Plot",
                quote: "Many bags of Sicilian money had been sent by a certain senator to a Roman knight. Out of these, around ten bags had been left with the senator labelled for use in my comitia for the aedileship.",
                techniques: ["LOGOS - Specific Evidence", "PATHOS - Corruption"],
                analysis: "Cicero was running for AEDILE during this trial. Verres tried to bribe voters to make Cicero LOSE - hoping defeat would humiliate and weaken his prosecution. The detail ('ten bags labelled') suggests actual intelligence.",
                context: {
                    title: "The Tribes",
                    content: "Rome's 35 TRIBES were voting units. To rig an election, you bribed representatives from multiple tribes. The fact that Verres' men met 'by night' emphasises criminality."
                }
            },
            {
                chapter: "25",
                heading: "The People's Victory",
                quote: "The Roman people with their most generous good will ensured that I would not be deprived of my honour by the money of that man, whose wealth had been unable to make me abandon my good faith.",
                techniques: ["ETHOS - Integrity", "PATHOS - Gratitude"],
                analysis: "Despite Verres' bribery, Cicero WON the aedileship. This proves: (1) Cicero has popular support (2) Not everyone can be bought. It's a subtle threat to jury - the people are watching and want Verres convicted.",
                highlighted: true
            },
            {
                chapter: "26-27",
                heading: "The Delay Strategy Exposed",
                quote: "I found that these plans were set up so that they might protract matters, by whatever means possible, and end up pleading their case before Marcus Metellus as praetor.",
                techniques: ["LOGOS - Conspiracy"],
                analysis: "If Verres delays until January 1st: Marcus Metellus becomes judge, Hortensius & Quintus Metellus become consuls, many jurors replaced. The ENTIRE trial would be RESET with Verres' friends in control.",
                context: {
                    title: "Why January 1st Matters",
                    content: "New magistrates took office January 1st. If trial delays past New Year, everything changes: new judge (Metellus - friendly), new consuls (with power to intimidate), new jurors (can be bribed fresh)."
                },
                highlighted: true
            },
            {
                chapter: "28-29",
                heading: "Intimidating the Witnesses",
                quote: "The other consul elect sent for the Sicilians. To them he speaks in this manner: that he is the consul, that one of his brothers has obtained Sicily as his province; that the other is to be judge in all prosecutions for extortion.",
                techniques: ["LOGOS - Damning Evidence", "PATHOS - Intimidation"],
                analysis: "Quintus Metellus SUMMONED Cicero's witnesses and threatened them. The three brothers control EVERYTHING: consul (highest office), extortion judge, Sicily governor. Message: testify against Verres and suffer when we take power.",
                highlighted: true
            },
            {
                chapter: "30-31",
                heading: "Counting the Days",
                quote: "Today is the Nones of August. There are ten days before the votive games which Gnaeus Pompeius is going to celebrate. These games will take fifteen days, and then the Roman games will follow immediately. And so, when almost forty days have passed...",
                techniques: ["LOGOS - Calendar", "SPECIFICITY"],
                analysis: "Cicero COUNTS THE DAYS. Between games and festivals, they can easily push past January 1st. He makes this MATHEMATICALLY CLEAR - showing he's thought it through.",
                context: {
                    title: "Why Trials Stopped for Games",
                    content: "Roman LUDI (games) were religious festivals when courts closed. Major festivals in autumn: Pompey's Votive Games (15 days), Ludi Romani (14 days), Ludi Victoriae, Ludi Plebeii (14 days) = ~60 days yearly!"
                }
            },
            {
                chapter: "33",
                heading: "The Revolutionary Procedure",
                quote: "I reserve for another time that fruit of praise which will be learnt from a long uninterrupted speech; for now I prosecute this man with written records, witnesses, and the letters and authorities of public and private individuals.",
                techniques: ["INNOVATIVE PROCEDURE"],
                analysis: "THE MASTERSTROKE: Cicero announces he's SKIPPING traditional long speeches. He'll call witnesses IMMEDIATELY. This defeats delay strategy, prevents Hortensius responding, forces quick verdict before January 1st. BRILLIANT!",
                highlighted: true
            },
            {
                chapter: "35-36",
                heading: "Fighting Judicial Domination",
                quote: "I profess that I have undertaken this; it may well be a great burden, and a great danger to myself, but nonetheless truly worthy of the application of my diligence and all the vigour of my age.",
                techniques: ["PATHOS - Heroism", "ETHOS - Courage"],
                analysis: "Cicero admits this is DANGEROUS - powerful men want him to fail. But he's willing to risk everything. This makes him seem brave, idealistic, committed to justice despite personal cost.",
                highlighted: true
            }
        ]
    },

    corruption: {
        title: "Chapters 39-47: Systematic Corruption Exposed",
        passages: [
            {
                chapter: "39-40",
                heading: "Previous Judicial Scandals",
                quote: "Why it is that a senator was found who, when he was a judge, in one and the same trial, took money not only from the defendant – which he divided among the judges – but also from the prosecutor to condemn the defendant.",
                techniques: ["LOGOS - Evidence", "PATHOS - Outrage"],
                analysis: "Cicero describes judges who: (1) Vote without knowing the case (2) Take bribes from BOTH SIDES (3) Accept money to convict (not just acquit). Justice is completely for sale - you can pay to have enemies convicted!",
                context: {
                    title: "Colored Tablets",
                    content: "In some trials, jurors got different colored voting tablets to secretly identify who was bribed. This let corrupt senators CHECK whether judges voted as paid. OATH MEANT NOTHING!"
                }
            },
            {
                chapter: "40",
                heading: "Verres' Three-Year Plan",
                quote: "Gaius Verres often said in Sicily, while many people were listening, that he had distributed the proceeds of his three year Sicilian praetorship in such a way: he gained for himself the profits of just one year; the profits of the second year were given to his patrons and defenders, and he reserved the whole of the third year, the most fruitful and profitable, for the judges.",
                techniques: ["STRUCTURE", "PATHOS - Systematic Evil"],
                analysis: "THE MOST FAMOUS QUOTE. Year 1: Steal for himself. Year 2: Steal for lawyers/patrons. Year 3: Steal for jury bribery. This makes corruption SYSTEMATIC and CALCULATED - he PLANNED to buy acquittal!",
                highlighted: true
            },
            {
                chapter: "41",
                heading: "The Bitter Irony",
                quote: "I thought that foreign nations would send ambassadors to the Roman people to have the law of extortion repealed and trials stopped. For if there were no trials, they would think that each man would only take as much as he thought enough to satisfy himself.",
                techniques: ["IRONY/PARADOX", "LOGOS - Absurd Logic"],
                analysis: "THE BITTER JOKE: Extortion trials were supposed to PROTECT provinces. But trials are so corrupt that provinces would be BETTER OFF without them! Without trials: governors steal what THEY need. WITH trials: governors steal TRIPLE (for themselves, lawyers, AND judges). The system makes things WORSE!",
                highlighted: true
            },
            {
                chapter: "43-44",
                heading: "Divine Opportunity for Redemption",
                quote: "By the immortal gods, O Judges, this opportunity has been given to you by divine influence, so that you might liberate your whole order from hatred, unpopularity, infamy and shame.",
                techniques: ["PATHOS - Urgency", "RELIGIOUS APPEAL"],
                analysis: "Cicero returns to OPENING theme - this is divine opportunity. Judges can RESTORE reputation by convicting Verres. If they acquit, they confirm everyone's worst beliefs about senatorial corruption.",
                highlighted: true
            },
            {
                chapter: "45-46",
                heading: "Pompey's Warning",
                quote: "Gnaeus Pompeius himself said in the same assembly that the provinces were plundered and plagued; that the law courts had become disgraceful and wicked; and that he wished to look into and make provisions for this situation; then indeed the Roman people showed their assent not with a shout, but with the greatest uproar.",
                techniques: ["APPEAL TO AUTHORITY", "PATHOS - Popular Support"],
                analysis: "Pompey - Rome's GREATEST GENERAL and consul-elect - publicly condemned judicial corruption. Crowd went WILD with approval. Cicero shows: the PEOPLE and most POWERFUL MAN both demand reform. Jury can't ignore this.",
                context: {
                    title: "Pompey the Great",
                    content: "Gnaeus Pompeius Magnus - military hero who conquered vast territories. Consul-elect for 70 BC. His support for reform gave it MASSIVE legitimacy. Cicero invokes his name to show he's on 'right side of history.'"
                }
            },
            {
                chapter: "47",
                heading: "The Ultimate Test",
                quote: "This is a trial in which you will be judging the defendant, and the Roman people will be judging you.",
                techniques: ["REVERSAL", "PATHOS - Pressure"],
                analysis: "THE ULTIMATE THREAT: 'You will judge...and people will judge YOU.' Cicero makes judges aware they're being watched. This isn't private decision - it's PUBLIC TEST of whether senators can be trusted with power.",
                highlighted: true
            }
        ]
    },

    appeal: {
        title: "Chapters 48-56: The Final Appeal",
        passages: [
            {
                chapter: "48-49",
                heading: "Promise of Transparency",
                quote: "I will bring forward matters so well known, so well supported by witnesses, so important, and so evident that nobody will try to use his influence to obtain from you the acquittal of this man. The matter will be conducted by me so that not only the ears, but even the eyes of the Roman people will seem to be present at all their meetings.",
                techniques: ["ETHOS - Confidence", "TRANSPARENCY"],
                analysis: "Cicero promises TOTAL TRANSPARENCY. He'll expose not just Verres' crimes, but the BRIBERY ATTEMPTS themselves. 'Eyes of the Roman people' - threatening to name every senator who tries to help Verres.",
                highlighted: true
            },
            {
                chapter: "49",
                heading: "Flattery and Threat Combined",
                quote: "It is understood among all men, that since these trials which we now have were established, there is yet to have been a jury of this splendour and this dignity. But if anything here is to be done incorrectly, all men will think not that other more suitable judges should be appointed from that same order but that another order entirely must be established.",
                techniques: ["FLATTERY + THREAT"],
                analysis: "CARROT AND STICK: Flatters current jury ('splendour and dignity') while WARNING this is their last chance. If they fail, senators lose ALL judicial power - not reformed but REPLACED entirely.",
                context: {
                    title: "The Lex Aurelia",
                    content: "Passed 70 BC - reformed juries to 1/3 senators, 1/3 equites, 1/3 treasury officials. Cicero warns: if you acquit Verres, you PROVE reformers right to take power from senators!"
                }
            },
            {
                chapter: "50",
                heading: "Sacred Oath",
                quote: "I promise this to you, O Judges, and to the Roman people; by Hercules, my life shall fail before my strength and perseverance in prosecuting their wickedness.",
                techniques: ["PATHOS - Heroic Commitment", "OATH"],
                analysis: "'By Hercules' - invoking hero-god. Cicero vows to pursue corruption until DEATH. This isn't just a trial - it's a CRUSADE. He's tireless defender of justice, willing to sacrifice everything.",
                highlighted: true
            },
            {
                chapter: "51-52",
                heading: "Appealing to Glabrio's Legacy",
                quote: "Call to mind the Acilian law passed by your father, by which the Roman people enjoyed the very best decisions, and the most severe judges in cases of extortion.",
                techniques: ["ETHOS - Family Honor", "PATHOS - Legacy"],
                analysis: "Personal appeal to judge. His FATHER passed law creating extortion courts! If Glabrio lets Verres go, he dishonors own family's legacy. Personal pressure on top of public pressure.",
                context: {
                    title: "The Lex Acilia",
                    content: "Passed by Glabrio's father around 123-122 BC - established permanent extortion courts. It was REFORM law to protect provinces. Cicero reminds: your father created this to STOP men like Verres!"
                }
            },
            {
                chapter: "55",
                heading: "The Innovative Approach",
                quote: "I will adopt this course, not a new one, but one that has been adopted before by those who are now the leading men of our state; that is, to call the witnesses immediately.",
                techniques: ["INNOVATIVE STRUCTURE"],
                analysis: "Normal trials: (1) Prosecution speech (hours/days) (2) Defense speech (3) Witnesses (4) More speeches. Cicero's innovation: (1) Brief opening (THIS SPEECH) (2) WITNESSES IMMEDIATELY. Defeats delay, forces quick verdict!",
                highlighted: true
            },
            {
                chapter: "56",
                heading: "I Have Spoken",
                quote: "We shall make this clear to you with witnesses, with public records, and with private authorities, so that you might decide that even if we had space and we had spent empty days speaking at our convenience, there was still no need for a long oration. I have spoken.",
                techniques: ["SUMMARY STATEMENT"],
                analysis: "Final statement is both modest (don't need fancy speeches) and threatening (evidence is that strong). Then: 'I have spoken' (DIXI). Two words. No flourish - just stark announcement evidence phase begins. Ancient mic drop.",
                highlighted: true
            }
        ]
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadSectionContent();
});

// Navigation
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            showSection(this.getAttribute('data-section'));
        });
    });

    const navButtons = document.querySelectorAll('.nav-btn[data-goto]');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            showSection(this.getAttribute('data-goto'));
        });
    });
}

function showSection(sectionId) {
    document.querySelectorAll('.section-content').forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === sectionId) {
            item.classList.add('active');
        }
    });
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Load content from data into sections
function loadSectionContent() {
    // This function can be used to dynamically load content
    // For now, content is in HTML, but this structure allows
    // for dynamic loading in the future
    console.log('Section data loaded:', Object.keys(sectionData));
}
