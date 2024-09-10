import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      provideFirebaseApp(
        () => initializeApp(
          { "projectId": "adventure-storybook",
            "appId": "1:710381328371:web:897963b3371f59158fa486",
            "storageBucket": "adventure-storybook.appspot.com",
            "apiKey": "AIzaSyAp23LNQjuzgXiPi9VBXDYqtsNRmKho8hM",
            "authDomain": "adventure-storybook.firebaseapp.com",
            "messagingSenderId": "710381328371",
            "measurementId": "G-T806J582G5"
          }
        ))),
    importProvidersFrom(provideFirestore(() => getFirestore())), provideAnimations()]
};
