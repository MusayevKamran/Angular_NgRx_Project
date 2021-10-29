import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-error-message',
  templateUrl: './errorMesage.component.html',
  styleUrls: ['./errorMesage.component.scss']
})
export class ErrorMesageComponent {
  @Input('message') messageProps: string = 'Something went wrong'
}
