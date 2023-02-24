import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasCRUDComponent } from './sistemas-crud.component';

describe('SistemasCRUDComponent', () => {
  let component: SistemasCRUDComponent;
  let fixture: ComponentFixture<SistemasCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemasCRUDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemasCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
