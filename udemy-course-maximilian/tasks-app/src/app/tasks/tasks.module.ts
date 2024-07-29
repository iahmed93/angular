import { NgModule } from "@angular/core";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [NewTaskComponent, TaskComponent, TasksComponent],
    exports: [TasksComponent],
    imports: [SharedModule, CommonModule, FormsModule]
    // CommonModule is contianing common directives and pipes and is used instead of importing
    // BrowserModule here and it contains the DatePipe
})
export class TasksModule {}