import { createAction, props } from '@ngrx/store';

export const setNetworkName = createAction('[Wallet] Set Network Name',  props<{ networkName: string }>());
export const setAccountAddress = createAction('[Wallet] Set Account Address',  props<{ accountAddress: string }>());
export const logoutUser = createAction('[Wallet] Logout Request');
