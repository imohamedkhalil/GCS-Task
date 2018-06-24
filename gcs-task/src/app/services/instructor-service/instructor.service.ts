import { Injectable } from '@angular/core';
import { IInstructor } from '../../interfaces/IInstructor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

instructors: any;

  url = "http://localhost:57404/api/instructors";

  getInstructors() {
  this.http.get<IInstructor[]>(this.url).subscribe(res => { this.instructors = res });
    return this.http.get<IInstructor[]>(this.url);
  }

  addInstructor(form): Observable<IInstructor> {
    var instructor: IInstructor;
    instructor = form.value;
    console.log(instructor);
    console.log(this.instructors);
    return this.http.post<IInstructor>(this.url, instructor);
  }

  public getInstructor(id):Observable<IInstructor> {
    const url = `${this.url}/${id}`;
    return this.http.get(url);
}

  deleteInstructor(id: number): Observable<{}> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }
S
  editInstructor(instructor): Observable<IInstructor> {
    const url = `${this.url}/${instructor.id}`;
    console.log(url);
    return this.http.put(url, instructor);
  }

  constructor(private http: HttpClient) {
    this.getInstructors();
  }

}
