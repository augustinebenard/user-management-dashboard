import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.scss'
})
export class ManageUsersComponent implements OnInit {
  form!: FormGroup;
  btnLoading: boolean = false;
  roles = [
    { label: 'Customer', value: 'Customer' },
    { label: 'Staff', value: 'Staff' },
    { label: 'Manager', value: 'Manager' },
    { label: 'Admin', value: 'Admin' },
    { label: 'Super Admin', value: 'Super Admin' },
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required]],
    });
  }

  createUser() {
    console.log(this.form.value);

  }

  covertToFormControl(absCtrl: AbstractControl | null): FormControl {
    return absCtrl as FormControl;
  }
}
