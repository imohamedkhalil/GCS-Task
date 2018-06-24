import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/interfaces/IStudent';
import { StudentService } from 'src/app/services/student-service/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student: IStudent;

  getstudent(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id).subscribe(student =>
      { 
        this.student = student
        console.log(this.student);
      });
  }

  constructor(private studentService: StudentService, private route: ActivatedRoute,
  ) { }

  ngOnInit() {
   this.getstudent();
  }

}
