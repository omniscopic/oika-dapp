import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.state';
import { WalletService } from './nft/services/wallet.service';
import { selectAccountAddress, selectNetworkName } from './nft/wallet.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oika-dapp';

  accountAddress$: Observable<string> | undefined;
  networkName$: Observable<string> | undefined;

  constructor(
    private store: Store<AppState>,
    private walletService: WalletService
  ) {}

  ngOnInit(): void {
    this.accountAddress$ = this.store.pipe(select(selectAccountAddress));
    this.networkName$ = this.store.pipe(select(selectNetworkName));
  }

  connectWallet() {
    this.walletService.connectWallet();
  }
}
