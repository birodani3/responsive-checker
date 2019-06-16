import { createSelector, createFeatureSelector } from '@ngrx/store';

import { Dimensions, Orientation } from '@models';
import { AppState } from '@store';

export const selectAppState = createFeatureSelector<AppState>('appState');
export const selectUrl = createSelector(selectAppState, state => state.url);
export const selectLanguage = createSelector(selectAppState, state => state.language);
export const selectDimensions = createSelector<AppState, AppState, Dimensions>(
    selectAppState,
    (state: AppState) => {
        return state.orientation === Orientation.Horizontal
            ? { width: state.width, height: state.height }
            : { width: state.height, height: state.width };
    }
);
