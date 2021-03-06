import { Orientation, Language } from '@models';
import { environment } from '@environment';

export const initialState: AppState = {
    url: null,
    width: environment.defaultWidth,
    height: environment.defaultHeight,
    orientation: Orientation.Horizontal,
    language: <Language>navigator.language.substr(0, 2)
};

export interface AppState {
    url: string;
    width: number;
    height: number;
    language: Language;
    orientation: Orientation;
}
