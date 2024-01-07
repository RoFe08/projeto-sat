import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor(private router: Router) {
        console.log('HomeComponent loaded');
    }

    ngOnInit() {
       
    }

    redirectToCreateProducts() {
        this.router.navigate(['/create-product']);
      }

      redirectToSeeProducts() {
        this.router.navigate(['/get-itens']);
      }

}