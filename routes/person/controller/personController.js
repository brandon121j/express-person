const Person = require('../model/Person');

module.exports = {

    getAllPeople: (body, callback) => {
        Person.find(body, function(err, foundPeople) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, foundPeople);
            }
        });
    },

    getSinglePerson: (id, callback) => {

        Person.findById(id, function(err, foundPerson) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, foundPerson)
            }
        });
    },

    createPerson: (body, callback) => {
        const createdPerson = new Person({
            firstName: body.firstname,
            lastName: body.lastname,
            age: body.age
        })

        createdPerson.save(function(err, createdPerson) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, createdPerson)
            }
        })
    },

    updatePerson: (id, body, callback) => {
        Person.findByIdAndUpdate(id, body, { new : true }, function(err, updatedPerson) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, updatedPerson)
            }
        })
    },

    deletePerson: (id, callback) => {
        Person.findByIdAndDelete(id, function(err, deletedPerson) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, deletedPerson)
            }
        })
    }
    
}