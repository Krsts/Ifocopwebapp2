import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  status: Boolean = false;

  getStatus() {
    return this.status;
  }

  getLoginStatus() {
    if (this.status) {
      return 'connecté';
    } else {
      return 'déconnecté';
    }
  }

  toggleStatus() {
    this.setLoginStatus();
    this.leaveProfile();
  } 

  setLoginStatus() {
    this.status = !this.status;
    return this.getLoginStatus();
  }

  goToProfile() {
    if (this.status) {
      this.router.navigate(['/', 'user-profile']);
      return (console.log('Non Connecté'));
    } else {
      return (console.log('Non Connecté'));
    }
  }

  goToSignUp() {
    this.router.navigate(['/', 'user-sign-up']);
  }

  leaveProfile() {
    if (!this.status && this.router.url === '/user-profile') {
      this.router.navigate(['/', 'home']);
    }
  }

  goToAppartementForm() {
    if (this.status) {
      this.router.navigate(['/', 'appartement-form']);
    }
  }
  constructor(private router: Router) { }
}
