import { provideRouter } from '@angular/router';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import { getAuth, provideAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';
import { firebaseConfig } from './core/firebase/firebase.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
  ],
};
