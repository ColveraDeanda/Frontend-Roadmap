import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginRequest } from '../interfaces/userRequest.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserLoginOn = new BehaviorSubject<boolean>(false);
  currentUserData = new BehaviorSubject<LoginRequest>({ id: 0, email: '', password: '' });

  constructor(private http: HttpClient) { }

  login(credentials: LoginRequest): Observable<LoginRequest> {
    const credentialsToJson = JSON.stringify(credentials);
    return this.http.get<LoginRequest>(credentialsToJson).pipe(
      tap((userData: LoginRequest) => {
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true);
      }),
      catchError(this.handleError)
    );
  }

  logOut() {
    this.currentUserLoginOn.next(false);
    this.currentUserData.next({ id: 0, email: '', password: '' });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producio un error ', error.error);
    }
    else {
      console.error('Backend retornó el código de estado ', error.status, error.error);
    }
    return throwError(() => new Error('Algo falló. Por favor intente nuevamente.'));
  }


  get userLoginOn(): Observable<boolean> {
    return this.currentUserLoginOn.asObservable();
  }

  get userData(): Observable<User> {
    return this.currentUserData.asObservable();
  }

}
