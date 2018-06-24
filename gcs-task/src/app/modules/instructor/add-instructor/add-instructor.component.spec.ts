/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddInstructorComponent } from './add-instructor.component';

describe('AddInstructorComponent', () => {
  let component: AddInstructorComponent;
  let fixture: ComponentFixture<AddInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
