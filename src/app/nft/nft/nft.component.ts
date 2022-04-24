import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(public route: ActivatedRoute) { }

  ngOnDestroy(): void {
    // avoid memory leaks here by unsubscribing
    this.idSub.unsubscribe();
  }

  ngOnInit(): void {
    const idSub = this.route.params.subscribe(params => {
      this.id = params['id'] as number;
    })
    console.log(this.id);
  }

}
