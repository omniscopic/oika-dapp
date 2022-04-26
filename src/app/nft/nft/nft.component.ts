import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as NFTSActions from '../nfts.actions';
import { Contract } from '../nfts.interface';
import * as fromNFTs from '../nfts.selectors';
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';

export interface DistributionItem {
  artist: string;
  habitat: string;
  oika: boolean;
  startprice: number;
}

const DISTRIBUTION_DATA: DistributionItem[] = [
  {artist: 'Rita Leduc', habitat: 'forest', oika: true, startprice: 200.00},
];

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss']
})
export class NftComponent implements OnInit, OnDestroy {
  id = 0;
  idSub: any;
  displayedColumns: string[] = ['artist', 'habitat', 'oika', 'startprice'];
  dataSource = DISTRIBUTION_DATA;

  contract$: Observable<Contract | null> | undefined;
  cosmWasmClient$: Observable<CosmWasmClient | null> | undefined;
  token$: Observable<string> | undefined;

  constructor(public route: ActivatedRoute,
    private store: Store) { }

  ngOnDestroy(): void {
    // avoid memory leaks here by unsubscribing
    this.idSub.unsubscribe();
  }

  ngOnInit(): void {
    const idSub = this.route.params.subscribe(params => {
      this.id = params['id'] as number;
    })

    // FIXME:
    const CONTRACT_ADDR = 'stars1yw4xvtc43me9scqfr2jr2gzvcxd3a9y4eq7gaukreugw2yd2f8tssqyvcm';

    this.store.dispatch(NFTSActions.loadCosmWasm());
    this.cosmWasmClient$ = this.store.pipe(select(fromNFTs.selectCosmWasmClient));
    this.cosmWasmClient$.subscribe(cosmWasmClient => {
      if (cosmWasmClient) {
        this.store.dispatch(NFTSActions.loadContract({ cosmWasmClient, contractAddr: CONTRACT_ADDR }));
        this.contract$ = this.store.pipe(select(fromNFTs.selectContract));

        this.store.dispatch(NFTSActions.loadToken({ cosmWasmClient, contractAddr: CONTRACT_ADDR, tokenId: this.id }));
        this.token$ = this.store.pipe(select(fromNFTs.selectToken));
      }
    });

  }

}
