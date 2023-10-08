import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAutosComponent } from './add-autos.component';

describe('AddAutosComponent', () => {
  let component: AddAutosComponent;
  let fixture: ComponentFixture<AddAutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAutosComponent]
    });
    fixture = TestBed.createComponent(AddAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
