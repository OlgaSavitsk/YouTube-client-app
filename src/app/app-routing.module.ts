import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import AuthGuard from '@core/guards/auth.guard';
import NotFoundComponent from '@core/pages/not-found/not-found.component';
import { Paths } from './app.constants';

const routes: Routes = [
  { path: '', redirectTo: Paths.login, pathMatch: 'full' },
  {
    path: Paths.login,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: Paths.search,
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canLoad: [AuthGuard],
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
