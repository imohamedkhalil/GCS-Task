import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  student: any;

  getStudent() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id).subscribe(data => {
      console.log(data);
      this.student = data;
    });
    debugger;
    console.log(this.student);
  }
  
  onSave(form) {
    var st=this.studentService.students.find(a=>a.Id ==this.student.Id);
    var i = this.studentService.students.indexOf(st);
    console.log(i);
    debugger;
    this.student = {
      id: this.student.Id,
      Name: form.value.name == undefined ? this.student.Name : form.value.name,
      Phone: form.value.phone == undefined ? this.student.Phone : form.value.phone,
      Mail: form.value.mail == undefined ? this.student.Mail : form.value.mail,
      Department: form.value.department == undefined ? this.student.Department : form.value.department,
      Birthdate: form.value.birthdate == undefined ? this.student.Birthdate : form.value.birthdate,
    }
    this.studentService.students[i] = this.student;
    console.log(this.studentService.students);
    this.studentService.editStudent(this.student).subscribe();
    console.log(this.student);
    this.router.navigate(['/students']);
  }

  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService) { }

  ngOnInit() {
    this.getStudent();
  }

}
