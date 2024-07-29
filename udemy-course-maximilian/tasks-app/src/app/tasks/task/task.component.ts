import { Component, input, output } from '@angular/core';
import { Task } from '../task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [CardComponent, DatePipe]
})
export class TaskComponent {
  task = input.required<Task>()
  complete = output<string>()

  constructor(private taskService: TaskService){}

  onComplete(){
    this.taskService.completeTask(this.task().id)
  }
}
