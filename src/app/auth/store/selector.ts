import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { auth } from "./reducer";

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>(auth)

export const isSubmittingSelector =
  createSelector(
    authFeatureSelector,
    (authStateInterface: AuthStateInterface) => authStateInterface.isSubmitting)
