//* Create function annotation in Typescript
/* Es una funcion, especificando el tipo de dato en los parametros y en el retorno. */

//* Q1: Create a UserInterface with id: string, name: string, age: number
//* and method getMessage that returns string.
export interface UserInterface {
  id: string;
  name: string;
  age: number;
  getMessage(): string;
}

//* Q2: Create ProfileInterface with name, profileUrl, isActive
export interface ProfileInterface {
  name: string;
  profileUrl: string;
  isActive: boolean;
}

//* Q3: Create function which transforms UserInterface to ProfileInterface.
//* The profileUrl is /profile/${name}
//* Q4: Add optional parameter isActive. Profile must be active if parameter
//* is not provided
const transformUserToProfile = (user: UserInterface, isActive = true): ProfileInterface => {
  return {
    name: user.name,
    profileUrl: `/profile/${user.name}`,
    isActive
  }
}

transformUserToProfile({
  id: '1',
  name: 'CR',
  age: 50,
  getMessage() {
    return '';
  },
}, false);





