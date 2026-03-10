/* Republic Data - Page 1: The Roman Republic: How It Worked */

window.pageData = {

    // ===== OVERVIEW CARDS (card grid on Overview tab) =====
    overviewCards: [
        {
            id: 'constitution-spqr',
            title: 'The Constitution: SPQR',
            accent: 'teal',
            summary: 'The Senate, magistracies, and assemblies formed an interlocking system designed to prevent any one man from gaining permanent power.',
            modal: {
                sections: [
                    {
                        heading: 'Senatus Populusque Romanus',
                        body: '<p>The letters <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">SPQR</span> \u2014 <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">Senatus Populusque Romanus</span>, the Senate and People of Rome \u2014 express the fundamental duality of the Roman state. Sovereignty belongs to the people, but the Senate guides policy. Neither element alone constitutes the <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">res publica</span>.</p><p>The Senate is not a legislative body in the modern sense. It passes <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">senatus consulta</span> \u2014 advisory decrees \u2014 which carry enormous moral weight through the collective <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">auctoritas</span> of its members, but are not technically binding law. Laws (<span style="font-family:\'Roboto Mono\',monospace;font-style:italic">leges</span>) can only be passed by the popular assemblies. In practice, however, the Senate controls foreign policy, state finances, provincial commands, and the religious calendar. Its power rests on custom and prestige, not a written mandate.</p>'
                    },
                    {
                        heading: 'The Magistracies',
                        body: '<p>Executive power \u2014 <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">imperium</span> \u2014 is held by elected magistrates, not by the Senate as a body. The two <strong>consuls</strong> are the chief executives of the state: they command armies, preside over the Senate, and represent Rome abroad. Crucially, there are always two of them, and each can veto the other. This is the principle of <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">collegiality</span>: shared power prevents tyranny.</p><p><strong>Praetors</strong> serve primarily as judges and legal administrators, though they also hold <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">imperium</span> and can command armies. By the late Republic there are eight praetors, reflecting Rome\'s expanding judicial needs.</p><p>The <strong>tribunes of the plebs</strong> occupy an extraordinary constitutional position. They are sacrosanct \u2014 their persons are inviolable under religious law \u2014 and they possess the <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">ius intercessionis</span>, the power to veto any act of any magistrate, including another tribune. Originally created to protect the common people from patrician abuse, the tribunate becomes the key weapon of popularis politics in the late Republic.</p><p><strong>Censors</strong>, elected every five years, conduct the census, assign citizens to their voting class, and hold the power to expel senators for moral failings \u2014 the <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">regimen morum</span>. The censorship is considered the pinnacle of a senatorial career.</p><p>The <strong>dictator</strong> is an emergency magistrate appointed for a maximum of six months, with absolute authority. This office is dormant for over a century before Sulla revives it in 82 BC. Its later abuse by both Sulla and Caesar illustrates precisely why the Romans feared concentrated power.</p>'
                    },
                    {
                        heading: 'Checks and Balances',
                        body: '<p>The system is designed so that no single element \u2014 Senate, magistrates, or people \u2014 can dominate unchecked. Annual terms prevent the accumulation of personal power. Collegiality ensures that every magistrate has a colleague who can block him. The tribunician veto gives the people a defensive weapon against the elite. The Senate\'s <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">auctoritas</span> restrains populist demagogues. The whole system interlocks, and its strength depends on everyone agreeing to play by the rules. When they stop doing so, the Republic collapses.</p>'
                    }
                ],
                latinQuotes: [
                    {
                        latin: 'Omnium rerum publicarum nostra res publica optimam constitutionem habet.',
                        translation: '"Of all commonwealths, our commonwealth has the best constitution." \u2014 Cicero, De Re Publica 1.70',
                        analysis: 'Cicero\'s claim reflects the Roman conviction that their mixed constitution was uniquely stable. This confidence made its eventual failure all the more traumatic for men like Cicero who had devoted their lives to defending it.'
                    }
                ],
                examTip: '<p><ul><li>When discussing constitutional breakdown, always show you understand what the <em>normal</em> system looked like. Examiners reward candidates who can explain what was being violated, not just that violations occurred.</li><li>Link the principle of collegiality to specific failures: e.g. Caesar holding sole consulship, or Pompey\'s sole consulship in 52 BC.</li></ul></p>'
            }
        },
        {
            id: 'cursus-honorum',
            title: 'The Cursus Honorum',
            accent: 'teal',
            summary: 'The rigid career ladder of Roman politics enforced age limits, waiting periods, and shared power to prevent any individual from rising too fast.',
            modal: {
                sections: [
                    {
                        heading: 'The Career Ladder',
                        body: '<p>The <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">cursus honorum</span> \u2014 literally the \'course of honours\' \u2014 is the fixed sequence of public offices that every ambitious Roman politician must follow. It is codified by the <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">Lex Villia Annalis</span> of 180 BC, which sets minimum ages for each magistracy and compulsory intervals between them.</p><p>The sequence runs: <strong>quaestor</strong> (minimum age 30; financial administration, often in the provinces), then <strong>aedile</strong> (optional but politically important; responsible for public games, the grain supply, and city maintenance), then <strong>praetor</strong> (minimum age 39; judicial authority and <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">imperium</span>), and finally <strong>consul</strong> (minimum age 42; supreme executive power). A two-year gap must separate each office.</p>'
                    },
                    {
                        heading: 'Collegiality and Iteration',
                        body: '<p>Two principles govern the system. <strong>Collegiality</strong> means that every magistracy is held by at least two men simultaneously, each with equal authority and the power to obstruct the other. This is not a formula for efficient government \u2014 it is a formula for preventing tyranny.</p><p><strong>Iteration</strong> \u2014 the holding of the same office more than once \u2014 is technically permitted but strongly discouraged, and after Sulla\'s reforms is legally forbidden without a ten-year interval. Marius\'s seven consulships (107\u201386 BC) represent precisely the kind of accumulation of personal power the system was designed to prevent. When the Senate grants Pompey a sole consulship in 52 BC, or when Caesar secures consecutive consulships, the <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">cursus</span> has effectively ceased to function.</p>'
                    },
                    {
                        heading: 'Why It Matters',
                        body: '<p>The <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">cursus honorum</span> is not just an administrative convenience. It embodies a political philosophy: that power must be temporary, shared, and earned through demonstrated competence at each level. It forces patience on the ambitious. It ensures that by the time a man reaches the consulship, he has spent at least twelve years in public life and has been tested at every stage. The collapse of the <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">cursus</span> in the late Republic is inseparable from the collapse of the Republic itself.</p>'
                    }
                ],
                latinQuotes: [
                    {
                        latin: 'Ut honos sit finis laborum.',
                        translation: '"So that office should be the reward for toil." \u2014 proverbial',
                        analysis: 'The idea that political office is a reward earned through service \u2014 not an entitlement of birth \u2014 underpins the cursus honorum. Even within a rigid aristocracy, Romans insisted on the fiction that magistracies were merit-based.'
                    }
                ],
                examTip: '<p><ul><li>Be precise about ages and intervals. Examiners notice when candidates can cite the Lex Villia Annalis and give specific minimum ages.</li><li>Connect the cursus to individual case studies: Cicero reaches the consulship <em>suo anno</em> (at the earliest legal age), while Pompey holds it before the legal age. What does each case reveal about the system?</li></ul></p>'
            }
        },
        {
            id: 'optimates-populares',
            title: 'Optimates vs Populares',
            accent: 'teal',
            summary: 'These are not political parties but competing methods: optimates work through the Senate, populares appeal directly to the people\'s assemblies. Both sides are drawn from the same elite.',
            modal: {
                sections: [
                    {
                        heading: 'Methods, Not Parties',
                        body: '<p>The single most important thing to understand about Roman politics is that <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">optimates</span> and <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">populares</span> are not fixed factions like modern political parties. There are no membership lists, no manifestos, no whips. They describe <em>methods</em> of political action, not permanent allegiances. A senator might act as a popularis on one issue and an optimate on another.</p><p>The <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">optimates</span> \u2014 literally the \'best men\' \u2014 are those who work through the traditional authority of the Senate. They defend senatorial prerogatives, resist land reform, and appeal to <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">mos maiorum</span> (ancestral custom) as the foundation of legitimate governance. Key figures associated with optimate methods include Cato the Younger, Cicero (in most contexts), and the Metelli family.</p><p>The <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">populares</span> \u2014 \'men of the people\' \u2014 bypass the Senate and take legislation directly to the popular assemblies, typically using the tribunate as their constitutional vehicle. The Gracchi pioneer this approach; Caesar perfects it. Crucially, populares are not democrats in any modern sense. They are aristocrats using popular support to advance their own careers and political programmes. Clodius is born a Claudian patrician; Caesar traces his lineage to Venus.</p>'
                    },
                    {
                        heading: 'The Political Logic',
                        body: '<p>Why does a Roman aristocrat choose the popularis route? Usually because the Senate is controlled by a rival faction. If you cannot get what you want through the <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">curia</span>, you go over its head. The popular assemblies offer an alternative source of legitimate authority \u2014 one that is, technically, constitutionally superior, since only the assemblies can pass laws.</p><p>The optimate response is to invoke tradition, religious scruple (watching the skies for omens to block assemblies), and the tribunician veto of friendly tribunes. The contest between these two methods drives the political conflicts of the late Republic from 133 BC to the civil wars.</p>'
                    }
                ],
                latinQuotes: [
                    {
                        latin: 'Duo genera semper in hac civitate fuerunt eorum qui versari in re publica studuerunt: quibus ex generibus alteri se populares, alteri optimates et haberi et esse voluerunt.',
                        translation: '"There have always been two kinds of men in this state who have sought to engage in public affairs: of these, one group wished to be considered populares, the other optimates." \u2014 Cicero, Pro Sestio 96',
                        analysis: 'Cicero\'s own definition, from his defence of Sestius in 56 BC, is the most important ancient source for this distinction. Note that Cicero presents it as a choice of method and reputation, not a fixed identity.'
                    }
                ],
                examTip: '<p><ul><li>Never describe optimates and populares as \'parties\'. This is the most common error at A-Level and examiners penalise it.</li><li>Show that both groups are elite: give examples of populares who are aristocrats (Caesar, Clodius, the Gracchi) to demonstrate the point.</li><li>Use Cicero\'s definition from Pro Sestio 96 as your anchor quotation for this topic.</li></ul></p>'
            }
        },
        {
            id: 'mos-maiorum',
            title: 'Mos Maiorum',
            accent: 'green',
            summary: 'The \'way of the ancestors\' was Rome\'s unwritten constitution: a body of custom, precedent, and tradition that governed political behaviour more powerfully than any law code.',
            modal: {
                sections: [
                    {
                        heading: 'The Unwritten Constitution',
                        body: '<p>The Roman Republic has no written constitution. There is no single document that defines the powers of magistrates, the authority of the Senate, or the rights of citizens. Instead, the Republic is governed by <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">mos maiorum</span> \u2014 the \'way of the ancestors\' \u2014 a vast and evolving body of custom, precedent, religious practice, and shared expectation that tells every Roman how a public man ought to behave.</p><p><span style="font-family:\'Roboto Mono\',monospace;font-style:italic">Mos maiorum</span> is not law in the enforceable sense. No court can punish you for violating it. Its authority rests on social pressure, peer judgement, and the deeply ingrained Roman reverence for the past. To act against <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">mos maiorum</span> is to set yourself against every ancestor who ever held office, and in a society that worships its dead, this is a devastating charge.</p>'
                    },
                    {
                        heading: 'Why It Mattered',
                        body: '<p>Because there is no written law code governing most political behaviour, custom is everything. When Tiberius Gracchus deposes his fellow tribune Octavius in 133 BC, there is no law that explicitly forbids it \u2014 but everyone knows it has never been done before, and the violation of this precedent shocks the political class. When Sulla marches on Rome in 88 BC, there is no written rule against bringing an army into the city \u2014 but the unwritten prohibition is absolute, and his transgression is remembered as a defining atrocity.</p><p>This dependence on custom makes the system simultaneously resilient and fragile. It is resilient because it can adapt to new circumstances without the rigidity of written law. It is fragile because once men begin to ignore custom, there is no mechanism to compel obedience. The history of the late Republic is, in large part, the story of <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">mos maiorum</span> being eroded precedent by precedent until it no longer has the power to restrain ambitious men.</p>'
                    },
                    {
                        heading: 'What Mos Maiorum Included',
                        body: '<p>The concept encompasses a wide range of norms: the proper sequence of magistracies (<span style="font-family:\'Roboto Mono\',monospace;font-style:italic">cursus honorum</span>), the expectation that the Senate would be consulted on major decisions, the prohibition on military force within the <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">pomerium</span> (the sacred boundary of Rome), the practice of consulting the gods before public business through augury and auspices, the obligation of patrons to their clients, and the general expectation that public men would compete for glory within agreed limits rather than destroying the system itself.</p>'
                    }
                ],
                latinQuotes: [
                    {
                        latin: 'Moribus antiquis res stat Romana virisque.',
                        translation: '"The Roman state stands on its ancient customs and its men." \u2014 Ennius, Annales (quoted by Cicero, De Re Publica 5.1)',
                        analysis: 'Cicero quotes this line from the early poet Ennius as a foundational statement of Roman political philosophy. The word <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">moribus</span> (customs, character) carries both political and ethical weight: the Republic depends not on institutional machinery but on the moral quality of its citizens.'
                    }
                ],
                examTip: '<p><ul><li>Use <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">mos maiorum</span> as an analytical framework, not just a vocabulary item. Every time someone breaks a precedent, explain what the precedent was and why breaking it matters.</li><li>The Ennius quotation (via Cicero) is an excellent all-purpose source for essays on constitutional breakdown.</li><li>Compare with the modern distinction between conventions and laws: the UK constitution is a useful parallel for students.</li></ul></p>'
            }
        },
        {
            id: 'violence-politics',
            title: 'Violence in Roman Politics',
            accent: 'red',
            summary: 'With no police force and no standing army in Italy, the Republic depended entirely on social consensus. Once violence became an accepted political tool, the system could not survive.',
            modal: {
                sections: [
                    {
                        heading: 'The Absence of a Police Force',
                        body: '<p>The Roman Republic has no police force, no standing army within Italy, and no institutional mechanism for physically enforcing order in the city. This is not an oversight \u2014 it is a deliberate choice. The Romans fear standing military power within the city walls precisely because it could be used to establish tyranny. The <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">pomerium</span>, the sacred boundary of Rome, marks the line beyond which <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">imperium</span> militiae (military authority) gives way to <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">imperium domi</span> (civil authority).</p><p>Order in the city depends on consensus, deference, and the moral authority of the magistrates. When a consul speaks, citizens are expected to obey not because he commands soldiers, but because the majesty of his office and the weight of ancestral custom demand compliance. This works as long as everyone accepts the system. When they do not, there is nothing to stop a mob.</p>'
                    },
                    {
                        heading: 'The Gracchi and the Threshold',
                        body: '<p>The murder of Tiberius Gracchus in 133 BC is the moment when political violence becomes explicit in Republican politics. When a group of senators, led by Scipio Nasica, beat Tiberius and his supporters to death with chair legs and wooden fragments on the Capitol, they cross a line that can never be uncrossed. A tribune of the plebs \u2014 a sacrosanct magistrate, protected by religious oath \u2014 is killed by fellow senators on sacred ground.</p><p>The precedent is catastrophic. Gaius Gracchus is killed in 121 BC under the <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">senatus consultum ultimum</span> \u2014 the \'ultimate decree\' by which the Senate authorises the consuls to \'see that the Republic suffers no harm\'. This decree has no explicit legal basis; it is an improvisation that becomes a tool for extra-judicial killing. Saturninus in 100 BC, Cicero\'s execution of the Catilinarians in 63 BC, and Clodius\'s murder by Milo\'s gang in 52 BC all follow from this original breach.</p>'
                    },
                    {
                        heading: 'The Logic of Escalation',
                        body: '<p>Once violence enters politics, it escalates because there is no neutral arbiter to stop it. Each act of violence creates a precedent that legitimises the next. If the Senate can authorise the killing of citizens without trial in 121 BC, then Sulla can justify his proscriptions in 82 BC as an extension of the same principle. If armed gangs control the streets under Clodius and Milo, then Caesar can argue that his march on Rome merely restores order. Violence becomes self-reinforcing because the Republic lacks the institutional capacity to punish it.</p>'
                    }
                ],
                latinQuotes: [
                    {
                        latin: 'Videant consules ne quid res publica detrimenti capiat.',
                        translation: '"Let the consuls see to it that the Republic suffers no harm." \u2014 the senatus consultum ultimum',
                        analysis: 'This formula, first deployed against Gaius Gracchus in 121 BC, effectively suspends normal legal protections and authorises the consuls to use lethal force against Roman citizens. Its legality is contested throughout the late Republic \u2014 Cicero\'s career is shaped by the question of whether his use of it against the Catilinarians was justified.'
                    }
                ],
                examTip: '<p><ul><li>Always trace the escalation: Tiberius Gracchus (133) \u2192 Gaius Gracchus (121) \u2192 Saturninus (100) \u2192 Sulla\'s march (88) \u2192 proscriptions (82) \u2192 street violence of the 50s \u2192 civil war (49). Examiners reward candidates who show the pattern.</li><li>The <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">senatus consultum ultimum</span> is essential for essays on constitutional breakdown. Learn the formula and its legal ambiguity.</li></ul></p>'
            }
        },
        {
            id: 'clientela-patronage',
            title: 'Clientela and Patronage',
            accent: 'purple',
            summary: 'Roman society is structured by networks of mutual obligation between patrons and clients, shaping everything from elections to legal proceedings to provincial government.',
            modal: {
                sections: [
                    {
                        heading: 'The Patron-Client Relationship',
                        body: '<p><span style="font-family:\'Roboto Mono\',monospace;font-style:italic">Clientela</span> is perhaps the most fundamental social institution in Rome. A <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">patronus</span> (patron) offers protection, legal representation, financial support, and political influence to his <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">clientes</span> (clients). In return, clients owe their patron political loyalty, electoral support, attendance at his public appearances (the morning <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">salutatio</span>), and, in earlier periods, military service.</p><p>These relationships are hereditary, often stretching back generations. They are bound not by legal contract but by <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">fides</span> \u2014 faithfulness, good faith, trust \u2014 one of the cardinal Roman virtues. To betray a patron or abandon a client is a profound social disgrace.</p>'
                    },
                    {
                        heading: 'Patronage and Politics',
                        body: '<p>The entire electoral system depends on patronage networks. A candidate for office mobilises his clients, his friends\' clients, and his family connections to secure votes. The morning <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">salutatio</span> \u2014 when clients visit their patron\'s house at dawn \u2014 is a public performance of political strength: the more clients crowding your atrium, the more powerful you appear.</p><p>Legal advocacy is another form of patronage. When Cicero defends a client in court, he is not a hired lawyer; he is a patron performing his social obligation. The acquitted client then owes Cicero a permanent debt of gratitude and political loyalty. This is why Cicero defends so many cases: each trial builds his network.</p><p>Patronage extends to entire communities. A Roman general who conquers a province becomes the patron of its inhabitants. Pompey\'s vast client networks across the eastern Mediterranean give him political resources that no purely domestic politician can match. Caesar builds similar networks in Gaul. These provincial clientelae ultimately matter more than any domestic constituency.</p>'
                    },
                    {
                        heading: 'Patronage and the Army',
                        body: '<p>After Marius\'s military reforms in 107 BC, soldiers increasingly look to their commander \u2014 not the state \u2014 as their patron. The general promises them land on discharge; the state fails to provide it. The result is that armies become personal client networks loyal to individual commanders rather than to the Republic. This transformation is arguably the single most important structural cause of the Republic\'s collapse.</p>'
                    }
                ],
                latinQuotes: [
                    {
                        latin: 'Fides est fundamentum iustitiae.',
                        translation: '"Good faith is the foundation of justice." \u2014 Cicero, De Officiis 1.23',
                        analysis: '<span style="font-family:\'Roboto Mono\',monospace;font-style:italic">Fides</span> is the virtue that holds the patron-client system together. Without enforceable contracts, Romans depend on mutual trust and the social penalty of disgrace to ensure that obligations are honoured. When <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">fides</span> breaks down between political leaders, the system of reciprocal obligation collapses with it.'
                    }
                ],
                examTip: '<p><ul><li>Patronage is the key to explaining why Roman armies follow their generals against the state. Always connect Marius\'s reforms to the personal armies of Sulla, Pompey, and Caesar.</li><li>Use <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">clientela</span> to explain electoral politics: it demonstrates that you understand Roman society, not just Roman events.</li><li>Pompey\'s eastern clientela is an excellent example for essays on the First Triumvirate.</li></ul></p>'
            }
        },
        {
            id: 'political-vocabulary',
            title: 'Key Political Vocabulary',
            accent: 'blue',
            summary: 'The essential Latin terms of Roman political thought: auctoritas, dignitas, otium, negotium, concordia ordinum, novus homo, and res publica.',
            modal: {
                sections: [
                    {
                        heading: 'Auctoritas',
                        body: '<p><span style="font-family:\'Roboto Mono\',monospace;font-style:italic">Auctoritas</span> is the informal influence and moral weight that a public man commands through his achievements, ancestry, and reputation. It is not a legal power but something more potent: the ability to shape events by the sheer gravity of one\'s standing. The Senate\'s collective <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">auctoritas</span> is the basis of its political dominance. When Augustus later claims to have surpassed all others in <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">auctoritas</span> while holding no extraordinary legal powers, he is describing the essence of Republican political culture \u2014 and its subversion.</p>'
                    },
                    {
                        heading: 'Dignitas',
                        body: '<p><span style="font-family:\'Roboto Mono\',monospace;font-style:italic">Dignitas</span> encompasses a man\'s rank, prestige, political standing, and personal honour. It is not merely vanity \u2014 a Roman\'s <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">dignitas</span> is his public identity, the measure of his worth as a citizen and leader. To attack a man\'s <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">dignitas</span> is to attack his very existence as a political being. Caesar crosses the Rubicon in 49 BC explicitly to defend his <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">dignitas</span>, which he claims his enemies in the Senate are determined to destroy.</p>'
                    },
                    {
                        heading: 'Otium and Negotium',
                        body: '<p><span style="font-family:\'Roboto Mono\',monospace;font-style:italic">Otium</span> means leisure, peace, and the absence of political crisis \u2014 but it carries a deeper meaning: the stable, orderly condition in which civilised life is possible. Its opposite, <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">negotium</span> (literally \'not-leisure\'), means business, public duty, and active political engagement. For Cicero, the ideal state is <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">cum dignitate otium</span> \u2014 \'peace with honour\' or \'dignified leisure\' \u2014 a condition in which the Republic is stable, the propertied classes are secure, and men of standing can enjoy their position without the disruption of popularis agitation or civil war.</p>'
                    },
                    {
                        heading: 'Concordia Ordinum and Novus Homo',
                        body: '<p><span style="font-family:\'Roboto Mono\',monospace;font-style:italic">Concordia ordinum</span> \u2014 the \'harmony of the orders\' \u2014 is Cicero\'s political programme: an alliance between the senatorial and equestrian orders to defend the existing social hierarchy against both populist politicians and military strongmen. It is a fundamentally conservative vision, and its failure haunts Cicero\'s career.</p><p>A <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">novus homo</span> (\'new man\') is the first member of a family to reach the consulship. In a political culture dominated by inherited prestige, the <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">novus homo</span> faces enormous disadvantages. Cicero is the most famous example: he reaches the consulship without noble ancestry, and he never lets anyone forget it. Marius before him is another, and his career illustrates both the possibilities and the limits of social mobility in Rome.</p>'
                    },
                    {
                        heading: 'Res Publica',
                        body: '<p><span style="font-family:\'Roboto Mono\',monospace;font-style:italic">Res publica</span> literally means \'the public thing\' or \'the people\'s affair\'. It is not well translated as \'republic\' in the modern sense, because it does not imply democracy or popular sovereignty as we understand them. Rather, it denotes the common property of the Roman people \u2014 their shared state, institutions, laws, and way of life. Cicero defines it precisely: <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">res publica res populi</span> \u2014 \'the commonwealth is the people\'s property\'. To attack the <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">res publica</span> is to attack something that belongs to all Romans, which is why both optimates and populares can each claim to be its true defenders.</p>'
                    }
                ],
                latinQuotes: [
                    {
                        latin: 'Est igitur res publica res populi, populus autem non omnis hominum coetus quoquo modo congregatus, sed coetus multitudinis iuris consensu et utilitatis communione sociatus.',
                        translation: '"The commonwealth is the people\'s affair; but a people is not just any gathering of men assembled in any way, but a gathering of a multitude united by agreement on justice and a partnership for the common good." \u2014 Cicero, De Re Publica 1.39',
                        analysis: 'This is Cicero\'s foundational definition of the state. It insists that a legitimate political community requires both legal consensus and shared benefit. A tyrant\'s state, by this definition, is no state at all \u2014 a point Cicero deploys against Caesar.'
                    }
                ],
                examTip: '<p><ul><li>Use these Latin terms in your essays \u2014 in italics with a brief gloss on first use. Examiners reward precise terminology.</li><li>Caesar\'s <span style="font-family:\'Roboto Mono\',monospace;font-style:italic">dignitas</span> as a cause of the civil war is a perennial exam topic. Make sure you can explain what it meant to him and why he considered it worth a war.</li><li><span style="font-family:\'Roboto Mono\',monospace;font-style:italic">Concordia ordinum</span> is essential for any essay on Cicero\'s political vision and its limitations.</li></ul></p>'
            }
        }
    ],

    // ===== EVENT CARDS (Reference list tab) =====
    // Reuses the same cards as overview
    get eventCards() { return this.overviewCards; },

    // ===== SOURCE CARDS (expandable panels on Sources tab) =====
    sourceCards: [
        {
            id: 'polybius-mixed',
            title: 'Polybius on the Mixed Constitution',
            author: 'Polybius, Histories Book 6',
            content: `
                <p>The Greek historian <strong>Polybius</strong> (c. 200\u2013118 BC) is our most important theoretical source for the Roman constitution. Writing as a hostage in Rome who befriends the Scipio family, Polybius analyses Roman government through the lens of Greek political theory and concludes that Rome has achieved the ideal <strong>mixed constitution</strong> \u2014 a balance of monarchical, aristocratic, and democratic elements.</p>

                <p>In Polybius's analysis, the <strong>consuls</strong> represent the monarchical element: they hold supreme executive power, command armies, and preside over the Senate. The <strong>Senate</strong> represents the aristocratic element: it controls finances, foreign policy, and provincial administration through the collective wisdom of experienced statesmen. The <strong>people</strong>, through their assemblies and tribunes, represent the democratic element: they pass laws, elect magistrates, and can try capital cases.</p>

                <div class="latin-quote">
                    <div class="latin-text">Tribus enim generibus id contineri: regali, optimatium, et populari.</div>
                    <div class="latin-translation">"For [the constitution] is maintained by three elements: the royal, the aristocratic, and the popular."</div>
                </div>

                <p>Polybius argues that each element checks the others. The consuls need the Senate to fund their wars and ratify their treaties. The Senate needs the people to pass legislation and elect sympathetic magistrates. The people need the consuls and Senate to administer the state competently. This mutual dependence prevents any single element from becoming dominant.</p>

                <p>Polybius also develops a theory of <strong>anacyclosis</strong> \u2014 a cycle in which constitutions degenerate: kingship becomes tyranny, aristocracy becomes oligarchy, democracy becomes mob rule, and the cycle repeats. Rome's mixed constitution, he argues, breaks this cycle by combining all three good forms and allowing each to correct the others' tendency to decay.</p>

                <h4>Evaluation</h4>
                <p>Polybius writes as an admiring outsider. His analysis is idealised: he underestimates the degree to which the Senate dominates the other elements in practice, and he writing before the Gracchi demonstrate how easily the balance can be disrupted. Nevertheless, his framework profoundly influences later thinkers \u2014 including Cicero \u2014 and provides the standard analytical vocabulary for discussing the Roman constitution at A-Level.</p>

                <div class="exam-tip">
                    <div class="exam-tip-label">Using This Source</div>
                    <p>Polybius is essential for any essay on the Roman constitution. Cite him when arguing that the Republic was designed as a balanced system, and note that its eventual collapse proves the limits of his optimistic analysis. The concept of the mixed constitution also connects to Cicero's De Re Publica.</p>
                </div>
            `
        },
        {
            id: 'cicero-de-re-publica',
            title: 'Cicero, De Re Publica',
            author: 'Cicero, De Re Publica (54\u201351 BC)',
            content: `
                <p>Cicero\'s <em>De Re Publica</em> (\'On the Commonwealth\'), written during the turbulent 50s BC, is a dialogue modelled on Plato\'s <em>Republic</em>. Set dramatically in 129 BC \u2014 just after the death of Tiberius Gracchus \u2014 it features Scipio Aemilianus and other leading statesmen discussing the ideal form of government.</p>

                <p>Like Polybius, Cicero endorses the <strong>mixed constitution</strong> as the most stable form of government. But Cicero goes further: he argues that the Roman Republic, at its best, is the historical embodiment of this theoretical ideal. The dialogue insists that the best state is not an abstract philosopher\'s construction but a living reality \u2014 the actual Roman <span style="font-family:'Roboto Mono',monospace;font-style:italic">res publica</span>, built up over centuries by practical statesmen.</p>

                <div class="latin-quote">
                    <div class="latin-text">Est igitur res publica res populi, populus autem non omnis hominum coetus quoquo modo congregatus, sed coetus multitudinis iuris consensu et utilitatis communione sociatus.</div>
                    <div class="latin-translation">"The commonwealth is the people\'s affair; but a people is not just any gathering of men assembled in any way, but a gathering of a multitude united by agreement on justice and a partnership for the common good." \u2014 1.39</div>
                </div>

                <p>Cicero introduces the concept of the ideal statesman \u2014 the <span style="font-family:'Roboto Mono',monospace;font-style:italic">rector rei publicae</span> or \'guide of the commonwealth\' \u2014 a figure of supreme <span style="font-family:'Roboto Mono',monospace;font-style:italic">auctoritas</span> who steers the state through crisis by wisdom rather than force. This figure is clearly modelled on Scipio Aemilianus but also reflects Cicero\'s idealised vision of his own role during the Catilinarian conspiracy.</p>

                <p>The work also includes the famous <strong>Dream of Scipio</strong> (<span style="font-family:'Roboto Mono',monospace;font-style:italic">Somnium Scipionis</span>), in which Scipio Africanus appears to his grandson in a dream and reveals the cosmic rewards awaiting statesmen who serve the <span style="font-family:'Roboto Mono',monospace;font-style:italic">res publica</span> faithfully. This passage survived intact through the Middle Ages and profoundly influenced later political thought.</p>

                <h4>Evaluation</h4>
                <p>The <em>De Re Publica</em> is deeply polemical. Written as Caesar and Pompey tear the Republic apart, it is Cicero\'s attempt to articulate what is being lost and why it matters. His nostalgia for a perfectly balanced constitution that may never have existed in practice should be read critically \u2014 but his definition of the state and his concept of the <span style="font-family:'Roboto Mono',monospace;font-style:italic">rector</span> remain essential for understanding how educated Romans thought about their own political system.</p>

                <div class="exam-tip">
                    <div class="exam-tip-label">Using This Source</div>
                    <p>Cicero\'s De Re Publica is invaluable for essays on the ideal of the Republic, the mixed constitution, and Cicero\'s own political thought. Use the <span style="font-family:'Roboto Mono',monospace;font-style:italic">res publica res populi</span> definition as a touchstone quotation. Note the tension between Cicero\'s idealism and the political realities of the 50s BC \u2014 he is writing about a perfectly balanced state while watching that balance collapse.</p>
                </div>
            `
        }
    ],

    // ===== EXAM QUESTIONS =====
    examQuestions: [
        {
            id: 'q-constitution-effective',
            question: '"The Roman Republican constitution was an effective system of government." To what extent do you agree with this statement?',
            type: '30-mark essay',
            structure: [
                '<strong>Introduction:</strong> Define what "effective" means in context \u2014 effective at what? Preventing tyranny? Governing an empire? Ensuring stability? Argue that the constitution was remarkably effective at internal checks and balances but structurally incapable of governing a large empire.',
                '<strong>Paragraph 1 (For):</strong> The mixed constitution as described by Polybius \u2014 consuls, Senate, assemblies checking each other. Cite Polybius Book 6 and Cicero De Re Publica. Emphasise that the system prevented one-man rule for nearly 500 years.',
                '<strong>Paragraph 2 (For):</strong> The cursus honorum, collegiality, annual tenure, and the tribunician veto as effective mechanisms. Use examples of the system working: e.g. the Senate managing the Punic Wars, the flexibility of the dictatorship in genuine emergencies.',
                '<strong>Paragraph 3 (Against):</strong> The dependence on mos maiorum \u2014 an unwritten constitution is only as strong as the willingness to obey it. Once Tiberius Gracchus demonstrates that precedent can be broken, the system has no enforcement mechanism. Trace the escalation from 133 BC onward.',
                '<strong>Paragraph 4 (Against):</strong> The constitution was designed for a city-state, not an empire. Provincial commands create personal armies, extended campaigning makes annual tenure impractical, and the wealth of empire destroys the social consensus on which mos maiorum depends.',
                '<strong>Conclusion:</strong> The constitution was effective within its designed parameters but contained the seeds of its own destruction. Its very flexibility \u2014 the lack of written rules \u2014 became its fatal weakness.'
            ],
            evidence: 'Polybius Histories 6; Cicero De Re Publica 1.39 and 1.70; the Lex Villia Annalis; examples from the Gracchi, Marius, Sulla, and Caesar as progressive violations of the system. The senatus consultum ultimum as an improvised response to a problem the constitution was not designed to handle.',
            historiography: 'Polybius presents the idealised version; the late Republic demonstrates its failure. Consider whether the constitution "failed" or was simply never designed for the challenges it faced. Beard and Crawford argue that the system\'s informal nature was both its strength and its vulnerability.'
        },
        {
            id: 'q-mos-maiorum-important',
            question: 'How important was mos maiorum in the politics of the late Roman Republic?',
            type: '30-mark essay',
            structure: [
                '<strong>Introduction:</strong> Define mos maiorum and establish its role as the unwritten constitution. Argue that it was the single most important factor in holding the Republic together \u2014 and that its erosion was the single most important factor in its collapse.',
                '<strong>Paragraph 1:</strong> Mos maiorum in practice \u2014 the cursus honorum, the prohibition on arms within the pomerium, the expectation of senatorial consultation, the role of augury and auspices. Use the Ennius quotation via Cicero (De Re Publica 5.1).',
                '<strong>Paragraph 2:</strong> The Gracchi as the turning point \u2014 Tiberius\'s deposition of Octavius (133 BC) as the first major breach of mos maiorum. Explain that the act was legal but unprecedented, and that in a system without written law, precedent is everything.',
                '<strong>Paragraph 3:</strong> Progressive erosion \u2014 Sulla\'s march on Rome (88 BC), his proscriptions (82 BC), Pompey\'s extraordinary commands, Caesar\'s crossing of the Rubicon. Each breach creates a precedent that enables the next.',
                '<strong>Paragraph 4:</strong> Counter-argument \u2014 was mos maiorum genuinely important, or was it always a convenient fiction invoked by whichever faction found it useful? Consider whether the system actually relied on material factors (wealth, military power, patronage networks) rather than custom.',
                '<strong>Conclusion:</strong> Mos maiorum was genuinely constitutive of the Republic \u2014 without it, the formal institutions were insufficient to maintain order. Its erosion was not merely a symptom of the Republic\'s collapse but a primary cause.'
            ],
            evidence: 'Ennius via Cicero (De Re Publica 5.1): "moribus antiquis res stat Romana virisque." The deposition of Octavius (133 BC), the SCU against Gaius Gracchus (121 BC), Sulla\'s march on Rome (88 BC), Caesar\'s justification for crossing the Rubicon (defence of dignitas). Polybius on the role of religion and custom in maintaining order.',
            historiography: 'Cicero\'s conservative view privileges mos maiorum as the essential foundation; Sallust, by contrast, argues that Roman virtue was already decaying before the late Republic. Modern historians (e.g. Mouritsen) question whether the consensus ever extended beyond the narrow elite.'
        },
        {
            id: 'q-opt-pop-useful',
            question: 'How useful are the terms "optimates" and "populares" for understanding the politics of the late Republic?',
            type: '30-mark essay',
            structure: [
                '<strong>Introduction:</strong> Begin with Cicero\'s definition from Pro Sestio 96. Argue that the terms are useful as descriptions of political method but misleading if treated as fixed party labels.',
                '<strong>Paragraph 1 (Useful):</strong> The distinction captures a genuine structural tension in Roman politics \u2014 the contest between senatorial authority and popular sovereignty. Every major conflict of the late Republic can be mapped onto this axis: the Gracchi, Marius, Clodius, and Caesar as populares; Sulla, Catulus, Cato, and Cicero as optimates.',
                '<strong>Paragraph 2 (Useful):</strong> The terms illuminate political strategy. Populares use the tribunate and assemblies; optimates use the Senate and religious obstruction. Understanding these methods explains why particular constitutional tools (the veto, the SCU, obnuntiatio) become politically contested.',
                '<strong>Paragraph 3 (Limited):</strong> The terms are not parties. Individuals shift between methods: Pompey acts as a popularis in the 60s and an optimate ally in the 50s. Caesar\'s popularis programme serves his personal ambition, not democratic principle. The terms mask the real driver of late Republican politics: personal rivalries and competitions for dignitas.',
                '<strong>Paragraph 4 (Limited):</strong> Both groups are drawn from the same narrow aristocratic elite. The populares do not represent the Roman poor; they use popular support instrumentally. The optimates do not defend an abstract principle; they defend their own dominance. The ideological content of the distinction is thin.',
                '<strong>Conclusion:</strong> The terms remain useful as analytical shorthand but must be qualified. Use them to describe how politicians operated, not who they were or what they believed.'
            ],
            evidence: 'Cicero Pro Sestio 96 (the key ancient definition). The Gracchi as pioneering popularis methods. Caesar\'s use of the tribunate and popular legislation. Pompey\'s shifting alignment. Cato\'s senatorial obstructionism. Clodius as a patrician popularis.',
            historiography: 'Cicero\'s definition in Pro Sestio is itself politically motivated \u2014 he is defending an optimate ally. Modern scholarship (Robb, Mouritsen) tends to emphasise that the terms describe behaviour, not ideology. Gruen argues that personal factional networks, not optimate/popularis alignment, are the real units of Roman political analysis.'
        }
    ]
};
