import { Component } from "@angular/core";

@Component({
  selector: 'app-success-alert',
  template: `
<p>This is a success alert component!!!!</p>`,
  styles: [
    `p {
      border: 2px solid green;
      padding: 10px;
      margin: 10px;
      background-color: palegreen;
    }`
  ]
})
export class SucessAlertComponent {
}
