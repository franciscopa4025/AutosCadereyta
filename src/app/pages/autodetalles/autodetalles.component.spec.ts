import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutodetallesComponent } from './autodetalles.component';

describe('AutodetallesComponent', () => {
  let component: AutodetallesComponent;
  let fixture: ComponentFixture<AutodetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutodetallesComponent]
    });
    fixture = TestBed.createComponent(AutodetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
