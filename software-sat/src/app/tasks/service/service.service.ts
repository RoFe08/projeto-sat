import { Injectable } from "@angular/core";
import { environment } from "../../../environment/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class BibliotecaService {
    protected getUrl(): string {
        return `${environment.urlApi}`
    }

    constructor(public http: HttpClient){}
    
    getTask(): any{
        return this.http.get(`${this.getUrl()}/get`)
    }

    putTask(idTask: string, task: any): any {
        return this.http.put(`${this.getUrl()}/put/${idTask}`, task)
    }

    deleteTask(idTask: string): any {
        return this.http.delete(`${this.getUrl()}/delete/${idTask}`)
    }

    createTask(task: any): any {
        return this.http.post(`${this.getUrl()}/create`, task)
    }
}