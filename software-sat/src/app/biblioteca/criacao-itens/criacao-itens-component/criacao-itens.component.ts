import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: "app-criacao-itens",
    templateUrl: "./criacao-itens.component.html",
    styleUrls: ["./criacao-itens.component.scss"]
})

export class CriacaoItens implements OnInit {
    
    dadosParaCriacao = []

    ngOnInit(): void {
        this.teste()
    }

    teste(){
    }



}