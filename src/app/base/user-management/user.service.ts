import { Injectable } from '@angular/core';
import { User } from './user.interface';
import { Notify } from 'notiflix';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'Augustine Benard',
      email: 'augustinebenard14@gmail.com',
      role: 'Super Admin'
    }
  ];

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    const userExists = this.users.find((u) => u.email === user.email);
    if (userExists) {
      return false;
    }
    this.users.push(user);
    return true;
  }

  deleteUser(index: number) {
    const getuser  =  this.users[index]
    if(getuser){
      this.users.splice(index, 1);
      Notify.success('User deleted successfully');
    }
    else{
      Notify.failure('User not found');
    }
  }
}
