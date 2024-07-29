import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
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
