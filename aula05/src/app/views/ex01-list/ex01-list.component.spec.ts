import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex01ListComponent } from './ex01-list.component';

describe('Ex01ListComponent', () => {
  let component: Ex01ListComponent;
  let fixture: ComponentFixture<Ex01ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex01ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex01ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
