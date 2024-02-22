class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'the name cannot be empty';
        }
        this._name = newName;
    }
}

let person = new Person('Le Tuan 123');
person.name = 'Tuan Le 321';
console.log(person.name);
console.log('-----------------------------------------');
console.log('Using getter in an object literal ------> ');

let meeting = {
    attendees: [],
    add(attendee) {
        console.log(`${attendee} joined the meeting`);
        this.attendees.push(attendee);
        return this;
    },
    get lastest() {
        let count = this.attendees.length;
        return count == 0 ? undefined : this.attendees[count - 1];
    }
}

meeting.add('Tuan').add('Tien').add('Han');
console.log(`${meeting.lastest} is the lastest attendee`);
