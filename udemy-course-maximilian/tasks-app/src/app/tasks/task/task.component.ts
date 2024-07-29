import { Component, input, output } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task>()
  complete = output<string>()

  constructor(private taskService: TaskService){}

  onComplete(){
    this.taskService.completeTask(this.task().id)
  }
}
