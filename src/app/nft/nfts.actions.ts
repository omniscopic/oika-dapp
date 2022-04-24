import { createAction, props } from '@ngrx/store';
import { Contract } from './nfts.interface';

export const loadContract = createAction('[Nfts] Load Contract', props<{ contractAddr: string }>());

export const loadContractSuccess = createAction(
  '[Nfts] Load Contract Success',
  props<{ contract: Contract }>()
);

export const loadContractFailure = createAction(
  '[Nfts] Load Contract Failure',
  props<{ error: any }>()
);
