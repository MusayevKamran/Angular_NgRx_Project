import { createFeatureSelector, createSelector } from "@ngrx/store"
import { PopularTagsStateInterface } from "../types/popularTagsState.interface"
import { popularTags } from "./reducer"

export const popularTagsFeatureSelector = createFeatureSelector<PopularTagsStateInterface>(popularTags)

export const isLoadingSelector =
    createSelector(
        popularTagsFeatureSelector,
        (popularTagsStateInterface: PopularTagsStateInterface) => popularTagsStateInterface.isLoading
    )

export const errorSelector =
    createSelector(
        popularTagsFeatureSelector,
        (popularTagsStateInterface: PopularTagsStateInterface) => popularTagsStateInterface.error
    )

export const popularTagsSelector =
    createSelector(
        popularTagsFeatureSelector,
        (popularTagsStateInterface: PopularTagsStateInterface) => popularTagsStateInterface.data
    )