import { Injectable } from '@angular/core';
import {
  Contract, NFT
} from '../nfts.interface';
import { Observable, map, from } from 'rxjs';
import { Contract as CosmWasmContract, CosmWasmClient } from '@cosmjs/cosmwasm-stargate';
const RPC_ENDPOINT = 'https://rpc.double-double-1.stargaze-apis.com';

// create a token
export const createToken = (tokenId: number, tokenInfo: any): NFT => {
  console.log(tokenInfo);
  return ({
    id: tokenId,
    owner: tokenInfo['access']['owner'],
    metadataHash: tokenInfo['info']['token_uri'],
  })
};

// create a new contract
export const createContract = (cosmWasmContract: CosmWasmContract): Contract => ({
  creator: cosmWasmContract.creator,
  address: cosmWasmContract.address,
  codeId: cosmWasmContract.codeId,
  admin: cosmWasmContract.admin,
  label: cosmWasmContract.label,
  ibcPortId: cosmWasmContract.ibcPortId,
});

@Injectable({
  providedIn: 'root',
})
export class NftService {

  constructor() {
  }

  getCosmWasmClient(): Observable<CosmWasmClient> {
    console.log('getCosmWasmClient');
    return from(CosmWasmClient.connect(RPC_ENDPOINT));
  }

  getContract(cosmWasmClient: CosmWasmClient, contractAddress: string): Observable<Contract> {
    console.log('getContract', cosmWasmClient, contractAddress);
    return from(cosmWasmClient.getContract(contractAddress)).pipe(
      map(cosmWasmContract =>
        createContract(cosmWasmContract)
      )
    )
  }

  getToken(cosmWasmClient: CosmWasmClient, contractAddress: string, tokenId: number): Observable<NFT> {
    console.log('getToken', cosmWasmClient, contractAddress, tokenId);
    return from(cosmWasmClient.queryContractSmart(contractAddress, {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      all_nft_info: { 'token_id': `${tokenId.toString()}` },
    })).pipe(
      map(tokenInfo =>
        createToken(tokenId, tokenInfo)
      )
    )
  }

}
