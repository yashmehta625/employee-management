import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appCustomValidators]'
})
export class CustomValidatorsDirective {

  constructor() { }

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string)?.indexOf(' ') === 0) {
      return { cannotContainSpace: true }
    }
    return null;
  }

  static matchPassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password?.value || !confirmPassword?.value) {
      return null;
    }

    if(password.value === confirmPassword.value){
      return null;
    }else{
      confirmPassword.setErrors({password: true});
      return {noMatch: true}
    }

    return (password === confirmPassword) ? null : {noMatch: true};
  }



}
