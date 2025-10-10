import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { initializeApp } from '@angular/fire/app';

import { LoginComponent } from './auth/login/login.component';
import { firebaseConfig } from './core/firebase/firebase.config';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';

  constructor() {
    initializeApp(firebaseConfig);
  }
}
