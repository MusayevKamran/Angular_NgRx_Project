import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ArticleStateInterface } from "../types/articleState.inteface";
import { article } from "./reducer";


export const articleFeatureSelector = createFeatureSelector<ArticleStateInterface>(article)

export const isLoadingSelector =
  createSelector(
    articleFeatureSelector,
    (articleStateInterface: ArticleStateInterface) => articleStateInterface.isLoading
  )

export const errorSelector =
  createSelector(
    articleFeatureSelector,
    (articleStateInterface: ArticleStateInterface) => articleStateInterface.error
  )

export const articleSelector =
  createSelector(
    articleFeatureSelector,
    (articleStateInterface: ArticleStateInterface) => articleStateInterface.data
  )
