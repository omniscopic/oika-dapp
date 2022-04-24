import * as fromNfts from './nfts.actions';

describe('loadNftss', () => {
  it('should return an action', () => {
    expect(fromNfts.loadNftss().type).toBe('[Nfts] Load Nftss');
  });
});
