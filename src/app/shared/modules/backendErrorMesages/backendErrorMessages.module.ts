import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BackendErrorMesagesComponent } from "./components/backendErrorMesages/backendErrorMesages.component";

@NgModule({
  imports: [CommonModule],
  declarations: [BackendErrorMesagesComponent],
  exports: [BackendErrorMesagesComponent]
})
export class BackendErrorModule {

}
