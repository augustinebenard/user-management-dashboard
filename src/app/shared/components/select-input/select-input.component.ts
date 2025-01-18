import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectInputComponent),
      multi: true
    }
  ]
})
export class SelectInputComponent implements ControlValueAccessor {
  @Input() placeholder!: string;
  @Input() label!: string;
  @Input() options!: any[];
  @Input()
  set disableInput(value: boolean) {
    this._disableInput = value;
    if (value) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }
  get disableInput(): boolean {
    return this._disableInput;
  }

  private _disableInput = false;
  control = new FormControl();

  writeValue(value: any): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.control.markAsTouched();
  }
}
