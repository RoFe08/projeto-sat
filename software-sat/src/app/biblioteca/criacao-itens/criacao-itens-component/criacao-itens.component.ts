import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BibliotecaService } from '../../service/service.service';
import { AppModule } from '../../../app.module';
import { finalize } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
    selector: 'app-criacao-itens',
    templateUrl: './criacao-itens.component.html',
    styleUrls: ['./criacao-itens.component.scss']
})

export class CriacaoItensComponent implements OnInit {
    
    form!: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private bibliotecaService: BibliotecaService,
        private appModule: AppModule,
        private spinner: NgxSpinnerService
        ) {
    }

    ngOnInit() {
        this.initForm()
    }

    private initForm() {
        this.form = this.formBuilder.group({
            name: ["", [Validators.required]],
            description: ["", [Validators.required]],
            category: ["", [Validators.required]]
        })
    }



    public createItem(){
        const filtro = {
            name: this.form.controls.name.value,
            description: this.form.controls.description.value,
            category: this.form.controls.category.value,
            id:  this.appModule.generateUniqueId()
        }
        this.spinner.show()
        this.bibliotecaService.criarProdutos(filtro).pipe(finalize(() => {
            this.spinner.hide()
            this.redirecionarParaVerProdutos()
          })).subscribe()
        
    }

    redirecionarParaVerProdutos() {
        this.router.navigate(['/get-itens']);
      }

      redirecionarParaHome() {
        this.router.navigate(['/home']);
      }
    
}