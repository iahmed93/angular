import { Injectable } from '@angular/core';
import { DummyTasks } from './dummy-tasks';
import { NewTask } from './task.model';

@Injectable({providedIn: 'root'})
export class TaskService {
  getTasksByUserId(userId: string) {
    return DummyTasks.filter((t) => t.userId === userId && !t.completed);
  }

  addTask(userId: string, newTask: NewTask) {
    DummyTasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      completed: false,
      ...newTask,
    });
  }

  completeTask(id: string) {
    const task = DummyTasks.find((t) => t.id === id);
    if (task) {
      task.completed = true;
    }
  }
}
