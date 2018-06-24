import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course-service/course.service';
import { ICourse } from 'src/app/interfaces/ICourse';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: any[] = this.courseService.courses;
  course: ICourse;

  getCourses() {
    this.courseService.getCourses().subscribe(res => {
      this.courseService.courses = res;
      this.courses = this.courseService.courses;
    });
  }

  deleteCourse(id: number) {
    debugger;
    var course = this.courseService.courses.find(a=>a.Id ==id);
    var i=this.courseService.courses.indexOf(course);
    this.courseService.courses.splice(i, 1);
    this.courseService.deleteCourse(id).subscribe();
  }

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

}
