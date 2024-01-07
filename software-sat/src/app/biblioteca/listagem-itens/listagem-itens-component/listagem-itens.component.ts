import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BibliotecaService } from '../../service/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditarItemModalComponent } from '../../editar-item-modal-component/editar-item-modal.component';

@Component({
    selector: 'app-listagem-itens',
    templateUrl: './listagem-itens.component.html',
    styleUrls: ['./listagem-itens.component.scss']
})
export class ListagemItensComponent implements OnInit {

    itensLibrary!: any
    form!: FormGroup;

    constructor(
        private router: Router,
        private libraryService: BibliotecaService,
        private formBuilder: FormBuilder,
        private modalService: NgbModal
        ) {}

    ngOnInit() {
       this.getItensLibrary()
       this.initForm()
    }


    private initForm() {
        this.form = this.formBuilder.group({
            name: ["", [Validators.required]],
            description: ["", [Validators.required]],
            category: ["", [Validators.required]]
        })
    }

    redirecionarParaCriarProdutos() {
        this.router.navigate(['/create-product']);
      }

      redirecionarParaHome() {
        this.router.navigate(['/home']);
      }

    getItensLibrary(){
        this.libraryService.buscarProdutos().subscribe((item: any) => {
            console.log(item, `teste`)
            this.itensLibrary = item
            let aa = Object.values(this.itensLibrary)
            console.log(aa)
            console.log(this.itensLibrary,`cristian`)
        })
    }

    deleteItem(id: string): void{
        console.log(id)
        this.libraryService.deletarProdutos(id).subscribe()
    }

    // putItem(id: string): void {
    //     const newItem = {
    //         name: this.form.controls.name.value,
    //         description: this.form.controls.description.value,
    //         category: this.form.controls.category.value,
    //     }

    //     this.libraryService.atualizarProdutos(id, newItem)
    // }

    putItem(id: string): void {
        // Obtenha o item com base no ID (use o método adequado)
        const item = this.itensLibrary.find((item: any) => item.id === id);
      
        // Abra o modal
        const modalRef = this.modalService.open(EditarItemModalComponent);
        modalRef.componentInstance.item = item;
      
        // Assine o evento de fechamento do modal
        modalRef.result.then((result) => {
          if (result) {
            // Atualize o item com as alterações
            this.libraryService.atualizarProdutos(id, result).subscribe(() => {
              // Atualize a lista de itens após salvar as alterações
              this.getItensLibrary();
            });
          }
        });
      }

}