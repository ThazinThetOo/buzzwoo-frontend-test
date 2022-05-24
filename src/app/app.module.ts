import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';  
// import { LandingpageComponent } from './landingpage/landingpage.component';
import { QuestiosComponent } from './questios/questios.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultpageComponent } from './resultpage/resultpage.component';
import { CountdownModule } from 'ngx-countdown';
import { NgxLoadingModule } from 'ngx-loading';
import { SessionModalComponent } from './questios/modal/session.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// const routes: Routes = [
//   {
//     path: '',
//     component: LandingpageComponent
//   }
// ];
// const routes: Routes = [
//   { path: '', redirectTo: '/LandingpageComponent', pathMatch: 'full' },
//   // { path: 'question', component: QuestiosComponent },

// ];

@NgModule({
  declarations: [
    AppComponent,
    // LandingpageComponent,
    QuestiosComponent,
    ResultpageComponent,
    SessionModalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CountdownModule,
    NgxLoadingModule.forRoot({}),
    BrowserAnimationsModule
  ],
  entryComponents: [
    SessionModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
