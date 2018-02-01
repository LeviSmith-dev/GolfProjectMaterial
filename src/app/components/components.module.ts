import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ],
  declarations: [
    NavBarComponent,
    ScorecardComponent
  ]
})
export class ComponentsModule { }
