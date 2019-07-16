import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomePagePartComponent } from './home-page-part/home-page-part.component';
import { SearchPagePartComponent } from './search-page-part/search-page-part.component';
import { UserDetailPartComponent } from './user-detail-part/user-detail-part.component';
import { UserPreviewPartComponent } from './user-preview-part/user-preview-part.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePagePartComponent,
    SearchPagePartComponent,
    UserDetailPartComponent,
    UserPreviewPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
