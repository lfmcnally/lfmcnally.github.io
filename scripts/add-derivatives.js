#!/usr/bin/env node
/**
 * Script to add hint and derivatives fields to A-Level vocabulary data
 *
 * Usage: node scripts/add-derivatives.js
 */

const fs = require('fs');
const path = require('path');

// Latin root to English derivatives mapping
// Format: 'latin_root': 'derivative1, derivative2, derivative3'
const derivativeMap = {
    // A
    'amo': 'amorous, amateur, amiable, amity',
    'amare': 'amorous, amateur, amiable, amity',
    'amor': 'amorous, amour, enamored',
    'annus': 'annual, anniversary, perennial, annuity',
    'animus': 'animate, animal, animosity, unanimous',
    'aqua': 'aquatic, aquarium, aqueduct, aqueous',
    'ars': 'art, artist, artificial, artisan',
    'audio': 'audio, audible, audience, auditorium',
    'audire': 'audio, audible, audience, audition',
    'augeo': 'augment, auction, author, authority',

    // B
    'bellum': 'belligerent, bellicose, rebel, antebellum',
    'bene': 'benefit, benevolent, benediction, benign',
    'bonus': 'bonus, bonanza, bountiful',
    'brevis': 'brief, brevity, abbreviate',

    // C
    'cado': 'cadence, cascade, accident, occasion, decay',
    'caedo': 'incision, decide, precise, suicide, homicide',
    'caelum': 'celestial, ceiling',
    'capio': 'capture, capable, capacity, captive, accept, receipt',
    'capere': 'capture, capable, capacity, captive, accept',
    'caput': 'capital, captain, chapter, decapitate',
    'caro': 'carnal, carnival, carnivore, incarnate',
    'causa': 'cause, because, accuse, excuse',
    'cedo': 'cede, precede, proceed, succeed, recede, access',
    'celer': 'accelerate, celerity',
    'centum': 'century, cent, percent, centennial',
    'cerno': 'discern, concern, certain, decree',
    'civis': 'civil, citizen, civic, civilize',
    'clamo': 'claim, exclaim, proclaim, clamor',
    'claudo': 'close, conclude, exclude, include, clause',
    'cogo': 'cogent, coagulate',
    'corpus': 'corpse, corporation, corporal, incorporate',
    'credo': 'credit, credible, creed, incredible',
    'cresco': 'crescent, increase, decrease, concrete',
    'culpa': 'culpable, culprit, exculpate',
    'cura': 'cure, curator, curious, accurate, secure',
    'curro': 'current, cursor, occur, recur, excursion',

    // D
    'do': 'data, date, donate, edition',
    'dare': 'data, date, donate, edition, tradition',
    'deus': 'deity, divine, deify',
    'dico': 'dictate, predict, contradict, verdict, dictionary',
    'dicere': 'dictate, predict, dictionary, verdict',
    'dies': 'diary, dial, diurnal, quotidian',
    'dignus': 'dignity, dignify, indignant, condign',
    'doceo': 'doctor, doctrine, document, docile',
    'doleo': 'doleful, condolence, indolent',
    'dominus': 'dominate, domain, dominant, dominion',
    'domus': 'domestic, domicile, dome',
    'donum': 'donate, donor, pardon, condone',
    'duco': 'conduct, produce, reduce, educate, duke',
    'ducere': 'conduct, produce, reduce, induce, deduce',
    'durus': 'durable, duration, endure, obdurate',

    // E
    'eo': 'exit, transit, initial, ambient',
    'ire': 'exit, transit, circuit, ambition',
    'equus': 'equine, equestrian, equation',
    'erro': 'error, errant, erratic, aberration',

    // F
    'faber': 'fabric, fabricate, forge',
    'facio': 'fact, factory, manufacture, affect, effect',
    'facere': 'fact, factor, manufacture, perfect, defect',
    'fama': 'fame, famous, infamous, defame',
    'felix': 'felicity, felicitous, infelicitous',
    'femina': 'feminine, female, feminist',
    'fero': 'transfer, refer, confer, differ, offer, prefer',
    'ferre': 'transfer, refer, confer, fertile, suffer',
    'fides': 'fidelity, confide, confident, faith, infidel',
    'filia': 'filial, affiliate',
    'filius': 'filial, affiliate',
    'finis': 'finish, final, finite, infinite, define',
    'firmus': 'firm, confirm, affirm, infirm',
    'flamma': 'flame, flammable, inflame, inflammatory',
    'fleo': 'feeble (via Old French)',
    'fluo': 'fluid, fluent, influence, affluent, flux',
    'forma': 'form, format, formal, reform, uniform, conform',
    'fortis': 'fort, fortress, fortify, comfort, effort',
    'fortuna': 'fortune, fortunate, unfortunate',
    'frango': 'fragment, fraction, fracture, fragile, refract',
    'frater': 'fraternal, fraternity, fraternize',
    'fugio': 'fugitive, refuge, fugue, centrifugal',
    'fundo': 'found, foundation, fund, profound, confound',

    // G
    'genus': 'genus, gender, generate, general, generic',
    'gero': 'gesture, digest, suggest, register',
    'gloria': 'glory, glorious, glorify',
    'gradior': 'grade, graduate, gradual, progress, regress',
    'gratia': 'grace, grateful, gratitude, gratify, gratis',
    'gravis': 'grave, gravity, aggravate, grievous',

    // H
    'habeo': 'habit, habitual, inhabit, exhibit, prohibit',
    'habere': 'habit, habitual, inhabit, able, ability',
    'homo': 'human, humane, homicide, homage',
    'honor': 'honor, honorary, honest, dishonor',
    'hora': 'hour, horoscope, horology',
    'hostis': 'hostile, hostility, host',

    // I
    'iacio': 'project, reject, inject, subject, object, eject',
    'iacere': 'project, reject, inject, adjacent, jet',
    'ignis': 'ignite, ignition, igneous',
    'impero': 'imperial, empire, emperor, imperative',
    'ingenium': 'ingenious, engine, engineer, ingenuity',
    'insula': 'insular, insulate, island, peninsula',
    'ira': 'ire, irate, irascible',
    'iter': 'itinerary, iterate, reiterate',
    'iudex': 'judge, judicial, judiciary, prejudice',
    'iungo': 'join, junction, conjugal, conjunction',
    'ius': 'justice, just, justify, jury, injure',
    'iuvenis': 'juvenile, rejuvenate, junior',
    'iuvo': 'aid, adjutant',

    // L
    'labor': 'labor, laboratory, elaborate, collaborate',
    'laudo': 'laud, laudable, applaud',
    'laus': 'laud, laudable, applause',
    'lego': 'lecture, legend, legible, collect, select, elect',
    'legere': 'lecture, legend, legible, lesson, collect',
    'lex': 'legal, legitimate, legislate, loyal',
    'liber': 'liberty, liberal, liberate, library',
    'locus': 'local, locate, locomotive, allocate, dislocate',
    'loquor': 'eloquent, loquacious, colloquial, soliloquy',
    'ludo': 'ludicrous, elude, illusion, prelude, interlude',
    'lumen': 'luminous, illuminate, luminary',
    'luna': 'lunar, lunatic, lunacy',
    'lux': 'lucid, elucidate, translucent, luxury',

    // M
    'magnus': 'magnitude, magnify, magnificent, magnate',
    'malus': 'malice, malevolent, malignant, malady',
    'manus': 'manual, manufacture, manuscript, manage, manipulate',
    'mare': 'marine, maritime, submarine, mariner',
    'mater': 'maternal, maternity, matrix, matriculate',
    'medius': 'medium, median, mediate, medieval, immediate',
    'memor': 'memory, memorial, remember, commemorate, memorize',
    'mens': 'mental, mentality, mention, demented',
    'miles': 'military, militia, militant, mile',
    'mitto': 'mission, transmit, permit, commit, omit, emit, submit',
    'mittere': 'mission, transmit, permit, missile, admit',
    'modus': 'mode, model, moderate, modify, modern',
    'moneo': 'monitor, admonish, monument, premonition',
    'mons': 'mount, mountain, amount, surmount, paramount',
    'mors': 'mortal, mortify, mortgage, immortal',
    'moveo': 'move, motion, motor, motive, emotion, promote',
    'movere': 'move, motion, motor, mobile, remove',
    'multus': 'multiple, multiply, multitude',
    'murus': 'mural, immure, intramural',
    'muto': 'mutate, mutation, mutual, commute, permute',

    // N
    'nascor': 'nascent, native, nation, nature, natal',
    'natura': 'nature, natural, supernatural',
    'navis': 'navy, naval, navigate, nave',
    'neco': 'internecine, pernicious',
    'nego': 'negate, negative, deny, renegade',
    'nomen': 'name, nominal, nominate, noun, pronoun, renown',
    'novus': 'novel, novelty, innovate, novice, renovate',
    'nox': 'nocturnal, equinox, nocturn',
    'nullus': 'null, nullify, annul',
    'numerus': 'number, numeral, enumerate, numerous',

    // O
    'oculus': 'ocular, oculist, binoculars',
    'omnis': 'omnibus, omnipotent, omniscient, omnivore',
    'onus': 'onerous, onus, exonerate',
    'opus': 'opera, operate, opus, cooperation',
    'ordo': 'order, ordinary, ordinal, coordinate, subordinate',
    'oro': 'oral, oration, orator, oracle',

    // P
    'pars': 'part, partial, participate, particle, partition',
    'pater': 'paternal, paternity, patriarch, patron, pattern',
    'patior': 'patient, passion, passive, compassion',
    'pax': 'peace, pacific, pacify, appease',
    'pecunia': 'pecuniary, impecunious',
    'pello': 'compel, expel, impel, propel, repel, pulse',
    'pendo': 'pendant, pending, suspend, depend, appendix',
    'pes': 'pedal, pedestrian, pedestal, impede, expedite',
    'peto': 'petition, compete, repeat, appetite, impetus',
    'plenus': 'plenty, plenary, replenish, complete',
    'pono': 'position, deposit, compose, expose, propose, oppose',
    'ponere': 'position, component, opponent, postpone',
    'populus': 'popular, population, public, publish',
    'porto': 'port, portal, transport, export, import, report',
    'possum': 'possible, potent, power, posse',
    'potens': 'potent, potential, omnipotent, impotent',
    'premo': 'press, pressure, compress, depress, express, impress',
    'pretium': 'price, precious, appreciate, depreciate',
    'primus': 'prime, primary, primitive, premier, prince',
    'probo': 'prove, probable, probe, approve, probation',
    'pugno': 'pugnacious, repugnant, impugn',
    'puto': 'compute, dispute, reputation, impute, deputy',

    // Q
    'quaero': 'query, quest, question, require, acquire, inquire',

    // R
    'rapio': 'rapid, rapture, rapt, rape, ravish',
    'rego': 'regal, regent, regulate, reign, region, correct, direct',
    'regnum': 'reign, regal, regicide, interregnum',
    'res': 'real, reality, republic, rebus',
    'rex': 'regal, regent, regicide, royal, reign',
    'rideo': 'ridicule, ridiculous, deride, risible',
    'rogo': 'interrogate, arrogant, derogate, prerogative',
    'rumpo': 'rupt, rupture, corrupt, disrupt, erupt, interrupt',

    // S
    'sacer': 'sacred, sacrifice, sacrilege, consecrate',
    'salus': 'safe, save, salvation, salute, salubrious',
    'sanctus': 'saint, sanctify, sanctuary, sanction',
    'sanguis': 'sanguine, sanguinary, consanguinity',
    'scio': 'science, scientific, conscience, conscious, omniscient',
    'scribo': 'scribe, script, scripture, describe, inscribe, prescribe',
    'scribere': 'scribe, script, describe, manuscript, subscribe',
    'sedeo': 'sedentary, session, sedan, sedate, reside, preside',
    'sentio': 'sense, sensible, sentiment, consent, resent',
    'sequor': 'sequence, sequel, consequence, subsequent, pursue',
    'servo': 'serve, servant, service, conserve, preserve, reserve',
    'signum': 'sign, signal, signature, significant, design, resign',
    'similis': 'similar, simile, simulate, assimilate, resemble',
    'socius': 'social, society, associate, sociable',
    'sol': 'solar, solstice, parasol, solarium',
    'solus': 'sole, solitary, solo, solitude, desolate',
    'solvo': 'solve, solution, dissolve, resolve, absolve',
    'somnus': 'somnolent, insomnia, somnambulism',
    'specto': 'spectacle, spectator, inspect, respect, suspect, aspect',
    'spero': 'despair, desperate, prosper, esperance',
    'spiritus': 'spirit, spiritual, inspire, respire, expire, conspire',
    'sto': 'stand, state, station, statue, stable, constant, instant',
    'stare': 'stand, state, station, stable, status, statute',
    'struo': 'structure, construct, instruct, destroy, obstruct',
    'sumo': 'assume, consume, presume, resume, summon',

    // T
    'taceo': 'tacit, taciturn, reticent',
    'tango': 'tangent, tangible, contact, contagious, intact',
    'tego': 'protect, detect, tegument',
    'tempus': 'temporal, temporary, contemporary, tempo, tense',
    'teneo': 'tenant, tenure, tenacious, contain, obtain, retain',
    'tenere': 'tenant, tenure, contain, maintain, sustain',
    'terra': 'terrain, territory, terrestrial, terrace, inter',
    'terreo': 'terror, terrible, terrify, deter',
    'timeo': 'timid, timorous, intimidate',
    'tollo': 'extol, tolerate',
    'traho': 'tract, tractor, attract, contract, extract, subtract',
    'trahere': 'tract, tractor, attract, portrait, retreat',

    // U
    'unus': 'unit, unite, union, uniform, unique, universal',
    'urbs': 'urban, urbane, suburb, suburban',
    'utor': 'use, useful, utility, utensil, abuse',

    // V
    'valeo': 'valid, value, valiant, prevail, equivalent',
    'venio': 'venue, advent, adventure, event, prevent, convention',
    'venire': 'venue, advent, event, intervene, revenue',
    'verbum': 'verb, verbal, verbose, proverb, adverb',
    'verto': 'convert, revert, invert, divert, adverse, verse',
    'vertere': 'convert, version, versatile, controversy',
    'verus': 'very, verify, verdict, verity, veracity',
    'via': 'via, viaduct, deviate, obvious, previous, trivial',
    'video': 'video, vision, visible, visit, evident, provide',
    'videre': 'video, vision, view, revise, supervise',
    'vinco': 'victory, victor, convince, evict, invincible',
    'vincere': 'victory, convince, convict, province',
    'vir': 'virile, virtue, virtuoso',
    'vita': 'vital, vitamin, vitality, revive, survive',
    'vivo': 'vivid, vivacious, revive, survive, convivial',
    'vivere': 'vivid, vital, revive, survive, victual',
    'voco': 'vocal, voice, vocation, advocate, invoke, provoke',
    'vocare': 'vocal, vocabulary, advocate, evoke, revoke',
    'volo': 'volition, voluntary, volunteer, benevolent, malevolent',
    'vox': 'voice, vocal, vowel, vociferous',
    'vulnus': 'vulnerable, invulnerable, wound'
};

// Read the vocabulary data file
const vocabFilePath = path.join(__dirname, '..', 'shared', 'a-level-vocabulary-data.js');
let fileContent = fs.readFileSync(vocabFilePath, 'utf8');

// Extract the array from the file
const match = fileContent.match(/const aLevelVocabularyData = \[([\s\S]*?)\];/);
if (!match) {
    console.error('Could not find vocabulary data array in file');
    process.exit(1);
}

// Parse the vocabulary data
const arrayContent = match[1];
const vocabData = eval('[' + arrayContent + ']');

console.log(`Processing ${vocabData.length} vocabulary entries...`);

// Function to extract Latin root from a word
function extractRoot(latinWord) {
    // Remove principal parts notation (e.g., "amare" from "amo, amare, amavi")
    const word = latinWord.split(/[,\/]/)[0].trim().toLowerCase();

    // Common verb endings to try removing
    const verbEndings = ['are', 'ere', 'ire', 'or', 'o'];
    const nounEndings = ['us', 'um', 'a', 'is', 'es', 'i', 'ae'];

    // Try to find the root
    for (const ending of verbEndings) {
        if (word.endsWith(ending) && word.length > ending.length + 2) {
            return word.slice(0, -ending.length);
        }
    }

    return word;
}

// Function to find derivatives for a Latin word
function findDerivatives(latinWord, info) {
    // Clean up the Latin word
    const cleanWord = latinWord.split(/[,\/]/)[0].trim().toLowerCase();

    // Direct lookup first
    if (derivativeMap[cleanWord]) {
        return derivativeMap[cleanWord];
    }

    // Try the full word (for infinitives like "amare")
    const parts = latinWord.split(/[,\s]+/);
    for (const part of parts) {
        const cleanPart = part.toLowerCase().trim();
        if (derivativeMap[cleanPart]) {
            return derivativeMap[cleanPart];
        }
    }

    // Try extracting info parts (often contains infinitive)
    if (info) {
        const infoParts = info.split(/[\s,-]+/);
        for (const part of infoParts) {
            const cleanPart = part.toLowerCase().trim();
            if (derivativeMap[cleanPart]) {
                return derivativeMap[cleanPart];
            }
        }
    }

    // Try with root extraction
    const root = extractRoot(cleanWord);
    if (derivativeMap[root]) {
        return derivativeMap[root];
    }

    return null;
}

// Function to generate a hint from derivatives
function generateHint(derivatives, englishMeaning) {
    if (!derivatives) return null;

    // Get the first derivative
    const firstDerivative = derivatives.split(',')[0].trim();

    // Don't create hint if the derivative is too similar to the meaning
    const meaningWords = englishMeaning.toLowerCase().split(/[\s,;\/]+/);
    if (meaningWords.some(word => firstDerivative.toLowerCase().includes(word) || word.includes(firstDerivative.toLowerCase()))) {
        // Try the second derivative if available
        const derivList = derivatives.split(',');
        if (derivList.length > 1) {
            const secondDerivative = derivList[1].trim();
            if (!meaningWords.some(word => secondDerivative.toLowerCase().includes(word))) {
                return `Think of '${secondDerivative}'`;
            }
        }
        return null;
    }

    return `Think of '${firstDerivative}'`;
}

// Process each vocabulary entry
let derivativeCount = 0;
let hintCount = 0;

const updatedVocab = vocabData.map(entry => {
    const derivatives = findDerivatives(entry.latin, entry.info);
    const hint = generateHint(derivatives, entry.english);

    if (derivatives) derivativeCount++;
    if (hint) hintCount++;

    return {
        ...entry,
        hint: hint || null,
        derivatives: derivatives || null
    };
});

console.log(`\nResults:`);
console.log(`- Words with derivatives: ${derivativeCount} (${Math.round(derivativeCount/vocabData.length*100)}%)`);
console.log(`- Words with hints: ${hintCount} (${Math.round(hintCount/vocabData.length*100)}%)`);

// Generate the new file content
const newArrayContent = updatedVocab.map(entry => {
    let str = '    {\n';
    str += `        latin: "${entry.latin.replace(/"/g, '\\"')}",\n`;
    str += `        english: "${entry.english.replace(/"/g, '\\"')}",\n`;
    str += `        info: "${entry.info.replace(/"/g, '\\"')}",\n`;
    str += `        letter: "${entry.letter}",\n`;
    str += `        topic: "${entry.topic}",\n`;
    str += `        set: ${entry.set}`;

    if (entry.hint) {
        str += `,\n        hint: "${entry.hint.replace(/"/g, '\\"')}"`;
    }
    if (entry.derivatives) {
        str += `,\n        derivatives: "${entry.derivatives.replace(/"/g, '\\"')}"`;
    }

    str += '\n    }';
    return str;
}).join(',\n');

const newFileContent = `// A-Level Latin Vocabulary - Complete list (${updatedVocab.length} words)
// Based on the OCR A-Level Latin defined vocabulary list
// With topic categories, sequential sets, hints and derivatives added
const aLevelVocabularyData = [
${newArrayContent}
];
`;

// Write the updated file
fs.writeFileSync(vocabFilePath, newFileContent, 'utf8');

console.log(`\nUpdated ${vocabFilePath}`);
console.log('Done!');
