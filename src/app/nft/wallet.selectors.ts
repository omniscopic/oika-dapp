import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action,
} from '@ngrx/store';
import * as fromWallet from './wallet.reducer';

export interface WalletState {
  wallet: fromWallet.State; // entity
}

export function walletReducers(state: WalletState | undefined, action: Action) {
  return combineReducers({
    wallet: fromWallet.reducer,
  })(state, action);
}

export const selectWalletState = createFeatureSelector<WalletState>('wallet');

export const selectNetworkName = createSelector(
  selectWalletState,
  (state) => state.wallet.networkName
);

export const selectAccountAddress = createSelector(
  selectWalletState,
    (state) => state.wallet.accountAddress
);

