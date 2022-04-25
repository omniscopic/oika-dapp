import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';

import {
  loadContract,
  loadContractSuccess,
  loadContractFailure,
} from './nfts.actions';
import { NftService } from './services/nft.service';

@Injectable()
export class NftsEffects {
  loadNFTs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadContract),
      mergeMap((action) =>
        this.nftService.getContract(action.contractAddr).pipe(
          map((contract) => loadContractSuccess({ contract })),
          catchError((error) => of(loadContractFailure({ error })))
        )
      )
    )
  );

  constructor(private nftService: NftService, private actions$: Actions) {}
}
