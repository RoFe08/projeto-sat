import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { TasksListComponent } from "./tasks/tasks-list/tasks-list-component/tasks-list.component";
import { CreateTaskComponent } from "./tasks/create-task/criacao-itens-component/create-task.component";
import { HomeComponent } from "./tasks/home/home-component/home.component";
import { routes } from "./app.routes";
import { RouterModule } from "@angular/router";
import { v4 as uuidv4 } from 'uuid';
import { NgxSpinnerModule } from "ngx-spinner";
import { EditTaskModalComponent } from "./tasks/edit-task-modal-component/edit-task-modal.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateTaskComponent,
    TasksListComponent,
    EditTaskModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
  ],
  bootstrap: [AppComponent],
  exports: [EditTaskModalComponent]
})
export class AppModule {
  generateUniqueId(): string {
    return uuidv4();
  }
 }