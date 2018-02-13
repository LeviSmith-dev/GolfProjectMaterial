import {Component, Input, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../pages/get-courses.service';


@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  private sub: any;
  id: number;
  selectedCourse: any;
  tee_types: any;
  teeType: any;
  numOfHoles: any[];
  par: number;
  holes = this.numOfHoles;
  displayedColumns = [
    'player',
    'holes',
    'total'
  ];
  dataSource = new MatTableDataSource<any>(SCORECARD_DATA);

  playerName:string =' ';

  constructor(private route: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
    this.getCourse(this.id);

  }

  getScoreCards() {
    let scoreCardData = [
      { "player": 'John', "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "total": 0 },
      { "player": 'Jane', "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "total": 0 },
      { "player": 'Sam', "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "total": 0 },
      { "player": 'Brian', "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "total": 0 },
      { "player": 'Sally', "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "total": 0 }
    ]
    this.dataSource = new MatTableDataSource<any>(scoreCardData)
  }

  createNewPlayer() {
    this.dataSource.data.push({ "player": this.playerName, holes: this.numOfHoles })
    console.log(this.numOfHoles);
    this.dataSource = new MatTableDataSource<any>(this.dataSource.data)
  }

  getCourse(id){
    this.courseService.getSelectedCourse(id)
      .subscribe((course: any) => {
        this.selectedCourse = course.course;
        this.tee_types = course.course.tee_types;
        this.numOfHoles = course.course.holes.hole_num;
        // this.par = course.course.tee_types.tee_type.par;
        console.log(this.selectedCourse);
        console.log(this.tee_types);
        console.log(this.numOfHoles);
        // console.log(this.par);
      })
  }

  buildCard(){

  }

  addAnotherPlayer(){
    console.log('In add input');
  }

}


const SCORECARD_DATA: any[] = [
  {
    player: 'John',
    holes: this.numOfHoles,
    total: 0
  }
];
