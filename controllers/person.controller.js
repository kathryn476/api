const person = require('../model/person')

function infoController () {
    let person = new Person("Kathryn", 24)
    return{
        age: person.getAge(),
        name: person.getName()

    }
}
module.exports = infoController;