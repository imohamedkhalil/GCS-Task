import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from 'src/app/services/instructor-service/instructor.service';

@Component({
  selector: 'app-edit-instructor',
  templateUrl: './edit-instructor.component.html',
  styleUrls: ['./edit-instructor.component.css']
})
export class EditInstructorComponent implements OnInit {

  instructor: any;

  getInstructor() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.instructorService.getInstructor(id).subscribe(data => {
      console.log(data);
      this.instructor = data;
    });
    debugger;
    console.log(this.instructor);
  }
  
  onSave(form) {
    var inst=this.instructorService.instructors.find(a=>a.Id ==this.instructor.Id);
    var i = this.instructorService.instructors.indexOf(inst);
    console.log(i);
    debugger;
    this.instructor = {
      id: this.instructor.Id,
      Name: form.value.name == undefined ? this.instructor.Name : form.value.name,
      Phone: form.value.phone == undefined ? this.instructor.Phone : form.value.phone,
      Mail: form.value.mail == undefined ? this.instructor.Mail : form.value.mail,
      Department: form.value.department == undefined ? this.instructor.Department : form.value.department,
    }
    this.instructorService.instructors[i] = this.instructor;
    console.log(this.instructorService.instructors);
    this.instructorService.editInstructor(this.instructor).subscribe();
    console.log(this.instructor);
    this.router.navigate(['/instructors']);
  }

  constructor(private route: ActivatedRoute, private router: Router, private instructorService: InstructorService) { }

  ngOnInit() {
    this.getInstructor();
  }

}
