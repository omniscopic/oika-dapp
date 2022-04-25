import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { environment } from '../environments/environment';

import { initStateFromLocalStorage } from './reducers/meta-reducers/init-state-from-local-storage.reducer';
import { debug } from './reducers/meta-reducers/debug.reducer';
import { RouterStateUrl } from './services/router/router.state';
import { settingsReducer } from './reducers/settings/settings.reducer';
import { SettingsState } from './reducers/settings/settings.model';

export const reducers: ActionReducerMap<AppState> = {
  settings: settingsReducer,
  router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage
];

if (!environment.production) {
  if (!environment.test) {
    metaReducers.unshift(debug);
  }
}

export const selectSettingsState =
  createFeatureSelector<SettingsState>('settings');

export const selectRouterState =
  createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export interface AppState {
  settings: SettingsState;
  router: RouterReducerState<RouterStateUrl>;
}
