import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingUnicaComponent } from './binding-unica.component';

describe('BindingUnicaComponent', () => {
  let component: BindingUnicaComponent;
  let fixture: ComponentFixture<BindingUnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingUnicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingUnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
