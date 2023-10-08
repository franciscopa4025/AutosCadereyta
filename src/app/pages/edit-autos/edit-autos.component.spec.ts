import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAutosComponent } from './edit-autos.component';

describe('EditAutosComponent', () => {
  let component: EditAutosComponent;
  let fixture: ComponentFixture<EditAutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAutosComponent]
    });
    fixture = TestBed.createComponent(EditAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
