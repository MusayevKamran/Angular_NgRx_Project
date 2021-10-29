import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { BackendErrorModule } from "../shared/modules/backendErrorMesages/backendErrorMessages.module";
import { PersistanceService } from "../shared/services/persistance.service";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { AuthService } from "./services/auth.service";
import { GetCurrentUserEffect } from "./store/effects/getCurrentUser.effect";
import { LoginEffect } from "./store/effects/login.effect";
import { RegisterEffect } from "./store/effects/register.effect";
import { authReducer, auth } from "./store/reducer";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(auth, authReducer),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect]),
    ReactiveFormsModule,
    BackendErrorModule
  ],
  providers: [AuthService, PersistanceService],
  declarations: [RegisterComponent, LoginComponent]
})
export class AuthModule { }
