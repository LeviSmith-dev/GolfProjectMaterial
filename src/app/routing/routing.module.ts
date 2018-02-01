import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoursesComponent} from '../pages/courses/courses.component';
import {CourseComponent} from '../pages/course/course.component';
import {ScorecardComponent} from '../components/scorecard/scorecard.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'courses/:id',
    component: CourseComponent
  },
  {
    path: 'scorecard',
    component: ScorecardComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'courses'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
  ]
})
export class RoutingModule{ };
