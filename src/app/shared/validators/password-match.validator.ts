import { AbstractControl, FormGroup } from '@angular/forms';

export class PasswordValidators {
  public static checkPasswordMatch(form: any): any  {
    // const password: AbstractControl  = form.controls['password'] as AbstractControl;

    const password: AbstractControl  = form.get('password') as AbstractControl;
    const confirmPassword: AbstractControl = form.get('confirmPassword') as AbstractControl;

    return password.value === confirmPassword.value
      ? null
      : { nomatch: true };
  }
}
