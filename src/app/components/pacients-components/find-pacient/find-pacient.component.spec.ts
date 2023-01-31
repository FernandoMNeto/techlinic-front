import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPacientComponent } from './find-pacient.component';

describe('FindPacientComponent', () => {
  let component: FindPacientComponent;
  let fixture: ComponentFixture<FindPacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPacientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindPacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
