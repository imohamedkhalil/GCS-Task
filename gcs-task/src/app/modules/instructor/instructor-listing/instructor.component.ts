import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/services/instructor-service/instructor.service';
import { IInstructor } from 'src/app/interfaces/IInstructor';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

   instructors: any[];
  instructor: IInstructor;

  getInstructors() {
    this.instructorService.getInstructors().subscribe(async res => {
      this.instructorService.instructors = res;
       this.instructors =await this.instructorService.instructors;
    });
  }

  deleteInstructor(id: number) {
    console.log(id);
    debugger;
    var instructor = this.instructorService.instructors.find(a=>a.Id == id);
    var i= this.instructorService.instructors.indexOf(instructor);
    this.instructorService.instructors.splice(i, 1);
    this.instructorService.deleteInstructor(id).subscribe();
  }

  constructor(private instructorService: InstructorService) { }

  ngOnInit() {
    this.getInstructors();
  }

}
