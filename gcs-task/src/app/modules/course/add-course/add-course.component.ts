import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/interfaces/ICourse';
import { CourseService } from 'src/app/services/course-service/course.service';
import { Router } from '@angular/router';
import { InstructorService } from '../../../services/instructor-service/instructor.service';
import { IInstructor } from '../../../interfaces/IInstructor';
import { StudentService } from 'src/app/services/student-service/student.service';
import { IStudent } from 'src/app/interfaces/IStudent';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  courses: ICourse[] = this.courseService.courses;
  course: ICourse;
  instructors: IInstructor[];
  students: IStudent[];

  onSubmit(form) {
    console.log(form.value);
    debugger;
    this.courseService.addCourse(form).subscribe();
    this.router.navigate(['../courses']);
  }

  getInstructors() {
    this.instructorService.getInstructors().subscribe(res => {
      this.instructors = res;
    });
  }

  getStudents() {
    this.studentService.getStudents().subscribe(res => {
      this.students = res;
    });
  }
  
  constructor(
    private courseService: CourseService,
    private instructorService: InstructorService,
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getStudents();
    this.getInstructors();
  }
}
