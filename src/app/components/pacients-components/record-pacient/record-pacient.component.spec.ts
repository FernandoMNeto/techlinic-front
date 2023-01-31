import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordPacientComponent } from './record-pacient.component';

describe('RecordPacientComponent', () => {
  let component: RecordPacientComponent;
  let fixture: ComponentFixture<RecordPacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordPacientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordPacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
