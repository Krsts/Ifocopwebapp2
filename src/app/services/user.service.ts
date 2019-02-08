import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData: {
    userName: 'Pierre',
    passWord: 'Jean',
  };

  status: Boolean = false;
  // userName = this.userData.userName;
  userName = 'Bertrand';


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
      return (console.log('Connecté'));
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

  setUserName(x) {
    this.userName = x;
  }

  getUserData(...values) {
    if ('userName' in values) {
      return this.userData.userName;
    } else {
      return 'Bertrand Default';
    }

  }

  UserName() {
    return this.userName;
  }


  // setUserData(userName, passWord) {
  //   this.userData.userName = userName;
  //   this.userData.passWord = passWord;
  // }
  constructor(private router: Router) { }

}

