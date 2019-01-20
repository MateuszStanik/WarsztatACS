import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
    `.footer {
      background-color: #07324f;
      color: #fff;
      padding: 1.5rem;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      margin-top: 50px;
      /*position:relative;*/
    }
    .has-text-centered {
      text-align: center;
    }`
  ]
})

export class FooterComponent {
  constructor() {
  }
}
