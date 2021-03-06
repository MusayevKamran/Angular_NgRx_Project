import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { ArticleService } from "../../services/article.service";
import { deleteArticleAction, deleteArticleFailureAction, deleteArticleSuccessAction } from "../actions/deleteArticle.action";


@Injectable()
export class DeleteArticleEffect {
    deleteArticle$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteArticleAction),
            switchMap(({ slug }) => {
                return this.ArticleService.deleteArticle(slug).pipe(
                    map(() => {
                        return deleteArticleSuccessAction()
                    }),
                    catchError(() => {
                        return of(deleteArticleFailureAction())
                    })
                )
            })
        )
    )


    redirectAfterDelete$ = createEffect(
        () => this.actions$.pipe(
            ofType(deleteArticleSuccessAction),
            tap(() => {
                this.router.navigate(['/'])
            })
        )
    )
    constructor(
        private actions$: Actions,
        private ArticleService: ArticleService,
        private router: Router
    ) { }
}
