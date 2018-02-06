import { Component, OnInit, Input } from '@angular/core';
import { pageTransition } from '../../animation.services/page-transition';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  animations: [pageTransition]
})
export class CourseComponent implements OnInit {
  state: string = 'in';
  courseId: any;
  @Input() golfCourse: any;
  constructor() { }

  ngOnInit() {
  }

  toggleState(){
    this.state = this.state === 'out' ?'in': 'out';
  }

  buildCard(){

  }
}
