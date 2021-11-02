import { Component, Input, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IsLoggedInSelector } from "src/app/auth/store/selector";

@Component({
    selector: 'app-feed-toggler',
    templateUrl: './feedToggler.component.html'
})
export class FeedTogglerComponent implements OnInit {
    @Input('tagName') tagNameProps: string | null

    isLoggedIn$: Observable<boolean>

    constructor(private store: Store) { }

    ngOnInit() {
        this.initializeValues()
    }

    initializeValues(): void {
        this.isLoggedIn$ = this.store.pipe(select(IsLoggedInSelector))
    }
}