import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course-service/course.service';
import { ICourse } from 'src/app/interfaces/ICourse';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: ICourse;

  getCourse(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id).subscribe(data=>
      { 
        console.log(data);
        debugger;
        this.course = data;
      });
  }

  constructor(private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCourse();
  }

}
