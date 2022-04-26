import { Action, createReducer, on } from '@ngrx/store';
import { Contract, NFT } from './nfts.interface';
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import * as NFTSActions from './nfts.actions';
import * as fromRoot from '../reducers';

export const nftsFeatureKey = 'nfts';

// extend the AppState to include the nfts state
export interface State extends fromRoot.AppState {
  nfts: NFTsState;
}

export interface NFTsState {
  cosmWasmClient: CosmWasmClient | null;
  contract: Contract | null;
  token: NFT | null;
}

export const initialState: NFTsState = {
  cosmWasmClient: null,
  contract: null,
  token: null
};

export const reducer = createReducer(
  initialState,
  on(
    NFTSActions.loadCosmWasmSuccess,
    NFTSActions.loadContractSuccess,
    NFTSActions.loadTokenSuccess,
    (state, action) =>
     ({ ...state, ...action })
  ),
);

export function nftsReducers(state: NFTsState | undefined, action: Action) {
  return reducer(state, action);
}
