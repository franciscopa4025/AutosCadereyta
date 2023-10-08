import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SNosotrosComponent } from './snosotros.component';

describe('SNosotrosComponent', () => {
  let component: SNosotrosComponent;
  let fixture: ComponentFixture<SNosotrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SNosotrosComponent]
    });
    fixture = TestBed.createComponent(SNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
