import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // A propriedade correta é styleUrls, não styleUrl
})
export class AppComponent {
  title = 'software-sat';
}