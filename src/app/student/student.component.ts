import { Component, OnInit } from '@angular/core';
import { Student, Allstu, Course } from '../studnet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  private students: Student[];
  public isMale: number;
  private showcourse: number;
  constructor(private activatedRoute: ActivatedRoute) {
    this.isMale = 2;
    this.showcourse = 0;
    this.students = Allstu;
  }

  ngOnInit() {
  }
  btnShowmale() {
    if (this.isMale == 2) {
      return '女生';
    }
    else if (this.isMale == 0) {
      return '男生';
    } else {
      return '全部';
    }
  }
  toggle() {
    if (this.isMale == 0) {
      this.isMale = 1;
    }
    else if (this.isMale == 1) {
      this.isMale = 2;
    } else {
      this.isMale = 0;
    }
    return false;
  }
  toggleClass() {
    if (this.showcourse == 0) {
      this.showcourse = 1;
    } else {
      this.showcourse = 0;
    }
    return false;
  }
  btnShowclass() {
    if (this.showcourse == 0) {
      return '选修课';
    } else {
      return '必修课';
    }
  }


}
