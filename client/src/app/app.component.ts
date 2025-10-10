import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { initializeApp } from '@angular/fire/app';
import { firebaseConfig } from './core/firebase/firebase.config';
import { LoginComponent } from './auth/login/login.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';

  constructor() {
    initializeApp(firebaseConfig);
  }
}
