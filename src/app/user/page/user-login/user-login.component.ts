import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../shared/user.service';
import {SnackbarService} from '../../../shared/services/snackbar.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{

  hidePassword = true;
  hide = true;

  userLoginForm = new FormGroup({
    password: new FormControl(''),
    email: new FormControl('', [Validators.email])
  }, [Validators.required, Validators.maxLength(255)]);

  constructor(public userService: UserService, private router: Router, private snackbar: SnackbarService
) {
  }
  ngOnInit() {
    if(this.userService.isUserLoggedIn()) {
      this.router.navigate(['/home']);
    }

  }

  onLogin() {

    if(!this.isFormValid()){
      return;
    }

    this.userService.login(this.userLoginForm.value, (response, isFailed) => {

      if (isFailed) {
        this.handleLoginFailedResponse(response);
        return;
      }

      this.handleLoginResponse(response);
    });
  }

  private handleLoginFailedResponse(responseError) {
    this.snackbar.showMessage('Inloggen is mislukt', 2000);
  }

  private handleLoginResponse(response) {
    this.router.navigate(['/home/dashboard']);
  }

  isFormValid() {
    return this.userLoginForm.valid;
  }
}
