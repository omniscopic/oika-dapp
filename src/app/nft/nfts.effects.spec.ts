import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NftsEffects } from './nfts.effects';

describe('NftsEffects', () => {
  let actions$: Observable<any>;
  let effects: NftsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NftsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(NftsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
