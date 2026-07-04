import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.html',
  styleUrl: './splash.css',
})
export class Splash {

  private router = inject(Router);

  private cdr = inject(ChangeDetectorRef);

  progress = 0;

  isLeaving = false;

  constructor() {

  const interval = setInterval(() => {

    if (this.progress < 100) {

      this.progress +=5;

      this.cdr.detectChanges();

    } else {

      this.isLeaving = true;

      clearInterval(interval);

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);

    }

  });

}

}