import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Notify } from 'notiflix'
import { UserService } from '../user.service';
import { User } from '../user.interface';
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
  isLoading: boolean = false;
  userList: User[] = [];
  editable: boolean = false
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.userList = this.userService.getUsers();
  }

  initializeForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required]],
    });
  }

  createUser() {
    this.btnLoading = true;

    if (this.form.valid) {
      setTimeout(() => {
        const success = this.userService.addUser(this.form.value);
        this.btnLoading = false;
        if (success) {
          Notify.success(`User ${this.editable ? 'edited' : 'added'} successfully`);
          this.editable = false;
          this.initializeForm();
          this.userList = this.userService.getUsers();
        } else {
          Notify.failure(`User with email ${this.form.value.email} already exists`);
        }
      }, 1000);
    }
    else {
      Notify.failure('Please fill all fields');
      this.btnLoading = false;
    }
  }

  editUser(index: number) {
    const user = this.userList[index];
    this.form.patchValue(user);
    this.editable = true;
    this.deleteUser(index);

  }

  deleteUser(index: number) {
    this.userService.deleteUser(index);
    this.userList = this.userService.getUsers();
  }

  covertToFormControl(absCtrl: AbstractControl | null): FormControl {
    return absCtrl as FormControl;
  }
}
