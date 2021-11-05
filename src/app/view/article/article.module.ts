import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ErrorMesageModule } from "src/app/shared/modules/errorMesage/errorMesage.module";
import { LoadingModule } from "src/app/shared/modules/loading/loading.module";
import { TagListModule } from "src/app/shared/modules/tagList/tagList.module";
import { ArticleService, ArticleService as SharedArticleService } from "src/app/shared/services/article.service";
import { ArticleComponent } from "./components/article.component";
import { DeleteArticleEffect } from "./store/effects/deleteArticle.effect";
import { GetArticleEffect } from "./store/effects/getArticle.effect";
import { article, articleReducer } from "./store/reducer";

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ErrorMesageModule,
    LoadingModule,
    TagListModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature(article, articleReducer)
  ],
  declarations: [ArticleComponent],
  providers: [SharedArticleService, ArticleService]
})
export class ArticleModule { }

