import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePagePartComponent } from './home-page-part/home-page-part.component';
import { SearchPagePartComponent } from './search-page-part/search-page-part.component';
import { UserDetailPartComponent } from './user-detail-part/user-detail-part.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'search', redirectTo: '/search/', pathMatch: 'full' },
  { path: 'home', component: HomePagePartComponent },
  { path: 'search/:term', component: SearchPagePartComponent },
  { path: 'user/:login', component: UserDetailPartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
