import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { DataService } from './Data.service';
import { UserLoggingService } from './user-logging.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  status: Boolean = false;
  // userName = this.userData.userName;
  userName: string;
  cart: Array<String>;
  user;
  dbCart: Array<String>;

  setdbCart(cart) {
    this.dbCart = cart;
  }
  getdbCart() {
    return this.dbCart;
  }
  getUserFromDB() {
    this.userLoggingService.getUserByUserName({ 'userName': this.getUserName() }).subscribe((data: {}) => {
      this.user = data[0];
    })
  }

  getLocalUser() {
    return this.user;
  }
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
    // this.dataService.clearStorage();
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

  setLocalCart(data: Array<String>) {
    this.cart = data;
  }
  addToLocalCart(id: String) {
    this.cart.push(id);
    try {
      this.userLoggingService.getUserByUserName({ 'userName': this.getUserName() }).subscribe((data: {}) => {
        this.user = data[0];
        this.user['reservations'] = this.getLocalCart();
      }, errorCode => console.log(errorCode)
      )
      setTimeout(() => {
        this.userLoggingService.updateUser(this.user, this.user['_id']).subscribe((res) => {
          console.log('Updated customer');
        })
      }, 1000);
    } catch { }
  }

  clearLocalCart() {
    this.cart = [];
  }

  getUserName() {
    return this.userName;
  }
  constructor(private router: Router,
    private userLoggingService: UserLoggingService)
  // private dataService: DataService) 
  { }

}

