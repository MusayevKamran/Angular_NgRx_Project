import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ErrorMesageComponent } from "./components/errorMesage.component";

@NgModule({
  imports: [CommonModule],
  exports: [ErrorMesageComponent],
  declarations: [
    ErrorMesageComponent
  ]
})
export class BannerModule { }
