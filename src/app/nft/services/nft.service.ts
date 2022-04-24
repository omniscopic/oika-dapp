import { Injectable } from '@angular/core';
import {
  Contract,
  RoyaltyInfoResponse,
  NFT,
  Attribute,
} from '../nfts.interface';
import { Observable, map } from 'rxjs';

// create a new contract
export const createContract = (): Contract => ({
  id: 1,
  creator: 'stars1...',
  description: 'oika',
  image: 'imagerul',
  externalLink: 'http://oika.com',
});

@Injectable({
  providedIn: 'root',
})
export class NftService {
  constructor() {}

  getContract(contractAddress: string): Observable<Contract> {
    return new Observable((observer) => {
      observer.next(createContract());
      observer.complete();
    });
  }
}
