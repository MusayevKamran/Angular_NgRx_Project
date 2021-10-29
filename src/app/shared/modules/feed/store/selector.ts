import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FeedStateInterface } from "../types/feedState.inteface";
import { feed } from "./reducer";


export const feedFeatureSelector = createFeatureSelector<FeedStateInterface>(feed)

export const isLoadingSelector =
  createSelector(
    feedFeatureSelector,
    (feedStateInterface: FeedStateInterface) => feedStateInterface.isLoading
  )

export const errorSelector =
  createSelector(
    feedFeatureSelector,
    (feedStateInterface: FeedStateInterface) => feedStateInterface.error
  )

export const feedSelector =
  createSelector(
    feedFeatureSelector,
    (feedStateInterface: FeedStateInterface) => feedStateInterface.data
  )
