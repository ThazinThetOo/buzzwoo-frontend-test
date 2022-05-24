import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landingpage-routing.module';
import { LandingpageComponent } from './landingpage.component';

@NgModule({
    declarations: [
        LandingpageComponent
    ],
    imports: [
      CommonModule,
      LandingPageRoutingModule
    ]
})
export class LandingPageModule {}
