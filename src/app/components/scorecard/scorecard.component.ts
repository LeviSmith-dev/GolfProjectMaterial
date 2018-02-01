import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  displayedColumns = ['player', '1', '2', '3', 'total'];
  dataSource = new MatTableDataSource<any>(SCORECARD_DATA);
  numOfHoles: number = 9;
  playerName:string =' ';
  constructor() { }
  ngOnInit() {
    this.getScoreCards();
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
    this.dataSource.data.push({ "player": this.playerName, "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "total": 0 })
    this.dataSource = new MatTableDataSource<any>(this.dataSource.data)
  }

}


const SCORECARD_DATA: any[] = [
  {
    player: 'John',
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
    total: 0
  }
];
