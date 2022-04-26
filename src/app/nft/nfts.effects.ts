import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';

import {
  loadContract,
  loadContractSuccess,
  loadContractFailure,
  loadCosmWasm,
  loadCosmWasmSuccess,
  loadCosmWasmFailure,
  loadToken,
  loadTokenSuccess,
  loadTokenFailure,
} from './nfts.actions';
import { NftService } from './services/nft.service';

@Injectable()
export class NftsEffects {
  loadCosmWasm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCosmWasm),
      switchMap((action) =>
        this.nftService.getCosmWasmClient().pipe(
          tap((cosmWasmClient) => console.log('CosmWasmClient loaded')),
          map((cosmWasmClient) => loadCosmWasmSuccess({ cosmWasmClient })),
          catchError((error) => of(loadCosmWasmFailure({ error })))
        )
      )
    )
  );

  loadCosmContract$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadContract),
      switchMap((action) =>
        this.nftService.getContract(action.cosmWasmClient, action.contractAddr).pipe(
          tap((contract) => console.log('contract loaded', contract)),
          map((contract) => loadContractSuccess({ contract })),
          catchError((error) => of(loadContractFailure({ error })))
        )
      )
    )
  );

  loadToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadToken),
      switchMap((action) =>
        this.nftService.getToken(action.cosmWasmClient, action.contractAddr, action.tokenId).pipe(
          tap((token) => console.log('token loaded', token)),
          map((token) => loadTokenSuccess({ token })),
          catchError((error) => of(loadTokenFailure({ error })))
        )
      )
    )
  );

  constructor(private nftService: NftService, private actions$: Actions) { }
}
