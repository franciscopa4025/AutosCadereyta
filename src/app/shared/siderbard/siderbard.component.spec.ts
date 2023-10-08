import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderbardComponent } from './siderbard.component';

describe('SiderbardComponent', () => {
  let component: SiderbardComponent;
  let fixture: ComponentFixture<SiderbardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiderbardComponent]
    });
    fixture = TestBed.createComponent(SiderbardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
