import { Injectable } from '@angular/core';
import { IStudent } from 'src/app/interfaces/IStudent';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: any;

  url = "http://localhost:57404/api/students";

  getStudents() {
  this.http.get<IStudent[]>(this.url).subscribe(async res => { this.students =await res });
    return this.http.get<IStudent[]>(this.url);
  }

  addStudent(form): Observable<IStudent> {
    var student: IStudent;
    student = form.value;
    console.log(student);
    console.log(this.students);
    return this.http.post<IStudent>(this.url, student);
  }

  public getStudent(id):Observable<IStudent> {
    const url = `${this.url}/${id}`;
    return this.http.get(url);
  }

  deleteStudent(id: number): Observable<{}> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }

  editStudent(student): Observable<IStudent> {
    const url = `${this.url}/${student.id}`;
    console.log(url);
    return this.http.put(url, student);
  }

  constructor(private http: HttpClient) {
    this.getStudents();
  }
}
