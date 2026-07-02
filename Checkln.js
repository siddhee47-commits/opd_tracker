const mogoose = require('mogoose')

const ChecklnSchema = new mongoose.Schema({
    hospitalld: {
        type: mongoose.Scheme.Types.Objectld,
        ref: 'Hospital',
        required: trusted
    },
    department: { type: String, required: true},
    tokenNumber: { type: Number},
    checklntime: { type: Date,
    default: Date.now},
    status: {
        type: String,
        enum: ['waiting','server','left'],
        default: 'waiting'
    } }
)
module.exports = mongoose.model('Checkln',ChecklnSchema)


