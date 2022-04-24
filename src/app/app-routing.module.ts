import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nfts/1',
    pathMatch: 'full'
  },
  {
    path: 'nfts',
    loadChildren: () =>
      import('./nft/nft.module').then(
        (m) => m.NftModule
      )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
