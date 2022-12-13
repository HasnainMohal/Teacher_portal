const { text } = require('express')
const mongoose = require('mongoose')

const BT_Lang = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    trainer: {
        type: String
    },
    Notes_Oberation: {
        type: String
    },
    duration: {
        type: String
    },
    info: {
        type: String
    },
})

const IM = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    activity: {
        type: String
    },
    Task_Avg: {
        type: String
    },
    Var_Avg: {
        type: String
    },
    SRO: {
        type: String
    },
    E: {
        type: String
    },
    L: {
        type: String
    },
    HighestIAR: {
        type: String
    },
    Burst: {
        type: String
    },
})

const SI_FT = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    Trainer: {
        type: String
    },
    Durations: {
        type: String
    },
    Vestibular: {
        type: String
    },
    Reflex: {
        type: String
    },
    VP_AP: {
        type: String
    },
    FT: {
        type: String
    },
    Message: {
        type: String
    },
    Proprioception: {
        type: String
    },
    Kinestesia: {
        type: String
    },
    EP: {
        type: String
    },
    Emotions: {
        type: String
    },
    Tactile_Oral: {
        type: String
    },
    Muscle_tone: {
        type: String
    },
    Others: {
        type: String
    },
})

const tls = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    program: {
        type: String
    },
    music_day: {
        type: String
    },
    duration: {
        type: String
    }
})

const lesson_log = new mongoose.Schema({
    teacher: {
        type: String
    },
    time: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const hour_log = new mongoose.Schema({
    teacher: {
        type: String
    },
    time: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    notes: {
        type: String
    }
})

const case_notes = new mongoose.Schema({
    case_management_meeting: {
        reviewer: {
            type: String
        },
        recent_changes: {
            type: String
        },
        communication: {
            type: String
        }
    },
    parent_review_session: {
        reviewer: {
            type: String
        },
        recent_changes: {
            type: String
        },
        communication: {
            type: String
        }
    },
    comments: [{
        date: {
            type: Date
        },
        trainer: {
            type: String
        }
    }]
})

const lesson = new mongoose.Schema({
    trainer: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    lesson_length: {
        type: String
    },
    lesson_objectives: {
        type: String
    },
    message: {
        type: String
    },
    reflex: {
        type: String
    },
    tactile: {
        type: String
    },
    vestibular: {
        type: String
    },
    oral: {
        type: String
    },
    kinestesia: {
        type: String
    },
    muscle_tone: {
        type: String
    },
    proprioception: {
        type: String
    },
    vision: {
        type: String
    },
    emotions: {
        type: String
    },
    others: {
        type: String
    },
    plan_for_next_session: {
        type: String
    },
    parent_feedback: {
        type: String
    }
})

const StudentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please Provide an Email'],
        maxlength: 60
    },
    dob: {
        type: Date,
        default: Date.now,
        required: [true, 'Please Provide Date of Birth'],
    },
    meeting_date: {
        type: Date
    },
    name: {
        type: String,
        required: [true, 'Please Provide Name'],
        maxlength: 60
    },
    parents_concern: {
        type: String
    },
    emotional_regulation: {
        type: String
    },
    total_hours: {
        type: Number,
        default: 40,
    },
    completed_hours: {
        type: Number,
    },
    status: {
        type: String,
        enum: ['enrolled', 'past'],
        default: 'enrolled'
    },
    tls: [tls],
    lesson_log: [lesson_log],
    hour_log: [hour_log],
    case_notes: [case_notes],
    lesson: [lesson],
    BT_Lang: [BT_Lang],
    IM: [IM],
    SI_FT: [SI_FT],
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
}, { timestamps: true })


module.exports = mongoose.model('Student', StudentSchema)