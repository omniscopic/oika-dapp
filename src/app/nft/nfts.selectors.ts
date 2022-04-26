import { createFeatureSelector, createSelector } from '@ngrx/store';
import { nftsFeatureKey, NFTsState } from './nfts.reducer';

export const selectNFTsState =
  createFeatureSelector<NFTsState>(nftsFeatureKey);

export const selectNFTs = createSelector(
  selectNFTsState,
  (state: NFTsState) => state
);

export const selectContract = createSelector(
  selectNFTs,
  (state: NFTsState) => state.contract
);

export const selectCosmWasmClient = createSelector(
  selectNFTs,
  (state: NFTsState) => state.cosmWasmClient
);

export const selectToken = createSelector(
  selectNFTs,
  (state: NFTsState) => state.token
);

