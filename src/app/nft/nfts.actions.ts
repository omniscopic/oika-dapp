import { createAction, props } from '@ngrx/store';

export const loadNftss = createAction(
  '[Nfts] Load Nftss'
);

export const loadNftssSuccess = createAction(
  '[Nfts] Load Nftss Success',
  props<{ data: any }>()
);

export const loadNftssFailure = createAction(
  '[Nfts] Load Nftss Failure',
  props<{ error: any }>()
);
