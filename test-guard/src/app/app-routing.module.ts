import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DemoImageComponent} from "./demo-image/demo-image.component";
import {AuthGuard} from "./auth.guard";
import {DemoGuardComponent} from "./demo-guard/demo-guard.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'images', component: DemoImageComponent, canActivate: [AuthGuard]},
  {path: 'login', component: DemoGuardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
