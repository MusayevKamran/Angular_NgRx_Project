import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { GetPopularTagsEffect } from "./store/effects/getPopularTags.effect";
import { PopularTagsService } from "./services/popularTags.service";
import { popularTags, popularTagsReducer } from "./store/reducer";
import { PopularTagsComponent } from "./components/popularTags/popularTags.component";
import { RouterModule } from "@angular/router";
import { LoadingModule } from "../loading/loading.module";
import { ErrorMesageModule } from "../errorMesage/errorMesage.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LoadingModule,
        ErrorMesageModule,
        StoreModule.forFeature(popularTags, popularTagsReducer),
        EffectsModule.forFeature([GetPopularTagsEffect])
    ],
    exports: [
        PopularTagsComponent
    ],
    declarations: [
        PopularTagsComponent
    ],
    providers: [PopularTagsService]
})
export class PopularTagsModule {}