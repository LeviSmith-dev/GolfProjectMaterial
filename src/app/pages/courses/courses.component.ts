import { CourseService } from '../get-courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  course: any;
  selected: any;
  tee_types: any;
  golfCourse: any;
  players: number = 4;
  player: string;
  tee_type: string;

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    console.log('In OnInit');
    this.courseService.getCourses()
      .subscribe((courses: any) => {
        this.course = courses.courses;
        console.log(courses);
      })
  }

  getSingleCourse(){
    console.log(this.selected);
    this.courseService.getSelectedCourse(this.selected)
      .subscribe((golfCourse: any) => {
        this.golfCourse = golfCourse.course;
        this.tee_types = golfCourse.course.tee_types;
        console.log(this.golfCourse);
        console.log(this.tee_types)
      })
  }
}

