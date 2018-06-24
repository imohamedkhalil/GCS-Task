import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ICourse } from 'src/app/interfaces/ICourse';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: any;

  url = "http://localhost:57404/api/courses";

  getCourses() {
  this.http.get<ICourse[]>(this.url).subscribe(res => { this.courses = res });
    return this.http.get<ICourse[]>(this.url);
  }

  addCourse(form): Observable<ICourse> {
    var course: ICourse;
    course = form.value;
    console.log(course);
    console.log(this.courses);
    return this.http.post<ICourse>(this.url, course);
  }

  public getCourse(id):Observable<ICourse> {
    const url = `${this.url}/${id}`;
    return this.http.get(url);
}

  deleteCourse(id: number): Observable<{}> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }

  editCourse(course): Observable<ICourse> {
    const url = `${this.url}/${course.id}`;
    console.log(url);
    debugger;
    return this.http.put(url, course);
  }

  constructor(private http: HttpClient) {
    this.getCourses();
  }
}
