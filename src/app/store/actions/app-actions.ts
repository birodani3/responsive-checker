import { props, createAction } from '@ngrx/store';

import { Dimensions, Language } from '@models';
import { AppState } from '@store';

export enum AppAction {
    URL_CHANGE = '[App] Url Change Action',
    DIMENSIONS_CHANGE = '[App] Dimensions Change Action',
    ROTATE_SCREEN = '[App] Rotate Screen Action',
    SAVE_STATE_TO_STORAGE = '[App] Save State To Storage Action',
    RESTORE_STATE = '[App] Restore State Action',
    LANGUAGE_CHANGE = '[App] Language Change Action'
}

export const urlChangeAction = createAction(
    AppAction.URL_CHANGE,
    props<{ url: string }>()
);

export const dimensionsChangeAction = createAction(
    AppAction.DIMENSIONS_CHANGE,
    props<{ dimensions: Dimensions }>()
);

export const rotateScreenAction = createAction(
    AppAction.ROTATE_SCREEN
);

export const saveStateToStorageAction = createAction(
    AppAction.SAVE_STATE_TO_STORAGE
);

export const languageChangeAction = createAction(
    AppAction.LANGUAGE_CHANGE,
    props<{ language: Language }>()
);

export const restoreStateAction = createAction(
    AppAction.RESTORE_STATE,
    props<{ newState: AppState }>()
);
