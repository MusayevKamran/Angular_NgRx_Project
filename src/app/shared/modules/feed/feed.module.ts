import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { FeedComponent } from "./components/feed.component";
import { FeedService } from "./services/feed.service";
import { GetFeedEffect } from "./store/effects/getFeed.effect";
import { feed, feedReducer } from "./store/reducer";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EffectsModule.forFeature([
      GetFeedEffect
    ]),
    StoreModule.forFeature(feed, feedReducer)
  ],
  exports: [FeedComponent],
  declarations: [
    FeedComponent
  ],
  providers: [FeedService]
})
export class FeedModule { }

