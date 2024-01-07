import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-editar-item-modal',
    templateUrl: './editar-item-modal.component.html',
    styleUrls: ['./editar-item-modal.component.scss']
})

export class EditarItemModalComponent {
    item: any;
  
    constructor(public activeModal: NgbActiveModal) {}
  
    saveChanges() {
      // Adicione a lógica para salvar as alterações no item
      this.activeModal.close(this.item);
    }
  }