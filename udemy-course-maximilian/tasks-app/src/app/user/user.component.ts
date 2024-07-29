import { Component, computed, input, output } from '@angular/core';
import { User } from './user.model';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[0]);
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Output() select = new EventEmitter();
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  user = input.required<User>();
  avatarPath = computed(() => `assets/users/${this.user().avatar}`);
  select = output<string>();
  isSelected = input<boolean>(false)

  // get avatarPath() {
  //   return `assets/users/${this.avatar}`
  // }
  onSelectUser(){
    // this.selectedUser.set(DUMMY_USERS[1])
    this.select.emit(this.user().id)
  }
}
