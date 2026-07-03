import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    const senha = control.get('senha')?.value;

    const confirmarSenha = control.get('confirmarSenha')?.value;

    if (senha === confirmarSenha) {
      return null;
    }

    return {
      passwordMismatch: true
    };

  };

}