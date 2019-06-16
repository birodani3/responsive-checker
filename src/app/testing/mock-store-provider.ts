import { provideMockStore } from '@ngrx/store/testing';

export const MockStoreProvider = provideMockStore({ initialState: { appState: {} }});
