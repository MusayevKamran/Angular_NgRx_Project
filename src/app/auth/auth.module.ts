import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { RegisterComponent } from "./components/register/register.component";
import { AuthService } from "./services/auth.service";
import { authReducer, auth } from "./store/reducer";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(auth, authReducer),
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  declarations: [RegisterComponent]
})
export class AuthModule { }
