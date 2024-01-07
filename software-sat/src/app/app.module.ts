import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ListagemItensComponent } from "./biblioteca/listagem-itens/listagem-itens-component/listagem-itens.component";
import { CriacaoItensComponent } from "./biblioteca/criacao-itens/criacao-itens-component/criacao-itens.component";
import { HomeComponent } from "./biblioteca/home/home-component/home.component";
import { routes } from "./app.routes";
import { RouterModule } from "@angular/router";
import { v4 as uuidv4 } from 'uuid';
import { NgxSpinnerModule } from "ngx-spinner";
import { EditarItemModalComponent } from "./biblioteca/editar-item-modal-component/editar-item-modal.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CriacaoItensComponent,
    ListagemItensComponent,
    EditarItemModalComponent
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
  exports: [EditarItemModalComponent]
})
export class AppModule {
  generateUniqueId(): string {
    return uuidv4();
  }
 }