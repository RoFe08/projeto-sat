import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-edit-task-modal',
    templateUrl: './edit-task-modal.component.html',
    styleUrls: ['./edit-task-modal.component.scss']
})

export class EditTaskModalComponent {
    item: any;
  
    constructor(public activeModal: NgbActiveModal) {}
  
    saveChanges(): void {
      this.activeModal.close(this.item);
    }
  }