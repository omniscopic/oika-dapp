import { Action, createReducer, on } from '@ngrx/store';
import * as WalletActions from './wallet.actions';

export const walletFeatureKey = 'wallet';

export interface State {
  networkName: string;
  accountAddress: string;
}

export const initialState: State = {
  networkName: '',
  accountAddress: ''
};

export const reducer = createReducer(
  initialState,
  on(WalletActions.setAccountAddress, (state, { accountAddress }) => ({ ...state, accountAddress })),
  on(WalletActions.setNetworkName, (state, { networkName }) => ({ ...state, networkName })),
  on(WalletActions.logoutUser, (state) => ({...initialState})),
);

export function walletReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
