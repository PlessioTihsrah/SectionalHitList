import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data = [];
  semesters = [];
  avgCgpa = 0;
  avgMarks = 0;
  sections = {
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
    CoeA: false,
    CoeB: false
  };
  sortBy = 'roll';
  semLen = this.semesters.length;
  constructor(private dataService: DataService) {}
  changeSem(i: number) {
    this.semesters[i] = !this.semesters[i];
    this.getData();
  }
  changeSection(section: string) {
    this.sections[section] = !this.sections[section];
    this.getData();
  }
  changeSort(term: string) {
    this.sortBy = this.sortBy === term ? 'roll' : term;
    this.getData();
  }
  showCards() {
    let sem = false;
    for (let s of this.semesters) {
      if (s) {
        sem = true;
        break;
      }
    }
    const { A, B, C, D, E, CoeA, CoeB } = this.sections;
    return sem && (A || B || C || D || E || CoeA || CoeB);
  }
  getData() {
    if (this.showCards()) {
      const sect: any = [];
      const sem: any = [];
      for (const section in this.sections) {
        if (this.sections[section]) {
          sect.push(section);
        }
      }
      for (let i = 0; i < this.semesters.length; i++) {
        if (this.semesters[i]) {
          sem.push(i);
        }
      }
      const res = this.dataService.getData(sect, sem, this.sortBy);
      this.data = res.data;
      this.avgCgpa = res.avgCgpa;
      this.avgMarks = res.avgMarks;
    }
  }
  searchByRoll(roll) {
    window.location.hash = '';
    window.location.hash = roll;
  }
  ngOnInit(): void {
    const sem = [];
    for (let i = 0; i < this.dataService.getSemester(); i++) {
      sem.push(false);
    }
    this.semesters = sem;
    this.semLen = sem.length;
  }
}
