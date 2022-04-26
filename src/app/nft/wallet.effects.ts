import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

import { NotificationService } from '../services/notifications/notification.service';
import { WalletService } from './services/wallet.service';

import * as WalletActions from './wallet.actions';

@Injectable()
export class WalletEffects {

  constructor(private actions$: Actions,
    private store: Store,
    private walletService: WalletService,
    private notificationService: NotificationService) { }

}
