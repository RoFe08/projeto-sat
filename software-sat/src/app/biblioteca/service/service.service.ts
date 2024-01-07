import { ErrorHandler, Injectable } from "@angular/core";
import { environment } from "../../../environment/environment";
import { Observable, catchError } from "rxjs";
import { ItemDto } from "../dto/item.dto";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class BibliotecaService {
    protected getUrl(): string {
        return `${environment.urlApi}`
    }

    constructor(public http: HttpClient){}
    
    buscarProdutos(): any{
        return this.http.get(`${this.getUrl()}/get`)
    }

    atualizarProdutos(idProduct: string, product: any): any {
        return this.http.put(`${this.getUrl()}/put/${idProduct}`, product)
    }

    deletarProdutos(idItem: string): any {
        return this.http.delete(`${this.getUrl()}/delete/${idItem}`)
    }

    criarProdutos(product: any): any {
        return this.http.post(`${this.getUrl()}/create`, product)
    }
}