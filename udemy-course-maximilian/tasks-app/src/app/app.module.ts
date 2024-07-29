import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // for modules only

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [AppComponent], // for components in modules
  bootstrap: [AppComponent],
  imports: [HeaderComponent, UserComponent, TasksComponent, BrowserModule], // standalone components
})
export class AppModule {}
