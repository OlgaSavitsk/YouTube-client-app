import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AuthPageComponent from '@auth/pages/auth/auth-page.component';

import NotFoundComponent from '@core/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'search',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
