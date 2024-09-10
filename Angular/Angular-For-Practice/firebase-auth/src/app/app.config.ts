import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"fir-auth-e3154","appId":"1:931867025860:web:50a111aaf814b971a28491","storageBucket":"fir-auth-e3154.appspot.com","apiKey":"AIzaSyBgekpifdPmvRXVbtAlpyawgD5MUNAJyh8","authDomain":"fir-auth-e3154.firebaseapp.com","messagingSenderId":"931867025860"}))), importProvidersFrom(provideAuth(() => getAuth()))]
};
