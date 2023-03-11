import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiusculaComponent } from './maiuscula.component';

describe('MaiusculaComponent', () => {
  let component: MaiusculaComponent;
  let fixture: ComponentFixture<MaiusculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaiusculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaiusculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
