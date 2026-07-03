import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.html',
  styleUrl: './splash.css',
})
export class Splash {

  private router = inject(Router);

  constructor() {

    setTimeout(() => {

      this.router.navigate(['/login']);

    }, 2000);

  }

}