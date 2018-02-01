import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { MaterialModule } from '../material/material.module';
import { CourseService } from './get-courses.service';
import { BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    CoursesComponent,
    CourseComponent
  ],
  providers: [
    CourseService
  ]
})
export class PagesModule { }
