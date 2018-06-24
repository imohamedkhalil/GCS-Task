import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/interfaces/IStudent';
import { StudentService } from 'src/app/services/student-service/student.service';
import { Router } from '@angular/router';
import { CourseService } from '../../../services/course-service/course.service';
import { ICourse } from 'src/app/interfaces/ICourse';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  students: IStudent[] = this.studentService.students;
  student: IStudent;
  courses: ICourse[];

  onSubmit(form) {
    this.studentService.addStudent(form).subscribe();
    this.router.navigate(['../students']);
  }

  getCourses() {
    this.courseService.getCourses().subscribe(res => {
      this.courses = res;
    });
  }

  constructor(
    private studentService: StudentService,
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCourses();
  }
}
