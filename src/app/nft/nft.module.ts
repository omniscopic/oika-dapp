import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcologicalStateChartComponent } from './charts/ecological-state-chart/ecological-state-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { NftsEffects } from './nfts.effects';

import { NFTListRoutingModule } from './nft-routing.module';
import { NftComponent } from './nft/nft.component';
import { NftPriceComponent } from './charts/nft-price/nft-price.component';
import { IncomeDistComponent } from './charts/income-dist/income-dist.component';

@NgModule({
  declarations: [EcologicalStateChartComponent, NftComponent, NftPriceComponent, IncomeDistComponent],
  imports: [
    CommonModule,
    NgChartsModule,
    EffectsModule.forFeature([NftsEffects]),
    NFTListRoutingModule,
    SharedModule
  ]
})
export class NftModule { }
