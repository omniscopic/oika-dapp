/* eslint-disable @typescript-eslint/naming-convention */
export interface Contract {
  creator: string,
  address: string,
  codeId: number;
  admin: string | undefined;
  label: string;
  ibcPortId: string | undefined;
}

export interface RoyaltyInfoResponse {
  payment_address: string,
  share: number,
}

export interface NFT {
  // Contract fields
  id: number;
  owner: string; // access.owner
  metadataHash: string; // info.token_uri

  // Metadata fields
  name?: string; // name
  description?: string; // description
  image?: string; // image
  imageHash?: string; // image
  animationURL?: string; // animationURL
  attributes?: Attribute[]; // attributes [trait_type, value]
  external_url?: string; // external_url
}

export interface Attribute {
  traitType: string;
  value: string;
}


