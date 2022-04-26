import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setAccountAddress, setNetworkName } from '../wallet.actions';

import { NotificationService } from '../../services/notifications/notification.service';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private wallet: any;
  // FIXME: setup Provider and Web3Modal
  // private provider: ethers.providers.Web3Provider;
  // private web3Modal: Web3Modal;

  constructor(private store: Store,
    private notificationService: NotificationService) {
    this.setupWeb3Modal();
  }

  public async connectWallet() {
    try {
      // FIXME: connect to wallet
      // this.wallet = await this.web3Modal.connect();
      // this.provider = new ethers.providers.Web3Provider(this.wallet, 'any');

      await this.updateChain();
      await this.updateAccount();

      this.setupListeners();
    }
    catch (e) {
      console.log(e);
    }
  }

  public clearProvider() {
    // this.web3Modal.clearCachedProvider();
  }

  private setupWeb3Modal(): void {
    const providerOptions = {};

    // this.web3Modal = new Web3Modal({
    //   network: 'mainnet',
    //   cacheProvider: true,
    //   providerOptions,
    // });
  }

  private setupListeners() {
    console.log('Setting up listeners');
    // this.wallet.on('accountsChanged', async (accounts: string[]) => {
    //   console.log('Accounts changed');
    //   await this.updateAccount();
    // });
    // this.wallet.on('chainChanged', async (chainId: number) => {
    //   console.log('Chain changed');
    //   await this.updateChain();
    // });
  }

  private async updateChain() {
    const [chainIdStr, networkName] = ['1', 'mainnet'];

    // FIXME: get network from the provider
    // const [chainIdStr, networkName] =await this.provider.getNetwork().then(network =>
    //   [network.chainId.toString(), network.name] as const
    // );

    this.store.dispatch(setNetworkName({ networkName }));
  }

  private async updateAccount() {
    // FIXME: get account from the provider
    // this.provider.listAccounts().then((res: any[]) => {
    //   const address = res[0];
    //   this.store.dispatch(setAccountAddress({ accountAddress: address }));
    // });

    // FIXME: Remove this
    this.store.dispatch(setAccountAddress({ accountAddress: '$regen' }));
  }

}
