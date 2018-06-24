import { Component, OnInit } from '@angular/core';
import { IInstructor } from 'src/app/interfaces/IInstructor';
import { InstructorService } from 'src/app/services/instructor-service/instructor.service';
import { Router } from '@angular/router';
import { CourseService } from '../../../services/course-service/course.service';
import { ICourse } from '../../../interfaces/ICourse';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.css']
})
export class AddInstructorComponent implements OnInit {

  instructors: IInstructor[] = this.instructorService.instructors;
  instructor: IInstructor;
  courses: ICourse[];
  Courses: any;

  onSubmit(form) {
    // this.instructorService.instructors.push(form.value);
    this.instructorService.addInstructor(form).subscribe();
      // {
      //   let inst = {
      //     Name: instructor.name,
      //     Phone: instructor.phone,
      //     Mail: instructor.mail,
      //     Department: instructor.department,
      //     Id: instructor.id,
      //   };
      //   this.instructorService.instructors.push(inst)
      // });
    this.router.navigate(['../instructors']);
  }

  getCourses() {
    this.courseService.getCourses().subscribe(res => {
      this.courseService.courses = res;
      this.courses = this.courseService.courses;
    });
  }

  constructor(
    private instructorService: InstructorService,
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCourses();
  }
}
