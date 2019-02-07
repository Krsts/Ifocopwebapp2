import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss']
})
export class UserSignUpComponent implements OnInit {

  userRegistrationForm: FormGroup;
 
    // confirmValidParentMatcher = new ConfirmValidParentMatcher();
 
    // errors = errorMessages;

  // onSubmit(f: NgForm) {
  //   console.log(f.value);  // { first: '', last: '' }
  //   console.log(f.valid);  // false
  // }
  
  constructor( private formBuilder: FormBuilder) {  this.createForm();}

  createForm() {
    this.userRegistrationForm = this.formBuilder.group({
        fullName : ['', [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(128)
        ]],
        emailGroup: this.formBuilder.group({
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            confirmEmail: ['', Validators.required]
        }, 
        // { validator: CustomValidators.childrenEqual}
        ),
        passwordGroup: this.formBuilder.group({
            password: ['', [
                Validators.required,
                // Validators.pattern(regExps.password)
            ]],
            confirmPassword: ['', Validators.required]
        }, 
        // { validator: CustomValidators.childrenEqual}
        )
    });
}

  ngOnInit() {
  }

}
