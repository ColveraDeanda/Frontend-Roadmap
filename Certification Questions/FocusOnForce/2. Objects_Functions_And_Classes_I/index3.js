// ** Existen 2 formas de hacer una clase: **
//* class declaration:
class ClassName {
    constructor() { }
    method1() { }
    method2() { }
    method3() { }
}
//* class expression:
let className1 = class OptionalName {
    constructor() { }
    method1() { }
    method2() { }
    method3() { }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class MeetingRoom {
    constructor(available) {
        if(available) {
            this.reservable = true;
        }
    }
}
//* Se crea una instancia con new y se accede al constructor de la clase.
let boardRoom = new MeetingRoom(true);
console.log(boardRoom);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class User {
    // * (this hace referencia a la clase actual User).
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName
    }
    fullName() {
        return this.firstName + ' ' + this.lastName
    }
}
let user1 = new User('Sarah', 'James');
// *Al imprimir user1, no se verá reflejado el método fullName. Éste estará disponible en el prototipo.
console.log(user1);
console.log(user1.fullName());
// (Cuando se accede a una función y no la encuentra, la buscará en el prototipo, y así aplicando prototype chain).

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Ejemplo de clase usando get y set.
class MeetingRoom2 {
    constructor(capacity) {
        this.capacity = capacity;
        this.canReserve = true;
    };

    get reservable() {
        return this.canReserve;
    }

    set reservable(value) {
        return this.canReserve = value;
    }
}
let boardRoom2 = new MeetingRoom2(20);
console.log(boardRoom2.reservable);
boardRoom2.reservable = false;
console.log(boardRoom2.reservable);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* //*Métodos estáticos son métodos que pertenecen a la clase y no a la instancia. */
class User2 {
    // * (this hace referencia a la clase actual User).
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName
    }
    fullName() {
        return this.firstName + ' ' + this.lastName
    }
    static isUser(obj) {
        return obj instanceof User2;
    }
}
let user3 = new User2('Michael', 'Chin');
console.log(user3.fullName());
console.log(User2.isUser(user3));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class User3 {
    constructor() {
        this.validUser = true;
    }
    isUser() {
        return true;
    }
}
class Employee extends User3 {
    isEmployee() {
        return true;
    }
}
let employee = new Employee();
// El objeto de la sub-clase, tiene acceso a los métodos del la clase padre.
console.log(employee.isEmployee());
console.log(employee.isUser());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Si queremos hacer uso de 'this' en la clase hijo, es necesario usar super(), sino, devolverá un error.
class User4 {
    constructor(user, email) {
        this.user = user;
        this.email = email;
    }
}
class Employee1 extends User4 {
    constructor(id) {
        super() //* super: está llamando al constructor padre.
        this.employeeId = id;
    }
}
let employ1 = new Employee1(1);
console.log(employ1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* En el caso de que se quiera hacer uso de las propiedades definidas del padre, dentro del hijo,
//* se hace de la siguiente manera:
class User5 {
    constructor(user, email) {
        this.user = user;
        this.email = email;
    }
}
class Employee2 extends User5 {
    constructor(user, email, id) {
        //* super = sirve para llamar al constructor padre.
        super(user, email);
        this.employeeId = id;
    }
}
let employ2 = new Employee2('team_lead', 'team@gmail.com', 1213);
console.log(employ2);