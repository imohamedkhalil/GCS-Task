import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  
  course: any;

  getCourse() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id).subscribe(data => {
      console.log(data);
      this.course = data;
    });
    debugger;
    console.log(this.course);
  }
  
  onSave(form) {
    var cours=this.courseService.courses.find(a=>a.Id ==this.course.Id);
    var i = this.courseService.courses.indexOf(cours);
    console.log(i);
    debugger;
    this.course = {
      id: this.course.Id,
      Name: form.value.name == undefined ? this.course.Name : form.value.name,
      Code: form.value.code == undefined ? this.course.Code : form.value.code,
      NoOfHours: form.value.noOfHours == undefined ? this.course.NoOfHours : form.value.noOfHours,
    }
    this.courseService.courses[i] = this.course;
    console.log(this.courseService.courses);
    this.courseService.editCourse(this.course).subscribe();
    console.log(this.course);
    this.router.navigate(['/courses']);
  }

  constructor(private route: ActivatedRoute, private router: Router, private courseService: CourseService) { }

  ngOnInit() {
    this.getCourse();
  }
}
