import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AuthPageComponent from './pages/auth/auth-page.component';

const routes: Routes = [{
  path: '',
  component: AuthPageComponent
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export default class AuthRoutingModule { }
