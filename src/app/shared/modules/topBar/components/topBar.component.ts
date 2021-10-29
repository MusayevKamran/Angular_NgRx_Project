import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { CurrentUserSelector, IsAnonimousSelector, IsLoggedInSelector } from "src/app/auth/store/selector";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";

@Component({
  selector: 'app-top-bar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss']
})
export class TopBarComponent implements OnInit{
  isLoggedIn$: Observable<boolean>;
  isAnonimous$: Observable<boolean>;
  currentUser$: Observable<CurrentUserInterface | null>

  constructor(private store: Store){}

  ngOnInit(){
    this.isLoggedIn$ =  this.store.pipe(select(IsLoggedInSelector))
    this.isAnonimous$ =  this.store.pipe(select(IsAnonimousSelector))
    this.currentUser$ =  this.store.pipe(select(CurrentUserSelector))
  }
}

