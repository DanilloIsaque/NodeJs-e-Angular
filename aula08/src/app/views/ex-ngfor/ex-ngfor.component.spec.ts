import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExNgforComponent } from './ex-ngfor.component';

describe('ExNgforComponent', () => {
  let component: ExNgforComponent;
  let fixture: ComponentFixture<ExNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExNgforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
