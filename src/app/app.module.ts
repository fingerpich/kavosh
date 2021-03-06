import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { DynamicProfileComponent } from './dynamic-profile/dynamic-profile.component';
import { RecentNewsComponent } from './dynamic-profile/last-news/last-news.component';
import { InfoBoxComponent } from './dynamic-profile/info-box/info-box.component';
import { RelatedBoxComponent } from './dynamic-profile/related-box/related-box.component';
import { RecentPostComponent } from './dynamic-profile/recent-post/recent-post.component';
@NgModule({
  declarations: [
    AppComponent,
    DynamicProfileComponent,
    RecentNewsComponent,
    InfoBoxComponent,
    RelatedBoxComponent,
    RecentPostComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
