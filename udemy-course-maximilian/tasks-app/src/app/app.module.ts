import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // for modules only

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
  ], // for components that a part of that module and work together
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, SharedModule, TasksModule], // standalone components or modules
  // no need to add DatePipe in imports as it a part BrowserModule
  // BrowserModule is meant only to be imported in the root module
})
export class AppModule {}
