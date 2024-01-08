import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BibliotecaService } from '../../service/service.service';
import { AppModule } from '../../../app.module';
import { finalize } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styleUrls: ['./create-task.component.scss']
})

export class CreateTaskComponent implements OnInit {
    
    form!: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private bibliotecaService: BibliotecaService,
        private appModule: AppModule,
        private spinner: NgxSpinnerService
        ) {
    }

    ngOnInit(): void {
        this.initForm()
    }

    private initForm(): void {
        this.form = this.formBuilder.group({
            name: ["", [Validators.required]],
            description: ["", [Validators.required]],
            category: ["", [Validators.required]]
        })
    }

    public createItem(): void{
        const filtro = {
            name: this.form.controls.name.value,
            description: this.form.controls.description.value,
            category: this.form.controls.category.value,
            id:  this.appModule.generateUniqueId()
        }
        this.spinner.show()
        this.bibliotecaService.createTask(filtro).pipe(finalize(() => {
            this.spinner.hide()
            this.goTasks()
          })).subscribe()
        
    }

    goTasks(): void {
        this.router.navigate(['/get-tasks']);
    }

    goHome(): void {
        this.router.navigate(['/home']);
    }
    
}