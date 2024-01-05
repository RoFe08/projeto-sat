import { Injectable } from "@angular/core";
import { environment } from "../../../environment/environment";

@Injectable({
    providedIn: "root"
})

export class Service {
    protected getUrl(): string {
        return `${environment.urlApi}/service`
    }
    
    buscarProdutos(){
        
    }

    atualizarProdutos(id: string) {

    }

    deletarProdutos(id: string) {

    }

    criarProdutos(produto: any) {

    }
}