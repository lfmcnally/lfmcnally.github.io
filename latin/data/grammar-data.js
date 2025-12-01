// Latin Grammar Data for Practice Tool

const grammarData = {
    // ========== NOUN DECLENSIONS ==========
    nouns: {
        '1st': {
            name: '1st Declension',
            modelWord: 'puella',
            stem: 'puell',
            gender: 'feminine',
            endings: {
                singular: {
                    nominative: 'a',
                    vocative: 'a',
                    accusative: 'am',
                    genitive: 'ae',
                    dative: 'ae',
                    ablative: 'ā'
                },
                plural: {
                    nominative: 'ae',
                    vocative: 'ae',
                    accusative: 'ās',
                    genitive: 'ārum',
                    dative: 'īs',
                    ablative: 'īs'
                }
            }
        },
        '2nd_masc': {
            name: '2nd Declension (Masculine)',
            modelWord: 'dominus',
            stem: 'domin',
            gender: 'masculine',
            endings: {
                singular: {
                    nominative: 'us',
                    vocative: 'e',
                    accusative: 'um',
                    genitive: 'ī',
                    dative: 'ō',
                    ablative: 'ō'
                },
                plural: {
                    nominative: 'ī',
                    vocative: 'ī',
                    accusative: 'ōs',
                    genitive: 'ōrum',
                    dative: 'īs',
                    ablative: 'īs'
                }
            }
        },
        '2nd_masc_r': {
            name: '2nd Declension (-er/-ir)',
            modelWord: 'puer',
            stem: 'puer',
            gender: 'masculine',
            endings: {
                singular: {
                    nominative: '',
                    vocative: '',
                    accusative: 'um',
                    genitive: 'ī',
                    dative: 'ō',
                    ablative: 'ō'
                },
                plural: {
                    nominative: 'ī',
                    vocative: 'ī',
                    accusative: 'ōs',
                    genitive: 'ōrum',
                    dative: 'īs',
                    ablative: 'īs'
                }
            }
        },
        '2nd_neut': {
            name: '2nd Declension (Neuter)',
            modelWord: 'bellum',
            stem: 'bell',
            gender: 'neuter',
            endings: {
                singular: {
                    nominative: 'um',
                    vocative: 'um',
                    accusative: 'um',
                    genitive: 'ī',
                    dative: 'ō',
                    ablative: 'ō'
                },
                plural: {
                    nominative: 'a',
                    vocative: 'a',
                    accusative: 'a',
                    genitive: 'ōrum',
                    dative: 'īs',
                    ablative: 'īs'
                }
            }
        },
        '3rd': {
            name: '3rd Declension',
            modelWord: 'mercātor',
            stem: 'mercātōr',
            gender: 'masculine',
            note: 'Nominative singular = stem (no ending)',
            endings: {
                singular: {
                    nominative: '',
                    vocative: '',
                    accusative: 'em',
                    genitive: 'is',
                    dative: 'ī',
                    ablative: 'e'
                },
                plural: {
                    nominative: 'ēs',
                    vocative: 'ēs',
                    accusative: 'ēs',
                    genitive: 'um',
                    dative: 'ibus',
                    ablative: 'ibus'
                }
            }
        },
        '3rd_i': {
            name: '3rd Declension (i-stem)',
            modelWord: 'cīvis',
            stem: 'cīv',
            gender: 'masculine',
            endings: {
                singular: {
                    nominative: 'is',
                    vocative: 'is',
                    accusative: 'em',
                    genitive: 'is',
                    dative: 'ī',
                    ablative: 'e'
                },
                plural: {
                    nominative: 'ēs',
                    vocative: 'ēs',
                    accusative: 'ēs',
                    genitive: 'ium',
                    dative: 'ibus',
                    ablative: 'ibus'
                }
            }
        },
        '3rd_neut': {
            name: '3rd Declension (Neuter)',
            modelWord: 'tempus',
            stem: 'tempor',
            gender: 'neuter',
            specialNomSg: 'tempus',
            note: 'Nom/Acc/Voc singular = tempus (irregular)',
            endings: {
                singular: {
                    nominative: 'tempus',
                    vocative: 'tempus',
                    accusative: 'tempus',
                    genitive: 'is',
                    dative: 'ī',
                    ablative: 'e'
                },
                plural: {
                    nominative: 'a',
                    vocative: 'a',
                    accusative: 'a',
                    genitive: 'um',
                    dative: 'ibus',
                    ablative: 'ibus'
                }
            }
        },
        '4th': {
            name: '4th Declension',
            modelWord: 'manus',
            stem: 'man',
            gender: 'feminine',
            endings: {
                singular: {
                    nominative: 'us',
                    vocative: 'us',
                    accusative: 'um',
                    genitive: 'ūs',
                    dative: 'uī',
                    ablative: 'ū'
                },
                plural: {
                    nominative: 'ūs',
                    vocative: 'ūs',
                    accusative: 'ūs',
                    genitive: 'uum',
                    dative: 'ibus',
                    ablative: 'ibus'
                }
            }
        },
        '4th_neut': {
            name: '4th Declension (Neuter)',
            modelWord: 'genū',
            stem: 'gen',
            gender: 'neuter',
            endings: {
                singular: {
                    nominative: 'ū',
                    vocative: 'ū',
                    accusative: 'ū',
                    genitive: 'ūs',
                    dative: 'ū',
                    ablative: 'ū'
                },
                plural: {
                    nominative: 'ua',
                    vocative: 'ua',
                    accusative: 'ua',
                    genitive: 'uum',
                    dative: 'ibus',
                    ablative: 'ibus'
                }
            }
        },
        '5th': {
            name: '5th Declension',
            modelWord: 'rēs',
            stem: 'r',
            gender: 'feminine',
            endings: {
                singular: {
                    nominative: 'ēs',
                    vocative: 'ēs',
                    accusative: 'em',
                    genitive: 'eī',
                    dative: 'eī',
                    ablative: 'ē'
                },
                plural: {
                    nominative: 'ēs',
                    vocative: 'ēs',
                    accusative: 'ēs',
                    genitive: 'ērum',
                    dative: 'ēbus',
                    ablative: 'ēbus'
                }
            }
        }
    },

    // ========== VERB CONJUGATIONS ==========
    verbs: {
        '1st': {
            name: '1st Conjugation',
            modelWord: 'amō',
            principalParts: ['amō', 'amāre', 'amāvī', 'amātum'],
            stems: {
                present: 'am',
                perfect: 'amāv',
                supine: 'amāt'
            },
            tenses: {
                present: {
                    active: {
                        singular: { '1st': 'ō', '2nd': 'ās', '3rd': 'at' },
                        plural: { '1st': 'āmus', '2nd': 'ātis', '3rd': 'ant' }
                    },
                    passive: {
                        singular: { '1st': 'or', '2nd': 'āris', '3rd': 'ātur' },
                        plural: { '1st': 'āmur', '2nd': 'āminī', '3rd': 'antur' }
                    }
                },
                imperfect: {
                    active: {
                        singular: { '1st': 'ābam', '2nd': 'ābās', '3rd': 'ābat' },
                        plural: { '1st': 'ābāmus', '2nd': 'ābātis', '3rd': 'ābant' }
                    },
                    passive: {
                        singular: { '1st': 'ābar', '2nd': 'ābāris', '3rd': 'ābātur' },
                        plural: { '1st': 'ābāmur', '2nd': 'ābāminī', '3rd': 'ābantur' }
                    }
                },
                future: {
                    active: {
                        singular: { '1st': 'ābō', '2nd': 'ābis', '3rd': 'ābit' },
                        plural: { '1st': 'ābimus', '2nd': 'ābitis', '3rd': 'ābunt' }
                    },
                    passive: {
                        singular: { '1st': 'ābor', '2nd': 'āberis', '3rd': 'ābitur' },
                        plural: { '1st': 'ābimur', '2nd': 'ābiminī', '3rd': 'ābuntur' }
                    }
                },
                perfect: {
                    active: {
                        singular: { '1st': 'ī', '2nd': 'istī', '3rd': 'it' },
                        plural: { '1st': 'imus', '2nd': 'istis', '3rd': 'ērunt' }
                    }
                },
                pluperfect: {
                    active: {
                        singular: { '1st': 'eram', '2nd': 'erās', '3rd': 'erat' },
                        plural: { '1st': 'erāmus', '2nd': 'erātis', '3rd': 'erant' }
                    }
                },
                futureperfect: {
                    active: {
                        singular: { '1st': 'erō', '2nd': 'eris', '3rd': 'erit' },
                        plural: { '1st': 'erimus', '2nd': 'eritis', '3rd': 'erint' }
                    }
                }
            }
        },
        '2nd': {
            name: '2nd Conjugation',
            modelWord: 'moneō',
            principalParts: ['moneō', 'monēre', 'monuī', 'monitum'],
            stems: {
                present: 'mon',
                perfect: 'monu',
                supine: 'monit'
            },
            tenses: {
                present: {
                    active: {
                        singular: { '1st': 'eō', '2nd': 'ēs', '3rd': 'et' },
                        plural: { '1st': 'ēmus', '2nd': 'ētis', '3rd': 'ent' }
                    },
                    passive: {
                        singular: { '1st': 'eor', '2nd': 'ēris', '3rd': 'ētur' },
                        plural: { '1st': 'ēmur', '2nd': 'ēminī', '3rd': 'entur' }
                    }
                },
                imperfect: {
                    active: {
                        singular: { '1st': 'ēbam', '2nd': 'ēbās', '3rd': 'ēbat' },
                        plural: { '1st': 'ēbāmus', '2nd': 'ēbātis', '3rd': 'ēbant' }
                    },
                    passive: {
                        singular: { '1st': 'ēbar', '2nd': 'ēbāris', '3rd': 'ēbātur' },
                        plural: { '1st': 'ēbāmur', '2nd': 'ēbāminī', '3rd': 'ēbantur' }
                    }
                },
                future: {
                    active: {
                        singular: { '1st': 'ēbō', '2nd': 'ēbis', '3rd': 'ēbit' },
                        plural: { '1st': 'ēbimus', '2nd': 'ēbitis', '3rd': 'ēbunt' }
                    },
                    passive: {
                        singular: { '1st': 'ēbor', '2nd': 'ēberis', '3rd': 'ēbitur' },
                        plural: { '1st': 'ēbimur', '2nd': 'ēbiminī', '3rd': 'ēbuntur' }
                    }
                },
                perfect: {
                    active: {
                        singular: { '1st': 'ī', '2nd': 'istī', '3rd': 'it' },
                        plural: { '1st': 'imus', '2nd': 'istis', '3rd': 'ērunt' }
                    }
                },
                pluperfect: {
                    active: {
                        singular: { '1st': 'eram', '2nd': 'erās', '3rd': 'erat' },
                        plural: { '1st': 'erāmus', '2nd': 'erātis', '3rd': 'erant' }
                    }
                },
                futureperfect: {
                    active: {
                        singular: { '1st': 'erō', '2nd': 'eris', '3rd': 'erit' },
                        plural: { '1st': 'erimus', '2nd': 'eritis', '3rd': 'erint' }
                    }
                }
            }
        },
        '3rd': {
            name: '3rd Conjugation',
            modelWord: 'regō',
            principalParts: ['regō', 'regere', 'rēxī', 'rēctum'],
            stems: {
                present: 'reg',
                perfect: 'rēx',
                supine: 'rēct'
            },
            tenses: {
                present: {
                    active: {
                        singular: { '1st': 'ō', '2nd': 'is', '3rd': 'it' },
                        plural: { '1st': 'imus', '2nd': 'itis', '3rd': 'unt' }
                    },
                    passive: {
                        singular: { '1st': 'or', '2nd': 'eris', '3rd': 'itur' },
                        plural: { '1st': 'imur', '2nd': 'iminī', '3rd': 'untur' }
                    }
                },
                imperfect: {
                    active: {
                        singular: { '1st': 'ēbam', '2nd': 'ēbās', '3rd': 'ēbat' },
                        plural: { '1st': 'ēbāmus', '2nd': 'ēbātis', '3rd': 'ēbant' }
                    },
                    passive: {
                        singular: { '1st': 'ēbar', '2nd': 'ēbāris', '3rd': 'ēbātur' },
                        plural: { '1st': 'ēbāmur', '2nd': 'ēbāminī', '3rd': 'ēbantur' }
                    }
                },
                future: {
                    active: {
                        singular: { '1st': 'am', '2nd': 'ēs', '3rd': 'et' },
                        plural: { '1st': 'ēmus', '2nd': 'ētis', '3rd': 'ent' }
                    },
                    passive: {
                        singular: { '1st': 'ar', '2nd': 'ēris', '3rd': 'ētur' },
                        plural: { '1st': 'ēmur', '2nd': 'ēminī', '3rd': 'entur' }
                    }
                },
                perfect: {
                    active: {
                        singular: { '1st': 'ī', '2nd': 'istī', '3rd': 'it' },
                        plural: { '1st': 'imus', '2nd': 'istis', '3rd': 'ērunt' }
                    }
                },
                pluperfect: {
                    active: {
                        singular: { '1st': 'eram', '2nd': 'erās', '3rd': 'erat' },
                        plural: { '1st': 'erāmus', '2nd': 'erātis', '3rd': 'erant' }
                    }
                },
                futureperfect: {
                    active: {
                        singular: { '1st': 'erō', '2nd': 'eris', '3rd': 'erit' },
                        plural: { '1st': 'erimus', '2nd': 'eritis', '3rd': 'erint' }
                    }
                }
            }
        },
        '3rd_io': {
            name: '3rd Conjugation (-iō)',
            modelWord: 'capiō',
            principalParts: ['capiō', 'capere', 'cēpī', 'captum'],
            stems: {
                present: 'cap',
                perfect: 'cēp',
                supine: 'capt'
            },
            tenses: {
                present: {
                    active: {
                        singular: { '1st': 'iō', '2nd': 'is', '3rd': 'it' },
                        plural: { '1st': 'imus', '2nd': 'itis', '3rd': 'iunt' }
                    },
                    passive: {
                        singular: { '1st': 'ior', '2nd': 'eris', '3rd': 'itur' },
                        plural: { '1st': 'imur', '2nd': 'iminī', '3rd': 'iuntur' }
                    }
                },
                imperfect: {
                    active: {
                        singular: { '1st': 'iēbam', '2nd': 'iēbās', '3rd': 'iēbat' },
                        plural: { '1st': 'iēbāmus', '2nd': 'iēbātis', '3rd': 'iēbant' }
                    },
                    passive: {
                        singular: { '1st': 'iēbar', '2nd': 'iēbāris', '3rd': 'iēbātur' },
                        plural: { '1st': 'iēbāmur', '2nd': 'iēbāminī', '3rd': 'iēbantur' }
                    }
                },
                future: {
                    active: {
                        singular: { '1st': 'iam', '2nd': 'iēs', '3rd': 'iet' },
                        plural: { '1st': 'iēmus', '2nd': 'iētis', '3rd': 'ient' }
                    },
                    passive: {
                        singular: { '1st': 'iar', '2nd': 'iēris', '3rd': 'iētur' },
                        plural: { '1st': 'iēmur', '2nd': 'iēminī', '3rd': 'ientur' }
                    }
                },
                perfect: {
                    active: {
                        singular: { '1st': 'ī', '2nd': 'istī', '3rd': 'it' },
                        plural: { '1st': 'imus', '2nd': 'istis', '3rd': 'ērunt' }
                    }
                },
                pluperfect: {
                    active: {
                        singular: { '1st': 'eram', '2nd': 'erās', '3rd': 'erat' },
                        plural: { '1st': 'erāmus', '2nd': 'erātis', '3rd': 'erant' }
                    }
                },
                futureperfect: {
                    active: {
                        singular: { '1st': 'erō', '2nd': 'eris', '3rd': 'erit' },
                        plural: { '1st': 'erimus', '2nd': 'eritis', '3rd': 'erint' }
                    }
                }
            }
        },
        '4th': {
            name: '4th Conjugation',
            modelWord: 'audiō',
            principalParts: ['audiō', 'audīre', 'audīvī', 'audītum'],
            stems: {
                present: 'aud',
                perfect: 'audīv',
                supine: 'audīt'
            },
            tenses: {
                present: {
                    active: {
                        singular: { '1st': 'iō', '2nd': 'īs', '3rd': 'it' },
                        plural: { '1st': 'īmus', '2nd': 'ītis', '3rd': 'iunt' }
                    },
                    passive: {
                        singular: { '1st': 'ior', '2nd': 'īris', '3rd': 'ītur' },
                        plural: { '1st': 'īmur', '2nd': 'īminī', '3rd': 'iuntur' }
                    }
                },
                imperfect: {
                    active: {
                        singular: { '1st': 'iēbam', '2nd': 'iēbās', '3rd': 'iēbat' },
                        plural: { '1st': 'iēbāmus', '2nd': 'iēbātis', '3rd': 'iēbant' }
                    },
                    passive: {
                        singular: { '1st': 'iēbar', '2nd': 'iēbāris', '3rd': 'iēbātur' },
                        plural: { '1st': 'iēbāmur', '2nd': 'iēbāminī', '3rd': 'iēbantur' }
                    }
                },
                future: {
                    active: {
                        singular: { '1st': 'iam', '2nd': 'iēs', '3rd': 'iet' },
                        plural: { '1st': 'iēmus', '2nd': 'iētis', '3rd': 'ient' }
                    },
                    passive: {
                        singular: { '1st': 'iar', '2nd': 'iēris', '3rd': 'iētur' },
                        plural: { '1st': 'iēmur', '2nd': 'iēminī', '3rd': 'ientur' }
                    }
                },
                perfect: {
                    active: {
                        singular: { '1st': 'ī', '2nd': 'istī', '3rd': 'it' },
                        plural: { '1st': 'imus', '2nd': 'istis', '3rd': 'ērunt' }
                    }
                },
                pluperfect: {
                    active: {
                        singular: { '1st': 'eram', '2nd': 'erās', '3rd': 'erat' },
                        plural: { '1st': 'erāmus', '2nd': 'erātis', '3rd': 'erant' }
                    }
                },
                futureperfect: {
                    active: {
                        singular: { '1st': 'erō', '2nd': 'eris', '3rd': 'erit' },
                        plural: { '1st': 'erimus', '2nd': 'eritis', '3rd': 'erint' }
                    }
                }
            }
        }
    },

    // ========== ADJECTIVES ==========
    adjectives: {
        '2-1-2': {
            name: '2-1-2 Adjectives',
            modelWord: 'bonus, -a, -um',
            stem: 'bon',
            endings: {
                masculine: {
                    singular: {
                        nominative: 'us',
                        vocative: 'e',
                        accusative: 'um',
                        genitive: 'ī',
                        dative: 'ō',
                        ablative: 'ō'
                    },
                    plural: {
                        nominative: 'ī',
                        vocative: 'ī',
                        accusative: 'ōs',
                        genitive: 'ōrum',
                        dative: 'īs',
                        ablative: 'īs'
                    }
                },
                feminine: {
                    singular: {
                        nominative: 'a',
                        vocative: 'a',
                        accusative: 'am',
                        genitive: 'ae',
                        dative: 'ae',
                        ablative: 'ā'
                    },
                    plural: {
                        nominative: 'ae',
                        vocative: 'ae',
                        accusative: 'ās',
                        genitive: 'ārum',
                        dative: 'īs',
                        ablative: 'īs'
                    }
                },
                neuter: {
                    singular: {
                        nominative: 'um',
                        vocative: 'um',
                        accusative: 'um',
                        genitive: 'ī',
                        dative: 'ō',
                        ablative: 'ō'
                    },
                    plural: {
                        nominative: 'a',
                        vocative: 'a',
                        accusative: 'a',
                        genitive: 'ōrum',
                        dative: 'īs',
                        ablative: 'īs'
                    }
                }
            }
        },
        '3rd_2_termination': {
            name: '3rd Declension (2 terminations)',
            modelWord: 'tristis, -e',
            stem: 'trist',
            endings: {
                masculine: {
                    singular: {
                        nominative: 'is',
                        vocative: 'is',
                        accusative: 'em',
                        genitive: 'is',
                        dative: 'ī',
                        ablative: 'ī'
                    },
                    plural: {
                        nominative: 'ēs',
                        vocative: 'ēs',
                        accusative: 'ēs',
                        genitive: 'ium',
                        dative: 'ibus',
                        ablative: 'ibus'
                    }
                },
                feminine: {
                    singular: {
                        nominative: 'is',
                        vocative: 'is',
                        accusative: 'em',
                        genitive: 'is',
                        dative: 'ī',
                        ablative: 'ī'
                    },
                    plural: {
                        nominative: 'ēs',
                        vocative: 'ēs',
                        accusative: 'ēs',
                        genitive: 'ium',
                        dative: 'ibus',
                        ablative: 'ibus'
                    }
                },
                neuter: {
                    singular: {
                        nominative: 'e',
                        vocative: 'e',
                        accusative: 'e',
                        genitive: 'is',
                        dative: 'ī',
                        ablative: 'ī'
                    },
                    plural: {
                        nominative: 'ia',
                        vocative: 'ia',
                        accusative: 'ia',
                        genitive: 'ium',
                        dative: 'ibus',
                        ablative: 'ibus'
                    }
                }
            }
        },
        '3rd_1_termination': {
            name: '3rd Declension (1 termination)',
            modelWord: 'fēlīx, fēlīcis',
            stem: 'fēlīc',
            endings: {
                masculine: {
                    singular: {
                        nominative: '',
                        vocative: '',
                        accusative: 'em',
                        genitive: 'is',
                        dative: 'ī',
                        ablative: 'ī'
                    },
                    plural: {
                        nominative: 'ēs',
                        vocative: 'ēs',
                        accusative: 'ēs',
                        genitive: 'ium',
                        dative: 'ibus',
                        ablative: 'ibus'
                    }
                },
                feminine: {
                    singular: {
                        nominative: '',
                        vocative: '',
                        accusative: 'em',
                        genitive: 'is',
                        dative: 'ī',
                        ablative: 'ī'
                    },
                    plural: {
                        nominative: 'ēs',
                        vocative: 'ēs',
                        accusative: 'ēs',
                        genitive: 'ium',
                        dative: 'ibus',
                        ablative: 'ibus'
                    }
                },
                neuter: {
                    singular: {
                        nominative: '',
                        vocative: '',
                        accusative: '',
                        genitive: 'is',
                        dative: 'ī',
                        ablative: 'ī'
                    },
                    plural: {
                        nominative: 'ia',
                        vocative: 'ia',
                        accusative: 'ia',
                        genitive: 'ium',
                        dative: 'ibus',
                        ablative: 'ibus'
                    }
                }
            }
        }
    },

    // ========== PRONOUNS ==========
    pronouns: {
        'hic': {
            name: 'hic, haec, hoc (this)',
            forms: {
                masculine: {
                    singular: {
                        nominative: 'hic',
                        accusative: 'hunc',
                        genitive: 'huius',
                        dative: 'huic',
                        ablative: 'hōc'
                    },
                    plural: {
                        nominative: 'hī',
                        accusative: 'hōs',
                        genitive: 'hōrum',
                        dative: 'hīs',
                        ablative: 'hīs'
                    }
                },
                feminine: {
                    singular: {
                        nominative: 'haec',
                        accusative: 'hanc',
                        genitive: 'huius',
                        dative: 'huic',
                        ablative: 'hāc'
                    },
                    plural: {
                        nominative: 'hae',
                        accusative: 'hās',
                        genitive: 'hārum',
                        dative: 'hīs',
                        ablative: 'hīs'
                    }
                },
                neuter: {
                    singular: {
                        nominative: 'hoc',
                        accusative: 'hoc',
                        genitive: 'huius',
                        dative: 'huic',
                        ablative: 'hōc'
                    },
                    plural: {
                        nominative: 'haec',
                        accusative: 'haec',
                        genitive: 'hōrum',
                        dative: 'hīs',
                        ablative: 'hīs'
                    }
                }
            }
        },
        'ille': {
            name: 'ille, illa, illud (that)',
            forms: {
                masculine: {
                    singular: {
                        nominative: 'ille',
                        accusative: 'illum',
                        genitive: 'illīus',
                        dative: 'illī',
                        ablative: 'illō'
                    },
                    plural: {
                        nominative: 'illī',
                        accusative: 'illōs',
                        genitive: 'illōrum',
                        dative: 'illīs',
                        ablative: 'illīs'
                    }
                },
                feminine: {
                    singular: {
                        nominative: 'illa',
                        accusative: 'illam',
                        genitive: 'illīus',
                        dative: 'illī',
                        ablative: 'illā'
                    },
                    plural: {
                        nominative: 'illae',
                        accusative: 'illās',
                        genitive: 'illārum',
                        dative: 'illīs',
                        ablative: 'illīs'
                    }
                },
                neuter: {
                    singular: {
                        nominative: 'illud',
                        accusative: 'illud',
                        genitive: 'illīus',
                        dative: 'illī',
                        ablative: 'illō'
                    },
                    plural: {
                        nominative: 'illa',
                        accusative: 'illa',
                        genitive: 'illōrum',
                        dative: 'illīs',
                        ablative: 'illīs'
                    }
                }
            }
        },
        'is': {
            name: 'is, ea, id (he/she/it, that)',
            forms: {
                masculine: {
                    singular: {
                        nominative: 'is',
                        accusative: 'eum',
                        genitive: 'eius',
                        dative: 'eī',
                        ablative: 'eō'
                    },
                    plural: {
                        nominative: 'eī',
                        accusative: 'eōs',
                        genitive: 'eōrum',
                        dative: 'eīs',
                        ablative: 'eīs'
                    }
                },
                feminine: {
                    singular: {
                        nominative: 'ea',
                        accusative: 'eam',
                        genitive: 'eius',
                        dative: 'eī',
                        ablative: 'eā'
                    },
                    plural: {
                        nominative: 'eae',
                        accusative: 'eās',
                        genitive: 'eārum',
                        dative: 'eīs',
                        ablative: 'eīs'
                    }
                },
                neuter: {
                    singular: {
                        nominative: 'id',
                        accusative: 'id',
                        genitive: 'eius',
                        dative: 'eī',
                        ablative: 'eō'
                    },
                    plural: {
                        nominative: 'ea',
                        accusative: 'ea',
                        genitive: 'eōrum',
                        dative: 'eīs',
                        ablative: 'eīs'
                    }
                }
            }
        },
        'qui': {
            name: 'quī, quae, quod (who, which)',
            forms: {
                masculine: {
                    singular: {
                        nominative: 'quī',
                        accusative: 'quem',
                        genitive: 'cuius',
                        dative: 'cui',
                        ablative: 'quō'
                    },
                    plural: {
                        nominative: 'quī',
                        accusative: 'quōs',
                        genitive: 'quōrum',
                        dative: 'quibus',
                        ablative: 'quibus'
                    }
                },
                feminine: {
                    singular: {
                        nominative: 'quae',
                        accusative: 'quam',
                        genitive: 'cuius',
                        dative: 'cui',
                        ablative: 'quā'
                    },
                    plural: {
                        nominative: 'quae',
                        accusative: 'quās',
                        genitive: 'quārum',
                        dative: 'quibus',
                        ablative: 'quibus'
                    }
                },
                neuter: {
                    singular: {
                        nominative: 'quod',
                        accusative: 'quod',
                        genitive: 'cuius',
                        dative: 'cui',
                        ablative: 'quō'
                    },
                    plural: {
                        nominative: 'quae',
                        accusative: 'quae',
                        genitive: 'quōrum',
                        dative: 'quibus',
                        ablative: 'quibus'
                    }
                }
            }
        }
    },

    // Helper labels
    cases: ['nominative', 'vocative', 'accusative', 'genitive', 'dative', 'ablative'],
    caseLabels: {
        nominative: 'Nominative',
        vocative: 'Vocative',
        accusative: 'Accusative',
        genitive: 'Genitive',
        dative: 'Dative',
        ablative: 'Ablative'
    },
    numbers: ['singular', 'plural'],
    persons: ['1st', '2nd', '3rd'],
    genders: ['masculine', 'feminine', 'neuter'],
    tenseLabels: {
        present: 'Present',
        imperfect: 'Imperfect',
        future: 'Future',
        perfect: 'Perfect',
        pluperfect: 'Pluperfect',
        futureperfect: 'Future Perfect'
    }
};
