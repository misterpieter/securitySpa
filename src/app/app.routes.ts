import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { ApiComponent } from './api/api.component';
import { CallbackComponent } from './callback/callback.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home' , pathMatch: 'full'},
  { path: 'api', component: ApiComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', component: NotFoundComponent }
];
