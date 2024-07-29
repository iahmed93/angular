import { Component, inject, input, output, signal } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  cancel = output<void>()

  userId = input("")
  
  enteredTitle = signal('')
  enteredSummary = signal('')
  enteredDate = signal('')

  private taskService = inject(TaskService);
  
  onClose(){
    this.cancel.emit()
  }

  onSubmit() {
    this.taskService.addTask(this.userId(), {
        title: this.enteredTitle(),
        dueDate: this.enteredDate(),
        summary: this.enteredSummary()
      })
  }
}
