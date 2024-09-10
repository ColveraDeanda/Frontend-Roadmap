import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/* Q1: You have an interface User with id, name age. Create a UsersService and getUsers method which makes a get request to
       http://localhost:3004/users and returns a users stream.
   Q2: Write the code to get this data in component.
 todo [See example on UsersService]
*/

export interface User {
  id: string;
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'http://localhost:3004/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
