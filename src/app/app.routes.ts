import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { DetailsComponent } from './pages/details.component';
import { FavoritesComponent } from './pages/favorites.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'MovieBox - Discover' },
  { path: 'movie/:id', component: DetailsComponent, title: 'MovieBox - Details' },
  { path: 'favorites', component: FavoritesComponent, title: 'MovieBox - My List' },
  { path: '**', redirectTo: '' },
];
