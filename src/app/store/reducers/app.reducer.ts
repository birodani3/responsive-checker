import { createReducer, on } from '@ngrx/store';

import { languageChangeAction, restoreStateAction, urlChangeAction, dimensionsChangeAction, rotateScreenAction } from '@store/actions';
import { AppState, initialState } from '@store/state';
import { Orientation } from '@models';

export const appReducer = createReducer<AppState>(
    initialState,
    on(restoreStateAction, (state, { newState }) => newState),
    on(languageChangeAction, (state, { language }) => ({ ...state, language })),
    on(urlChangeAction, (state, { url }) => ({ ...state, url })),
    on(dimensionsChangeAction, (state, { dimensions }) => ({ ...state, width: dimensions.width, height: dimensions.height })),
    on(rotateScreenAction, state => {
        const orientation = state.orientation === Orientation.Vertical ? Orientation.Horizontal : Orientation.Vertical;

        return { ...state, orientation };
    })
);
