// Lesson 8.1: gladius - Data and Answer Keys

const lessonData = {
    title: "gladius",
    chapter: 8,
    lesson: 1,
    
    // Answer keys for comprehension questions
    answerKeys: {
        part1: {
            1: "Catia was working with her father. He was making a sword.",
            2: "Her mother said that the best sword was missing/absent.",
            3: "laborābam is imperfect tense - you can tell by the -ba- marker.",
            4: "Perfect tense verbs: cucurrī (I ran), quaesīvī (I looked for), invēnī (I found). Students may pick any two.",
            5: "Catia found Aucissa near the river. She was crying.",
            6: "lacrimābat is imperfect tense (shown by -ba-)."
        },
        part2: {
            1: "What happened, Aucissa? Why did you hurry from the settlement?",
            2: "Catia noticed three Britons. They were walking across the bridge.",
            3: "His name is Luccus. He was holding a sword.",
            4: "fēcērunt is perfect tense. It means 'they made'.",
            5: "Catia tried to grab/seize the sword.",
            6: "Present tense verbs in lines 16-20: habēbant is actually imperfect. There are no present tense verbs in these lines.",
            7: "Luccus threw the sword to his friends. His two friends have it now."
        },
        part3: {
            1: "Catia commanded 'Stop!' (dēsiste!)",
            2: "pugnāvī is perfect tense ('I fought'). temptāvī is also perfect tense ('I tried').",
            3: "Luccus threw the sword to his friends.",
            4: "His two friends ran across the bridge with the sword.",
            5: "sine means 'without'",
            6: "Catia took Luccus to her parents.",
            7: "dūxī is perfect tense. It means 'I led'."
        }
    },
    
    // Vocabulary list with additional notes
    vocabulary: {
        verbs: {
            "laborō, laborāre": "to work",
            "faciō, facere, fēcī": "to make, do",
            "intrō, intrāre, intrāvī": "to enter",
            "absum, abesse": "to be absent, missing",
            "videō, vidēre, vīdī": "to see",
            "discēdō, discēdere, discessī": "to leave, depart",
            "currō, currere, cucurrī": "to run",
            "quaerō, quaerere, quaesīvī": "to look for, seek",
            "inveniō, invenīre, invēnī": "to find",
            "lacrimō, lacrimāre": "to cry, weep",
            "accidit": "it happens, happened",
            "festīnō, festīnāre": "to hurry",
            "respondeō, respondēre, respondī": "to reply",
            "cōnspiciō, cōnspicere, cōnspexī": "to notice, catch sight of",
            "ambulō, ambulāre": "to walk",
            "salūtō, salūtāre": "to greet",
            "teneō, tenēre": "to hold",
            "capiō, capere, cēpī": "to take, seize",
            "intellegō, intellegere, intellēxī": "to understand",
            "dēsistō, dēsistere, dēstitī": "to stop, cease",
            "pugnō, pugnāre": "to fight",
            "temptō, temptāre": "to try, attempt",
            "iaciō, iacere, iēcī": "to throw",
            "habeō, habēre": "to have",
            "superō, superāre": "to overcome, overpower",
            "dūcō, dūcere, dūxī": "to lead"
        },
        nouns: {
            "gladius, -ī (m)": "sword",
            "pater, patris (m)": "father",
            "māter, mātris (f)": "mother",
            "soror, sorōris (f)": "sister",
            "vīcus, -ī (m)": "settlement, village",
            "flūmen, flūminis (n)": "river",
            "Britannus, -ī (m)": "Briton",
            "iuvenis, iuvenis (m)": "young man",
            "pōns, pontis (m)": "bridge",
            "amīcus, -ī (m)": "friend",
            "rēs, reī (f)": "thing, matter",
            "parentēs, -um (m.pl)": "parents"
        },
        other: {
            "ōlim": "once, once upon a time",
            "optimus, -a, -um": "best, excellent",
            "cūr": "why",
            "ego": "I",
            "attonitus, -a, -um": "shocked, astonished",
            "tandem": "finally, at last",
            "prope (+ acc.)": "near",
            "quid": "what",
            "nihil": "nothing",
            "deinde": "then, next",
            "trēs": "three",
            "trāns (+ acc.)": "across",
            "ūnus, -a, -um": "one",
            "ex (+ abl.)": "from, out of",
            "magnificus, -a, -um": "magnificent",
            "quis": "who",
            "nōmine": "by name, called",
            "sed": "but",
            "tōtus, -a, -um": "whole, entire",
            "tum": "then",
            "cum (+ abl.)": "with",
            "duo": "two",
            "iam": "now, already",
            "sine (+ abl.)": "without",
            "ad (+ acc.)": "to, towards"
        }
    },
    
    // Grammar notes for teachers
    grammarNotes: {
        tenses: {
            present: "Look for endings: -t, -nt, est",
            imperfect: "Look for -ba- marker: laborābam, faciēbat, lacrimābat, ambulābant, tenēbat",
            perfect: "Various formations: -v- forms (intrāvit, quaesīvī, invēnī) and other forms (cucurrī, discessit, cōnspexī, fēcērunt, cēpit, intellēxī, etc.)"
        },
        teachingTips: [
            "Students don't need to understand HOW the perfect is formed without -v- yet",
            "Focus on recognition: can they identify which tense a verb is?",
            "Use context to help with meaning",
            "The formal grammar explanation comes in lesson 8.2"
        ]
    }
};

// Export for use in other files if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lessonData;
}
