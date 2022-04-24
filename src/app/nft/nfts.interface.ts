/* eslint-disable @typescript-eslint/naming-convention */
export interface Contract {
  id: number;
  creator: string;
  description: string;
  image: string;
  externalLink: string;
  royaltyInfo?: RoyaltyInfoResponse
}

export interface RoyaltyInfoResponse {
  payment_address: string,
  share: number,
}

export interface NFT {
  id: number;
  data: string;
  name: string;
  tokenId?: string;
  description: string;
  imageHash?: string;
  metadataHash: string;
  animationURL: string;
  attributes?: Attribute[];
  image?: string;
  external_url?: string;
  owner: string;
  isFrozen: boolean;
}

export interface Attribute {
  traitType: string;
  value: string;
}


