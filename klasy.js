class Person{
    _name;
    _surname;
    _age;

    constructor(name, surname, age) {
        this._name = name;
        this._surname = surname;
        this._age = age;
    }
}

class Student extends Person {
    _index;
    _marks;

    constructor(name, surname, age, index, marks = []) {
        super(name, surname, age);
        this._marks = marks;
        this._index = index;
    }

    get index() {
        return 's' + this._index;
    }
}
class Teacher extends Person{
    _subject
    _title

    constructor(name, surname, age, subject, title) {
        super(name, surname, age);
        this._subject = subject;
        this._title = title;
    }
    get fullName(){
        return this._title + " " + this._name + " " + this._surname
    }
}

function main(){
    let person1 = new Person('Jan','Kowalski',26);
    let student = new Student('Marek','Nowak',20,234343,[1,2,3,4]);
    let teacher = new Teacher('Michał','Kowal',20,'ASD',"Profesor");
    console.log(student.index)
    console.log(person1._age)
    console.log(teacher.fullName)
}

main()