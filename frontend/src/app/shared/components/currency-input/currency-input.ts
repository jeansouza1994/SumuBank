import { Component, forwardRef, input, signal } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-currency-input',
  imports: [],
  templateUrl: './currency-input.html',
  styleUrl: './currency-input.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CurrencyInput),
      multi: true
    }
  ]
})
export class CurrencyInput implements ControlValueAccessor {

  label = input.required<string>();

  valor = signal('');

  disabled = false;

  private onChange = (_: number | null) => {};

  private onTouched = () => {};

  onInput(event: Event): void {

    const input = event.target as HTMLInputElement;

    const apenasNumeros = input.value.replace(/\D/g, '');

    if (!apenasNumeros) {

      this.valor.set('');

      input.value = '';

      this.onChange(null);

      this.onTouched();

      return;

    }

    const numero = Number(apenasNumeros) / 100;

    const valorFormatado = numero.toLocaleString(
      'pt-BR',
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    );

    this.valor.set(valorFormatado);

    // Atualiza imediatamente o valor exibido no input
    input.value = valorFormatado;

    this.onChange(numero);

    this.onTouched();

  }

  writeValue(value: number | null): void {

    if (value === null) {

      this.valor.set('');

      return;

    }

    this.valor.set(

      value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })

    );

  }

  registerOnChange(fn: any): void {

    this.onChange = fn;

  }

  registerOnTouched(fn: any): void {

    this.onTouched = fn;

  }

  setDisabledState(isDisabled: boolean): void {

    this.disabled = isDisabled;

  }

}