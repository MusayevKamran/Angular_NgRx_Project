import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { environment } from "src/environments/environment";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { AuthResponseInterface } from "../types/authResponse.interface";

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {

  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/'
    return this.httpClient.post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface) => response.user));
  }
}
