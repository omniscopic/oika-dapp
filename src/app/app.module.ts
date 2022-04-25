import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';

import { AppEffects } from './app.effects';

import { StoreRouterConnectingModule,
         RouterStateSerializer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from '@angular/common/http'

import { environment } from '../environments/environment';

import {
  AppState,
  reducers,
  metaReducers,
  selectRouterState
} from './app.state';
import { TitleService } from './services/title/title.service';
import {
  ROUTE_ANIMATIONS_ELEMENTS,
  routeAnimations
} from './services/animations/route.animations';
import { AnimationsService } from './services/animations/animations.service';
import { AppErrorHandler } from './services/error-handler/app-error-handler.service';
import { CustomSerializer } from './services/router/custom-serializer';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { HttpErrorInterceptor } from './services/http-interceptors/http-error.interceptor';
import { NotificationService } from './services/notifications/notification.service';

import {
  selectSettingsLanguage,
  selectEffectiveTheme,
  selectSettingsStickyHeader
} from './reducers/settings/settings.selectors';
import { SettingsEffects } from './reducers/settings/settings.effects';

import { NftsEffects } from './nft/nfts.effects';
import { nftsReducers } from './nft/nfts.reducer';


export {
  TitleService,
  routeAnimations,
  AppState,
  LocalStorageService,
  ROUTE_ANIMATIONS_ELEMENTS,
  AnimationsService,
  selectRouterState,
  NotificationService,
  selectEffectiveTheme,
  selectSettingsLanguage,
  selectSettingsStickyHeader
};

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/`,
    '.json'
  );
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // shared
    SharedModule,

    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forFeature('nfts', nftsReducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [{
      name: 'NFTs'
    }],
    EffectsModule.forRoot([SettingsEffects, AppEffects, NftsEffects]),

    // 3rd party
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
