import { Component, computed, input, output, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DummyTasks } from './dummy-tasks';
import { User } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  user = input<User>();
  openAddTaskDialog = signal(false);

  constructor(private taskService: TaskService) {}

  // onComplete(id: string) {
  //   const task = DummyTasks.find((t) => t.id === id);
  //   if (task) {
  //     task.completed = true;
  //   }
  // }

  get selectedUserTasks() {
    return this.taskService.getTasksByUserId(this.user()?.id!);
  }

  onStartAddTask() {
    this.openAddTaskDialog.set(true);
  }

  onCancelAddTask() {
    this.openAddTaskDialog.set(false);
  }

  onAddTask(newTask: NewTask) {
    this.openAddTaskDialog.set(false);
    this.taskService.addTask(this.user()?.id!, newTask);
  }
}
