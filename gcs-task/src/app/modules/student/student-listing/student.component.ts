import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../../interfaces/IStudent';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: any[] = this.studentService.students;
  student: IStudent;

  getStudents() {
    this.studentService.getStudents().subscribe(res => {
      this.studentService.students = res;
      this.students = this.studentService.students;
    });
  }

  deleteStudent(id: number) {
    debugger;
    var student = this.studentService.students.find(a=>a.Id ==id);
    var i = this.studentService.students.indexOf(student);
    this.studentService.students.splice(i, 1);
    this.studentService.deleteStudent(id).subscribe();
  }

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }

}
