import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser = signal<User|undefined>(undefined)

  onSelectUser(id: string) {
    console.log(`user selected with id=${id}`)
    const user = this.users.find((u) => u.id === id)
    this.selectedUser.set(user!)
  }
}
