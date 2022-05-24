import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestiosComponent } from './questios/questios.component';
import { ResultpageComponent } from './resultpage/resultpage.component'
// const routes: Routes = [];
// const routes: Routes = [

//   // { path: '', redirectTo: '/hero', pathMatch: 'full' },
//   // { path: 'question', component: QuestiosComponent },
//   // { path: "", loadChildren: () => import("./landingpage/landingpage.module").then(m => m.LandingPageModule) },
//   // { path: 'hero', component: HeroComponent }
// ];
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landingpage/landingpage.module').then(m => m.LandingPageModule)
  },
  { path: 'question', component: QuestiosComponent },
  { path: 'result', component: ResultpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
