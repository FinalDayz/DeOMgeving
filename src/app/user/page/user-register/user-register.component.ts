import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../shared/user.service';
import {SnackbarService} from '../../../shared/services/snackbar.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  passwordHidden: boolean;
  userRegisterForm: FormGroup;

  constructor(
    public userService: UserService,
    private router: Router,
    private snackbar: SnackbarService
  ) {
  }

  ngOnInit() {
    this.hidePassword();
    this.buildForm();

  }

  hidePassword() {
    this.passwordHidden = true;
  }

  private buildForm() {
    const passwordStringPattern = this.getPasswordValidateRegex();
    this.userRegisterForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(3), Validators.maxLength(255)]),
      email: new FormControl('', [Validators.email, Validators.maxLength(191)]),
      password: new FormControl('', [Validators.pattern(passwordStringPattern)]),
    }, [Validators.required]);
  }

  private getPasswordValidateRegex() {
    return '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,255}$';
  }

  onSubmit() {

    if (!this.isFormValid()) {
      return;
    }

    this.createUser();
  }

  isFormValid() {
    return this.userRegisterForm.valid;
  }

  private createUser() {
    const currentContext = this;
    this.userService.createUser(this.userRegisterForm.value, (isFailed) => {

      if (isFailed) {
        currentContext.handleFailedRegisterResponse();
        return;
      }

      currentContext.handleRegisterResponse();
    });
  }

  handleFailedRegisterResponse() {
    this.snackbar.showMessage('Het aanmaken van een gebruikers account is niet gelukt', 3000);
  }

  handleRegisterResponse() {
    this.snackbar.showMessage('Registratie voltooid!', 5000);
    this.router.navigate(['/login']);
  }

  togglePasswordType() {
    this.passwordHidden = !this.passwordHidden;
  }

  isPasswordHidden() {
    return this.passwordHidden;
  }
}
