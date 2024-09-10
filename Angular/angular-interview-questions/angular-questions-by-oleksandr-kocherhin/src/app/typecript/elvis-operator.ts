//*  elvis operator in Typescript?

//* Q1: What is an elvis operator?


//* Q2: Write a common use case of elvis operator.
export interface UserInterface {
  id: string;
  name: string;
}

const getName = (user?: UserInterface): string => {
  return user?.name ?? 'Not undefined';
}

