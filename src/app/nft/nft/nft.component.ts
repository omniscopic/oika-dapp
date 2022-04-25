import { reducers } from './../../reducers/index';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as NFTSActions from '../nfts.actions';
import { Contract } from '../nfts.interface';
import * as fromNFTs from '../nfts.selectors';
import * as fromSettings from '../../reducers/settings/settings.selectors';

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
    const CONTRACT_ADDR = '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2b';

    this.store.dispatch(NFTSActions.loadContract({ contractAddr: CONTRACT_ADDR }));
    this.contract$ = this.store.pipe(select(fromNFTs.selectContract));

  }

}
