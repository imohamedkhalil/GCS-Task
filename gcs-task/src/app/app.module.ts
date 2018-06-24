import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InstructorComponent } from './modules/instructor/instructor-listing/instructor.component';
import { StudentComponent } from './modules/student/student-listing/student.component';
import { CourseComponent } from './modules/course/course-listing/course.component';
import { InstructorService } from './services/instructor-service/instructor.service';
import { AddInstructorComponent } from 'src/app/modules/instructor/add-instructor/add-instructor.component';
import { AddStudentComponent } from 'src/app/modules/student/add-student/add-student.component';
import { StudentService } from './services/student-service/student.service';
import { CourseService } from './services/course-service/course.service';
import { AddCourseComponent } from 'src/app/modules/course/add-course/add-course.component';
import { EditCourseComponent } from 'src/app/modules/course/edit-course/edit-course.component';
import { CourseDetailsComponent } from 'src/app/modules/course/course-details/course-details.component';
import { InstructorDetailsComponent } from 'src/app/modules/instructor/instructor-details/instructor-details.component';
import { StudentDetailsComponent } from './modules/student/student-details/student-details.component';
import { EditInstructorComponent } from './modules/instructor/edit-instructor/edit-instructor.component';
import { EditStudentComponent } from './modules/student/edit-student/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructorComponent,
    StudentComponent,
    CourseComponent,
    AddInstructorComponent,
    AddStudentComponent,
    AddCourseComponent,
    EditCourseComponent,
    CourseDetailsComponent,
    InstructorDetailsComponent,
    StudentDetailsComponent,
    EditInstructorComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'instructors', component: InstructorComponent },
      { path: 'instructors/add', component: AddInstructorComponent },
      { path: 'instructors/edit/:id', component: EditInstructorComponent },
      { path: 'instructors/details/:id', component: InstructorDetailsComponent },
      { path: 'students', component: StudentComponent },
      { path: 'students/add', component: AddStudentComponent },
      { path: 'students/edit/:id', component: EditStudentComponent },
      { path: 'students/details/:id', component: StudentDetailsComponent },
      { path: 'courses', component: CourseComponent },
      { path: 'courses/add', component: AddCourseComponent },
      { path: 'courses/edit/:id', component: EditCourseComponent },
      { path: 'courses/details/:id', component: CourseDetailsComponent }
    ])
  ],
  providers: [InstructorService, StudentService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
