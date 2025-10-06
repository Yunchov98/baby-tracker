import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { initializeApp } from '@angular/fire/app';
import { firebaseConfig } from './core/firebase/firebase.config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';

  constructor() {
    initializeApp(firebaseConfig);
  }
}
