import { createAction, props } from '@ngrx/store';
import { Contract } from './nfts.interface';
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';

export const loadCosmWasm = createAction('[Nfts] Load CosmWasm');

export const loadCosmWasmSuccess = createAction(
  '[Nfts] Load CosmWasm Success',
  props<{ cosmWasmClient: CosmWasmClient }>()
);

export const loadCosmWasmFailure = createAction(
  '[Nfts] Load CosmWasm Failure',
  props<{ error: any }>()
);

export const loadContract = createAction('[Nfts] Load Contract', props<{ cosmWasmClient: CosmWasmClient, contractAddr: string }>());

export const loadContractSuccess = createAction(
  '[Nfts] Load Contract Success',
  props<{ contract: Contract }>()
);

export const loadContractFailure = createAction(
  '[Nfts] Load Contract Failure',
  props<{ error: any }>()
);

export const loadToken = createAction('[Nfts] Load Token', props<{ cosmWasmClient: CosmWasmClient, contractAddr: string, tokenId: number }>());

export const loadTokenSuccess = createAction(
  '[Nfts] Load Token Success',
  props<{ token: string }>()
);

export const loadTokenFailure = createAction(
  '[Nfts] Load Token Failure',
  props<{ error: any }>()
);
