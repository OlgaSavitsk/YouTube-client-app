import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import AuthGuard from '@core/guards/auth.guard';
import NotFoundComponent from '@core/pages/not-found/not-found.component';
import { Path } from './app.constants';

const routes: Routes = [
  { path: '', redirectTo: Path.loginPage, pathMatch: 'full' },
  {
    path: Path.loginPage,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: Path.searchPage,
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canLoad: [AuthGuard],
  },
  {
    path: Path.adminPage,
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
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
