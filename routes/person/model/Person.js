const mongoose = require('mongoose');

const personSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "First name is required"]
        },
        lastName: {
            type: String,
            required: [true, "Last name is required"]
        },
        age: {
            type: Number,
            required: [true, "Age is required"]
        }
    }, {timestamps: true}
)

module.exports = mongoose.model('person', personSchema);