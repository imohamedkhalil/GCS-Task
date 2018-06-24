/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditInstructorComponent } from './edit-instructor.component';

describe('EditInstructorComponent', () => {
  let component: EditInstructorComponent;
  let fixture: ComponentFixture<EditInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
