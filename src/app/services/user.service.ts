import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  status: Boolean = false;
  // userName = this.userData.userName;
  userName: string;
  cart: Array<String>;


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

  toggleStatus(toStatus: boolean) {
    this.status = toStatus;
    // this.setLoginStatus(toStatus);
    this.setUserName(undefined);
    this.leaveProfile();
  }

  setLoginStatus(arg?) {
    if (arg) {
      this.status = arg;
      return this.getLoginStatus();
    }
  }

  goToProfile() {
    if (this.status) {
      this.router.navigate(['/', 'user-profile', this.getUserName().toString()]);
      // return (console.log('Connecté'));
    } else {
      // return (console.log('Non Connecté'));
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

  setUserName(userName) {
    if (userName === undefined) {
      this.status = false;
    } else {
      this.userName = userName;
      this.setLoginStatus(userName);
      this.status = true;
    }
  }

  checkLocalCart() {
    if (this.cart.length > 0) { return true; } else { return false; }
  }

  getLocalCart() {
    return this.cart;
  }

  setLocalCart(data: Array) {
    this.cart = data;
  }
  addToLocalCart(id: String) {
    this.cart.push(id);
  }

  clearLocalCart() {
    this.cart = [];
  }

  getUserName() {
    return this.userName;
  }
  constructor(private router: Router) { }

}

