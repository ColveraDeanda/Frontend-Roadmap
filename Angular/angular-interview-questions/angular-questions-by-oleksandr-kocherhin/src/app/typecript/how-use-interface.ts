//* How to create Typescript interface?

//* =>  Q1: Define a UserInterface with id: string, name: string, age: number and method getMessage that returns string.
//* =>  Q2: Write a usage example of this interface */

export interface UserInterface {
  id: string;
  name: string;
  age: number;
  getMessage(): string
}

const user: UserInterface = {
  id: '1',
  name: 'Cristobal',
  age: 25,
  getMessage() {
    return `${this.name} - ${this.age}`
  },
}

