import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAutosAdmComponent } from './lista-autos-adm.component';

describe('ListaAutosAdmComponent', () => {
  let component: ListaAutosAdmComponent;
  let fixture: ComponentFixture<ListaAutosAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAutosAdmComponent]
    });
    fixture = TestBed.createComponent(ListaAutosAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
