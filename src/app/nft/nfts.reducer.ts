import { Action, combineReducers, createReducer, on } from '@ngrx/store';
import { Contract } from './nfts.interface';
import * as NFTSActions from './nfts.actions';
import * as fromRoot from '../reducers';

export const nftsFeatureKey = 'nfts';

// extend the AppState to include the nfts state
export interface State extends fromRoot.AppState {
  nfts: NFTsState;
}

export interface NFTsState {
  contract: Contract | null;
}

export const initialState: NFTsState = {
  contract: null
};

export const reducer = createReducer(
  initialState,
  on(
    NFTSActions.loadContractSuccess,
    (state, action) =>
     ({ ...state, ...action })
  ),
);

export function nftsReducers(state: NFTsState | undefined, action: Action) {
  return reducer(state, action);
}
