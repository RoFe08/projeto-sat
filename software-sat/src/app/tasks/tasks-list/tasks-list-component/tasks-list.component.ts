import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BibliotecaService } from '../../service/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditTaskModalComponent } from '../../edit-task-modal-component/edit-task-modal.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.scss']
})

export class TasksListComponent implements OnInit {

    itensLibrary!: any
    form!: FormGroup;

    constructor(
        private router: Router,
        private libraryService: BibliotecaService,
        private formBuilder: FormBuilder,
        private modalService: NgbModal,
        private spinner: NgxSpinnerService
        ) {}

    ngOnInit(): void {
       this.getItensLibrary();
       this.initForm();
    }


    private initForm(): void {
        this.form = this.formBuilder.group({
            name: ["", [Validators.required]],
            description: ["", [Validators.required]],
            category: ["", [Validators.required]]
        });
    }

    goCreateTask(): void {
        this.router.navigate(['/create-task']);
    }

    goHome(): void {
      this.router.navigate(['/home']);
    }

    goTasks(){

    }

    getItensLibrary(): void{
        this.libraryService.getTask().subscribe((item: any) => {
            this.itensLibrary = item;
        });
    }

    deleteItem(id: string): void{
      this.spinner.show();
        this.libraryService.deleteTask(id).pipe(finalize(() => {
          this.spinner.hide();
          window.location.reload();
        })).subscribe();
    }

    putItem(id: string): void {
        const item = this.itensLibrary.find((item: any) => item.id === id);
        const modalRef = this.modalService.open(EditTaskModalComponent);
        modalRef.componentInstance.item = item;
        modalRef.result.then((result) => {
          if (result) {
            this.libraryService.putTask(id, result).subscribe(() => {
              this.getItensLibrary();
            });
          }
        });
      }

}