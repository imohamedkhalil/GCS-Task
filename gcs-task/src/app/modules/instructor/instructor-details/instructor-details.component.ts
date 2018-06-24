import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course-service/course.service';
import { ICourse } from '../../../interfaces/ICourse';
import { IInstructor } from 'src/app/interfaces/IInstructor';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from 'src/app/services/instructor-service/instructor.service';

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.css']
})
export class InstructorDetailsComponent implements OnInit {
  
  instructor: IInstructor;

  getInstructor(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.instructorService.getInstructor(id).subscribe(instructor =>
      { 
        this.instructor = instructor
      });
  }

  constructor(private instructorService: InstructorService, private route: ActivatedRoute,
  ) { }

  ngOnInit() {
   this.getInstructor();
  }
}
