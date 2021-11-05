import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { TopBarModule } from './shared/modules/topBar/topBar.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment'; // Angular CLI environment
import { EffectsModule } from '@ngrx/effects';
import { PersistanceService } from './shared/services/persistance.service';
import { AuthInterceptor } from './shared/services/authInterceptor.service';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { GlobalFeedModule } from './view/globalFeed/globalFeed.module';
import { YourFeedModule } from './view/yourFeed/yourFeed.module';
import { TagFeedModule } from './view/tagFeed/tagFeed.module';
import { ArticleModule } from './view/article/article.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    ArticleModule,
    StoreModule.forRoot({ router: routerReducer }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    })
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
