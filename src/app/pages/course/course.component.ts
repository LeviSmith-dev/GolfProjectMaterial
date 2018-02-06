import { Component, OnInit, Input } from '@angular/core';
import { pageTransition } from '../../animation.services/page-transition';
import {Router} from '@angular/router';



@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  animations: [pageTransition]
})
export class CourseComponent implements OnInit {
  state: string = 'in';
  @Input() golfCourse: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleState(){
    this.state = this.state === 'out' ?'in': 'out';
  }

  buildCard(golfCourse){
    this.router.navigate([`scorecard/${this.golfCourse.id}`]);
  }
}
