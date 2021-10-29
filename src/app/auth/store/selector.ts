import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { auth } from "./reducer";

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>(auth)

export const isSubmittingSelector =
  createSelector(
    authFeatureSelector,
    (authStateInterface: AuthStateInterface) => authStateInterface.isSubmitting
  )

export const validationErrorSelector =
  createSelector(
    authFeatureSelector,
    (authStateInterface: AuthStateInterface) => authStateInterface.validationErrors
  )

export const IsLoggedInSelector =
  createSelector(
    authFeatureSelector,
    (authStateInterface: AuthStateInterface) => authStateInterface.isLoggedIn
  )

export const IsAnonimousSelector =
  createSelector(
    authFeatureSelector,
    (authStateInterface: AuthStateInterface) => authStateInterface.isLoggedIn == false
  )


export const CurrentUserSelector =
  createSelector(
    authFeatureSelector,
    (authStateInterface: AuthStateInterface) => authStateInterface.currentUser
  )
