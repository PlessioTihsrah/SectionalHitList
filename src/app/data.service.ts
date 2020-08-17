import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var LZMA: any;
@Injectable({
  providedIn: 'root',
})
export class DataService {
  data = null;
  indexedData = null;
  constructor(private http: HttpClient) {}
  dataNotify = new EventEmitter<boolean>();
  fetchData() {
    this.http
      .get('https://sectionalhitlist.firebaseio.com/data.json')
      .subscribe((res) => {
        const indexedData = {};
        this.data = res;
        for (const key in this.data) {
          if (this.data.hasOwnProperty(key)) {
            this.data[key].forEach((d) => {
              indexedData[d.roll] = { ...d };
            });
          }
        }
        this.indexedData = indexedData;
        this.dataNotify.emit(true);
      });
  }
  getDataByRoll(roll: number) {
    return this.indexedData[roll];
  }
  getFullData(roll: number){
    return this.http.get(`https://sectionalhitlist.firebaseio.com/indexed/${roll}.json`);
  }
  getData(sections: [string], semesters: [number], sortBy: string): any {
    let data = [];
    let totalCgpa = 0;
    let totalMarks = 0;
    for (const section of sections) {
      const {
        sectionalTotalCgpa,
        sectionalData,
        sectionalTotalMarks,
      } = this.formatData(this.data[section], semesters);
      data = [...data, ...sectionalData];
      totalCgpa += sectionalTotalCgpa;
      totalMarks += sectionalTotalMarks;
    }
    const avgCgpa = totalCgpa / data.length;
    const avgMarks = totalMarks / data.length;

    switch (sortBy) {
      case 'roll':
        data.sort((a, b) => a.roll - b.roll);
        break;
      case 'marks':
        data.sort((a, b) => b.marks - a.marks);
        break;
      case 'cp':
        data.sort((a, b) => b.cpCount - a.cpCount);
        break;
      default:
        data.sort((a, b) => b.sgpa - a.sgpa);
    }
    if (sortBy === 'roll') {
      return { data, avgCgpa, avgMarks };
    } else if (sortBy === 'cp') {
      let rank = 1;
      for (const d of data) {
        if (d.cpCount === 0) break;
        else d.rank = rank++;
      }
    } else {
      data[0].rank = 1;
      let rank = 1;
      for (let i = 1; i < data.length; i++) {
        console.log(data[i][sortBy], data[i - 1][sortBy]);
        if (+data[i][sortBy] !== +data[i - 1][sortBy]) {
          data[i].rank = ++rank;
        } else {
          data[i].rank = rank;
        }
      }
    }
    return { data, avgCgpa, avgMarks };
  }

  verifyData() {
    return !!this.data;
  }
  listenToChange() {
    return this.dataNotify;
  }
  getSemester() {
    return this.data.A[0].total.length;
  }

  private formatData(records: any, semesters: [number]) {
    let totalMarks = 0;
    let totalCgpa = 0;
    const data = records.map((record) => {
      let marks = 0;
      let cp = [];
      let sgpa: any = 0;
      let cpCount = 0;
      let total = 0;
      for (const semester of semesters) {
        marks += record.marks[semester];
        totalMarks += record.marks[semester];
        sgpa += record.cgpa[semester];
        totalCgpa += record.cgpa[semester];
        total += record.total[semester];
        if (record.cp[semester]) {
          cp = [...cp, ...record.cp[semester]];
          cpCount += record.cp[semester].length;
        }
      }
      const percentage = `${((100 * marks) / total).toFixed(2)}%`;
      sgpa = (sgpa / semesters.length).toFixed(2);
      return {
        roll: record.roll,
        id: record.id,
        name: record.name,
        section: record.section,
        percentage,
        cp,
        marks,
        sgpa,
        cpCount,
      };
    });

    return {
      sectionalTotalMarks: totalMarks,
      sectionalTotalCgpa: totalCgpa / semesters.length,
      sectionalData: data,
    };
  }
}
