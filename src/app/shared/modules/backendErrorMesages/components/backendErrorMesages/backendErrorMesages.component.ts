import { Component, Input, OnInit } from "@angular/core";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backendErrorMesages.component.html',
  styleUrls: ['./backendErrorMesages.component.scss']
})
export class BackendErrorMesagesComponent implements OnInit {

  @Input("backendErrors") backendErrorsProps: BackendErrorsInterface;

  errorMesages: string[]

  ngOnInit(): void {
    this.errorMesages = Object.keys(this.backendErrorsProps)
      .map((name: string) => {
        const mesages = this.backendErrorsProps[name].join(', ');

        return `${name} ${mesages}`
      })
  }
}
