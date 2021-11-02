import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction } from "./actions/getPopularTags.action";
import { PopularTagsStateInterface } from "../types/popularTagsState.interface";


const initialState: PopularTagsStateInterface = {
    data: null,
    error: null,
    isLoading: false
}

export const popularTags = 'popularTags';

export const popularTagsReducer = createReducer(
    initialState,
    on(
        getPopularTagsAction,
        (state): PopularTagsStateInterface => ({
            ...state,
            isLoading: true
        })
    ),
    on(
        getPopularTagsSuccessAction,
        (state, action): PopularTagsStateInterface => ({
            ...state,
            isLoading: false,
            data: action.popularTags
        })
    ),
    on(
        getPopularTagsFailureAction,
        (state): PopularTagsStateInterface => ({
            ...state,
            isLoading: false,
        })
    )
)
