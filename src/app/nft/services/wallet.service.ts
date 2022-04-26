import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setAccountAddress, setNetworkName } from '../wallet.actions';

import { NotificationService } from '../../services/notifications/notification.service';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';

const CHAIN_ID = 'regen-1';
const RPC_ENDPOINT = 'http://public-rpc.regen.vitwit.com:26657';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private wallet: any;

  constructor(private store: Store,
    private notificationService: NotificationService) {
  }

  public async connectWallet() {
    if (!(window as any).keplr) {
      throw new Error('Keplr is not supported or installed on this browser!');
    }

    await (window as any).keplr.enable(CHAIN_ID);

    const offlineSigner = (window as any).keplr.getOfflineSigner(CHAIN_ID);

    const accounts = await offlineSigner.getAccounts();
    this.store.dispatch(setAccountAddress({ accountAddress: accounts[0].address }));

    // FIXME: Generates CORS error
    // const cosmJS = SigningCosmWasmClient.connectWithSigner(
    //     RPC_ENDPOINT,
    //     accounts[0].address,
    //     offlineSigner,
    // );

    // this.store.dispatch(setNetworkName({ networkName }));

  }
}
